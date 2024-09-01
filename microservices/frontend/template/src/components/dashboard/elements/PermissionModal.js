import {Modal} from "antd";

export default function BlockingModal({title, content}) {
    return (
        <Modal centered title={title} open={true} onCancel={()=>{}} width={600}
               footer={[]}>
            <p>{content}</p>
        </Modal>
    )


}
