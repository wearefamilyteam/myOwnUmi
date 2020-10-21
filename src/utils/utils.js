import { JSEncrypt } from 'jsencrypt';

// 使用rsa加密解密
export function encryptFunc(data) {
  const encrypt = new JSEncrypt();
  return encrypt.encrypt(data);
}

export function decryptFunc(data) {
  const decrypt = new JSEncrypt();
  return decrypt.decrypt(data);
}
