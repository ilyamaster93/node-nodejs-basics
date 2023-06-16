import { fork } from 'child_process';

const PATH = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = fork(PATH, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
