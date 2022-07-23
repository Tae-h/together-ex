import {memo} from "react";
import {Col, Form, Input, Layout, Row, Select} from "antd";
import AppLayout from "../../components/AppLayout";
const { Content } = Layout;


const Team = memo(() => {

    return (
        <>

            <AppLayout>
                <Content>

                    팀 만들기

                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="팀 이름"
                                    label="팀 이름"
                                    rules={[{ required: true, message: '팀 이름을 정해주세요.' }]}
                                >
                                    <Input placeholder="팀 이름을 정해주세요." />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="종목"
                                    label="종목"
                                    rules={[{ required: true, message: '종목을 선택해 주세요.' }]}
                                >
                                    <Select placeholder="종목을 선택해 주세요.">
                                        <Select.Option value="soccer">축구</Select.Option>
                                        <Select.Option value="basket">농구</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter url description',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={4} placeholder="please enter url description" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </Content>
            </AppLayout>
        </>
    )
});

export default Team;

