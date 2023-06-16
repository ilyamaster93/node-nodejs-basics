const parseEnv = () => {
    // Write your code here 
    let keysAndValues = Object.entries(process.env).
        filter(([key]) => (key.startsWith('RSS_'))).
        map(([key, value]) => (` ${key}=${value}`)).toString()
    console.log(keysAndValues)
};

parseEnv();