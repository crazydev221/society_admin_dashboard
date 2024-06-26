import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import PurpleApartmentService from '../../../services/PurpleApartmentService';
import FileUpload from '../../../components/Forms/Elements/FileUpload';

import { URLS } from '../../../constants/consts';

function CreateNitaliaBlanket(props) {

  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [uploadImage, setUploadImage] = useState(null);

  const path = props.location.pathname;
  const apartment_id = path.slice(path.lastIndexOf('/') + 1);

  useEffect(() => {
    if (apartment_id !== '_add') {
      PurpleApartmentService.getById(apartment_id).then((res) => {
        setTitle(res.data.title);
        setPicture(res.data.picture);
      })
    }
  }, []);

  const handlePurpleApartmentSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);

      if (uploadImage) {
        formData.append("image", uploadImage);
      }

      if (apartment_id === '_add') {
        await PurpleApartmentService.create(formData);
      } else {
        await PurpleApartmentService.update(formData, apartment_id);
      }

      props.history.push('/purpleapartments');

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
          Add | Update Nitalia Blankets
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
            <img src={URLS.imageURL + '/uploads/purpleapartments/' + picture} alt='original' />
            <FileUpload onChangeImage={addUploadImage} />
          </div>

          <div className='flex justify-start w-full gap-3 p-2'>
            <button
              className="btn btn-success p-2"
              onClick={() => handlePurpleApartmentSubmit()}
            >
              Save
            </button>
            <button
              onClick={() => { props.history.push('/purpleapartments') }}
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

export default withRouter(CreateNitaliaBlanket);