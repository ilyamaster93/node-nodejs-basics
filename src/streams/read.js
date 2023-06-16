import fs from 'fs';

const read = async () => {
    // Write your code here 
    let filePath = './src/streams/files/fileToRead.txt'
    const stream = fs.createReadStream(filePath);
    stream.pipe(process.stdout);
};

await read();