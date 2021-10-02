import React, {useState} from 'react';
import { useGetNewsQuery } from "../services/newsApi";
import {Card, Col, Input, Row, Select} from "antd";
import Title from "antd/es/typography/Title";
import Avatar from "antd/es/avatar/avatar";
import Text from "antd/es/typography/Text";
import moment from "momnet";
import {Option} from "antd/es/mentions";
import {useGetCryptosQuery} from "../services/cryptoApi";

const News = ({simplified}) => {
    const [newsCategory , setnewsCategory] = useState('Cryptocurrency');

    const { data: cryptonews , isLoading , error } = useGetNewsQuery({newsCategory,count: simplified ? 6 : 12});
    console.log(cryptonews);

    const { data } = useGetCryptosQuery(100);

    if(error) return <div> Error ...</div>

    if(isLoading) return <div> Loading ...</div>

    return (
        <Row gutter={[24,24]}>
            {
                !simplified &&
                    <Col span={24}>
                        <div>
                            <Select
                                showSearch
                                className="select-news"
                                style={{ width: 200 }}
                                placeholder="Select a crypto"
                                optionFilterProp="children"
                                onChange={ value => setnewsCategory(value)}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }>
                                <Option value="Cryptocurrency">All</Option>
                                {
                                    data?.data?.coins.map( item => <Option value={item.name}></Option>)
                                }
                            </Select>
                        </div>
                    </Col>
            }

            {
                cryptonews.value.map( (news,index) => (
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>
                                        {news.name}
                                    </Title>
                                    <img style={{maxHeight:'100px',maxWeight:'200px'}} src={news?.image?.thumbnail?.contentUrl || news?.image?.thumbnail?. demoImage } alt="news"/>
                                </div>
                                <p>
                                    {news.description > 100
                                    ? `${news.description.substring(0,100)}...`
                                    : news.description}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0] ?.news?.image?.thumbnail?.contentUrl || news?.image?.thumbnail?. demoImage } alt="news"/>
                                        <Text className="provider-name">{news.provider[0] ?. name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
};

export default News;
