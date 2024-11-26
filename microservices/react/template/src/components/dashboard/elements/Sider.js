import {Layout, Menu} from 'antd';
import Icon, {UserOutlined} from "@ant-design/icons";
import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {UserContext} from "../../../providers/UserProvider";
import {BranchesOutlined, ThunderboltOutlined} from "@ant-design/icons"

const {Sider} = Layout;


export default function MenuSider({setSideBar, view, screen}) {
    let location = useLocation()
    const [collapsed, setCollapsed] = useState(false);
    const {logout} = useContext(UserContext);
    const [current, setCurrent] = useState(location.pathname);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);


    const cloudItems = [

        {
            key: '/dashboard/proactive',
            label: <Link to="/dashboard/proactive">Proactive Mode</Link>,
            icon: <Icon component={() => (<img className="icon-img" alt="" src="/icons/idea.png"/>)}/>,
        },
        {
            key: '/dashboard/reactive',
            label: <Link to="/dashboard/reactive">Reactive Mode</Link>,
            icon: <ThunderboltOutlined/>,
        },
        {
            key: '/dashboard/repos',
            label: <Link to="/dashboard/repos">Repositories</Link>,
            icon: <BranchesOutlined/>,
        }
    ]

    const secondaryItems = [{
        key: 0,
        label: <Link to="/" onClick={logout}>Logout</Link>,
        icon: <UserOutlined/>
    },
        {
            key: "/dashboard/settings",
            label: <Link to="/dashboard/settings">Settings</Link>,
            icon: <Icon component={() => (<img className="icon-img" alt="" src="/icons/settings.png"/>)}/>
        }]


    return (
        <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0}} width={220}
               collapsible collapsed={collapsed} onCollapse={(value) => {
            setCollapsed(value);
            setSideBar(value);
        }}>
            {!collapsed &&
                <div className="gradient-1" style={{height: 80, position: "absolute", top: 0, width: "100%"}}>
                    <div className="logo">FirstMate</div>
                </div>}
            <div className="gradient-1" style={{height: "100%", paddingTop: (collapsed ? 20 : 90)}}>
                <Menu theme="dark" mode="inline" selectedKeys={[current]} items={cloudItems}/>
            </div>
            <div className="gradient-1" style={{height: 120, position: "absolute", bottom: 48, width: "100%"}}>
                <Menu selectable={false} style={{paddingTop: 10}} theme="dark" mode="inline"
                      items={secondaryItems} selectedKeys={[current]}/>

            </div>

        </Sider>


    );
}
