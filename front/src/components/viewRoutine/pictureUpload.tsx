import React, {useState, useRef} from 'react';
import {Modal} from 'react-bootstrap';
import {Icon} from 'semantic-ui-react';

// 사진 저장에 필요한 무언가 확인, 날짜와 닉네임
export default function PictureUpload(): JSX.Element {
  const [imgBlob, setImgBlob] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  function Timecheck() {
    const nowTime = new Date();
    const nowHourMinute = {
      hour: nowTime.getHours(),
      minute: nowTime.getMinutes(),
    };
    const TimeSort = [
      nowHourMinute,
      {hour: 8, minute: 0},
      {hour: 9, minute: 0},
    ];
    TimeSort.sort(function (a, b) {
      if (a.minute >= b.minute) {
        return 1;
      }
      return -1;
    });
    TimeSort.sort(function (a, b) {
      if (a.hour >= b.hour) return 1;
      return -1;
    });
    console.log(TimeSort);
    if (TimeSort[1] == nowHourMinute) return imgClick();
    return handleShow();
  }
  const checkBox = [
    {hour: 8, minute: 0},
    {hour: 9, minute: 0},
  ];

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>인증 시간</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Icon name="clock outline" /> 6:00 ~ 6:30
          <p>시간에 맞춰서 인증해주세요</p>
        </Modal.Body>
      </Modal>
      <div
        className="CertificationForm"
        onClick={Timecheck}
        style={{
          backgroundImage: `url(${imgBlob})`,
          cursor: 'pointer',
        }}
      >
        <span>
          {checkBox[1].hour.toString() + ':' + checkBox[1].minute.toString()}
        </span>
      </div>
      <input
        style={{display: 'none'}}
        type="file"
        accept="image/*"
        ref={filePickerRef}
        onChange={handleChangeFile}
      ></input>
    </div>
  );
}
