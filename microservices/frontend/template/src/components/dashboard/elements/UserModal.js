import {Button, Modal, Form, Input} from "antd";
import {useContext} from "react";
import {UserContext} from "../../../providers/UserProvider";


function CreateUser({initialUser, onClose}) {
    const {inviteUser} = useContext(UserContext);
    return (
        <>
            <p>Please provide the new user credentials. FirstMate will send out an invite mail to onboard the user in your organisation.</p>
            <Form
                name="user-setup"
                layout="vertical"
                onFinish={(user) => {
                    inviteUser(user)
                    onClose()
                }}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 800, marginTop: 20}}
                autoComplete="off"
                initialValues={{
                    // eslint-disable-next-line
                    ["role"]:  initialUser?.role || "GLOBAL_ADMIN",
                    // eslint-disable-next-line
                    ["email"]: initialUser?.email,
                    // eslint-disable-next-line
                    ["name"]: initialUser?.name
                }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{required: true, message: 'Please check you filled in your name'}]}>
                    <Input placeholder="John Doe" style={{width: 300}}/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please double check your email'}]}>
                    <Input placeholder="john.doe@yourcompany.com" style={{width: 300}}/>
                </Form.Item>
                <Form.Item
                    label="role"
                    name="role"
                    rules={[{required: true, message: 'Please provide a role for this user'}]}>
                    <Input
                        // todo enable field
                        disabled={true}
                        placeholder="GLOBAL_ADMIN" style={{width: 300}}/>
                </Form.Item>
            </Form></>
    )
}

export default function UserModal({open, onClose, initialUser}) {
    return (
        <Modal centered title={"Create a new user"} open={open}
               onCancel={onClose}
               width={700}
               footer={[
                   initialUser ? (
                       <Button type="primary" form="user-setup" key="submit" htmlType="submit">
                           Update user
                       </Button>
                       ):(
                       <Button type="primary" form="user-setup" key="submit" htmlType="submit">
                           Invite user
                       </Button>
                   )
                  ]}
        >
            <CreateUser initialUser={initialUser} onClose={onClose} />
        </Modal>
    )
}


