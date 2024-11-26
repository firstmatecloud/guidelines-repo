import {Table, Tag, Space, Button} from 'antd';
import {useContext} from "react";
import {ClusterContext} from "../../../providers/ClusterProviders";
import {SearchOutlined} from "@ant-design/icons"

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Location',
        dataIndex: 'location'
    },
    {
        title: 'Status',
        dataIndex: 'status'
    },
    {
        title: 'Available Savings',
        dataIndex: 'savings'
    },
    {
        title: '',
        dataIndex: 'buttond',
        render: (_, record) => (
            <Space size="middle">
                <Button icon={<SearchOutlined />} href="/dashboard/cloud/savings">Optimisations</Button>
            </Space>
        ),
    },
];

export default function ClusterList() {
    const {clusters} = useContext(ClusterContext);
    const data = clusters.map((d, i) => ({
        key: i,
        name: d.name,
        status: <Tag color={d.status === "Disconnected"? "red": "green"}>{d.status}</Tag>,
        savings:  <Tag color={"orange"}>calculating</Tag>,//<Space size="middle"><p>€ 563</p><Tag icon={<ArrowDownOutlined />} color={"green"}>34%</Tag></Space>,
        location: d.clusterInfo.clusterDetails.cluster.location
    }));

    return (
        <>
            <h2>Clusters</h2>
            <p className="secondary">Add clusters or look at optimisation possibilities.</p>
            <Table pagination={false} columns={columns} dataSource={data} locale={{ emptyText: 'No linked clusters' }}/></>
    )


}