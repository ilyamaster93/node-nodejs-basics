import fs from 'fs'

const create = async () => {
    // Write your code here 
    if (fs.existsSync("./src/fs/files/fresh.txt")) {
        throw "FS operation failed";
    }
    else {
        fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young", function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
    }
};

await create();