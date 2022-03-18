/**
 * 获取本地存储的token
 * @param  {boolean=false} needPrefix - 是否须要Bearer前缀
 */
export function getToken(needPrefix: boolean = false) {
  const token = sessionStorage.getItem('token') || null;

  if (needPrefix) {
    return `Bearer ${token}`;
  }

  return token;
}

/**
 * 获取本地存储的corpId
 */
export function getCorpId() {
  const corpId = sessionStorage.getItem('corpId') || null;

  return corpId;
}

/**
 * 获取本地存储的userId
 */
export function getUserId() {
  const userId = sessionStorage.getItem('userId') || null;

  return userId;
}

/**
 * 获取本地存储的userId
 */
export function getAccountId() {
  const userId = sessionStorage.getItem('accountId') || null;

  return userId;
}

/**
 * 设置用户信息到本地存储
 * @param  {BasicObject<string>} obj - 要存储的数据的键值对象
 */
export function saveInfoToStorage(obj: BasicObject<string>) {
  Object.keys(obj).forEach((key) => {
    sessionStorage.setItem(key, obj[key]);
  });
}
