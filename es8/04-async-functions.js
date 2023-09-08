const fn_async = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async'), 2000)
            : reject(new Error('Error!'));
    })
}

const anotherfn = async () => {
    const something = await fn_async();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherfn();
console.log('After')