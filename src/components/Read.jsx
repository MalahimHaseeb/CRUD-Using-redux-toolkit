import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../feautures/userDetailsSlice';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Read = () => {
    const dispatch = useDispatch();
    const { users, loading, searchdata } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <Helmet>
                    <title>CRUD-ReadAllUsers</title>
                </Helmet>
                <h2>Loading</h2>
            </div>
        );
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>CRUD-ReadAllUsers</title>
                </Helmet>

                {!users.length &&
                    <div className='h-screen flex justify-center items-center'>
                        <h4 className='text-center'>Oops, no data found. Please add it.</h4>
                    </div>
                }

                {users &&
                    <div>
                        <h2 className='mt-24 text-center text-xl'>All data</h2>
                        <div className="flex flex-col justify-center items-center">
                            {users.filter((item) => {
                                if (searchdata.length === 0) {
                                    return item;
                                } else {
                                    return item.name.toLowerCase().includes(searchdata.toLowerCase());
                                }
                            })
                                .map((item) => (
                                    <div key={item.id} className="w-72 mb-4 rounded overflow-hidden shadow-lg m-2">
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{item.name}</div>
                                            <p className="text-gray-700 text-base">
                                                {item.email}
                                            </p>
                                            <p className="text-gray-700 text-base">
                                                {item.age}
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <Link to={`/edit/${item.id}`}>
                                                <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Edit</span>
                                            </Link>
                                            <span onClick={() => dispatch(deleteUser(item.id))} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Delete</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Read;
