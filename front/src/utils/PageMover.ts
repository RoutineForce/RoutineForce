import {NavigateFunction} from 'react-router-dom';

/**
 * 책임 : 각각의 Page 로의 이동.
 * goTo* 메소드를 사용하기 전, init 메소드를 통해 naviagte 을 등록해줘야함. (useNavigate 의 리턴)
 */
export default class PageMover {
  private static navigate: NavigateFunction | null = null;
  static init(navigate: NavigateFunction | null): void {
    this.navigate = navigate;
  }
  static goToLoginPage(): void {
    this.goTo(process.env.REACT_APP_LOGIN_PATH);
  }
  static goToReportPage(): void {
    this.goTo(process.env.REACT_APP_REPORT_PATH);
  }
  private static goTo(pagePath: string | undefined): void {
    if (!this.navigate) throw new Error('PageMover not init error');
    if (pagePath) this.navigate(pagePath);
    else this.navigate('/');
  }
}
