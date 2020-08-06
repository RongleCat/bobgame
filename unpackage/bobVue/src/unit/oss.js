var server = "http://fmcatamr.oss-cn-hangzhou.aliyuncs.com"; //申请到的阿里云OSS地址
// let server = 'http://192.168.2.225:3000/upload'
var mp3server = 'http://fmcatmp3.oss-cn-hangzhou.aliyuncs.com'
var OSSAccessKeyId = '**********'; //申请到的阿里云AccessKeyId和AccessKeySecret
var AccessKeySecret = '**********'; //需要用自己申请的进行替换
/*
 * 阿里云参数设置，用于计算签名signature
 */
var policyText = {
  "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
  "conditions": [
    ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
  ]
};
var policyBase64 = window.Base64.encode(JSON.stringify(policyText));
var message = policyBase64;
var bytes = Crypto.HMAC(Crypto.SHA1, message, AccessKeySecret, {
  asBytes: true
});
var signature = Crypto.util.bytesToBase64(bytes);

export default (path, time) => {
  let filename = guid() + '_' + time
  return new Promise((resolve, reject) => {
    var task = window.plus.uploader.createUpload(server, {
        method: "POST"
      },
      function (t, status) { //上传完成
        if (status == 200) {
          resolve({
            url: mp3server + '/' + filename + '.mp3',
            filename: filename + '.mp3',
            sourcename: filename
          })
        } else {
          reject('上传失败')
        }
      }
    );

    //按照之前说明的参数类型，按顺序添加参数
    // console.log(policyBase64,OSSAccessKeyId,signature);
    task.addData("key", filename + '.amr');
    task.addData("policy", policyBase64)
    task.addData("OSSAccessKeyId", OSSAccessKeyId)
    task.addData("success_action_status", "200")
    task.addData("signature", signature)
    task.addFile(path, { key: 'file' })
    task.start();
  })
}

function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() +  S4() + S4());
}
