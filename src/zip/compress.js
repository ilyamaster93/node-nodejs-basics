import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib'

const compress = async (inputPath, archivePath) => {
    // Write your code here
    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(archivePath);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
    console.log('File compression complete!');
    });

    writeStream.on('error', (error) => {
    console.error('An error occurred during compression:', error);
    });
};

await compress('./src/zip/files/fileToCompress.txt', './src/zip/files/archive.gz');