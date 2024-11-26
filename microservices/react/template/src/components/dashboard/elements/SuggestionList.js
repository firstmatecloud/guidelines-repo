import {Button, Card, Modal, Space, Tag, Collapse, Row, Col} from 'antd';
import {FallOutlined} from "@ant-design/icons";
import {useContext, useState} from "react";

import SuggestionProvider from "../../../providers/SuggestionProvider";
import {BranchesOutlined} from "@ant-design/icons"
import {FeatureContex} from "../../../providers/FeatureProvider";

function OptimisationModal({record, onCancel}) {
    if (!record)
        return
    let items = [];

    record.prs.forEach(change => {
        items.push(
            {
                key: change.name,
                label: <div style={{width: "100%"}}>
                    <div style={{position: "absolute", top: -30, left: 10}}><Tag icon={<BranchesOutlined/>}
                                                                                className="open">{change.status}</Tag>
                       </div>
                    <div style={{position: "absolute", top: -30, right: 10}}>
                        <Button target="_blank" href={change.link}>View in git</Button></div>
                    <div style={{marginTop: -15}}>Pull Request <Tag>{change.name}</Tag> on <Tag
                        className="repo">{change.repo}</Tag></div>

                </div>,
                children: <div>{change.files_changed} files changed. <a  rel="noreferrer" target="_blank" href={change.link}>View changes in git.</a><br/> <br/>{change.description}
                </div>,
            });
    });


    return (
        <Modal centered open={record} className={"with-background"}
               onCancel={onCancel} width={800} footer={[]}>
            <div className="modal-background"></div>
            <Space style={{position: "absolute", top: 85, right: 30}}></Space>
            <div className="modal-icon"><FallOutlined/></div>
            <h2 style={{float: "left", marginRight: 20, marginTop: -5}}>{record.title}</h2><Tag
            color="green">Suggestion</Tag>
            <Card style={{ marginBottom: 0, overflow: "auto", minHeight: 500}}>
                <p>{record.description}</p>
                <Collapse
                    style={{marginTop: 50}}
                    defaultActiveKey={['1']}
                    items={items}
                />
            </Card>
        </Modal>)

}

export default function SuggestionList() {
    const {features} = useContext(FeatureContex)
    const [record, setRecord] = useState(null);

    const gutter = {xs: 8, sm: 16, md: 24, lg: 32}

    return (
        <SuggestionProvider>
            <OptimisationModal record={record} onCancel={() => setRecord(null)}/>
            <Row gutter={gutter}>
                {features.map(s => <Col span={8}><Suggestion item={s}  onClick={() => setRecord(s)}/></Col>)}
            </Row>

        </SuggestionProvider>

    );
}

function Suggestion({item, onClick}) {
    return <Card style={{
        minHeight: 220,
        marginBottom: 20,
        backgroundImage: "linear-gradient(45deg,#161850,  #455DFF)",
        borderColor: "#161850"
    }}>
        <Tag className={"tag-rounded"} color={"green"}>Running</Tag>
        <h3 style={{marginTop: 10}}>{item.title}</h3>
        <p style={{color: "#bbb"}}>{item.description}</p>
    </Card>
}



