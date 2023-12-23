import * as minio from 'minio';

const client = new minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || '',
  port: 9000,
  accessKey: process.env.MINIO_ACCESS_KEY || '',
  secretKey: process.env.MINIO_SECRET_KEY || '',
  useSSL: false,
});

const bucket = 'images';

export const imageClient = new class {
  exist = async () => {
    return await client.bucketExists(bucket);
  }
}
