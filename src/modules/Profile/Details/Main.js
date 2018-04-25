import React from 'react';
import { Input, Button, Card, Icon, Modal } from "antd";
import {getData} from '../../../utils/reduxfunctions/actions'
import {connect} from 'react-redux';

/*
ad, soyad, doğum tarihi, ülke, kimlik tipi, kimlik numara, foto ön, foto arka, kimlik selfie
*/
let dummyData = {}
class ProfileMain extends React.Component {
    state = {}
    componentWillMount(){
        this.props.getData({apiEndPoint : "profiledetails",data_name : "profile_details"})
    }
    render() {
        if (!this.props.profileDetails){
            return (
                <div>Yükleniyor...</div>
            )
        }
        return (
            <Card title="Profil Detayı" style={{ minHeight: 'inherit' }}>
                <ChangePasswordDialog
                    open={this.state.changePasswordDialog}
                    onClose={() => this.setState({ changePasswordDialog: false })}
                    onSubmit={this.onSubmit}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon style={{ fontSize: 100 }} type="user" />
                    <div>
                        <div style={{ fontSize: 26, fontWeight: 'bold', lineHeight: '40px' }}>
                            <Icon type="mail" /> {this.props.profileDetails.email}
                        </div>
                        <div style={{ fontSize: 22, lineHeight: '40px' }}>
                            <Icon type="mobile" /> {this.props.profileDetails.phone_number_pre + "" +this.props.profileDetails.phone_number}
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <Button onClick={() => this.props.history.push("/profile/main/edit")} style={{ margin: 8 }}>
                        Profil Düzenle
                    </Button>
                    <Button onClick={() => this.setState({ changePasswordDialog: true })} style={{ margin: 8 }}>
                        Şifre Değiştir
                    </Button>
                    <Button onClick={() => this.props.history.push("/profile/main/verification")} style={{ margin: 8 }}>
                        Hesap Onayla
                    </Button>
                </div>
                <div className="profile-view-container">
                    <div className="profile-content-cell">
                        <p className="content-label">Ad</p>
                        <p className="content-text">{this.props.profileDetails.name}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Soyad</p>
                        <p className="content-text">{this.props.profileDetails.surname}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Doğum Tarihi</p>
                        <p className="content-text">{this.props.profileDetails.birth_day}</p>
                    </div>
                </div>
            </Card>
        )
    }
}


class ChangePasswordDialog extends React.Component {
    state = {
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: ""
    }
    render() {
        const { open, onClose, onSubmit } = this.props;
        return (
            <Modal title="Şifre Değiştir"
                visible={open}
                onOk={onSubmit}
                onCancel={onClose}
            >
                <div className="container-cell">
                    <p className="field-label">Eski Şifre</p>
                    <Input placeholder="Eski Şifre" onChange={e => console.log("e", e)} />
                </div>
                <div className="container-cell">
                    <p className="field-label">Yeni Şifre</p>
                    <Input placeholder="Yeni Şifre" onChange={e => console.log("e", e)} />
                </div>
                <div className="container-cell">
                    <p className="field-label">Yeni Şifre Doğrulama</p>
                    <Input placeholder="Yeni Şifre Doğrulama" onChange={e => console.log("e", e)} />
                </div>
            </Modal>
        )
    }
}
export default connect( (state) => {return{ profileDetails : state && state.datas && state.datas.profile_details}} ,{getData})(ProfileMain)
