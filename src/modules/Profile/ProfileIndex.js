import ProfileMain from './Details/Main';
import React from 'react';
import {Menu, Icon, Switch, Alert} from 'antd';
import CryptoBalance from "./Details/CryptoBalance";

const {SubMenu} = Menu;
export default class ProfileIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activePage : "main"
        }
        this.subRouter = this.subRouter.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({activePage : nextProps.match.params.subpage});
    }
    subRouter(){
        if(this.state.activePage == 'balance'){
            return <CryptoBalance/>
        }else{
            return <ProfileMain/>
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
                        onClick={(e) => {
                            this.props.history.push(e.key)
                        }}
                        style={{width: 256, border: '1px solid #EEE', minHeight: 'calc(100vh - 160px)'}}
                        defaultSelectedKeys={[this.props.match.params.subpage]}
                        defaultOpenKeys={["cryptobalance", "banking"]}
                        mode="inline"
                        theme="light"
                    >
                        <Menu.Item key="main" style={{marginTop: '0px'}}>
                            <Icon type="user"/>
                            Profil Detayı
                        </Menu.Item>
                        <SubMenu key="cryptobalance" title={<span><Icon type="appstore"/><span>Kripto İşlemler</span></span>}>
                            <Menu.Item key="balance">Bakiye Bilgisi</Menu.Item>
                            <Menu.Item key="deposit">Para Yatır</Menu.Item>
                            <Menu.Item key="withdraw">Para Çek</Menu.Item>
                            <Menu.Item key="tradehistory">İşlem Geçmişi</Menu.Item>
                        </SubMenu>
                        <SubMenu key="banking" title={<span><Icon type="bank"/><span>Banka İşlemleri</span></span>}>
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
                        {this.subRouter()}
                    </div>
                </div>
            </div>
        )
    }
}
