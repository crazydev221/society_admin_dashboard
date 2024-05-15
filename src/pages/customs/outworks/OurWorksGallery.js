import React, { useEffect, useState } from 'react';

import { URLS } from '../../../constants/consts';
import { withRouter } from 'react-router-dom';

import OurWorkService from '../../../services/OurWorkService';

function OurWorksGallery(props) {

    var [ourworks, setOurWorks] = useState([]);

    useEffect(() => {
        OurWorkService.getLists().then((res) => {
            setOurWorks(res.data.ourworks);
        }).catch((err) => {
            console.error('Error getting ourworks', err);
        })
    }, []);

    const addOurWorkGallery = () => {
        props.history.push(`/add-ourwork/_add`);
    }

    const editOurWork = (id) => {
        props.history.push(`/add-ourwork/${id}`);
    }

    const deleteOurWork = async (id) => {
        if (!window.confirm("Confirm the our work gallery deletion attempt!")) {
            return;
        }

        await OurWorkService.delete(id);
        let res = await OurWorkService.getLists();
        setOurWorks(res.data.ourworks);
    }

    return (
        <div className='w-full max-w-[900px] text-center mx-auto pt-16'>
            <h1 className='font-semibold text-3xl'>
                Our Work Gallery List
            </h1>
            <div className='w-full flex flex-col justify-center items-start my-9 p-3'>
                <button
                    onClick={() => addOurWorkGallery()}
                    className='btn btn-primary mb-3 p-3'
                >
                    Add Our Work Gallery
                </button>

                <table className='w-full text-sm text-start border border-collapse border-slate-400'>
                    <thead>
                        <tr>
                            <th className='p-3 bg-gray-100 border border-slate-300'> Title </th>
                            <th className='p-3 bg-gray-100 border border-slate-300'> Picture </th>
                            <th className='p-3 bg-gray-100 border border-slate-300'> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ourworks.map((ourwork, index) => (
                            <tr className='hover:bg-gray-200' key={index}>
                                <td className="h-full p-3 border border-slate-300"> {ourwork.title} </td>
                                <td className="h-full p-3 border border-slate-300">
                                    <img className="main-img"
                                        src={URLS.imageURL + '/uploads/ourworks/' + ourwork.picture}
                                        alt="" />
                                </td>
                                <td className="h-full p-3 border border-b-0 border-t-slate-300">
                                    <div className='h-full gap-3 flex flex-col'>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => editOurWork(ourwork._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteOurWork(ourwork._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default withRouter(OurWorksGallery);
