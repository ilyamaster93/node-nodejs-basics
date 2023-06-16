import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    // Write your code here 
    const realFilePath = './src/hash/files/fileToCalculateHashFor.txt';

    function calculateSHA256(filePath) {
        return new Promise((resolve, reject) => {
            const hash = crypto.createHash('sha256');
            const stream = fs.createReadStream(filePath);

            stream.on('data', (data) => {
            hash.update(data);
            });

            stream.on('end', () => {
            const sha256Hash = hash.digest('hex');
            resolve(sha256Hash);
            });

            stream.on('error', (err) => {
            reject(err);
            });
        });
    }
      
    calculateSHA256(realFilePath)
        .then((hash) => {
            console.log('SHA256 hash:', hash);
        })
        .catch((err) => {
            console.error('Error calculating SHA256 hash:', err);
        });
};

await calculateHash();