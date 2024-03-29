import { Button, Card, Col, Input, Modal, Row, Switch } from 'antd';
import { useState } from 'react';
import React from 'react';

export default function WithdrawModal(props) {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    let withdraw = "Withdraw ";
    let asset = props.rowData.asset;
    let withdrawAsset = withdraw.concat(asset);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };


    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Withdraw
            </Button>
            <Modal
                visible={visible}
                title={withdrawAsset}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Approve to continue
                    </Button>,
                    <Button
                        key="link"
                        // href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        {withdrawAsset}
                    </Button>,
                ]}
            >
                Amount
                <Row>
                    <Col className='col-left' style={{ width: '400px' }}><Input placeholder='0.00' /></Col>
                    <Col className='col-right'><h3>{asset}</h3></Col>
                    MAX : 23.234 {asset}
                </Row>


                Transaction Overview
                <Card >
                    {/* <Row className='padding'>
                        <Col className='col-left'>
                            <Switch />
                        </Col>
                        <Col className='col-right'>
                            Unwrap WETH(to Withdraw ETH)
                        </Col>
                    </Row> */}
                    <Row className='padding'>
                        <Col className='col-left'>
                            Remaining supply
                        </Col>
                        <Col className='col-right'>
                            0.005 {asset}
                        </Col>
                    </Row>
                    <Row className='padding'>
                        <Col className='col-left'>
                            Health Factor
                        </Col>
                        <Col className='col-right'>
                            47.98→46.34
                        </Col>
                    </Row>

                </Card>
            </Modal>
        </div>
    )
}
