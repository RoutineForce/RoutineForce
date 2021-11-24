import React from 'react'; //docs 배포 테스트
import {render} from 'react-dom';
import {fireEvent, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Report, {ReportPageState} from '../report';
import PageMover from '../../../utils/PageMover';

let container: HTMLDivElement | null = null;
const mockedLocationNoState: any = {
  pathname: '/report',
};
const state: ReportPageState = {
  fromURL: 'this is test FromURL',
  error: 'this is test error string error infomation',
};

const mockedLocationWithState: any = {
  pathname: '/report',
  state: state,
};

const mockedNavigator: any = [];

const renderReport = (mockedLocation: any) => {
  container = document.createElement('div');
  document.body.appendChild(container);
  if (container) {
    render(
      <Router location={mockedLocation} navigator={mockedNavigator}>
        <Report></Report>
      </Router>,
      container,
    );
  }
};

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
    container = null;
  }
});

describe('Report page test', () => {
  test('issue 남기러 가기 라는 버튼을 누르면 github issue 페이지가 열려야 함', () => {
    renderReport(mockedLocationNoState);
    const button = screen.getByText(/issue/i);
    const t = window.open;
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toBeCalledWith(
      process.env.REACT_APP_GITHUB_ISSUE_ADDRESS,
    );
    window.open = t;
  });

  test('URL 로 바로 접근했을 경우 (location 에 state 가 없을 경우) Home 으로 가는 버튼이 렌더링 됨', () => {
    renderReport(mockedLocationNoState);
    const button = screen.getByText(/home/i);

    const fn = jest.fn();
    PageMover.init(fn);
    fireEvent.click(button);
    expect(fn).toBeCalledWith(process.env.REACT_APP_HOME_PATH, {
      state: undefined,
    });
  });

  test('정상적으로 접근하였을 경우 죄송하다는 문구가 떠야 함', () => {
    renderReport(mockedLocationWithState);
    const ele = screen.queryByText(/sorry/i);
    expect(ele).not.toBe(null);
  });
});
