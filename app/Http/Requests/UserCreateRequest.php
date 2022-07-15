<?php

namespace App\Http\Requests;

use App\Rules\PositionCheck;
use Illuminate\Foundation\Http\FormRequest;

class UserCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|min:2|max:60',
            'email' => 'required|email:rfc',
//            'phone' => 'required|regex:/(\+380)[0-9]{9}/',
//            'position_id' => ['required', new PositionCheck],
//            'photo' => 'required|image|mimetypes:image/jpeg,image/jpg|dimensions:min_width=70,min_height=70|max:5120',
        ];
    }
}
