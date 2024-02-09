import cls from './tryCatch.module.css';

const TryCatch = () => {

    const url = 'https://jsonplaceholder.typicode.com/todos';

    const fetchDataFn = async () => {
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error('error resp', resp.status)
            }
            const data = await resp.json()
            console.log(resp);
        } catch (error) {
            console.error('error', error);
        } finally {
            console.warn('finally');
        }
    }
    fetchDataFn()

    return (
        <div className={cls.TryCatchWrapper}>try catch</div>
    )
};

export default TryCatch;