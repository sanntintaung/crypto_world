import React from 'react';
import millify from "millify";
import { Row ,Col, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
    const { data, error, isLoading } = useGetCryptosQuery();
    console.log(data)
    const globalStats = data?.data?.stats;

    if(error) return

    if(isLoading) return <div>Is Loading....</div>

    if(data) {
        return (
            <React.Fragment>
                <Title level={2} className="heading">
                    Global Crypto Stats
                </Title>
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
                </Row>
            </React.Fragment>
        );
    }
};

export default Homepage;
