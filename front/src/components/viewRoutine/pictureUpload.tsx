import React, {useState, useRef} from 'react';

// 사진 저장에 필요한 무언가 확인, 날짜와 닉네임
export default function PictureUpload(): JSX.Element {
  const [imgBlob, setImgBlob] = useState('');

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
        className="CertificationForm"
        onClick={imgClick}
        style={{
          backgroundImage: `url(${imgBlob})`,
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
