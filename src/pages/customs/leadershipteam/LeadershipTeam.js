import React, { useEffect, useState } from 'react';

import { URLS } from '../../../constants/consts';
import { withRouter } from 'react-router-dom';

import JuniorPurpleSocietyService from '../../../services/JuniorPurpleSocietyService';

function JuniorPurpleSociety(props) {

    var [juniorpurplesocieties, setJuniorPurpleSocieties] = useState([]);

    useEffect(() => {
        JuniorPurpleSocietyService.getLists().then((res) => {
            setJuniorPurpleSocieties(res.data.juniorpurplesocieties);
        }).catch((err) => {
            console.error('Error getting juniorpurplesocieties', err);
        })
    }, []);

    const addJuniorPurpleSociety = () => {
        props.history.push(`/add-juniors/_add`);
    }

    const editJuniorPurpleSociety = (id) => {
        props.history.push(`/add-juniors/${id}`);
    }

    const deleteJuniorPurpleSociety = async (id) => {
        if (!window.confirm("Confirm Purple Apartment deletion attempt!")) {
            return;
        }

        await JuniorPurpleSocietyService.delete(id);
        let res = await JuniorPurpleSocietyService.getLists();
        setJuniorPurpleSocieties(res.data.juniorpurplesocieties);
    }

    return (
        <div className='w-full max-w-[900px] text-center mx-auto pt-16'>
            <h1 className='font-semibold text-3xl'>
                Junior Purple Society List
            </h1>
            <div className='w-full flex flex-col justify-center items-start my-9 p-3'>
                <button
                    onClick={() => addJuniorPurpleSociety()}
                    className='btn btn-primary mb-3 p-3'
                >
                    Add Junior Purple Society
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
                        {juniorpurplesocieties.map((junior, index) => (
                            <tr className='hover:bg-gray-200' key={index}>
                                <td className="h-full p-3 border border-slate-300"> {junior.title} </td>
                                <td className="h-full p-3 border border-slate-300">
                                    <img className="main-img"
                                        src={URLS.imageURL + '/uploads/juniorpurplesocieties/' + junior.picture}
                                        alt="" />
                                </td>
                                <td className="h-full p-3 border border-b-0 border-t-slate-300">
                                    <div className='h-full gap-3 flex flex-col'>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => editJuniorPurpleSociety(junior._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteJuniorPurpleSociety(junior._id)}
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

export default withRouter(JuniorPurpleSociety);
