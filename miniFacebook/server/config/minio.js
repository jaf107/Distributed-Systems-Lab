const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: '192.168.0.142',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
})

module.exports = minioClient;
// export default minioClient;