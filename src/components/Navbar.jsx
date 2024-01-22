
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../feautures/userDetailsSlice';

const Navbar = () => {
  const showUser = useSelector((state) => state.app.users);
  const dispatch = useDispatch()
  const [searchData , SetSearchData] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
   dispatch(searchUser(searchData))
  },[searchData])

  return (
    <div className='fixed top-0 w-screen'>
      <nav className="bg-white py-4 lg:px-2 shadow border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-b-2 border-gray-300 pb-5 lg:pb-0">
         
          <div className=" lg:hidden">
          
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              {/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg> */}
            </button>
          </div>
        </div>

        <div className="menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <Link to={'/'} className="font-semibold text-xl tracking-tight">CRUD</Link>
          </div>
          <div className="text-md text-center font-bold text-blue-700 lg:flex-grow">
            
            <Link
              to="/create"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              CreateUser
            </Link>
            <Link
              to="/read"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              ReadAllUsers ({showUser.length})
            </Link>
          </div>
          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search by Name"
              onChange={(e)=> SetSearchData(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg
                onClick={()=> navigate('/read')}
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

