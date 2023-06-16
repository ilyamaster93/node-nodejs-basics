import fs from 'fs'

const rename = async () => {
    // Write your code here 
    let nameBeforeRename = 'wrongFilename.txt';
    let nameAfterRename = 'properFilename.md';
    let pathToDirectory = './src/fs/files/'
    if (fs.existsSync(pathToDirectory+nameBeforeRename)==false || fs.existsSync(pathToDirectory+nameAfterRename)) {
        throw "FS operation failed";
    }
    else {
        fs.rename(pathToDirectory+nameBeforeRename, pathToDirectory+nameAfterRename, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
        });
    }
};

await rename();