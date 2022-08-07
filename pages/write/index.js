import {memo, useState} from "react";
import React from 'react';
import AppLayout from "../../components/AppLayout";
import {Divider, Layout, Upload} from "antd";
import { Input } from 'antd';
import {CameraOutlined} from "@ant-design/icons";
const { Content } = Layout;
const { TextArea } = Input;

const headerWrite = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const headerBtnWrap = {
    position: 'unset',
}

const headerTitle = {
    margin: '0',
    fontSize: '1.125rem',
    fontWeight: 'bold',
}

const headerBtn = {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontWeight: '700',
}

const imageDataList = [
    {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },


];

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log('upload File >>  ', file);
        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

const Write = memo(() => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState(imageDataList);

    const onChangeTitle = (e) => {
        console.log('title:', e.target.value);

    };

    const onChangeContents = (e) => {
        console.log('content:', e.target.value);
    }



    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <CameraOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <>
            <AppLayout>
                <div className="header" style={ headerWrite }>

                </div>

                <Content>
                    <div className="input-box">
                        <Input placeholder="제목(40자)"
                               bordered={true}
                               size={"large"}
                               maxLength={40}
                               onChange={ onChangeTitle }
                        />
                    </div>

                    <Divider orientation="left" plain>
                        Contents
                    </Divider>

                    <div className="input-box">
                        <TextArea showCount
                                  placeholder='내용을 입력해주세요'
                                  rows={10}
                                  bordered={true}
                                  maxLength={30000}
                                  onChange={ onChangeContents } />
                    </div>


                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 3 ? null : uploadButton }
                    </Upload>


                </Content>




            </AppLayout>
        </>

    )
});

export default Write;
