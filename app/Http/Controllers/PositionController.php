<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PositionController extends Controller
{
    protected int $statusCode = 200;
    protected bool $successStatus = true;

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

    public function respond(array $respond)
    {
        return response()->json(
            Arr::prepend($respond, $this->successStatus, 'success'),
            $this->statusCode);
    }

    public function getPositions()
    {
        $positions = Position::select('id', 'name')->get();
        if (count($positions) > 0) {
            return $this->returnPositions($positions);
        } else {
            return $this->return422();
        }
    }

    public function returnPositions($positions)
    {
        return $this->setSuccessStatus(true)->setStatusCode(200)
            ->respond([
                'positions' => $positions
            ]);
    }

    public function return422()
    {
        return $this->setSuccessStatus(false)->setStatusCode(422)
            ->respond([
                'message' => 'Positions not found'
            ]);
    }
}
