import React from 'react';
import ReactDOM from 'react-dom';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import {css} from '@emotion/react';
import './globalLoader.css';

const loaderCss = css`
  width: 100%;
  height: 100%;
`;

export default class GlobalLoader {
  private static container: HTMLDivElement | null = null;
  static start(): void {
    this.container = document.createElement('div');
    this.container.className = 'globalLoaderContainer';
    document.body.appendChild(this.container);
    ReactDOM.render(
      <ClimbingBoxLoader
        speedMultiplier={1.5}
        css={loaderCss}
      ></ClimbingBoxLoader>,
      this.container,
    );
  }
  static stop(): void {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
      document.body.removeChild(this.container);
    }
  }
}
