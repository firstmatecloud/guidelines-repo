import {useContext} from "react";
import {Row, Col} from 'antd';
import DashBoardHeader from "../../elements/Header";
import {StackedChart} from "../../../chart/charts/StackedChart";
import {YearChart} from "../../../chart/charts/YearChart";
import BaseCard from "../../elements/BaseCard";
import {EfficiencyScore, MonthlyOverviewCard} from "../../elements/MonthlyOveriew";
import {MetricContext} from "../../../../providers/MetricProvider";

const gutter = { xs: 8, sm: 16, md: 24, lg: 32 }
export default function Overview() {
    const {metrics} = useContext(MetricContext);

    return (
        <div>
            <DashBoardHeader title={"Overview"} />
            <Row gutter={gutter}>
                <Col span={8}>
                    <BaseCard title="" content = {<EfficiencyScore/>}/>
                </Col>
                <Col span={16}>
                    <BaseCard title="" content = {<MonthlyOverviewCard/>}/>
                </Col>
            </Row>


            {metrics?.costPerMonth && <Row gutter={gutter}>
                <Col span={24}>
                    <h2>Cost Overview</h2>
                    <BaseCard content={<YearChart height={230}/>}/></Col>
            </Row>}
            <Row gutter={gutter}>
                <Col span={24}>
                <h2>Project costs</h2>
                    <BaseCard content={<StackedChart height={230}/>}/></Col>
            </Row>
        </div>

    );
}
