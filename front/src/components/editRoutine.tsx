import React, {useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './routine.css';
import {
  InputGroup,
  FormControl,
  ButtonGroup,
  ToggleButton,
  Button,
} from 'react-bootstrap';
import DatePicker, {DateObject} from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

interface TimePickerFromToProps {
  idx: number;
}

function TimePickerFromTo(props: TimePickerFromToProps): JSX.Element {
  return (
    <div style={{marginTop: 5, display: 'flex'}}>
      <div style={{marginRight: 5, width: 15}}>{`${props.idx}.`}</div>
      <DatePicker
        style={{width: 70, textAlign: 'center'}}
        editable={false}
        disableDayPicker
        format="HH:mm"
        plugins={[<TimePicker key={1} hideSeconds />]}
      />
      <div style={{marginLeft: 5, marginRight: 5}}>{'~'}</div>
      <DatePicker
        style={{width: 70, textAlign: 'center'}}
        editable={false}
        disableDayPicker
        format="HH:mm"
        plugins={[<TimePicker key={1} hideSeconds />]}
      />
      <div style={{marginLeft: 5, marginRight: 5}}>사이 업로드</div>
    </div>
  );
}

interface PictureCertification {
  startTime: string;
  endTime: string;
}

function OfflineCertificationDetailSelector(): JSX.Element {
  const [addr, setAddr] = useState('');
  return (
    <div
      style={{
        marginTop: 5,
      }}
    >
      <input
        style={{width: '100%'}}
        placeholder={'모임 주소를 입력해주세요.'}
      ></input>
    </div>
  );
}

function PictureCertificationDetailSelector(): JSX.Element {
  const [pictureCertifications, setPictureCertifications] = useState<
    PictureCertification[]
  >([]);
  const lessButtonClick = () => {
    const newPictureCertifications = pictureCertifications.slice(0, -1);
    setPictureCertifications(newPictureCertifications);
  };
  const moreButtonClick = () => {
    const newPictureCertifications = [...pictureCertifications];
    newPictureCertifications.push({startTime: '', endTime: ''});
    setPictureCertifications(newPictureCertifications);
  };

  return (
    <div
      style={{
        marginTop: 5,
        padding: 5,
        border: '1px solid black',
        borderRadius: 5,
      }}
    >
      <Button
        onClick={moreButtonClick}
        style={{marginRight: 5}}
        variant="secondary"
      >
        인증 횟수 추가 +
      </Button>
      <Button onClick={lessButtonClick} variant="secondary">
        인증 횟수 감소 -
      </Button>
      {pictureCertifications.map((info, idx) => {
        return <TimePickerFromTo key={idx} idx={idx}></TimePickerFromTo>;
      })}
    </div>
  );
}

export default function Routine(): JSX.Element {
  const location = useLocation();
  const routineId = location.state.routineId;
  const modules = {toolbar: false};

  const [imgBlob, setImgBlob] = useState('./defaultImages/addImage.png');
  const [certificationKind, setCertificationKind] = useState('1');

  const radios = [
    {name: '오프라인', value: '1'},
    {name: '사진인증', value: '2'},
  ];

  const certificationKindChange = (e: any) => {
    setCertificationKind(e.currentTarget.value);
  };

  const filePickerRef = useRef<HTMLInputElement>(null);

  const [selectedDates, setSelectedDates] = useState<DateObject[]>([]);

  const imgClick = () => {
    filePickerRef.current?.click();
  };
  const inputClick = (e: any) => {
    e.stopPropagation();
  };
  const routineDaysChange = (selectedDates: DateObject[]) => {
    setSelectedDates(selectedDates);
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
      <div style={{padding: 5, border: '1px solid black', borderRadius: 5}}>
        <h5>Routine 진행 날짜를 선택해주세요!</h5>
        <div style={{display: 'flex'}}>
          <DatePicker
            style={{marginRight: 10}}
            minDate={new Date().setDate(new Date().getDate() + 1)}
            multiple
            editable={false}
            onChange={routineDaysChange}
            plugins={[<DatePanel key={1} />]}
          ></DatePicker>
          {selectedDates.length ? (
            <div>{`${selectedDates.length}일`}</div>
          ) : (
            <div>{`<-- 클릭!`}</div>
          )}
        </div>
      </div>
      <br></br>
      <div style={{padding: 5, border: '1px solid black', borderRadius: 5}}>
        <h5>Routine 인증 방식을 선택해주세요!</h5>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              variant="outline-primary"
              value={radio.value}
              checked={certificationKind === radio.value}
              onChange={certificationKindChange}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        {certificationKind === '2' ? (
          <PictureCertificationDetailSelector />
        ) : null}
        {certificationKind === '1' ? (
          <OfflineCertificationDetailSelector />
        ) : null}
      </div>
      <br></br>
      <div style={{padding: 5, border: '1px solid black', borderRadius: 5}}>
        <h5>Routine 인원을 입력해주세요!</h5>
        <div>최소</div>
        <input type="number" value={1}></input>
        <div>최대</div>
        <input type="number" value={10}></input>
      </div>
      <br></br>
      <div style={{padding: 5, border: '1px solid black', borderRadius: 5}}>
        <h5>Routine 세부사항을 입력해주세요!</h5>
        <ReactQuill></ReactQuill>
      </div>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Button>등록하기!</Button>
      </div>
    </div>
  );
}
