<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class UserResource extends JsonResource
{
    public function positionName()
    {

    }
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'position' => UserResource::make($this->position)->name,
            'position_id' => $this->position_id,
            'registration_timestamp' => $this->when($request->count, Carbon::create($this->created_at)->getTimestamp()),
            'photo' => $this->photo,
        ];
    }
}
