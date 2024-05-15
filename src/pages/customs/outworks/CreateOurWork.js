import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';

import FileUpload from '../../../components/Forms/Elements/FileUpload';
import OurWorkService from '../../../services/OurWorkService';

import { URLS } from '../../../constants/consts';

function CreateOurWork(props) {

  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [uploadImage, setUploadImage] = useState(null);

  const path = props.location.pathname;
  const ourwork_id = path.slice(path.lastIndexOf('/') + 1);

  useEffect(() => {
    if (ourwork_id !== '_add') {
      OurWorkService.getById(ourwork_id).then((res) => {
        let ourwork = res.data;
        setTitle(ourwork.title);
        setPicture(ourwork.picture);
      })
    }
  }, []);

  const handleOurworkSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);

      if (uploadImage) {
        formData.append("image", uploadImage);
      }

      if (ourwork_id === '_add') {
        await OurWorkService.create(formData);
      } else {
        await OurWorkService.update(formData, ourwork_id);
      }

      props.history.push('/ourworks');

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
          Add | Update Our Work
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
            <img src={URLS.imageURL + '/uploads/ourworks/' + picture} alt='original' />
            <FileUpload onChangeImage={addUploadImage} />
          </div>

          <div className='flex justify-start w-full gap-3 p-2'>
            <button
              className="btn btn-success p-2"
              onClick={() => handleOurworkSubmit()}
            >
              Save
            </button>
            <button
              onClick={() => { props.history.push('/ourworks') }}
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

export default withRouter(CreateOurWork);