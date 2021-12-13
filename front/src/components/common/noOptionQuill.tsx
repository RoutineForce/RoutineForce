import React from 'react';
import ReactQuill from 'react-quill';

export default function NoOptionQuill(props: any) {
  const modules = {toolbar: false};

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        readOnly={true}
        value={props.value}
      />
    </>
  );
}
