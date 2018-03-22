import React from 'react';
import {Button, Card} from "antd";
import moment from 'moment'
import {reduxForm,Field} from 'redux-form'
import {connect} from 'react-redux'
import {postData} from '../../../utils/reduxfunctions/actions'
import TextInput from "../../../components/FormComponents/TextInput";
import DateInput from "../../../components/FormComponents/DateInput";

/*
ad, soyad, doğum tarihi, ülke, kimlik tipi, kimlik numara, foto ön, foto arka, kimlik selfie
*/

class ProfileEdit extends React.Component {
    state = {}
    //TODO : HATALI KAYIT GİRİLDİĞİNDE NOTIFICATIONS BOZULUYOR
    render() {
        return (
            <div>
                <Card title="Profil Düzenle" style={{minHeight: 'inherit'}}>
                    <div className="container-cell">
                        <Field type="name" name="name" component={TextInput} placeholder="Ad" label="Ad" />
                    </div>
                    <div className="container-cell">
                        <Field name="surname" component={TextInput} placeholder="Soyad" label="Soyad" />
                    </div>
                    <div className="container-cell">
                        <Field name="phone_number" component={TextInput} placeholder="Telefon" label="Telefon" />
                    </div>
                    <div className="container-cell">
                        <Field type="email" name="email" component={TextInput} placeholder="E-mail" label="E-mail" />
                    </div>
                    <div className="container-cell">
                        <Field name="birth_day" component={DateInput} placeholder="Doğum Günü" label="Doğum Günü" style={{width : '100%'}} />
                    </div>
                    <div className="button-container">
                        <Button size="large" onClick={() => this.props.history.push("/profile/main")}
                                style={{margin: 8}}>
                            Vazgeç
                        </Button>
                        <Button type="primary" size="large" onClick={() => this.props.postData({
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

export default reduxForm({form: 'frm_profile_edit'})(connect(null, {postData})(ProfileEdit))
