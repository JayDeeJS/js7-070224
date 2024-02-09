import { useEffect } from 'react';
import cls from './xmlHTTPRequest.module.css';
import { useState } from 'react';

const XMLHTTPRequest = () => {

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        window.addEventListener('load', () => {
            const data = "https://jsonplaceholder.typicode.com/todos";
            const request = new XMLHttpRequest();
            request.open("GET", data);
            request.setRequestHeader("Content-type", "application/json");
            request.send();

            request.addEventListener('load', () => {
                setFetchedData(JSON.parse(request.response));
                console.log('local state', fetchedData);
            })
        })
    }, [])

    return (
        <div className={cls.XMLHTTPRequestWrapper}>
            {
                fetchedData.map(( fetchedElement ) =>
                    <div key={fetchedElement.id}>
                        <p>{fetchedElement.id}</p>
                    </div>
                )
            }
        </div>
    )
};

export default XMLHTTPRequest;