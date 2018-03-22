import React from 'react';
import {Input, Button, Card, Icon, Modal, DatePicker, Select, Upload, Row, Col} from "antd";
import moment from 'moment'

const Option = Select.Option;

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
    photoSelfie: "",
    profilePhoto: ""
}

export default class AccountVerification extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <Card title="Hesap Onaylama" style={{minHeight: 'inherit'}}>
                    <div className="container-cell">
                        <p className="field-label">Kimlik Tipi</p>
                        <Select name="idType" defaultValue={dummyData.idType} style={{width: "100%"}}
                                onChange={e => console.log("e", e)}>
                            <Option value="id">Kİmlik</Option>
                            <Option value="passport">Pasaport</Option>
                        </Select>
                    </div>
                    <div className="container-cell">
                        <p className="field-label">Kimlik No</p>
                        <Input name="idNumber" placeholder="Kimlik No" onChange={e => console.log("e", e)}
                               value={dummyData.idNumber}/>
                    </div>
                    <div className="container-cell">
                        <p className="field-label">Önden Kimlik Fotoğrafı</p>
                        <Upload
                            name="photoFront"
                            listType="picture-card photo-upload-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            onChange={e => console.log("e", e)}
                        >
                            {dummyData.photoFront ? <img src={dummyData.photoFront} alt=""/> :
                                <div>
                                    <Icon type="idcard" style={{fontSize: 100}}/>

                                </div>
                            }
                        </Upload>
                    </div>
                    <div className="container-cell">
                        <p className="field-label">Arkadan Kimlik Fotoğrafı</p>
                        <Upload
                            name="photoBehind"
                            listType="picture-card photo-upload-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            onChange={e => console.log("e", e)}
                        >
                            {dummyData.photoFront ? <img src={dummyData.photoFront} alt=""/> :
                                <div>
                                    <Icon type="idcard" style={{fontSize: 100}}/>

                                </div>
                            }
                        </Upload>
                    </div>
                    <div className="container-cell">
                        <p className="field-label">Kimlik İle Selfie</p>
                        <Upload
                            name="photoSelfie"
                            listType="picture-card photo-upload-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            onChange={e => console.log("e", e)}
                        >
                            {dummyData.photoFront ? <img src={dummyData.photoFront} alt=""/> :
                                <div>
                                    <Icon type="idcard" style={{fontSize: 100}}/>

                                </div>
                            }
                        </Upload>
                    </div>
                    <div className="button-container">
                        <Button size="large" onClick={() => this.props.history.push("/profile/main")}
                                style={{margin: 8}}>
                            Vazgeç
                        </Button>
                        <Button type="primary" size="large" onClick={() => this.setState({changePasswordDialog: true})}
                                style={{margin: 8}}>
                            Kaydet
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }
}

