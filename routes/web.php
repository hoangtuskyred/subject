<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

// Admin exam
Route::get('admin/exams', 'ExamController@index');
Route::post('exams', 'ExamController@store');
Route::get('exams/{id}', 'ExamController@show');
Route::put('exams/{id}/edit', 'ExamController@update');
Route::delete('exams/{id}', 'ExamController@destroy');

// Admin subject
Route::get('admin/subjects', 'SubjectController@index');
Route::post('subjects', 'SubjectController@store');
Route::get('subjects/{id}', 'SubjectController@show');
Route::put('subjects/{id}/edit', 'SubjectController@update');
Route::delete('subjects/{id}', 'SubjectController@destroy');
//Admin User
Route::get('admin/users', 'UserController@index');
Route::post('users', 'UserController@store');
Route::get('users/{id}', 'UserController@show');
Route::put('users/{id}/edit', 'UserController@update');
Route::delete('users/{id}', 'UserController@destroy');

// Admin view
Route::get('admin', 'AdminController@index');

// Register
//Route::get('registration', 'RegistrationController@index');
//Route::post('registration', 'RegistrationController@registration');
//Route::get('subject-register', 'RegistrationController@subjectRegister');
//Route::delete('registration', 'RegistrationController@registrationDelete');
// Search
//Route::post('search', 'RegistrationController@searchResign');

// Admin
//Route::resource('subjects', 'SubjectController');


//Route::get('data', function () {
//
//});
