export default function changeLanguage(
  str1: string,
  str2: string,
  language: string
): string {
  return language === "uz" ? str1 : str2;
}
