import {Button, Card, Modal, Space, Tag, Collapse, Row, Col} from 'antd';
import {FallOutlined, ExpandAltOutlined} from "@ant-design/icons";
import {useContext, useState} from "react";

import SuggestionProvider from "../../../providers/SuggestionProvider";
import {BranchesOutlined} from "@ant-design/icons"
import {TicketContex} from "../../../providers/TicketProvider";

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
                children: <div>{change.files_changed} files changed. <a rel="noreferrer" target="_blank"
                                                                        href={change.link}>View changes in git.</a><br/>
                    <br/>{change.description}
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
            <Card style={{marginBottom: 0, overflow: "auto", minHeight: 500}}>
                <p>{record.description}</p>
                <Collapse
                    style={{marginTop: 50}}
                    defaultActiveKey={['1']}
                    items={items}
                />
            </Card>
        </Modal>)

}

export default function TicketList() {
    const {tickets} = useContext(TicketContex)
    const [record, setRecord] = useState(null);

    const gutter = {xs: 8, sm: 16, md: 24, lg: 32}

    return (
        <SuggestionProvider>
            <OptimisationModal record={record} onCancel={() => setRecord(null)}/>
            <Row gutter={gutter}>
                {tickets.filter(ticket => ticket.link).map(s => <Col span={12}><Ticket item={s}
                                                                                       onClick={() => setRecord(s)}/></Col>)}
            </Row>

        </SuggestionProvider>

    );
}

function Ticket({item, onClick}) {
    function getStatus(ticket) {

        if (!ticket.actions)
            return <Tag className={"tag-rounded"} color={"green"}>No Errors</Tag>
        const recent = ticket.actions.sort((a, b) => a.creationTimestamp > b.creationTimestamp ? -1 : 1)[0]
        if (recent.status === "created")
            return <Tag className={"tag-rounded"} color={"green"}>In Queue</Tag>
        if (recent.status === "running")
            return <Tag className={"tag-rounded"} color={"orange"}>In Progress</Tag>
        if (recent.status === "success")
            return <Tag className={"tag-rounded"} color={"green"}>No Errors</Tag>
        if (recent.status === "error")
            return <Tag className={"tag-rounded"} color={"orange"}>Error while processing</Tag>
        return <Tag className={"tag-rounded"} color={"green"}>No Errors</Tag>
    }

    return <Card style={{
        minHeight: 160,
        marginBottom: 20,
        backgroundImage: "linear-gradient(45deg,#161850,  #455DFF)",
        borderColor: "#161850"
    }}>
        <a href={item.link} rel="noreferrer" target="_blank">
            <div style={{position: "absolute", top: 5, right: 10, color: "white"}}>
                <ExpandAltOutlined/></div>
        </a>
        {getStatus(item)}

        <h3 style={{marginTop: 10}}>{item.name}</h3>
        <p style={{color: "#bbb"}}>Created by: <Tag>{item.creator}</Tag></p>
        <div className={"changes"}>
            <Row>
                <Col span={8}><p className={"suggestion-details"}><span
                    className={"accent"}>{item.prs.length}</span> pull request{item.prs.length !== 1 ? "s" : ""}</p>
                </Col>
                <Col span={8}><p className={"suggestion-details"}><span
                    className={"accent"}>{item.comments.length}</span> comment{item.comments.length !== 1 ? "s" : ""}
                </p>
                </Col>
                <div style={{position: "absolute", left: "33%", bottom: -7, fontSize: 18}}>|</div>
                <Col span={8}><p className={"suggestion-details"}><span
                    className={"accent"}>{item.actions.length}</span> action{item.actions.length !== 1 ? "s" : ""} processed</p>
                </Col>
                <div style={{position: "absolute", left: "66%", bottom: -7, fontSize: 18}}>|</div>

            </Row>
        </div>
    </Card>
}



