import React, { useContext, useEffect, useState } from 'react'

import PageTitle from './PageTitle'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BlankPageSpinner from './BlankPageSpinner'

const Auth = () => {

  //PageLoading is a universal state that defines the loading state of a page

  const [pageLoading, setPageLoading] = useState(false)

  // view - login or create
  const [view, setView] = useState('login')
  const [loggingIn, setLoggingIn] = useState(false)
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })


  const navigate = useNavigate()
  const { Login_AC } = useContext(AuthContext)

  const login_user = async () => {
    setLoggingIn(true)
    console.log('This is the login details from the state', loginDetails);
    const login_api = `http://localhost:5000/api/users/login`
    try {
      const response = await axios.post(login_api, loginDetails, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (response) {
        setPageLoading(true); // show your loading page
        toast.success('Login Successful... Redirecting...');
        setLoggingIn(false);

        setTimeout(() => {
          Login_AC(response.data.details);
          navigate('/');
        }, 5000);
      }

      console.log('This is the response from login request', response);
    } catch (error) {
      console.log('Error logging in', error);
    }

  }



  // ACCOUNT CREATION SYSTEM

  function isStrongPassword(password) {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}<>]).{8,}$/;

    return strongPasswordRegex.test(password);
  }

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    password: '',
    c_password: ''
  })

  const [pw_good, set_pw_good] = useState(false)
  const [pw_match, set_pw_match] = useState(false)

  useEffect(() => {
    const test = isStrongPassword(userInfo.password)
    set_pw_good(test)
  }, [userInfo.password])

  useEffect(() => {
    if (userInfo.c_password.length > 0) {
      set_pw_match(userInfo.password === userInfo.c_password);
    }
  }, [userInfo.password, userInfo.c_password]);



  const signup_user = async () => {

    const dataObject = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      fullName: `${userInfo.firstName} ${userInfo.lastName}`,
      email: userInfo.email,
      password: userInfo.password
    }

    try {
      const create_account_api = `http://localhost:5000/api/users`
      const response = await axios.post(create_account_api, dataObject, {
        headers: {
          "Content-Type": 'application/json'
        }
      })

      if (response.status === 201) {
        toast.success('Account Created Successfully')
      }

      console.log(response);

    } catch (error) {
      console.log('Error tying to create account');
    }
  }

  if (pageLoading) {
    return (
      <>
        <BlankPageSpinner message={'Please wait...'} />
      </>
    )
  } else {
    return (
      <div className='block mx-auto my-30 w-[95%] sm:w-2xl'>

        {
          view === 'login' ? (
            <>
              <PageTitle text2={'LOGIN'} />

              <form className='w-[90%] mx-auto my-10 flex flex-col align-middle' action="">

                <input onChange={(e) => {
                  const newEmail = e.target.value;
                  setLoginDetails((prev) => ({ ...prev, email: newEmail }));
                  console.log('typed email:', newEmail);
                }}
                  className="mx-auto block border-3 border-gray-400 focus:border-4 w-full sm:w-lg h-12 p-2 mb-4 outline-0" placeholder='Input your email' type="text" />

                <input onChange={(e) => {
                  const newPassword = e.target.value;
                  setLoginDetails((prev) => ({ ...prev, password: newPassword }));
                  console.log('typed password:', newPassword);
                }}
                  className="mx-auto block border-3 border-gray-400 focus:border-4 w-full sm:w-lg h-12 p-2 mb-4 outline-0" placeholder='Input your password' type="password" />

                <div className='w-full sm:w-lg flex justify-between mx-auto mb-4'>
                  <button type='button' className='text-gray-500'>Forgot your password?</button>

                  <button type='button' onClick={() => setView('create')} className='text-gray-500'>Create Account</button>
                </div>

                <button type='button'
                  onClick={() => login_user()}
                  className="text-white bg-black w-fit border-2 border-black rounded-xl py-3 px-5 mx-auto hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  {
                    loggingIn ? (
                      <Spinner color={'white'} />
                    ) : (
                      <>
                        Sign in
                      </>
                    )
                  }
                </button>


              </form>
            </>
          ) : (
            <>
              <PageTitle text2={'Create Account'} />

              <form className='w-[95%] mx-auto my-10 flex flex-col align-middle' action="">

                <div className='flex justify-between w-full sm:w-lg mx-auto gap-1'>
                  <input
                    onChange={(e) => {
                      const newFN = e.target.value
                      setUserInfo((prev) => ({ ...prev, firstName: newFN }))
                    }}
                    className={`mx-auto block border-3 border-gray-400 focus:border-4 w-1/2 h-12 p-2 mb-4 outline-0`} placeholder='First name' type="text" />

                  <input
                    onChange={(e) => {
                      const newLN = e.target.value
                      setUserInfo((prev) => ({ ...prev, lastName: newLN }))
                    }} className="mx-auto block border-3 border-gray-400 focus:border-4 w-1/2 h-12 p-2 mb-4 outline-0" placeholder='Last name' type="text" />

                </div>

                <input
                  onChange={(e) => {
                    const newEmail = e.target.value
                    setUserInfo((prev) => ({ ...prev, email: newEmail }))
                  }}
                  className="mx-auto block border-3 border-gray-400 focus:border-4 w-full sm:w-lg h-12 p-2 mb-4 outline-0" placeholder='Input your email' type="text" />

                <input
                  onChange={(e) => {
                    const newPassword = e.target.value
                    setUserInfo((prev) => ({ ...prev, password: newPassword }))
                  }}
                  className={`mx-auto block border-3 border-gray-400 focus:border-4  ${!pw_good && userInfo.password.length > 0 ? 'border-red-400' : pw_good ? 'border-green-400' : ''} w-full sm:w-lg h-12 p-2 mb-4 outline-0`} placeholder='Create New Password' type="password" />

                <div className='mx-auto w-full sm:w-lg mb-4'>
                  {
                    !pw_good && userInfo.password.length > 0 ? (
                      <>
                        <span className='text-red-400'>Password is not strong enough</span>
                      </>
                    ) : pw_good ? (
                      <>
                        <span className='text-green-400'>This is a good password. Cheers.</span>
                      </>
                    ) : ''
                  }
                </div>


                <input
                  onChange={(e) => {
                    const newPassword = e.target.value
                    setUserInfo((prev) => ({ ...prev, c_password: newPassword }))
                  }}
                  className={`mx-auto block border-3 border-gray-400 focus:border-4 ${userInfo.c_password.length > 0 ? pw_match ? 'border-green-400' : 'border-red-400' : ''} w-full sm:w-lg h-12 p-2 mb-4 outline-0`} placeholder="Confirm Password" type="password" />

                <div className='mx-auto w-full sm:w-lg h-12 mb-4'>
                  {userInfo.password && userInfo.c_password && (
                    pw_match ? (
                      <span className='text-green-400'>Your Passwords Match. Cheers.</span>
                    ) : (
                      <span className='text-red-400'>Passwords do not match</span>
                    )
                  )}

                </div>





                <div className='w-full sm:w-lg flex justify-center mx-auto mb-4 gap-2'>
                  <p className='text-gray-500 m-0'>Already have an account?</p>

                  <button onClick={() => setView('login')} type='button' className='text-gray-500'>Login</button>
                </div>

                <button type='button' onClick={() => signup_user()}
                  className="text-white bg-black w-fit border-2 border-black rounded-xl py-3 px-5 mx-auto hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  Sign up
                </button>

              </form>
            </>
          )
        }

      </div>
    )
  }

}


export default Auth