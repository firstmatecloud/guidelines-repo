import GaugeChart from 'react-gauge-chart'
import {Flex, Divider, Button, Tag} from 'antd';
import {useContext} from "react";
import {MetricContext} from "../../../providers/MetricProvider";
import {SearchOutlined} from "@ant-design/icons"
import {useNavigate} from "react-router-dom";

export function MonthlyOverviewCard() {
    const {metrics} = useContext(MetricContext);
    let v1 = 10000;
    let v2 = 10000;
    let v3 = 4560;
    if (metrics?.predictedOriginalConfigCost.value) {
        v1 = metrics?.predictedOriginalConfigCost.value?.toFixed(2);
        v2 = metrics?.predictedMonthlyCost.value?.toFixed(2);
        v3 = metrics?.predictedFirstMateOptimalCost.value?.toFixed(2);
    }
    const w1 = (v2 / v1 * 100)?.toFixed(0)?.toString() + "%"
    const w2 = (v3 / v1 * 100)?.toFixed(0)?.toString() + "%"

    return (<>
        <h2>Monthly compute costs {!metrics?.predictedOriginalConfigCost.value && "[Demo Data]"}</h2>
        <p>Using historical configuration</p>
        <div className="money-box box-bordered" style={{width: "100%"}}>
            €{v1}
        </div>
        <p>Using current configuration</p>
        <div className="money-box box-blue" style={{width: w1}}>
            €{v2}
        </div>
        <p>With all FirstMate optimisations</p>
        <div className="money-box box-green" style={{width: w2}}>
            €{v3}
        </div>
    </>)
}


export function EfficiencyScore() {
    const {metrics} = useContext(MetricContext);
    let navigate =useNavigate();
    let score = 0;
    if (metrics?.efficiencyScore?.value)
        score = metrics?.efficiencyScore?.value?.toFixed(0) / 100;

    return (<>

        <h2>Efficiency Score {!metrics?.efficiencyScore?.value && <Tag style={{marginLeft: 10}} color={"orange"}>no clusters connected</Tag>}</h2>
        <p className="secondary">{metrics?.efficiencyScore?.value? "There are a lot of optimisations possible.": "Connect at least one cluster to calculate efficiency."}</p>
        <Divider/>
        <Flex justify={"center"}>
            <GaugeChart formatTextValue={(value) => {
                return value
            }} percent={score} style={{marginTop: 20, width: 190}} id="gauge-chart1" arcsLength={[0.3, 0.4, 0.3]}
                        colors={['#2970FF', '#2970FF', '#17B26A']}/>
        </Flex>
        <Divider/>
        <Flex justify={"right"}>
            <Button icon={<SearchOutlined/>} onClick={() =>navigate("/dashboard/cloud/suggestions")}>Optimisations</Button></Flex>


    </>)
}