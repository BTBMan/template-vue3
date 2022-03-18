import { message } from 'ant-design-vue';

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

export const showSuccess = (selfMessage?: string) => {
  const msg = selfMessage ?? '成功！';
  message.success(msg);
};

export const showError = (error: any, selfMessage?: string) => {
  const msg = error?.msg ?? error?.message ?? selfMessage ?? '失败！';
  message.error(msg);
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
 * @param  {string} dataurl
 */
export const base64ToBlob = (dataurl: string) => {
  const arr = dataurl.split(',');
  const subArr = arr[1].substring(0, arr[1].length - 2);
  const mime = arr?.[0]?.match?.(/:(.*?);/)?.[1];
  const bstr = atob(subArr);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return URL.createObjectURL(
    new Blob([u8arr], {
      type: mime,
    }),
  );
};

/**
 * base64转blob
 * @param  {string} base64
 * @param  {any} onsuccess?
 * @param  {any} onerror?
 */
export const base64ToBlob2 = (
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
