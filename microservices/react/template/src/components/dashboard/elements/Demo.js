import * as React from "react";
import {Row, Col} from 'antd';
import {LineChart} from "../../chart/charts/LineChart";
import BaseCard from "./BaseCard";
import DashBoardHeader from "./Header";

const gutter = { xs: 8, sm: 16, md: 24, lg: 32 }
export default function Demo() {
    return (
        <div>
                 <DashBoardHeader title={"Overview"} demo={true}/>
            <Row gutter={gutter}>
                <Col span={24}> <BaseCard title="Cloud costs" content={<LineChart height={210}/>}/></Col>
            </Row>
            <Row gutter={gutter}>
                <Col span={24}>
                <h2>Cost Prediction</h2>
                <BaseCard content={<LineChart height={230}/>}/>
                </Col>
            </Row>
        </div>

    );
}
