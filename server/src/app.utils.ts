import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createDecipheriv } from 'crypto';

export async function AESCipher(mes, pwd) {
  // random bytes added
  const iv = randomBytes(16);
  const password = pwd;
  const salt = randomBytes(128);
  // The key length is dependent on the algorithm.
  // In this case for aes256, it is 32 bytes.
  const key = (await promisify(scrypt)(password, salt, 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const textToEncrypt = mes;
  const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
  ]);
  return [encryptedText, key, iv];
}

export function AESDecipher(mes, key, iv) {
  const decipher = createDecipheriv('aes-256-ctr', key, iv);
  const decryptedText = Buffer.concat([decipher.update(mes), decipher.final()]);
  return decryptedText;
}
