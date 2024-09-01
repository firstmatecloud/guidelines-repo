import {Button, Space, Table, Tag} from 'antd';
import {ArrowDownOutlined, ArrowsAltOutlined} from "@ant-design/icons";
import {useContext, useState} from "react";
import {PageCard} from "./BaseCard";
import {ClusterContext} from "../../../providers/ClusterProviders";
import FeatureProvider, {FeatureContex} from "../../../providers/FeatureProvider";
import SavingsModal from "./savings/SavingsModal";


function SavingTable({columns}) {
    const {clusters} = useContext(ClusterContext)
    const {features} = useContext(FeatureContex)
    let optimisationList = []

    const getSavings = (cluster, feature) => {
        const feature_data = cluster.features[feature._id]
        if (!feature_data)
            return <Tag color={"orange"}>Calculating Savings</Tag>
        if (feature_data.enabled)
            return <Tag icon={<div className="dot dot-green"/>}
                        color="green">Saving {feature_data.savings_euro} p.m.</Tag>
        return <Space size="middle">
            <p>€{feature_data.savings_euro} p.m.</p>
            <Tag icon={<ArrowDownOutlined/>} color={"green"}
                 className={"tag-rounded"}>{feature_data.savings_percent}%</Tag>
        </Space>
    }
    const getStatus = (cluster, feature) => {
        const feature_data = cluster.features[feature._id]
        if (!feature_data)
            return <Tag icon={<div className="dot dot-orange"/>} color="orange">Needs more data</Tag>
        if (feature_data.enabled)
            return <Tag icon={<div className="dot dot-green"/>} color="green">Enabled</Tag>
        return <Tag icon={<div className="dot dot-blue"/>} className={"available"}>Available</Tag>
    }


    if (optimisationList.length === 0)
        features.forEach(feat =>
            optimisationList.push(
                {
                    feature: feat,
                    cluster: {
                        name: "test-cluster",
                        id: "id"
                    },
                    status: <Tag icon={<div className="dot dot-orange"/>} color="orange">Needs more data</Tag>,
                    about: feat.description,
                    name: feat.name,
                    savings: <Tag color={"red"}>No clusters connected</Tag>
                })
        )
    else {
        //todo: refactor to cluster feature only. Other service should calculate and add features to the cluster.
        features.forEach(feat =>
            clusters.forEach(cluster => {
                optimisationList.push(
                    {
                        feature: feat,
                        config: cluster.features[feat._id],
                        cluster: {
                            name: cluster.name,
                            id: cluster._id
                        },
                        status: getStatus(cluster, feat),
                        about: feat.description,
                        name: feat.name,
                        savings: getSavings(cluster, feat)
                    });
            })
        )

    }

    return <Table columns={columns} dataSource={optimisationList} pagination={false}></Table>
}

export default function SavingsOverview() {
    const [record, setRecord] = useState(null);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Status',
            dataIndex: 'status'
        },
        {
            title: 'Cluster',
            dataIndex: ["cluster", "name"]
        },
        {
            title: 'Available Savings',
            dataIndex: 'savings',
            defaultSortOrder: 'descend',
            sorter: (a, b) => {
                const aa = a.config?.savings_euro ? a.config?.savings_euro : 0;
                const bb = b.config?.savings_euro ? b.config?.savings_euro : 0;
                return aa - bb;
            },
        },
        {
            title: '',
            dataIndex: 'buttond',
            render: (_, record) => (
                <Space size="middle">
                    <Button type={record.config && "primary"} disabled={!record.config} icon={<ArrowsAltOutlined/>}
                            onClick={() => setRecord(record)}>Show
                        Details</Button>
                </Space>
            ),
        },
    ];

    return (
            <FeatureProvider>
                <SavingsModal record={record} onCancel={() => setRecord(null)}/>
                <PageCard>
                    <h2>Proposed Automations</h2>
                    <p className="secondary">Start saving automatically with our Kubernetes features.</p>
                    <SavingTable columns={columns}/>
                </PageCard>
            </FeatureProvider>
    );
}


