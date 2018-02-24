import LogoPlaceHolder from '../assets/logoph.png';
import React from 'react';
import {Icon, Menu} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Header extends React.Component {
    render() {
        return (
            <header style={{width: '100%', boxShadow: '0 2px 8px #f0f1f2', height: 64,position : 'relative',zIndex : 100}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display : 'flex'}}>
                        <img src={LogoPlaceHolder} height={64} style={{paddingLeft : 16}} alt="Logo"/>
                        <Menu
                            style={{borderBottom: 'none'}}
                            onClick={(e) => this.props.history.push(e.item.props.linkTo)}
                            selectedKeys={null}
                            mode="horizontal">
                            <SubMenu style={{height : 64,display :'flex',alignItems:'center',borderRight : '1px solid #EEE',borderLeft : '1px solid #EEE'}} title={<span><Icon type="line-chart"/>Market</span>}>
                                <Menu.Item key="market:simple" linkTo="/market/basic/BTC-TRY">Basit Arayüz</Menu.Item>
                                <Menu.Item key="market:advanced" linkTo="/market/adv/BTC-TRY">Gelişmiş Arayüz</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <Menu
                        style={{borderBottom: 'none'}}
                        onClick={() => null}
                        mode="horizontal">

                        <SubMenu title={<span><Icon type="user"/>Ahmet Dereli</span>} style={{height : 64,display :'flex',alignItems:'center',borderRight : '1px solid #EEE',borderLeft : '1px solid #EEE'}}>
                            <MenuItemGroup title="Hesap İşlemleri">
                                <Menu.Item key="account:1">Kullanıcı Bilgileri</Menu.Item>
                                <Menu.Item key="account:2">Banka Bilgileri</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Para İşlemleri">
                                <Menu.Item key="account_money:1">Bankadan Para Yatır</Menu.Item>
                                <Menu.Item key="account_money:2">Bankaya Para Çek</Menu.Item>
                                <Menu.Item key="account_money:3">Kripto Para Yatır</Menu.Item>
                                <Menu.Item key="account_money:4">Kripto Para Çek</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu title={<span><Icon type="global"/>Türkçe</span>} style={{height : 64,display :'flex',alignItems:'center'}}>
                                <Menu.Item key="language:tr">İngilizce</Menu.Item>
                                <Menu.Item key="language:ar">Arapça</Menu.Item>
                                <Menu.Item key="language:ru">Rusça</Menu.Item>
                                <Menu.Item key="language:ch">Çince</Menu.Item>
                                <Menu.Item key="language:ge">Almanca</Menu.Item>
                                <Menu.Item key="language:fr">Fransızca</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </header>
        )
    }
}
