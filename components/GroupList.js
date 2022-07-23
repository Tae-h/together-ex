import {memo, useCallback} from "react";
import {Button, Card, List} from 'antd';
import {CloseOutlined, StopOutlined} from "@ant-design/icons";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST} from "../reducers/user";

const GroupList = memo(({ header, data, onClickMore, loading }) => {

    const dispatch = useDispatch();

    const onCancel = (id) => () => { // 고차 함수 --> 반복문에서 사용시 유용하다
        if (header === '팔로잉') {
            /*dispatch({
                type: UNFOLLOW_REQUEST,
                data: id,
            });*/
        }

    };

    const onDeleteCard = () => {

    }
    return (
        <>
            <List
                style={{ marginBottom: 20 }}
                grid={{gutter: 4, xs: 2, md: 3}}
                size="small"
                header={ <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ marginTop: '6px' }}>
                                {header}
                            </div>
                            <Button type="text" onClick={ onDeleteCard }  icon={<CloseOutlined />}/>
                        </div> }
                loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}>
                            <Button onClick={ onClickMore } loading={ loading }>더 보기</Button>
                          </div>}
                bordered
                dataSource={ data }
                renderItem={(item) => (
                    <List.Item style={{ marginTop: 20 }}>
                        <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)}/>]}>
                            <Card.Meta description={ item.nickname } />
                        </Card>
                    </List.Item>
                )}
            />
        </>
    )
});

GroupList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onClickMore: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default GroupList;
