import React, {useEffect} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import PageMover from '../../utils/PageMover';
import {useLocation} from 'react-router-dom';

export interface ReportPageState {
  fromURL: string;
  error: string;
}

function ErrorPrinter(props: ReportPageState): JSX.Element {
  const makeErrorText = () => {
    return `fromURL : ${props.fromURL}\nerrorInfo : ${props.error}`;
  };
  return (
    <>
      <div>Sorry! Error occured please report to me with below information</div>
      <textarea disabled={true} value={makeErrorText()}></textarea>
    </>
  );
}

function WrongAccess(): JSX.Element {
  const goToHomeButtonClick = () => {
    PageMover.goToHomePage();
  };
  return (
    <>
      <div>
        Maybe you try to wrong access! if not, report this situation. sorry!
      </div>
      <Button size="sm" onClick={goToHomeButtonClick}>
        Go to Home
      </Button>
    </>
  );
}

export default function Report(): JSX.Element {
  const location = useLocation();
  const navigateState = location.state as ReportPageState;
  const goToIssueButtonClick = () => {
    window.open(process.env.REACT_APP_GITHUB_ISSUE_ADDRESS);
  };

  return (
    <>
      {navigateState ? (
        <ErrorPrinter {...navigateState}></ErrorPrinter>
      ) : (
        <WrongAccess></WrongAccess>
      )}
      <Button size="sm" onClick={goToIssueButtonClick}>
        Go to report this Issue
      </Button>
    </>
  );
}
