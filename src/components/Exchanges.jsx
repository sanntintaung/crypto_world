import React from 'react';
import {useGetExchangesQuery} from "../services/cryptoApi";
import {Col,Row,Collapse} from "antd";
import Text from "antd/es/typography/Text";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import Avatar from "antd/es/avatar/avatar";

const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchanges = data?.data?.exchanges;
    console.log(data)

    if(isFetching) return <div>Loading....</div>

    return (
        <React.Fragment>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24th Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                <Col span={24}>
                    {
                        exchanges.map( exchange => (
                            <Collapse>
                                <Panel
                                key={exchange.id}
                                showArrow={false}
                                header={(
                                    <Row>
                                        <Col span={6}>
                                            <Text><strong>{ exchange.rank }</strong></Text>
                                            <Avatar src={ exchange.iconUrl } className="exchange-image"/>
                                            <Text><strong>{ exchange.name }</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.volume)}</Col>
                                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                                    </Row>
                                )
                                }>
                                    {HTMLReactParser(exchange.description || "")}
                                </Panel>
                            </Collapse>
                        ))
                    }
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Exchanges;
