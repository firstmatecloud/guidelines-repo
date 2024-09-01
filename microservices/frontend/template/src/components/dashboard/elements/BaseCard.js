import {Card} from 'antd';
import {EllipsisOutlined} from "@ant-design/icons";

export default function BaseCard({content, size, title, menuFunction, loading}) {
    return (
        <div>
            <Card className={size === "half" ? "half-card" : ""} loading={loading}>
                {menuFunction &&
                    <EllipsisOutlined style={{fontSize: 27, position: "absolute", top: 10, right: 15, color: "#999"}}
                                      onClick={menuFunction}/>}
                <div className="card-title">{title}</div>
                {content}
            </Card>
        </div>
    );
}


export function PageCard({content, title, loading, children, menuFunction}) {
    return (
        <div>
            <Card loading={loading} style={{height: "100%"}}>
                {menuFunction &&
                    <EllipsisOutlined style={{fontSize: 27, position: "absolute", top: 10, right: 15, color: "#999"}}
                                      onClick={menuFunction}/>}
                <div className="card-title">{title}</div>
                {children}
            </Card>
        </div>
    );
}


