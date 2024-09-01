import React, {useContext} from "react";
import {Alert, Button, Card, Col, Row} from 'antd';
import DashBoardHeader from "../../elements/Header";
import {Link} from 'react-router-dom';
import {UserContext} from "../../../../providers/UserProvider";
import {TicketContex} from "../../../../providers/TicketProvider";
import TicketList from "../../elements/TicketList";

const gutter = {xs: 8, sm: 16, md: 24, lg: 32}

export default function ReactiveMode() {
    const {organisation} = useContext(UserContext);
    const {tickets} = useContext(TicketContex)
    if (!organisation?.repos?.length > 0)
        return (
            <div>
                <DashBoardHeader title={"Unblock Developers Faster"} hideAlerts={true}/>
                <Alert message="No Linked Repositories" type="info" style={{marginBottom: 20}}
                       description="We can only generate suggestions based on your code repositories and optionally your Kubernetes cluster metrics."
                       showIcon/>

                {organisation?.accessRights?.gitProviders?.length > 0 ?
                    <Link to="/dashboard/settings/access"><Button type="primary">Manage Git Access</Button> </Link> :
                    <Link to="/dashboard/repos"><Button type="primary">Link your Git Provider</Button> </Link>}


            </div>

        );

    return (
        <div>
            <DashBoardHeader title={"Unblock Developers Faster"} hideAlerts={true}/>
            <Row gutter={gutter}>
                <Col span={4}>
                    <Card style={{minHeight: 0}}>
                        <p className={"secondary"}>Created tickets</p>
                        <p className={"statistic-main"}>{tickets?.filter(t => (t.creator && t.creator !== "firstmate")).length}</p>
                    </Card></Col>
                <Col span={4}>
                    <Card style={{minHeight: 0}}>
                        <p className={"secondary"}>Merged PR's</p>
                        <p className={"statistic-main"}>0</p>
                    </Card></Col>
            </Row>
            <Row gutter={gutter}>
                <Col span={24}>
                    <TicketList/>
                </Col>
            </Row>
        </div>

    );
}
