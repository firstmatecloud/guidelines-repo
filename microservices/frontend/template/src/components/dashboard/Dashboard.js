import * as React from "react";
import {Layout, ConfigProvider} from 'antd';
import {Route, Routes} from "react-router-dom";


const {Content} = Layout;

export default function Dashboard() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Inter"
                }
            }}>
            <Layout hasSider>
                <Content style={{
                    transition: "margin 300ms",
                    minHeight: "100vh",
                    padding: "32px 55px",
                    marginLeft:  200
                }}>
                    <Routes>
                        <Route path="/" element={<div>EXAMPLE</div>}/>
                    </Routes>
                </Content>
            </Layout>
        </ConfigProvider>

    );
}
