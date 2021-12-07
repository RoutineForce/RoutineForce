import React, {useState, useRef} from 'react';

export default function PictureUpload(): JSX.Element {
  const [imgBlob, setImgBlob] = useState('./defaultImages/addImage.png');

  const filePickerRef = useRef<HTMLInputElement>(null);

  const imgClick = () => {
    filePickerRef.current?.click();
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target as any).files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImgBlob(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div
        className="uploadCertification"
        onClick={imgClick}
        style={{
          border: '2px dotted black',
          borderRadius: 7,
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'space-between',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${imgBlob})`,
          width: '100%',
          minWidth: '100px',
          minHeight: '200px',
          cursor: 'pointer',
        }}
      ></div>
      <input
        className="hindingUpload"
        type="file"
        accept="image/*"
        ref={filePickerRef}
        onChange={handleChangeFile}
      ></input>
    </div>
  );
}
