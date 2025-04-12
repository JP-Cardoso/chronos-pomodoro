type SetItem = {
  key: string;
  value: string
}

export function setItemLocalStorage(data: SetItem): void {
  localStorage.setItem(data.key, data.value);
}

export function getItemLocalStorage(data: Omit<SetItem, 'value'>): string {
  const result = localStorage.getItem(data.key) as string;

  return result;
}