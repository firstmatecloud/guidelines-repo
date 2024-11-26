import {Button, Card, Col, Modal, Row, Space, Tag} from "antd";
import {FallOutlined} from "@ant-design/icons";
import Typewriter from "typewriter-effect";
import {BarChart} from "../../../chart/charts/YearChart";
import {useContext} from "react";
import {FeatureContex} from "../../../../providers/FeatureProvider";

export default function SavingsModal({record, onCancel}) {

    const {toggleFeature} = useContext(FeatureContex)
    if (!record)
        return

    const data = {
        labels: ["Now", "With this feature"],
        datasets: [
            {
                label: "Current",
                data: [100, null],
                pointRadius: 0,
                pointHoverRadius: 2,
                barThickness: 45,
                borderRadius: 10,
                backgroundColor: "#2970FF",
                borderColor: "#2970FF", //line color
                lineTension: 0.6,
                fill: true, // this line allow us to use background gradient

            },
            {
                label: "Optimal cost using these features",
                skipNull: true,
                data: [null, 60],
                pointRadius: 0,
                pointHoverRadius: 2,
                borderRadius: 10,
                barThickness: 45,
                backgroundColor: "#17B26A",
                borderColor: "#47CD89", //line color
                lineTension: 0.6,
                fill: true, // this line allow us to use background gradient

            },
            {
                label: "Current",
                skipNull: true,
                data: [null, 100],
                pointRadius: 0,
                borderRadius: 10,
                barThickness: 45,
                pointHoverRadius: 2,
                backgroundColor: "#333741", //background gradient color
                borderColor: "#333741", //line color
                lineTension: 0.6,
                fill: true, // this line allow us to use background gradient

            }


        ]
    }

    return (
        <Modal centered open={record} className={"with-background"}
               onCancel={onCancel} width={"1200px"} footer={[]}>
            <div className="modal-background"></div>
            <div className="modal-icon"><FallOutlined/></div>

            <div className="modal-switch">
                {!record.config.enabled ?
                    <>
                        <Tag color="orange">Paid feature</Tag>
                        <Button type="primary" onClick={() => toggleFeature(record)}>Switch On</Button>
                    </> :
                    <>
                        <Tag color="green">Running</Tag>
                        <Button type="primary" onClick={()=> toggleFeature(record)}>Switch Off</Button>
                    </>
                }
            </div>


            <h2 style={{float: "left", marginRight: 20, marginTop: -5}}>{record.feature.name}</h2>
            <Tag color="green">Fully Automated Feature</Tag>
            <Card style={{minHeight: 130, marginBottom: 0}}>
                <div style={{
                    backgroundColor: "blue",
                    height: 100,
                    width: 100,
                    position: "absolute",
                    borderRadius: 50
                }}></div>
                <Space direction="vertical" style={{paddingLeft: 120}}>
                    <p className="secondary">What could this mean for me?</p>
                    <Typewriter
                        options={{
                            strings: record.config.agent_analysis,
                            autoStart: true,
                            delay: 25,
                        }}
                    />

                </Space>
            </Card>
            <Row gutter={20}>
                <Col span={8}>
                    <Card style={{minHeight: 255, width: "100%", float: "left", textAlign: "center"}}>
                        <p className="savings">Save €{record.config.savings_euro} p.m.</p>
                        <BarChart data={data} hideLegend={true}/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={{minHeight: 255, width: "100%", float: "left"}}>
                        <h2>How?</h2>
                        <p className="secondary" style={{marginBottom: 10}}>We make sure you can enjoy your savings
                            without risks.</p>
                        <p style={{lineHeight: 1.3}}>{record.feature.how}</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <div style={{paddingTop: 15}}>
                        <iframe title="video" width="100%" height="255" style={{borderRadius: 10}}
                                src="https://www.youtube.com/embed/mupFaz6acxs">
                        </iframe>
                    </div>
                </Col>
            </Row>
        </Modal>)

}