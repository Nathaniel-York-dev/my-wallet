import {IStorageConfigure} from "../interfaces/storage-configure.interface";

export function saveInStorage(configure: IStorageConfigure) {
  return function(target: any, key: string){
    let _val = target[key];
    const getter = () => {
      if (configure.priority === 'storage') {
        return JSON.parse(configure.storage.getItem(key)+'') || _val;
      }
      return _val || configure.storage.getItem(key);
    };
    const setter = (val: any) => {
      configure.storage.setItem(key, JSON.stringify(val));
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
