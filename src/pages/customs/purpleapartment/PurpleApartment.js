import React, { useEffect, useState } from 'react';

import { URLS } from '../../../constants/consts';
import { withRouter } from 'react-router-dom';

import PurpleApartmentService from '../../../services/PurpleApartmentService';

function PurpleApartment(props) {

    var [purpleapartments, setPurpleApartments] = useState([]);

    useEffect(() => {
        PurpleApartmentService.getLists().then((res) => {
            setPurpleApartments(res.data.purpleapartments);
        }).catch((err) => {
            console.error('Error getting purpleapartments', err);
        })
    }, []);

    const addPurpleApartment = () => {
        props.history.push(`/add-purpleapartment/_add`);
    }

    const editPurpleApartment = (id) => {
        props.history.push(`/add-purpleapartment/${id}`);
    }

    const deletePurpleApartment = async (id) => {
        if (!window.confirm("Confirm Purple Apartment deletion attempt!")) {
            return;
        }

        await PurpleApartmentService.delete(id);
        let res = await PurpleApartmentService.getLists();
        setPurpleApartments(res.data.purpleapartments);
    }

    return (
        <div className='w-full max-w-[900px] text-center mx-auto pt-16'>
            <h1 className='font-semibold text-3xl'>
                Purple Apartment List
            </h1>
            <div className='w-full flex flex-col justify-center items-start my-9 p-3'>
                <button
                    onClick={() => addPurpleApartment()}
                    className='btn btn-primary mb-3 p-3'
                >
                    Add Purple Apartment
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
                        {purpleapartments.map((apartment, index) => (
                            <tr className='hover:bg-gray-200' key={index}>
                                <td className="h-full p-3 border border-slate-300"> {apartment.title} </td>
                                <td className="h-full p-3 border border-slate-300">
                                    <img className="main-img"
                                        src={URLS.imageURL + '/uploads/purpleapartments/' + apartment.picture}
                                        alt="" />
                                </td>
                                <td className="h-full p-3 border border-b-0 border-t-slate-300">
                                    <div className='h-full gap-3 flex flex-col'>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => editPurpleApartment(apartment._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deletePurpleApartment(apartment._id)}
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

export default withRouter(PurpleApartment);
