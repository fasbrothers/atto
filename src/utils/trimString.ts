export default function trimString(str: string, length: number): string {
  if (str === null) {
    return "";
  }
  return str.length > length ? str.substring(0, length) + "..." : str;
}
