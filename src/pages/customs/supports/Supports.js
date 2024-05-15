import React, { useEffect, useState } from 'react';
import SupportService from '../../../services/SupportServices';
import { URLS } from '../../../constants/consts';
import { withRouter } from 'react-router-dom';

function Supports(props) {

  var [supports, setSupports] = useState([]);

  useEffect(() => {
    SupportService.getLists().then(res => {
      console.log(res.data.supports);
      setSupports(res.data.supports);
    }).catch(err => {
      console.error('Error getting support', err);
    });
  }, []);

  const addSupport = () => {
    props.history.push(`/add-support/_add`);
  }

  const editSupport = (id) => {
    props.history.push(`/add-support/${id}`);
  }

  const deleteSupport = async (id) => {
    try {
      if(!window.confirm('Want to delete really?'))
        return;
      else {
        await SupportService.delete(id);
        const res = await SupportService.getLists();
        setSupports(res.data.supports);
      }
    } catch(err) {
      console.error('Error deleting supporter', err);
    }
  }

  return (
    <div className='w-full max-w-[768px] text-center mx-auto pt-16'>
      <h1 className='font-semibold text-3xl'>
        Support List
      </h1>
      <div className='w-full flex flex-col justify-center items-start my-9 p-3'>
        <button
          onClick={() => addSupport()}
          className='btn btn-primary mb-3 p-3'
        >
          Add Supporter
        </button>
        
        <table className='w-full text-sm text-start border border-collapse border-slate-400'>
          <thead>
            <tr>
              <th className='p-3 bg-gray-100 border border-slate-300'> Name </th>
              <th className='p-3 bg-gray-100 border border-slate-300'> Disease </th>
              <th className='p-3 bg-gray-100 border border-slate-300'> Picture </th>
              <th className='p-3 bg-gray-100 border border-slate-300'> Description </th>
              <th className='p-3 bg-gray-100 border border-slate-300'> Actions </th>
            </tr>
          </thead>
          <tbody>
            {supports.map((supporter, index) => (
              <tr className='hover:bg-gray-200' key={index}>
                <td className="h-full p-3 border border-slate-300"> {supporter.name} </td>
                <td className="h-full p-3 border border-slate-300"> {supporter.disease} </td>
                <td className="h-full p-3 border border-slate-300">
                  <img className="main-img"
                    src={URLS.imageURL + '/uploads/supports/' + supporter.picture}
                    alt="" />
                </td>
                <td className="h-full p-3 border border-slate-300"> {supporter.description} </td>
                <td className="h-full p-3 border border-b-0 border-t-slate-300">
                  <div className='h-full gap-3 flex flex-col'>
                    <button
                      className="btn btn-info"
                      onClick={() => editSupport(supporter._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSupport(supporter._id)}
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

export default withRouter(Supports);
