import {memo} from "react";
import {Card, Space} from "antd";
import React from "react";
import styled from "styled-components";


export const CardStyles = styled(Card)`
    border-radius: 8px;
    overflow: auto;
`

const PostCard = memo(() => {


    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }} className={'card-list'}>
            <CardStyles title="Card" size="small" hoverable>
                <p>Card content</p>
                <p>Card content</p>
            </CardStyles>
            <CardStyles title="Card" size="small" hoverable>
                <p>Card content</p>
                <p>Card content</p>
            </CardStyles>
            <CardStyles title="Card" size="small" hoverable>
                <p>Card content</p>
                <p>Card content</p>
            </CardStyles>

        </Space>
    )
});

export default PostCard;
