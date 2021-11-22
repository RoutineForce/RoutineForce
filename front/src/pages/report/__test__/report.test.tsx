import React from 'react'; //docs 배포 테스트
import {render} from 'react-dom';
import {fireEvent, screen} from '@testing-library/react';
import Report from '../report';

let container: HTMLDivElement | null = null;
let t: any = undefined;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  if (container) {
    render(<Report {...t}></Report>, container);
  }
});

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
    container = null;
  }
});

describe('Report page test', () => {
  test('issue 남기러 가기 라는 버튼을 누르면 github issue 페이지가 열려야 함', () => {
    const button = screen.getByText(/issue/i);

    const t = window.open;
    window.open = jest.fn();
    fireEvent.click(button);
    expect(window.open).toBeCalledWith(
      process.env.REACT_APP_GITHUB_ISSUE_ADDRESS,
    );
    window.open = t;
  });
});
