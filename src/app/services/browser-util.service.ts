import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserUtilService {
  constructor() {}

  browserStorageUtil = (storage: any) => {
    const setEntry = (key: string, entry: any): any => {
      storage.setItem(key, JSON.stringify(entry));
    };
    const updateEntry = (key: string, entry: any) => {
      const allEntries = getEntry(key);
      allEntries[entry] = true;
      storage.setItem(key, JSON.stringify(allEntries));
    };
    const getEntry = (key: string) => {
      const entry = storage.getItem(key);
      if (!entry) return {};
      return JSON.parse(entry);
    };
    const clearEntry = (key: string) => {
      storage.removeItem(key);
    };
    const resetStorage = (data: any = {}) => {
      storage.clear();
      Object.keys(data).forEach((key) => {
        setEntry(key, data[key]);
      });
    };

    return {
      setEntry,
      updateEntry,
      getEntry,
      clearEntry,
      resetStorage,
    };
  };
  localStorageUtil = this.browserStorageUtil(localStorage);
  sessionStorageUtil = this.browserStorageUtil(sessionStorage);
}
