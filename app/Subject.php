<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public function exam()
    {
        return $this->hasOne('App\Exam', 'subject_id');
    }
}
