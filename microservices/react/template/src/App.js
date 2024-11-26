import * as React from "react";
import Router from "./Router";
import UserProvider from "./providers/UserProvider";
import { ConfigProvider, theme } from 'antd';

function App() {
    return (
        <ConfigProvider
            theme={{
                // 1. Use dark algorithm
                algorithm: theme.darkAlgorithm,

                // 2. Combine dark algorithm and compact algorithm
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
            }}
        >
            <UserProvider>
                    <Router />>
            </UserProvider>
        </ConfigProvider>
    );
}


export default App;
