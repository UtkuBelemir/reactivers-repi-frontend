import React from 'react';
import { Input, Button, Card, Icon, Modal } from "antd";


/*
ad, soyad, doğum tarihi, ülke, kimlik tipi, kimlik numara, foto ön, foto arka, kimlik selfie
*/

const dummyData = {
    firstName: "Murat",
    lastName: "Güney",
    email: "murat@iotabt.com",
    phone: "+905054180558",
    birthday: "02-02-1995",
    national: "Türkiye",
    idType: "id",
    idNumber: "12312312312",
    photoFront: "",
    photoBehind: "",
    photoSelfie: ""
}

export default class ProfileMain extends React.Component {
    state = {}
    render() {
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
                            <Icon type="mail" /> {dummyData.email}
                        </div>
                        <div style={{ fontSize: 22, lineHeight: '40px' }}>
                            <Icon type="mobile" /> {dummyData.phone}
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
                        <p className="content-text">{dummyData.firstName}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Soyad</p>
                        <p className="content-text">{dummyData.lastName}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Doğum Tarihi</p>
                        <p className="content-text">{dummyData.birthday}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Ülke</p>
                        <p className="content-text">{dummyData.national}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Kimlik tipi</p>
                        <p className="content-text">{dummyData.idType}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Kimlik No</p>
                        <p className="content-text">{dummyData.idNumber}</p>
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Önden Kimlik Fotoğrafı</p>
                        {dummyData.photoFront ?
                            <p className="content-text">{dummyData.photoFront}</p>
                            : <Icon type="idcard" style={{ fontSize: 200, width: "100%", backgroundColor: "#eee" }} />
                        }
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Arkadan Kimlik Fotoğrafı</p>
                        {dummyData.photoBehind ?
                            <p className="content-text">{dummyData.photoBehind}</p>
                            : <Icon type="idcard" style={{ fontSize: 200, width: "100%", backgroundColor: "#eee" }} />
                        }
                    </div>
                    <div className="profile-content-cell">
                        <p className="content-label">Kimlik Selfie</p>
                        {dummyData.photoSelfie ?
                            <p className="content-text">{dummyData.photoSelfie}</p>
                            : <Icon type="idcard" style={{ fontSize: 200, width: "100%", backgroundColor: "#eee" }} />
                        }
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
