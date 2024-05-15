import React, { useEffect, useState } from 'react';

import { URLS } from '../../../constants/consts';
import { withRouter } from 'react-router-dom';

import NitaliaBlanketService from '../../../services/NitaliaBlanketService';

function NitaliaBlankets(props) {

    var [nitaliablankets, setNitaliaBlankets] = useState([]);

    useEffect(() => {
        NitaliaBlanketService.getLists().then((res) => {
            setNitaliaBlankets(res.data.nitaliablankets);
        }).catch((err) => {
            console.error('Error getting nitaliablankets', err);
        })
    }, []);

    const addNitaliaBlanket = () => {
        props.history.push(`/add-nitaliablanket/_add`);
    }

    const editNitaliaBlanket = (id) => {
        props.history.push(`/add-nitaliablanket/${id}`);
    }

    const deleteNitaliaBlanket = async (id) => {
        if (!window.confirm("Confirm Nitalia Blanket deletion attempt!")) {
            return;
        }

        await NitaliaBlanketService.delete(id);
        let res = await NitaliaBlanketService.getLists();
        setNitaliaBlankets(res.data.nitaliablankets);
    }

    return (
        <div className='w-full max-w-[900px] text-center mx-auto pt-16'>
            <h1 className='font-semibold text-3xl'>
                Nitalia Blankets List
            </h1>
            <div className='w-full flex flex-col justify-center items-start my-9 p-3'>
                <button
                    onClick={() => addNitaliaBlanket()}
                    className='btn btn-primary mb-3 p-3'
                >
                    Add Nitalia Blanket Gallery
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
                        {nitaliablankets.map((nitaliablanket, index) => (
                            <tr className='hover:bg-gray-200' key={index}>
                                <td className="h-full p-3 border border-slate-300"> {nitaliablanket.title} </td>
                                <td className="h-full p-3 border border-slate-300">
                                    <img className="main-img"
                                        src={URLS.imageURL + '/uploads/nitaliablankets/' + nitaliablanket.picture}
                                        alt="" />
                                </td>
                                <td className="h-full p-3 border border-b-0 border-t-slate-300">
                                    <div className='h-full gap-3 flex flex-col'>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => editNitaliaBlanket(nitaliablanket._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteNitaliaBlanket(nitaliablanket._id)}
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

export default withRouter(NitaliaBlankets);
