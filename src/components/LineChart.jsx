import React from 'react';
import {Col, Row} from 'antd';
import Title from "antd/es/typography/Title";
import {Line} from "react-chartjs-2";


const LineChart = ({ coinHistory,currentPrice,coinName }) => {
    const coinPrice = [];
    const timeStamp = [];
    console.log(coinHistory)

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        timeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }

    const data = {
        labels: timeStamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <React.Fragment>
            <Row className="chart-header">
                <Title className="chart-title" level={2}>
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title  level={5} className="price-change">{ coinHistory?.data?.change} %</Title>
                    <Title level={5} className="current-price">Current { coinName } Price: ${ currentPrice } </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </React.Fragment>
    );
};

export default LineChart;
