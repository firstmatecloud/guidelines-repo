import {Button, Table, Tag} from 'antd';
import {RedoOutlined} from "@ant-design/icons";
import {useContext} from "react";
import {PageCard} from "./BaseCard";
import {SuggestionContex} from "../../../providers/SuggestionProvider";
import {UserContext} from "../../../providers/UserProvider";
import {Link} from "react-router-dom";


const providerLogo = {
    azuredev: "/icons/azure-devops.jpeg",
    bitbucket: "/icons/bitbucket.png",
    github: "/icons/github.png",
}

function RepoTable({columns}) {
    const {organisation} = useContext(UserContext)
    const {suggestions} = useContext(SuggestionContex)

    organisation?.repos?.forEach(repo => {
        repo.changes = 0;
        suggestions?.forEach(sugg => {
            sugg.prs?.forEach(pr => {
                if (pr.rep_id === repo.id)
                    repo.changes += 1;
            })
        })
    })


    return <Table locale={{emptyText: <>No linked repositories. <a href="/dashboard/settings/users">Manage git providers.</a> </>}}
                  columns={columns} dataSource={organisation?.repos} pagination={false}></Table>
}

export default function RepoList() {
    const {repoRefresh} = useContext(UserContext)

    const getStatus = (repo) => {
        return <Tag className="tag-rounded" color="green">{repo.status}</Tag>
    }
    const getSuggestions = (repo) => {
        if (repo.changes > 0) {
            return <Link to={"/dashboard/cloud/suggestions"}><Tag color="orange">{repo.changes} proposed
                suggestion</Tag></Link>

        }

        return <Tag color="green">No open suggestions</Tag>
    }

    const refreshRepo = async () => {
        repoRefresh().then()
    }

    const columns = [
        {
            title: '',
            dataIndex: 'img',
            width: 100,
            render: (_, record) => <img alt="avatar" src={record.avatar || providerLogo[record.provider]}
                                        className="avatar"/>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 250,
        },
        {
            title: 'Provider',
            dataIndex: 'provider'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            align: 'center',
            render: (_, record) => getStatus(record),
            width: 150,

        },
        {
            title: 'Proactive',
            dataIndex: 'status',
            align: 'center',
            render: (_, record) => getSuggestions(record),
            width: 150,

        }
    ];

    return (
        <PageCard>
            <Button style={{float: "right"}} icon={<RedoOutlined/>} onClick={refreshRepo} >Refresh list</Button>
            <RepoTable columns={columns}/>
        </PageCard>

    );
}



