import { useState } from 'react';
import cls from './fetch.module.css';
import { useEffect } from 'react';

const Fetch = () => {
    
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setFetchedData(json))
        .catch((error) => console.error(error))
        .finally(() => console.warn('finally'))
    }, [])

    return (
        <div className={cls.fetchWrapper}>
            {
                fetchedData.map(( fetchedElement ) =>
                    <div key={fetchedElement.id}>
                        <p>{fetchedElement.title}</p>
                    </div>
                )
            }
        </div>
    )
};

export default Fetch;