import axios, {AxiosInstance} from 'axios';
import {RoutineGetDto} from '../api/dto/routineGet';
import GlobalLoader from '../components/globalLoader';

export default class API {
  private static responseStatusFailError =
    '잘못된 요청입니다. 이슈를 남겨주세요.';

  static getAllRoutine(
    sucessCB: (routines: RoutineGetDto[]) => void,
    failCB: (error: any) => void,
  ) {
    this.getRequest('/routine/', sucessCB, failCB);
  }

  private static getRequest(url: string, successCB: any, failCB: any): void {
    GlobalLoader.start();
    const req = this.createAxois();
    req
      .get(url)
      .then(res => {
        //GlobalLoader.stop();
        if (res.status !== 200) throw this.responseStatusFailError;
        else successCB(res.data);
      })
      .catch(error => {
        GlobalLoader.stop();
        failCB(error);
      });
  }
  private static createAxois(): AxiosInstance {
    return axios.create({baseURL: process.env.REACT_APP_API_ADDRESS});
  }

  static getFromToDate(dateArrayStr: string) {
    const splited = dateArrayStr.split(',');
    let fromDate: Date | undefined = undefined;
    let toDate: Date | undefined = undefined;
    try {
      const fromDateStr = splited[0];
      const toDateStr = splited[splited.length - 1];
      fromDate = new Date(fromDateStr);
      toDate = new Date(toDateStr);
    } catch {
      fromDate = undefined;
      toDate = undefined;
    }
    return {
      from: fromDate,
      to: toDate,
    };
  }
}
