import {Row, Col} from 'antd';
import DashBoardHeader from "../../elements/Header";
import BaseCard from "../../elements/BaseCard";
import ClusterList from "../../elements/ClusterList";
import {EfficiencyScore} from "../../elements/MonthlyOveriew";
import {CloudStats} from "../../elements/CoudStats";

const gutter = { xs: 8, sm: 16, md: 24, lg: 32 }
export default function Overview() {

    return (
        <div>
            <DashBoardHeader title={"Overview"} />
            <Row gutter={gutter}>
                <Col span={8}>
                    <BaseCard title="" content = {<EfficiencyScore/>}/>
                </Col>
                <Col span={16}>
                    <BaseCard title="" content = {<CloudStats/>}/>
                </Col>
            </Row>
            <Row gutter={gutter}>
                <Col span={24}>
                    <BaseCard content={<ClusterList/>} menuFunction={()=> console.log("why")}/></Col>
            </Row>
        </div>

    );
}
