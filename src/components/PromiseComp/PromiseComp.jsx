import cls from './promise.module.css';

const PromiseComp = () => {

    const arr = ['done', 'error', 'finally'];

    const req = new Promise((resolve, reject) => {
        setTimeout(() => {
            const request = true;
            if (request) {
                resolve('resolved', '1')
            } else {
                reject('failed', '2')
            }
        }, 1500);
    })

    req.then(() => {
        console.log(arr[0]);
    })
    .catch(() => console.error(arr[1]))
    .finally(() => console.warn(arr[2]))

    return (
        <div className={cls.promiseWrapper}></div>
    )
};

export default PromiseComp;