const parseArgs = () => {
    // Write your code here
    let myArgs = process.argv
    let listOfArgs = []
    for(let i = 0; i < myArgs.length; i=i+2) {
        listOfArgs.push(` ${myArgs[i].substring(2)} is ${myArgs[i+1]}`)
    }
    console.log('listOfArgs', listOfArgs.toString())
};

parseArgs();