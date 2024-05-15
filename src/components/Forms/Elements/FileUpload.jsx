import React, { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function FileUpload(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({ accept: 'image/*' });

  const [preview, setPreview] = useState(null);

  const onChangeImage = props.onChangeImage;

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const objectUrl = URL.createObjectURL(acceptedFiles[0]);
      onChangeImage(acceptedFiles[0]); // Change yourself
      setPreview(objectUrl);
    }
  }, [acceptedFiles]);

  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div className="container p-3">
      <div className='cursor-pointer' {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>
          Drag & drop images here, or click to select
        </p>
      </div>
      <aside>
        {preview && <img className="main-img h-48 mx-auto p-3" src={preview} alt="Preview" />}
        <p className='text-primary'>Uploaded file shows here</p>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default FileUpload
