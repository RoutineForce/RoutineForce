import React, {useRef, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editRoutine.css';
import {Divider, Input, Image, Icon, Button, Label} from 'semantic-ui-react';
import DatePicker, {DateObject} from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import GlobalLoader from './globalLoader';

import '../CSS/newEditRoutine.css';

interface TimePickerFromToProps {
  idx: number;
}

function TimePickerFromTo(props: TimePickerFromToProps): JSX.Element {
  return (
    <div
      style={{marginTop: 5, display: 'flex', justifyContent: 'space-evenly'}}
    >
      <p style={{fontFamily: 'CookieRunRegular'}}>
        {props.idx + 1}번째 인증 :{' '}
      </p>
      <DatePicker
        style={{marginLeft: 3, width: 70, textAlign: 'center'}}
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
      <Input placeholder="Input routine's location..." />
    </div>
  );
}

function PictureCertificationDetailSelector(): JSX.Element {
  const [pictureCertifications, setPictureCertifications] = useState<
    PictureCertification[]
  >([]);
  const oneButtonClick = () => {
    const newPictureCertifications = [];
    newPictureCertifications.push({startTime: '', endTime: ''});
    setPictureCertifications(newPictureCertifications);
  };
  const twoButtonClick = () => {
    const newPictureCertifications = [];
    newPictureCertifications.push({startTime: '', endTime: ''});
    newPictureCertifications.push({startTime: '', endTime: ''});
    setPictureCertifications(newPictureCertifications);
  };

  return (
    <div
      style={{
        marginTop: 5,
        padding: 5,
      }}
    >
      <Button.Group>
        <Button onClick={oneButtonClick}>한 번 인증</Button>
        <Button.Or />
        <Button onClick={twoButtonClick}>두 번 인증</Button>
      </Button.Group>
      <Label
        style={{
          marginTop: 5,
          padding: 5,
        }}
      >
        <Icon name="alarm" color="orange" />
        업로드 시간을 입력해주세요
      </Label>
      {pictureCertifications.map((info, idx) => {
        return <TimePickerFromTo key={idx} idx={idx}></TimePickerFromTo>;
      })}
    </div>
  );
}

export default function Routine(): JSX.Element {
  const modules = {toolbar: false};

  const [imgBlob, setImgBlob] = useState('');
  const [certificationKind, setCertificationKind] = useState('1');

  const radios = [
    {name: '오프라인', value: '1'},
    {name: '사진인증', value: '2'},
  ];
  const options = [
    {label: 'Grapes 🍇', value: 'grapes'},
    {label: 'Mango 🥭', value: 'mango'},
    {label: 'Strawberry 🍓', value: 'strawberry', disabled: true},
  ];
  const certificationKindChange = (e: any) => {
    setCertificationKind(e.currentTarget.value);
  };

  const filePickerRef = useRef<HTMLInputElement>(null);

  const [selectedDates, setSelectedDates] = useState<DateObject[]>([]);
  const optionList = options.map(option => (
    <option key={option.value}>{option.label}</option>
  ));
  const imgClick = () => {
    filePickerRef.current?.click();
  };

  const routineDaysChange = (selectedDates: DateObject[]) => {
    setSelectedDates(selectedDates);
  };

  const imgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target as any).files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImgBlob(reader.result as string);
      }
    };
    reader.readAsDataURL(file); // div click -> imgClick -> input click (code) -> 이미지를 고른다면 -> imgChange -> reader.readAsDataUrl -> reader.onload callback
  };
  const saveButtonClick = () => {
    // 데이터를 주고받을 부분
    GlobalLoader.start();
    setTimeout(() => {
      GlobalLoader.stop();
    }, 3000);
  };

  const [textLength, setTextLength] = useState(0);
  const onTextLength = (e: any) => {
    setTextLength(e.target.value.length);
  };

  const [pages, setPages] = useState<number>(0);
  const handlePages = (e: any) => {
    if (e.target.value === 'nextBts') setPages(1);
    else setPages(0);
  };

  const datePickerRef = useRef<any>();

  const [participationChoice, setParticipationChoice] = useState<boolean>();
  const handleParticipantYes = () => {
    setParticipationChoice(true);
  };
  const handleParticipantNo = () => {
    setParticipationChoice(false);
  };
  const [participants, setParticipants] = useState(0);
  const onChangeParticipants = (e: any) => {
    setParticipants(e.target.value);
  };
  return (
    <div className="makeRoutine">
      {pages === 0 ? (
        <div className="prevPage">
          <h2 className="title">어떤 루틴을 등록하시나요?</h2>
          <div className="inputTitle">
            <Input
              style={{width: '80vw'}}
              transparent
              onChange={onTextLength}
              maxLength={33}
              placeholder="루틴 제목을 입력해주세요..."
            />
            <Divider style={{width: '80vw'}}>
              <h5>({textLength}/33)</h5>
            </Divider>
          </div>
          <div className="inputPicture" onClick={imgClick}>
            {imgBlob === '' ? (
              <>
                <Icon size="huge" name="image" color="grey" />
                <p>사진 추가</p>
              </>
            ) : (
              <Image className="Image" onClick={imgClick} src={imgBlob} />
            )}
          </div>
          <input
            style={{display: 'none'}}
            onChange={imgChange}
            ref={filePickerRef}
            type="file"
          ></input>
          <p className="InputName">루틴 설명</p>
          <div className="inputExplanationT">
            <ReactQuill theme="bubble" modules={{toolbar: false}} />
          </div>
          <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <Button value="nextBts" onClick={handlePages}>
              다음
            </Button>
          </div>
        </div>
      ) : (
        <div className="routineFrame">
          <div>
            <p className="InputName">종류</p>
            <Input list="Tag" placeholder="Choose Tag..." />
            <datalist id="Tag">{optionList}</datalist>
          </div>
          <div>
            <p className="InputName">진행 날짜</p>
            <Input
              readOnly
              onClick={() => datePickerRef.current.openCalendar()}
              placeholder="Select Days"
            />
            <div>
              <DatePicker
                style={{display: 'none'}}
                ref={datePickerRef}
                minDate={new Date().setDate(new Date().getDate() + 1)}
                multiple
                editable={false}
                onChange={routineDaysChange}
                plugins={[<DatePanel key={1} />]}
              ></DatePicker>
              {selectedDates.length ? (
                <span className="selectedDates">{`${selectedDates.length}일`}</span>
              ) : null}
            </div>
          </div>
          <div>
            <p className="InputName">인증 방식</p>
            <Button.Group size="large">
              <Button value="1" onClick={certificationKindChange}>
                Online
              </Button>
              <Button.Or />
              <Button value="2" onClick={certificationKindChange}>
                Offline
              </Button>
            </Button.Group>
            {certificationKind === '1' ? (
              <PictureCertificationDetailSelector />
            ) : null}
            {certificationKind === '2' ? (
              <OfflineCertificationDetailSelector />
            ) : null}
          </div>
          <div>
            <p className="InputName">인원</p>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <div>
                <div style={{fontFamily: 'CookieRunBold'}}>최소</div>
                <Input style={{width: '100px'}} type="number" />
              </div>
              <div>
                <div style={{fontFamily: 'CookieRunBold'}}>최대</div>
                <Input style={{width: '100px'}} type="number" />
              </div>
            </div>
          </div>
          <div>
            <p className="InputName">참가비</p>
            <Button.Group size="large">
              <Button onClick={handleParticipantYes}>Participation fee</Button>
              <Button.Or />
              <Button onClick={handleParticipantNo}>None</Button>
            </Button.Group>
            {participationChoice === undefined ? null : (
              <>
                {participationChoice ? (
                  <>
                    <Input
                      style={{
                        marginTop: 5,
                        padding: 5,
                      }}
                      label={{basic: true, content: '원'}}
                      labelPosition="right"
                      type="number"
                      onChange={onChangeParticipants}
                    />
                  </>
                ) : (
                  <Input
                    style={{
                      marginTop: 5,
                      padding: 5,
                    }}
                    readOnly
                    placeholder="No participation fee"
                  />
                )}
              </>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              marginTop: 20,
            }}
          >
            <Button onClick={saveButtonClick}>등록하기!</Button>

            <Button value="prevBts" onClick={handlePages}>
              이전
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
