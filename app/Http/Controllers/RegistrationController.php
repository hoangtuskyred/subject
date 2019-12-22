<?php

namespace App\Http\Controllers;

use App\Subject;
use App\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function index()
    {
        $subjects = Subject::all();
        return view('student.resign', compact('subjects'));
    }

    public function searchResign(Request $request)
    {
        $searchSubject = $request->get('searchSubject');
        $subjects = Subject::where('name', 'like' ,'%' . $searchSubject . '%')->get();
        return view('student.resign', compact('subjects'));
    }

    public function registration(Request $request)
    {
        $userId = 1;
        $subjectId = $request->get('subjectId');

        $u = User::find(1);
        $u->subjects()->attach($subjectId);

        return response('Ok', 200);
    }

    public function subjectRegister()
    {
        $user = User::find(1);
        return $user->subjects;
    }

    public function registrationDelete(Request $request)
    {
        $userId = 1;
        $subjectId = $request->get('subjectId');

        $u = User::find(1);
        $u->subjects()->detach($subjectId);

        return response('Ok', 200);
    }

}
