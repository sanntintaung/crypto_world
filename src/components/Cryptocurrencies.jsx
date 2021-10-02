import React, {useEffect, useState} from 'react';
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Card, Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const { data: cryptolist , isLoading } = useGetCryptosQuery(count);
    const [cryptos,setCryptos] = useState([]);
    const [searchItem,setSearchItem] = useState('');

    useEffect(() => {
        const filteredItem = cryptolist?.data?.coins.filter( item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
        setCryptos(filteredItem);

    },[cryptolist,searchItem])
    return (
        <React.Fragment>
            {
                !simplified &&
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={ e => setSearchItem(e.target.value)}/>
                </div>
            }

            <Row gutter={[32,32]} className="crypto-card-container">
                {
                    cryptos?.map( currency => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link to={`/crypto/${currency.id}`}>
                                <Card
                                    title={`${currency.rank}.${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl} alt={`${currency.name}`}/>}
                                    hoverable
                                    loading={isLoading}>

                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {millify(currency.change)}</p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </React.Fragment>
    );
};

export default Cryptocurrencies;
