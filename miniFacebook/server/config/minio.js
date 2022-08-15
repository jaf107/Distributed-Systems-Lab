const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY_ADMIN,
    secretKey: process.env.MINIO_SECRET_KEY_ADMIN
})

module.exports = minioClient;
// export default minioClient;