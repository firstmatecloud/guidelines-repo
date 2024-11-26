import * as React from "react";
import { Layout } from 'antd';
import { LineChart } from "../../../chart/charts/LineChart";
import DashBoardHeader from "../../elements/Header";
import { StackedChart } from "../../../chart/charts/StackedChart";
import BaseCard from "../../elements/BaseCard";

const { Header } = Layout;

export default function Projects() {

    return (
                    <div>
                        <Header  style={{ backgroundColor: "#0E0E0E", padding: 0 }}><DashBoardHeader title={"Projects"}/></Header>
                        <BaseCard size="half" content={<LineChart height={230}/>}/>
                        <h2>Project costs</h2>
                        <BaseCard content={  <StackedChart height={230}/>}/>
                        <h2>Cost Prediction</h2>
                        <BaseCard content={<LineChart height={230}/>}/>
    </div>

    );
}
