<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Admin';
        $user->username = 'admin';
        $user->password = bcrypt('admin');
        $user->save();

        $user1 = new User();
        $user1->name = 'Student';
        $user1->username = 'student';
        $user1->password = bcrypt('student');
        $user1->save();

        $role = new Role();
        $role->name = "admin";
        $role->save();

        $role1 = new Role();
        $role1->name = "student";
        $role1->save();

        $user->roles()->attach([1, 2]);
        $user1->roles()->attach(2);
    }


}
