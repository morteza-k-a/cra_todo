export const SaveTolocalStorage: (
  key: string,
  data: object | Array<any>
) => void = (key: string, data: object) => {
  const StringData: string = JSON.stringify(data);
  localStorage.setItem(key, StringData);
};
export const ReadFromlocalStorage = (key: string) => {
  const StringData: string | null = localStorage.getItem(key);
  const objectData = StringData ? JSON.parse(StringData) : null;
  return objectData;
};
