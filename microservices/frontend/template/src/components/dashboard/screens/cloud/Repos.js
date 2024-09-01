import {useContext, useState} from "react";
import {Alert, Button, Col, Row} from 'antd';
import DashBoardHeader from "../../elements/Header";
import RepoList from "../../elements/RepoList";
import {UserContext} from "../../../../providers/UserProvider";
import * as React from "react";
import AzureDevModal from "../../../settings/modals/AzureDevModal";

const gutter = {xs: 8, sm: 16, md: 24, lg: 32}

export default function Repos() {
    const {organisation} = useContext(UserContext);
    const [azuredevModal , setAzuredevModal] = useState(false);

    if (organisation?.accessRights?.gitProviders?.length > 0)
        return (
            <div>
                <DashBoardHeader title={"Linked Repositories"} hideAlerts={true}
                                 buttons={[<Button type="primary" iconPosition="end" href="/dashboard/settings/users">Manage Git Providers</Button>]}/>
                <Row gutter={gutter}>
                    <Col span={24}>
                        <RepoList/></Col>
                </Row>
            </div>

        );

    return (
        <div>
            <DashBoardHeader title={"Linked Repositories"} hideAlerts={true}/>
            <Alert message="No Linked Repositories" type="info" style={{marginBottom: 20}}
                   description="Connect your infra repo's to allow automated PR suggestions." showIcon/>
            <h2>Choose your source control integration</h2>
            <Row gutter={gutter} style={{marginTop: 20}}>
                <Col span={6}>
                    <Button className="git-install" href={window._env_.GITHUB_REDIRECT_URL}>
                        <Row
                            type="flex"
                            justify="center"
                            align="middle"
                            style={{ minHeight: '100%' }}
                        >
                            <Col>
                                <img alt="github" src="/icons/github.png" width={100}/>
                            </Col>
                        </Row>

                    </Button>
                </Col>
                <Col span={6}>
                    <Button className="git-install"
                            href={window._env_.BITBUCKET_REDIRECT_URL}>
                        <Row
                            type="flex"
                            justify="center"
                            align="middle"
                            style={{ minHeight: '100%' }}
                        >
                            <Col>
                                <img alt="bitbucket" src="/icons/bitbucket.png" width={160}/>
                            </Col>
                        </Row>

                    </Button>
                </Col>
                <Col span={6}>
                    <Button className="git-install" onClick={() => setAzuredevModal(true)}  >
                        <Row
                            type="flex"
                            justify="center"
                            align="middle"
                            style={{minHeight: '100%'}}
                        >
                            <Col>
                                <img alt="azuredev" src="/icons/azure-devops.png" width={130}/>
                            </Col>
                        </Row>
                    </Button>
                    <AzureDevModal open={azuredevModal} onClose={() => setAzuredevModal(false)}  />
                </Col>
            </Row>

        </div>

    );


}
