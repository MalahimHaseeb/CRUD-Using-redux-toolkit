// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { createUser } from '../feautures/userDetailsSlice'
// import { useNavigate, useParams } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async';



// const Edit = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();


//     const [users1, setUsers1] = useState({});
//     const [editData, setEditData] = useState(); // Change from '' to []

//     useEffect(() => {
//         const { id } = useParams();
//         const { users, loading } = useSelector((state) => state.app.users);
//         if (id) {
//             const singleUser = users.filter((item )=> item.id === id); // Convert id to a number
//             setEditData(singleUser[0]);
//         }
//     }, []);

//     const getUserData = (e) => {
//         setUsers1({ ...users1, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(createUser(users1));
//         navigate.push("/read");
//         setUsers1({});
//     };


//     return (
//         <>
//             <Helmet>
//                 <title>CRUD-EditUser</title>
//             </Helmet>
//             <h3 className='text-center mt-5'>Edit the data</h3>
//             <div className="d-flex justify-content-center align-items-center my-50">
//             <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//                 <div className="mb-5">
//                         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//                         <input value={editData && editData.name} onChange={getUserData} type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EnterYourName" required />
//                 </div>
//                     <div className="mb-5">
//                         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input value={editData && editData.name} onChange={getUserData} type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
//                     </div>
//                     <div className="mb-5">
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
//                         <input value={editData && editData.name} onChange={getUserData} name='age' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                     </div>
//                     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//                 </form>


//             </div>

//         </>
//     )
// }

// export default Edit
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../feautures/userDetailsSlice';

const Edit =  () => {
    const { id } = useParams();
    const [editData, setEditData] = useState();
    const showUser  = useSelector((state) => state.app.users);
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    useEffect(() => {
        try {
            if (id) {
              const singleUser = showUser?.find((item) => item.id === id);
            
              if (singleUser) {
                setEditData(singleUser);
              } else {
                console.log(`User with id ${id} not found`);
              }
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        
      }, [id,showUser]);
      
      const newData = (e) => {
        setEditData({...editData , [e.target.name]: e.target.value })
      }
  

      const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(editUser(editData))
        navigate("/read")
      }
    // console.log(editData);
    return (
        <>
            <Helmet>
                <title>CRUD-AddUser</title>
            </Helmet>
            <h3 className='mt-24 text-center '>Edit the data</h3>
            <div className="d-flex justify-content-center align-items-center my-50">
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input value={editData && editData.name}  onChange={newData} type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EnterYourName" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input  value={editData && editData.email} onChange={newData} type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" autocomplete="off" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input value={editData && editData.age} onChange={newData} name='age' type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>


            </div>

        </>
    )
}

export default Edit