

//  This generates a QR Code and saves in C:\Users\AJ Shea\qrCode (current folder)

//  Created audio file using "Voice Memo" on iphone, then saved into Google Drive

//  Add audio file to Line 15 between " "

//  Run with "npm start"


var QRCode = require("qrcode");

QRCode.toFile(
  "testQrCode.png",          //     This is the name of the generated .png file
  " ",                       //     Google drive audio file link goes here
  function (err) {
    if (err) throw err;
    console.log("done");    //      Success
  }
);
