import {useContext} from "react";
import {Col, Row} from 'antd';
import DashBoardHeader from "../../elements/Header";
import SavingsCard from "../../elements/SavingsCard";
import {ClusterContext} from "../../../../providers/ClusterProviders";

const gutter = {xs: 8, sm: 16, md: 24, lg: 32}

export default function Savings() {
    const {clusters} = useContext(ClusterContext)
    const total = clusters.reduce((partialSum, cluster) => {
        if (!cluster.features) return 0; else return partialSum + cluster.features?.length
    }, 0)
    if (total === 0)
        return <div>
            <DashBoardHeader title={"Optimize your cloud setup"}/>
            <Row gutter={gutter}>
                <Col span={24}>
                    <SavingsCard/></Col>
            </Row>
        </div>

    return (
        <div>
            <DashBoardHeader title={"Optimize your cloud setup"}/>
            <Row gutter={gutter}>
                <Col span={24}>
                    <SavingsCard/></Col>
            </Row>
        </div>

    );
}
