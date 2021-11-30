export default class DateUtil {
  static toMMddWithDot(date: Date): string {
    const month = date.getMonth() + 1; // Date.getMonth 는 0부터 시작함 (ㅅㅂ...)
    const day = date.getDate();

    return `${month}.${day}`;
  }
}
