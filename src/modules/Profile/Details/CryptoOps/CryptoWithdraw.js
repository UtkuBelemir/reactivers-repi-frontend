import React from 'react';
import {Button, Card, Checkbox, Icon, Tooltip} from "antd";
import {coinsWithSymbolKey} from '../../../../assets/currencyicons/index';
import {connect} from 'react-redux';
import {getData, showNotification} from '../../../../utils/reduxfunctions/actions';
import QRCode from 'qrcode.react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {reduxForm, Field} from 'redux-form';
import TextInput from "../../../../components/FormComponents/TextInput";
import CryptoWithdrawHistory from "./WithdrawHistory";
const validate = (values) => {
    let errors = {};
    if (values.destination_address == null){
        errors.destination_address = "Gönderilecek adres boş olamaz"
    }
    if (values.verify_destination_address == null || values.verify_destination_address != values.destination_address){
        errors.verify_destination_address = "Adresler uyuşmuyor"
    }
    if (values.amount == null || parseFloat(values.amount) <= 0){
        errors.amount = "Miktar sıfırdan az olamaz"
    }
    return errors
}
class CryptoWithdraw extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userPrompt : false
        }
    }
    render() {
        const coinDetails = coinsWithSymbolKey[this.props.match.params.cointype];
        coinDetails.symbol = coinDetails.symbol.toUpperCase()
        return(
            <div style={{minHeight : '100%'}}>
            <Card
                title={<span><img
                    src={coinDetails.img}/>{`${coinDetails.name} (${coinDetails.symbol.toUpperCase()}) Çekme`}</span>}
                style={{minHeight: 'inherit'}}>
                <div className="container">
                    <div className="container-cell">
                        <p>Dikkat! Bu sayfayı sadece <b>{`${coinDetails.name}(${coinDetails.symbol})`}</b> transferleri için kullanınız.
                            <b>{`${coinDetails.name}(${coinDetails.symbol})`}</b> dışındaki
                            transferler alıcı adrese ulaşmaz. İşleminizin durumunu sayfanının altındaki tablodan görebilirsiniz</p>
                    </div>
                    <div className="container-cell">
                        <Field name="destination_address" component={TextInput}
                               prefix={<Icon type="logout" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               label="Gönderilecek Adres"
                               placeholder="Gönderilecek Adres"/>
                        <Field name="verify_destination_address" component={TextInput}
                               prefix={<Icon type="logout" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               label="Gönderilecek Adres Tekrar"
                               placeholder="Gönderilecek Adres Tekrar"/>
                        <Field name="amount" component={TextInput}
                               prefix={<Icon type="tag-o" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               label="Gönderilecek Miktar"
                               placeholder="Gönderilecek Miktar"/>
                        <Checkbox onChange={ (e) => this.setState({userPrompt: e.target.checked})}>İşlemin gerçekleştirilmesini onaylıyorum</Checkbox>
                    </div>
                    <div className="container-cell">
                        <Button disabled={!this.props.anyTouched || !this.props.valid || !this.state.userPrompt}>
                            Transfer Et
                        </Button>
                    </div>
                </div>
            </Card>
                <Card
                    title="Transfer Geçmişi" style={{marginTop : 16}}>
                    <CryptoWithdrawHistory/>
                </Card>
            </div>
        )
    }
}

export default reduxForm({form: 'frm_withdraw_coin',validate})(connect(null, null)(CryptoWithdraw))
