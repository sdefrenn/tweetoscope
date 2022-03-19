import { createCipheriv, randomBytes } from 'crypto';
import { createDecipheriv } from 'crypto';

export async function AESCipher(mes) {
  // random bytes added

  //don't know what to do with the value, should it be constant ?
  const iv = randomBytes(16);
  const key = randomBytes(16).toString('hex');
  // The key length is dependent on the algorithm.
  // In this case for aes256, it is 32 bytes.

  const cipher = createCipheriv('aes-256-cbc', key, iv);
  let encryptedText = cipher.update(mes, 'utf8', 'base64');
  encryptedText += cipher.final('base64');
  return { encryptedText, iv, key };
}

export function AESDecipher(mes, key, iv) {
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  const decryptedText = decipher.update(mes, 'base64', 'utf8');
  return decryptedText + decipher.final('utf8');
}
