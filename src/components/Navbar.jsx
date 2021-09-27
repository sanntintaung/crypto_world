import React from 'react';
import { Menu,Typography,Avatar } from "antd";
import { Link } from 'react-router-dom';
import logo from '../img/cryptocurrency.png';
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={logo}/>
                <Typography.Title level={2} className="logo">
                        <Link to="/">
                            CryptoWorld
                        </Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar;
