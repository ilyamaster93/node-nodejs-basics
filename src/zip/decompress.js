import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const decompress = async (archivePath, outputPath) => {
    // Write your code here 
    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(outputPath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
    console.log('File decompression complete!');
    });

    writeStream.on('error', (error) => {
    console.error('An error occurred during decompression:', error);
    });
};

await decompress('./src/zip/files/archive.gz', './src/zip/files/fileToCompress.txt');