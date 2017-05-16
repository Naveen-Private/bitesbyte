<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;
use Hash;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\Input;
use Validator;

/**
* 
*/
class HomePageController extends Controller
{
	
	function __construct()
	{
		# code...
	}

	public function index(){
		return view('customer.index');
	}
}