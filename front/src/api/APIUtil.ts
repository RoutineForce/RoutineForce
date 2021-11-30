import axios, {AxiosInstance} from 'axios';
import {RoutineGetDto} from '../api/dto/routineGet';

export default class API {
  private static responseStatusFailError =
    '잘못된 요청입니다. 이슈를 남겨주세요.';

  private static createAxois(): AxiosInstance {
    return axios.create({baseURL: process.env.REACT_APP_API_ADDRESS});
  }
  private static getRequest(url: string, successCB: any, failCB: any): void {
    const req = this.createAxois();
    req
      .get(url)
      .then(res => {
        if (res.status !== 200) throw this.responseStatusFailError;
        else successCB(res.data);
      })
      .catch(error => failCB(error));
  }

  static getAllRoutine(
    sucessCB: (routines: RoutineGetDto[]) => void,
    failCB: (error: any) => void,
  ) {
    this.getRequest('/routine/', sucessCB, failCB);
  }
}
