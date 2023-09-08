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

//////////////// TEST 2

const fn_async_2 = () => {
    setTimeout(() => console.log('TEST TIMEOUT'), 2000)
    // console.log('TEST TIMEOUT')
}

const anotherfn_2 = async() => {
    await fn_async_2();
}

console.log('Before');
fn_async_2();
console.log('After')