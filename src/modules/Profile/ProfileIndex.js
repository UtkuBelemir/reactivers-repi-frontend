import ProfileMain from './Details/Main';
import React from 'react';
import {Menu, Icon, Switch, Alert} from 'antd';
import CryptoBalance from "./Details/CryptoBalance";

const {SubMenu} = Menu;
export default class ProfileIndex extends React.Component {
    constructor(props) {
        super(props);
        this.subRouter = this.subRouter.bind(this)
    }

    subRouter() {
        if (this.props.match.params.subpage === "main") {
            return <ProfileMain/>
        }
        else if(this.props.match.params.subpage === "balance") {
            return <CryptoBalance/>
        }
        else {
            this.props.history.push("/profile/main");
        }
    }

    render() {
        return (
            <div style={{
                minHeight: 'inherit',
                width: 1200,
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px 0px 16px 0px'
            }}>
                <div style={{width: 256, minHeight: 'calc(100vh - 160px)'}}>
                    <Menu
                        style={{width: 256, border: '1px solid #EEE', minHeight: 'calc(100vh - 160px)'}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={["sub1", "sub2"]}
                        mode="inline"
                        theme="light"
                    >
                        <Menu.Item key="1" style={{marginTop: '0px'}}>
                            <Icon type="user"/>
                            Profil Detayı
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="appstore"/><span>Kripto İşlemler</span></span>}>
                            <Menu.Item key="11">Bakiye Bilgisi</Menu.Item>
                            <Menu.Item key="12">Para Yatır</Menu.Item>
                            <Menu.Item key="13">Para Çek</Menu.Item>
                            <Menu.Item key="10">İşlem Geçmişi</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="bank"/><span>Banka İşlemleri</span></span>}>
                            <Menu.Item key="8">Para Yatır</Menu.Item>
                            <Menu.Item key="7">Para Çek</Menu.Item>
                            <Menu.Item key="10">İşlem Geçmişi</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div style={{width: 944, paddingLeft: 16, minHeight: 'calc(100vh - 250px)'}}>
                    <Alert
                        message="Hesabınız Onaylanmamış"
                        description="Daha hızlı teknik destek, yüksek işlem limitleri ve hesabınızı geri kurtarabilmek için lütfen hesabınızı onaylayın."
                        type="warning"
                        showIcon
                    />
                    <div style={{paddingTop : 8,minHeight : 'inherit'}}>
                        <this.subRouter/>
                    </div>
                </div>
            </div>
        )
    }
}
