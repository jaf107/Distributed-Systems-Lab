var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'KVI9u2rwIlSqfyOY',
    secretKey: 'gzGbL98ueosKUP28S9RWkxUTx1oQngaM'
});


var file = 'image/reyna.jpg'
minioClient.fPutObject('minifacebook', 'firstStory', file, function(err, objInfo) {
    if(err) {
        return console.log(err)
    }
    console.log("Success", objInfo.etag, objInfo.versionId)
})