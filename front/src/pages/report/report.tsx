import React from 'react';
import {Button} from 'react-bootstrap';
import PageMover from '../../utils/PageMover';

interface ReportPageProps {
  fromURL: string;
  error: string;
}

export default function Report(props?: ReportPageProps): JSX.Element {
  const goToIssueButtonClick = () => {
    window.open(process.env.REACT_APP_GITHUB_ISSUE_ADDRESS);
  };
  return (
    <>
      <Button onClick={goToIssueButtonClick}>Go to report this Issue</Button>
    </>
  );
}
