import React from 'react';
import ReactDOM from 'react-dom';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import {css} from '@emotion/react';
import './globalLoader.css';

const loaderCss = css`
  width: 50%;
  height: 50%;
`;

export default class GlobalLoader {
  private static container: HTMLDivElement | null = null;
  static start(): void {
    this.container = document.createElement('div');
    this.container.className = 'globalLoaderContainer';
    this.container.setAttribute(
      'style',
      `width: ${window.screen.width}; height: ${window.screen.height}`,
    );
    document.body.appendChild(this.container);
    ReactDOM.render(
      <ClimbingBoxLoader
        speedMultiplier={2}
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
