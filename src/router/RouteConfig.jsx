import MainPage from '../pages/MainPage/MainPage';
import XMLHTTPRequestPage from '../pages/XMLHTTPRequestPage/XMLHTTPRequestPage';
import FetchPage from '../pages/FetchPage/FetchPage';
import PromisePage from '../pages/PromisePage/PromisePage';
import TryCatchPage from '../pages/TryCatchPage/TryCatchPage';

export const PATHS = {
    MAIN: '/',
    XMLHTTPREQUEST: 'xmlhttprequest',
    FETCH: 'fetch',
    PROMISE: 'promise',
    TRYCATCH: 'trycatch',
};

export const routes = [
    {
        id: 1,
        path: PATHS.MAIN,
        element: <MainPage/>
    },
    {
        id: 2,
        path: PATHS.XMLHTTPREQUEST,
        element: <XMLHTTPRequestPage/>
    },
    {
        id: 3,
        path: PATHS.FETCH,
        element: <FetchPage/>
    },
    {
        id: 4,
        path: PATHS.PROMISE,
        element: <PromisePage/>
    },
    {
        id: 5,
        path: PATHS.TRYCATCH,
        element: <TryCatchPage/>
    },
];