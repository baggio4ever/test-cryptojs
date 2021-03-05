import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-cryptojs';

  onClick(){
    const key = 'dddeeefff.';
    const data = 'あいうえおabc憲法審査会#~=';

    console.log('文字列:');
    console.log(data);
    console.log('===');

    var ciphertext = CryptoJS.AES.encrypt(data,key).toString();
    console.log('ciphertext:');
    console.log(ciphertext);

    console.log('---');
    var bytes = CryptoJS.AES.decrypt(ciphertext,key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log('元:');
    console.log(originalText);
  }
}
