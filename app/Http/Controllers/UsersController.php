<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Token;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    protected int $statusCode = 200;
    protected bool $successStatus = true;
    protected $fails = '';

    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    public function setSuccessStatus($successStatus)
    {
        $this->successStatus = $successStatus;
        return $this;
    }

    public function setFails($fails)
    {
        $this->fails = $fails;
        return $this;
    }

    public function respond(array $respond)
    {
        return response()->json(
            Arr::prepend($respond, $this->successStatus, 'success'),
            $this->statusCode);
    }

    public function getUser(Request $request)
    {
        $request->merge(['user_id' => $request->route('id')]);
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return $this->setFails($validator->messages())->return400();
        }

        try {
            $user = new UserResource(User::findOrFail($request->user_id));
            return $this->returnUsers([
                'user' => $user
            ]);

        } catch (Exception $exception) {
            Log::info($exception);
            return $this->setFails([
                'user_id' => ['User not found'],
            ])->return404();
        }
    }

    public function paginationPage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'count' => 'integer',
            'page' => 'numeric|min:1',
        ]);
        if ($validator->fails()) {
            return $this->setFails($validator->messages())->return422();
        }

        $page = User::paginate($request->count);

        return $this->returnUsers([
            'page' => $page->currentPage(),
            'total_pages' => $page->lastPage(),
            'total_users' => $page->total(),
            'count' => $page->count(),
            'links' => [
                'next' => $page->nextPageUrl(),
                'prev' => $page->previousPageUrl(),
            ],
            'users' => UserResource::collection($page)
        ]);
    }

    public function create(Request $request)
    {
        // check Token
        $token = $this->checkToken($request->header('token'));
        if (!$token) {
            return $this->return401();
        }
        // check user Email Phone
        $user = User::where('email', $request->email)->orWhere('phone', $request->phone)->first();
        if (isset($user)) {
            return $this->return409();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2|max:60',
            'email' => 'required|email:rfc',
            'phone' => 'required|regex:/(\+380)[0-9]{9}/',
            'position_id' => 'required|model_exists:App\Models\Position',
            'photo' => 'required|image|dimensions:min_width=70,min_height=70|file|size:5120',
        ]);
        if ($validator->fails()) {
            return $this->setFails($validator->messages())->return422();
        }

        $user = User::create([$request->all()]);
        // del Token
        $token->delete();

        return $this->returnUsers([
            'user_id' => $user->id,
            'message' => 'New user successfully registered'
        ]);

    }

    public function checkToken($header)
    {
        $token = Token::where('token', $header)->first();
        if (!isset($token)) {
            return false;
        } elseif ($token->created_at < Carbon::now()->addMinutes(-40)) {
            $token->delete();
            return false;
        }
        return $token;
    }

    public function returnUsers($users)
    {
        return $this->setSuccessStatus(true)->setStatusCode(200)
            ->respond($users);
    }

    public function return400()
    {
        return $this->setSuccessStatus(false)->setStatusCode(400)
            ->respond([
                'message' => 'Validation failed',
                'fails' => $this->fails
            ]);
    }

    public function return401()
    {
        return $this->setSuccessStatus(false)->setStatusCode(401)
            ->respond([
                'message' => 'The token expired.',
            ]);
    }

    public function return404()
    {
        return $this->setSuccessStatus(false)->setStatusCode(404)
            ->respond([
                'message' => 'The user with the requested identifier does not exist',
                'fails' => $this->fails
            ]);
    }

    public function return409()
    {
        return $this->setSuccessStatus(false)->setStatusCode(409)
            ->respond([
                'message' => 'User with this phone or email already exist',
            ]);
    }

    public function return422()
    {
        return $this->setSuccessStatus(false)->setStatusCode(422)
            ->respond([
                'message' => 'Validation failed',
                'fails' => $this->fails
            ]);
    }
}
