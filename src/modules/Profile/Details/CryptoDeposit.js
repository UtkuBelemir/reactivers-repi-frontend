import React from 'react';
import {Card, Icon, Tooltip} from "antd";
import {coinsWithSymbolKey} from '../../../assets/currencyicons';
import {connect} from 'react-redux';
import {getData, showNotification} from '../../../utils/reduxfunctions/actions';
import QRCode from 'qrcode.react';
import {CopyToClipboard} from "react-copy-to-clipboard";

class CryptoDeposit extends React.Component {
    componentWillMount() {
        this.props.getData({
            apiEndPoint: `getwallet/${this.props.match.params.cointype}`,
            data_name: `walletAddress_${this.props.match.params.cointype}`
        });
    }

    addressRef = null

    render() {
        const coinDetails = coinsWithSymbolKey[this.props.match.params.cointype];
        coinDetails.symbol = coinDetails.symbol.toUpperCase()
        if (this.props.wallet && this.props.wallet.public_address) {
            console.log("this.props", this.props)
            const depositAddress = this.props.wallet.public_address;
            return (
                <Card
                    title={<span><img
                        src={coinDetails.img}/>{`${coinDetails.name} (${coinDetails.symbol.toUpperCase()}) Yatırma`}</span>}
                    style={{minHeight: 'inherit'}}>
                    <div className="container">
                        <div className="container-cell">
                            <p>Dikkat! Bu adrese
                                sadece <b>{`${coinDetails.name}(${coinDetails.symbol})`}</b> gönderiniz. <b>{`${coinDetails.name}(${coinDetails.symbol})`}</b> dışındaki
                                transferler geçersizdir. İşleminiz madenciler tarafından onaylandıktan sonra bakiyeniz
                                güncellenecektir.</p>
                        </div>
                        <div className="container-cell">
                        <span style={{fontSize: 16, marginLeft: 8}}><Icon
                            type="tag-o"/> Cüzdan Adresi : <span style={{fontSize: 20}}>
                            <b>
                            <Tooltip visible={true} placement="right" title={
                                <span style={{cursor: 'pointer'}}>
                                    <CopyToClipboard onCopy={() => this.props.showNotification("Adres Başarıyla Kopyalandı!", "success", "addr_copied")} text={depositAddress}>
                                        <span>Kopyalamak için tıklayın</span>
                                    </CopyToClipboard>
                                </span>}>
                            {depositAddress}
                            </Tooltip></b></span></span>
                        </div>
                        <div className="container-cell">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                                padding: 8,
                                backgroundColor: '#DADADA'
                            }}>
                                <QRCode value={depositAddress} bgColor='#DADADA' level="L" size={256}/>
                            </div>
                        </div>
                    </div>
                </Card>
            )
        } else {
            return (
                <Card
                    title={<span><img
                        src={coinDetails.img}/>{`${coinDetails.name}(${coinDetails.symbol}) Yatırma`}</span>}
                    style={{minHeight: 'inherit'}}>
                    <div className="container">
                        yükleniyor
                    </div>
                </Card>
            )
        }
    }
}

export default connect((state, ownProps) => {
    return {
        wallet: state && state.datas && state.datas[`walletAddress_${ownProps.match.params.cointype}`]
    }
}, {getData,showNotification})(CryptoDeposit)
