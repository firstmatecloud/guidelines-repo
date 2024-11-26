import {Space} from "antd";


export default function DashBoardHeader({title, hideAlerts, buttons}) {


    return (
        <div style={{height:  50 }}>
            <div>
                <h1 style={{float: "left"}}>{title}</h1>
                <div style={{float: "right"}}>
                    <Space size={[10, 0]} wrap>
                        {buttons}
                    </Space>
                </div>
            </div>
        </div>
    );

}
