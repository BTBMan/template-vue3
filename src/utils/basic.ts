/**
 * 解析formString类型的字符串为对象
 * @param  {string} formString - formString格式的字符串 ep: `a=1;b=2`
 * @returns BasicObject ep: `{a:1,b:2}`
 */
export function parseFormString(formString: string): BasicObject<string> {
  const formArr: Array<string> = formString.split(/\s*;\s*/);

  const formObj = formArr.reduce((init: BasicObject<string>, item) => {
    const [key, value] = item.split('=');

    init[key] = value;

    return init;
  }, {});

  return formObj;
}

/**
 * 简易深拷贝
 * @param  {any} source - 要拷贝的数据源
 */
export const deepCopy = (source: any): any => {
  const target: any = Array.isArray(source) ? [] : {};

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = deepCopy(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * 随机字符
 */
export const randomKey = () => {
  return (
    (new Date().valueOf() + Math.ceil(Math.random() * 10000)).toString() +
    Math.random().toString(16).substring(2, 15)
  );
};

/**
 * 判断是否是函数 是则执行
 * @param  {Function|undefined} method
 * @param  {any} ...arg
 */
export const handleMethod = (method: Function | undefined, ...arg: any) => {
  return typeof method === 'function' ? method(...arg) : undefined;
};

/**
 * base64转blob
 * @param  {string} base64
 * @param  {any} onsuccess?
 * @param  {any} onerror?
 */
export const base64ToBlob = (
  base64: string,
  onsuccess?: any,
  onerror?: any,
) => {
  const img = new Image();

  img.onerror = onerror;

  img.onload = function onload() {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blobData: any) => {
      const blobUrl = URL.createObjectURL(blobData);

      onsuccess(blobUrl);
    });
  };

  img.src = base64;
};

type StorageType = 'sessionStorage' | 'localStorage';

/**
 * 设置用户信息到本地存储
 * @param  {Record<string, any>} obj - 要存储的数据的键值对象
 * @param  {StorageType} storageType - 要存储的storage
 */
export function saveInfoToStorage(
  obj: Record<string, any>,
  storageType: StorageType = 'sessionStorage',
) {
  Object.keys(obj).forEach((key) => {
    window[storageType].setItem(key, obj[key]);
  });
}

/**
 * 从本地存储里获取值
 * @param  {string | string[]} key - 要获取的key
 * @param  {StorageType} storageType - 要存储的storage
 * @returns string | string[]
 */
export function getFromStorage(
  key: string,
  storageType?: StorageType,
): string | null;
export function getFromStorage(
  key: string[],
  storageType?: StorageType,
): (string | null)[];
export function getFromStorage(
  key: string | string[],
  storageType: StorageType = 'sessionStorage',
) {
  if (typeof key === 'string') {
    return window[storageType].getItem(key) || null;
  }

  return key.map((k) => {
    return window[storageType].getItem(k) || null;
  });
}
