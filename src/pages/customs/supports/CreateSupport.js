import React, { useEffect, useRef, useState } from 'react';
import FileUpload from '../../../components/Forms/Elements/FileUpload';
import { withRouter } from 'react-router-dom';
import SupportServices from '../../../services/SupportServices';
import { URLS } from '../../../constants/consts';

function CreateSupport(props) {

    const [name, setName] = useState('');
    const [disease, setDisease] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [picture, setPicture] = useState('');
    const [uploadImage, setUploadImage] = useState(null);

    const path = props.location.pathname;
    const support_id = path.slice(path.lastIndexOf('/') + 1);

    useEffect(() => {
        if (support_id !== '_add') {
            SupportServices.getById(support_id).then((res) => {
                let support = res.data;
                setName(support.name);
                setDisease(support.disease);
                setDescription(support.description);
                setAddress(support.address);
                setPicture(support.picture);
            })
        }
    }, []);

    const handleSupportSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("disease", disease);
            formData.append("description", description);
            formData.append("address", address);

            if (uploadImage) {
                formData.append("image", uploadImage);
            }

            if (support_id === '_add') {
                await SupportServices.create(formData);
            } else {
                await SupportServices.update(formData, support_id);
            }

            props.history.push('/supports');

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
                    Update Support
                </h1>
                <div className='flex flex-col justify-center items-center text-start p-6'>
                    <div className='w-full py-2'>
                        <label> Name: </label>
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className='form-control'
                            placeholder='Name'
                            name='name'
                        />
                    </div>
                    <div className='w-full py-2'>
                        <label> Disease: </label>
                        <input
                            value={disease}
                            onChange={(e) => { setDisease(e.target.value) }}
                            className='form-control'
                            placeholder='Disease'
                            name='disease'
                        />
                    </div>
                    <div className='w-full py-2'>
                        <label> Description: </label>
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            rows="5"
                            className='form-control'
                            name="description"
                            placeholder="Leave us a description..."
                        >
                        </textarea>
                    </div>

                    <div className="w-full py-2">
                        <label> Picture: </label>
                        <img src={URLS.imageURL + '/uploads/supports/' + picture} alt='original' />
                        <FileUpload onChangeImage={addUploadImage} />
                    </div>

                    <div className='w-full py-2'>
                        <label> Address: </label>
                        <input
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            className='form-control'
                            placeholder='Disease'
                            name='disease'
                        />
                    </div>

                    <div className='flex justify-start w-full gap-3 p-2'>
                        <button
                            className="btn btn-success p-2"
                            onClick={() => handleSupportSubmit()}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => { props.history.push('/supports') }}
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

export default withRouter(CreateSupport);