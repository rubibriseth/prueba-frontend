//Valida si es vacio
export function isEmpty(value: any): boolean {
  if (value == null) {
    return true;
  }
  if (value.__proto__.constructor === String) {
    return value.trim().length === 0;
  }
  if (value.__proto__.constructor === Array) {
    return value.length === 0;
  }
  if (value.__proto__.constructor === Object) {
    return Object.getOwnPropertyNames(value).length === 0;
  }
  return false;
}

//Agrega ceros a la izquierda
export function lpad(num: number, size: number): string {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

function base64ToArrayBuffer(base64: any) {
  let binaryString = window.atob(base64);
  let binaryLen = binaryString.length;
  let bytes = new Uint8Array(binaryLen);
  for (let i = 0; i < binaryLen; i++) {
     let ascii = binaryString.charCodeAt(i);
     bytes[i] = ascii;
  }
  return bytes;
}

export function downloadFileB64(base64Data:any, fileName:any, type:any): void {
  var arrBuffer = base64ToArrayBuffer(base64Data);
  var newBlob = new Blob([arrBuffer], { type: type });
  var FileSaver = require('file-saver');
  FileSaver.saveAs(newBlob, fileName);


}
