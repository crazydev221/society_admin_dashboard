import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import JuniorPurpleSocietyService from '../../../services/JuniorPurpleSocietyService';
import FileUpload from '../../../components/Forms/Elements/FileUpload';

import { URLS } from '../../../constants/consts';

function CreateJuniorPurpleSocity(props) {

  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [uploadImage, setUploadImage] = useState(null);

  const path = props.location.pathname;
  const junior_id = path.slice(path.lastIndexOf('/') + 1);

  useEffect(() => {
    if (junior_id !== '_add') {
      JuniorPurpleSocietyService.getById(junior_id).then((res) => {
        setTitle(res.data.title);
        setPicture(res.data.picture);
      })
    }
  }, []);

  const handleJuniorSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);

      if (uploadImage) {
        formData.append("image", uploadImage);
      }

      if (junior_id === '_add') {
        await JuniorPurpleSocietyService.create(formData);
      } else {
        await JuniorPurpleSocietyService.update(formData, junior_id);
      }

      props.history.push('/juniors');

    } catch (err) {
      console.error('Error handling Update');
    }
  }

  const addUploadImage = (image) => {
    setUploadImage(image);
  }

  return (
    <div className='w-full max-w-[768px] text-center mx-auto pt-16'>
      <div className='max-w-[600px] mx-auto bg-white p-3 border border-gray-300 shadow-md rounded-lg'>
        <h1 className='text-3xl font-semibold'>
          Add | Update Junior Purple Society
        </h1>
        <div className='flex flex-col justify-center items-center text-start p-6'>
          <div className='w-full py-2'>
            <label> Title: </label>
            <input
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              className='form-control'
              placeholder='Title'
              name='title'
            />
          </div>

          <div className="w-full py-2">
            <label> Picture: </label>
            <img src={URLS.imageURL + '/uploads/juniorpurplesocieties/' + picture} alt='original' />
            <FileUpload onChangeImage={addUploadImage} />
          </div>

          <div className='flex justify-start w-full gap-3 p-2'>
            <button
              className="btn btn-success p-2"
              onClick={() => handleJuniorSubmit()}
            >
              Save
            </button>
            <button
              onClick={() => { props.history.push('/juniors') }}
              className="btn btn-danger p-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(CreateJuniorPurpleSocity);