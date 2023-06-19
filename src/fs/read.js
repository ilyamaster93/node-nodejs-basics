import fs from 'fs'

const read = async () => {
    // Write your code here 
    let filePath = './src/fs/files/fileToRead.txt'
    if (fs.existsSync(filePath) == false) {
        throw "FS operation failed";
    }
    else {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(data);
        });
    }
};

await read();