import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import {Dashboard} from "./components/dashboard";


export default function Router() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard/*" element={<Dashboard/>}/>
                <Route path="/*" element={<Navigate to="/dashboard"/>}/>
            </Routes>
        </BrowserRouter>
    );
}