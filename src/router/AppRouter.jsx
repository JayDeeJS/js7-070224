import { Route, Routes } from "react-router-dom";
import { routes } from "./RouteConfig";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(({ id, path, element }) =>
                    <Route key={id} path={path} element={element} />
                )
            }
        </Routes>
    )
};

export default AppRouter;