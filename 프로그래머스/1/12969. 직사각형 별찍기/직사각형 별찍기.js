process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const inputs = data.split(" ");
    const n = Number(inputs[0]);
    const a = Number(inputs[1]);
    for (let i = 0; i < a; i++) {
        console.log('*'.repeat(n));
    }
});