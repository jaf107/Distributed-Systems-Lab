const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: 'storyobjectdb',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_DEFAULT_ACCESS_KEY,
    secretKey: process.env.MINIO_DEFAULT_ACCESS_KEY
})

module.exports = minioClient;
// export default minioClient;