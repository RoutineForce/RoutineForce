export default class User {
  private static token: string | null = null;
  private static loginType: 'FOURTY_TWO' | 'KAKAO' | 'NAVER' | 'GOOGLE' | null =
    null;
  static isLogin(): boolean {
    if (this.token && this.loginType) {
      // Todo : code 와 loginType 이 존재하는 경우 백엔드로 로그인 이 되어있는지 요청해야 한다.
      return true;
    } else {
      return false;
    }
  }
}
