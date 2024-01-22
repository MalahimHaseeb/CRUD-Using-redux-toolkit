import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../feautures/userDetailsSlice'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';


const Create = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [users, setUsers] = useState({})
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        // console.log(users)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(users))
        navigate("/read")
        // setUsers({})
    }
    

    return (
        <>
            <Helmet>
                <title>CRUD-AddUser</title>
            </Helmet>
            <h3 className='text-center mt-5'>Fill the data</h3>
            <div className="mt-20 d-flex justify-content-center align-items-center my-50">
            <form onSubmit={handlesubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input onChange={getUserData} type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EnterYourName" required />
                </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={getUserData} type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" autocomplete="off" required />
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input onChange={getUserData} name='age' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Age' required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>


            </div>

        </>
    )
}

export default Create