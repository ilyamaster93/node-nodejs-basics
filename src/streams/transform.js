import { Transform, pipeline } from 'stream';

const transform = async () => {

const readable = process.stdin;
const writable = process.stdout;

const reverseStream = new Transform({
        transform(chunk) {
            const stringifiedChunk = chunk.toString().trim();
            const reversedChunk = stringifiedChunk.split('').reverse().join('');
            this.push(reversedChunk + '\n');
        }
    });

    pipeline(
        readable,
        reverseStream,
        writable,
        err => {
            console.log(`Error: ${err}`);
        }
    );
};

await transform();