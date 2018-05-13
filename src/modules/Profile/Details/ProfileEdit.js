import React from 'react';
import {Button, Card} from "antd";
import moment from 'moment'
import {reduxForm,Field,initialize as formInitiliazer} from 'redux-form'
import {connect} from 'react-redux'
import {upsertData,getData} from '../../../utils/reduxfunctions/actions'
import TextInput from "../../../components/FormComponents/TextInput";
import DateInput from "../../../components/FormComponents/DateInput";
import {Input, Select} from "antd/lib/index";
/*
ad, soyad, doğum tarihi, ülke, kimlik tipi, kimlik numara, foto ön, foto arka, kimlik selfie
*/
const InputGroup = Input.Group;
const Option = Select.Option;
class ProfileEdit extends React.Component {
    //TODO : UPDATE USER INFO AFTER SAVE
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillMount(){
        this.props.getData({apiEndPoint : "profiledetails",data_name : "profile_details",onLoad : (data) => this.props.formInitiliazer("frm_profile_edit",this.props.profileDetails)})
    }
    selectField(p) {
        return (
            <Select {...p.input} showSearch={true} style={{marginBottom : 24,flex : '0 0 150px'}}>
                <Option value="+93">Afghanistan(+93)</Option>
                <Option value="+35">Albania(+35)</Option>
                <Option value="+21">Algeria(+21)</Option>
                <Option value="+68">American Samoa(+68)</Option>
                <Option value="+37">Andorra(+37)</Option>
                <Option value="+24">Angola(+24)</Option>
                <Option value="+80">Anguilla(+80)</Option>
                <Option value="+26">Antigua(+26)</Option>
                <Option value="+54">Argentina(+54)</Option>
                <Option value="+37">Armenia(+37)</Option>
                <Option value="+29">Aruba(+29)</Option>
                <Option value="+24">Ascension Island(+24)</Option>
                <Option value="+90">Türkiye(+90)</Option>
            </Select>
        )
    }
    //TODO : HATALI KAYIT GİRİLDİĞİNDE NOTIFICATIONS BOZULUYOR
    render() {
        console.log(this.props)
        return (
            <div>
                <Card title="Profil Düzenle" style={{minHeight: 'inherit'}}>
                    <div className="container-cell">
                        <Field type="email" name="email" component={TextInput} placeholder="E-mail" label="E-mail" disabled/>
                        <div><i>Email adresi güvenlik nedeni ile değiştirilemez. Detaylı bilgi için destek talebi oluşturunuz</i></div>
                    </div>
                    <div className="container-cell">
                        <Field type="name" name="name" component={TextInput} placeholder="Ad" label="Ad" />
                    </div>
                    <div className="container-cell">
                        <Field name="surname" component={TextInput} placeholder="Soyad" label="Soyad" />
                    </div>
                    <div className="container-cell">
                        <p className="field-label">Telefon</p>
                        <div style={{padding: '1px 0px 1px 0px',display : 'flex',justifyContent : 'center',alignItems : 'center'}}>
                        <Field type="phone" name="phone_number_pre" component={this.selectField} label="Alan Kodu"/>
                        <Field name="phone_number" component={TextInput} placeholder="Telefon" style={{flex : 4}} />
                        </div>
                    </div>
                    <div className="container-cell">
                        <Field name="birth_day" component={DateInput} placeholder="Doğum Günü" label="Doğum Günü" style={{width : '100%'}} />
                    </div>
                    <div className="button-container">
                        <Button size="large" onClick={() => this.props.history.push("/profile/main")}
                                style={{margin: 8}}>
                            Vazgeç
                        </Button>
                        <Button type="primary" size="large" onClick={() => this.props.upsertData({
                            form: 'frm_profile_edit',
                            params: {apiEndPoint: 'profiledetails'},
                            onSave: () => this.setState({afterRegister: true}),
                            successMsg : "Güncelleme Başarılı!"
                        })}
                                style={{margin: 8}}>
                            Kaydet
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default reduxForm({form: 'frm_profile_edit'})(connect((state) => {return{ profileDetails : state && state.datas && state.datas.profile_details}}, {upsertData,getData,formInitiliazer})(ProfileEdit))
