import fs from 'fs'

const list = async () => {
    // Write your code here 
    let dirPath = './src/fs/files'
    if (fs.existsSync(dirPath) == false) {
        throw "FS operation failed";
    }
    else {
        function result (folder) {
            return new Promise(function(resolve, reject) {
                fs.readdir(folder, function(err, filenames){
                    if (err) 
                        reject(err); 
                    else 
                        resolve(filenames);
                });
            });
        };

        result(dirPath)
            .then((files) => console.log(files))
            .catch((error) => console.log(error));
    }
};

await list();