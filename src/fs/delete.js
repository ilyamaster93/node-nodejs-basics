import fs from 'fs'

const remove = async () => {
    // Write your code here 
    let filePath = './src/fs/files/fileToRemove.txt'
    if (fs.existsSync(filePath) == false) {
        throw "FS operation failed";
    }
    else {
        fs.unlink(filePath, (err) => {
            if (err) throw err;
        });
    }
};

await remove();