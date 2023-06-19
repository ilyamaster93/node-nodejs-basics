import fs from 'fs'

const copy = async () => {
    // Write your code here 
    let src = './src/fs/files';
    let dest = './src/fs/files_copy';
    if (fs.existsSync(dest) || fs.existsSync(src)==false) {
        throw "FS operation failed";
    }
    else {
        fs.cpSync(src, dest, {recursive: true});
    }
};

await copy();
