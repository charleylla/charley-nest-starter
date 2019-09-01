import  * as crypto from 'crypto';

export class FrameUtil {
  static genMd5PasswordHex(password:string){
    const md5 = crypto.createHash("md5")  
    return md5.update(password).update('Hello World').digest("hex")
  }
}
