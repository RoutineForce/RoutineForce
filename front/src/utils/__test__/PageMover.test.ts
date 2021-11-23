import PageMover from '../PageMover';

afterEach(() => {
  PageMover.init(null);
});

describe('PageMover test', () => {
  test('init 되기 전 goTo 메소드가 호출되면 에러가 나야함', () => {
    try {
      PageMover.goToHomePage();
      expect(true).toBe(false);
    } catch (e) {
      expect(true).toBe(true);
    }
  });
  test('init 된 후 goTo 종류 메소드들 호출되면 매개변수가 맞게 들어가야함', () => {
    const fn = jest.fn();
    PageMover.init(fn);
    const t: any = [];
    PageMover.goToLoginPage();
    expect(fn).toBeCalledWith(process.env.REACT_APP_LOGIN_PATH, {
      state: undefined,
    });
    PageMover.goToReportPage(t);
    expect(fn).toBeCalledWith(process.env.REACT_APP_REPORT_PATH, {state: t});
  });
  test('init 된 후, goTo 종류 메소드들이 호출되는데, env 값이 잘못되었을 때, fn은 "/" 매개변수와 함께 호출되어야 함', () => {
    const fn = jest.fn();
    PageMover.init(fn);
    // delete env
    const t = process.env.REACT_APP_LOGIN_PATH;
    delete process.env.REACT_APP_LOGIN_PATH;
    PageMover.goToLoginPage();
    expect(fn).toBeCalledWith('/');

    // rollback env
    process.env.REACT_APP_LOGIN_PATH = t;
  });
});
