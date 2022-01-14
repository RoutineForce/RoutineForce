import React, {useState} from 'react';
import {Divider, Input, Image, Icon} from 'semantic-ui-react';
import ReactQuill from 'react-quill';

export default function NewEditRoutine(): JSX.Element {
  const options = [
    {label: 'Nothing', value: 'nothing'},
    {label: 'Grapes 🍇', value: 'grapes'},
    {label: 'Mango 🥭', value: 'mango'},
    {label: 'Strawberry 🍓', value: 'strawberry', disabled: true},
  ];
  const optionList = options.map(option => (
    <option key={option.value}>{option.label}</option>
  ));
  const [textLength, setTextLength] = useState(0);
  const onTextLength = (e: any) => {
    setTextLength(e.target.value.length);
  };
  return (
    <>
      <h2>어떤 루틴을 등록하시나요?</h2>
      <div className="inputTitle">
        <Input
          style={{width: '60vw'}}
          transparent
          onChange={onTextLength}
          maxLength={33}
          placeholder="루틴 제목을 입력해주세요..."
        />
        <Divider style={{width: '60vw'}}>
          <h5>({textLength}/33)</h5>
        </Divider>
      </div>
      <Image src="/images/wireframe/square-image.png" size="medium" rounded />
      <div className="inputPicture">
        <Icon size="huge" name="image" color="grey" />
        <p>add picture</p>
      </div>
      <Input list="Tag" placeholder="Choose Tag..." />
      <datalist id="Tag">{optionList}</datalist>
      <p>Explanation</p>
      <div className="inputExplanation" style={{border: '1px solid #000000'}}>
        <ReactQuill modules={{toolbar: false}} />
      </div>
    </>
  );
}
