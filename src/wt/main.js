import { Worker } from 'worker_threads';
import { cpus } from 'os';

const INITIAL_NUMBER = 10;

const performCalculations = async () => {
    // Write your code here
    const calculateNFibonacci = (workerData) => new Promise((resolve) => {
        const worker = new Worker('./src/wt/worker.js', { workerData });

        worker.on('message', (data) => resolve({status: 'resolved', data}));
        worker.on('error', () => resolve({status: 'error', data: null}));
    });

    const calculation = new Array(cpus().length).fill(null).map((value, index) => calculateNFibonacci(INITIAL_NUMBER + index));
    const data = await Promise.all(calculation);

    console.log(data)
};

await performCalculations();