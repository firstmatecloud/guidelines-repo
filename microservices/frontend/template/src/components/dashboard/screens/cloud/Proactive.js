import React, {useContext} from "react";
import {Alert, Button, Card, Col, Row} from 'antd';
import DashBoardHeader from "../../elements/Header";
import SuggestionList from "../../elements/SuggestionList";
import {Link} from 'react-router-dom';
import {UserContext} from "../../../../providers/UserProvider";
import FeatureProvider from "../../../../providers/FeatureProvider";

const gutter = {xs: 8, sm: 16, md: 24, lg: 32}

export default function Proactive() {
    const {organisation} = useContext(UserContext);
    if (!organisation?.repos?.length > 0)
        return (
            <div>
                <DashBoardHeader title={"From Cloud Engineer to Superhuman"} hideAlerts={true}/>
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
            <FeatureProvider>
                <DashBoardHeader title={"From Cloud Engineer to Superhuman"} hideAlerts={true}/>
                <Row gutter={gutter}>
                    <Col span={4}>
                        <Card style={{minHeight: 0}}>
                            <p className={"secondary"}>Linked repositories</p>
                            <p className={"statistic-main"}>{organisation.repos.length}</p>
                        </Card></Col>
                    <Col span={4}>
                        <Card style={{minHeight: 0}}>
                            <p className={"secondary"}>Generated Suggestions</p>
                            <p className={"statistic-main"}>0</p>
                        </Card></Col>
                    <Col span={4}>
                        <Card style={{minHeight: 0}}>
                            <p className={"secondary"}>Merged Suggestions</p>
                            <p className={"statistic-main"}>0</p>
                        </Card></Col>
                </Row>

                <Row gutter={gutter}>
                    <Col span={24}>
                        <SuggestionList/>
                    </Col>
                </Row>
            </FeatureProvider>
        </div>

    );
}
