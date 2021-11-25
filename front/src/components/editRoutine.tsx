import React, {useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './routine.css';
import {InputGroup, FormControl} from 'react-bootstrap';

export default function Routine(): JSX.Element {
  const location = useLocation();
  const routineId = location.state.routineId;
  const modules = {toolbar: false};

  const [imgBlob, setImgBlob] = useState('./defaultImages/addImage.png');

  const filePickerRef = useRef<HTMLInputElement>(null);

  const imgClick = () => {
    filePickerRef.current?.click();
  };
  const inputClick = (e: any) => {
    e.stopPropagation();
  };

  const imgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target as any).files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setImgBlob(reader.result as string);
      }
    };
  };
  return (
    <div className="routineFrame">
      <div
        onClick={imgClick}
        style={{
          border: '2px dotted black',
          borderRadius: 7,
          padding: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'space-between',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${imgBlob})`,
          maxWidth: '100%',
          height: 300,
          cursor: 'pointer',
        }}
      >
        <InputGroup style={{width: '40%'}} className="mb-3">
          <FormControl
            onClick={inputClick}
            placeholder="제목을 입력해주세요."
            aria-label="title"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup style={{width: '70%'}} className="mb-3">
          <FormControl
            onClick={inputClick}
            placeholder="한줄 소개를 입력해주세요"
            aria-label="intro"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <input
        style={{display: 'none'}}
        onChange={imgChange}
        ref={filePickerRef}
        type="file"
      ></input>
      <br></br>
      <ReactQuill></ReactQuill>
    </div>
  );
}
