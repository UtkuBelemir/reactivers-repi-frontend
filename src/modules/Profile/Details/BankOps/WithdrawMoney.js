import React from 'react';
import {Button, Card, List} from "antd";
import SelectFieldInput from "../../../../components/FormComponents/SelectFieldInput";
import {Field, reduxForm} from "redux-form";
import CascaderInput from "../../../../components/FormComponents/CascaderInput";
import TextInput from "../../../../components/FormComponents/TextInput";
const depositInfo = [
    "Yatırmış olduğunuz tüm hesapların sahibi, BİKRİPT ŞİRKETİ'dir.",
    "Para işlemleriniz için hesap sahibi adınıza açılmış hesapları kullanmalısınız. Farklı isimlerle yapılan işlemler kabul edilmeyecektir.",
    "Bankamatik kullanılarak yapılan transferler, gönderici bilgilerini teyit etmek için, hesap sahibi adınız sistemdeki ile aynı olmalı. Bildirim bölümünden para yatırma ( İşlem Numarası / Tarih Saat ) bildirimizi yazmanız gerekmektedir. Aksi taktirde bankamatik transferleriniz geri gönderilemediği için, 7 gün içinde teyit edilemeyen işlemler geçersiz olacaktır.",
    "Emir tarihinden itibaren 7 gün içerisinde gerçekleştirilmeyen aktarımlar iptal edilir. Bu süreden sonra gerçekleşen Eft / Havale emirleri işlem ücreti düşülerek iade edilir.",
    "Para transferleriniz kontrollerimizin ardından sistem tarafından otomatik olarak hesabınıza yansıtılacaktır.",
    "Para transferleriniz esnasında size tahsis edilen emir kodunu açıklama alanına yazmanız gereklidir. Emir kodunu yazılmadan yapılan transferler işlem ücreti düşülerek iade edilir.",
    "Para transferi işlemleride, ücretlendirme 0 TL, 3.67 USD, 0 EURO olarak işlem ücreti uygulanmaktadır.",
    "En az işlem miktarı 249,00 TRY, 251,00 USD, 253,00 EURO'dur"
]
const validate = (values) => {
    const errors = {}
    if (values.deposit_info == null || values.deposit_info.length < 3){
        errors.deposit_info = "Lütfen ödeme bilgilerini doldurunuz"
    }
    if (values.deposit_amount == null || parseFloat(values.deposit_amount) < 250){
        errors.deposit_amount = "Lütfen 250'den büyük bir miktar giriniz"
    }
    return errors
}
const optionItems = [
    {
        value: 'eft_havale',
        label: 'EFT - Havale',
        children: [
            {
                value: 'try', label: '₺ TRY',
                children: [
                    {value: 'akbank', label: 'Akbank T.A.Ş'},
                    {value: 'isbankasi', label: 'T. İş Bankası A.Ş'},
                    {value: 'garanti', label: 'T. Garanti Bankası A.Ş'},
                    {value: 'yapikredi', label: 'Yapı ve Kredi Bankası A.Ş'}
                ],
            },
            {
                value: 'usd', label: '$ USD',
                children: [
                    {value: 'akbank', label: 'Akbank T.A.Ş'},
                    {value: 'isbankasi', label: 'T. İş Bankası A.Ş'},
                    {value: 'garanti', label: 'T. Garanti Bankası A.Ş'},
                    {value: 'yapikredi', label: 'Yapı ve Kredi Bankası A.Ş'}
                ],
            },
            {
                value: 'euro', label: '€ EURO',
                children: [
                    {value: 'akbank', label: 'Akbank T.A.Ş'},
                    {value: 'isbankasi', label: 'T. İş Bankası A.Ş'},
                    {value: 'garanti', label: 'T. Garanti Bankası A.Ş'},
                    {value: 'yapikredi', label: 'Yapı ve Kredi Bankası A.Ş'}
                ],
            }
        ],
    }
]

class WithdrawMoney extends React.Component {
    render() {
        return (
            <Card title="Para Yatırma">
                <List
                    bordered
                    dataSource={depositInfo}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                <div className="container-cell">
                    <Field name="deposit_info" component={CascaderInput} label="Ödeme Bilgisi"
                           placeholder="Ödeme Bilgilerini Seçiniz" showSearch
                           style={{width : '100%'}}
                           options={optionItems}/>
                    <Field name="deposit_amount" component={TextInput} label="Tutar"
                           type="number"
                           placeholder="Yatırmak İstediğiniz Tutarı Giriniz"/>
                </div>
                <Button disabled={!this.props.anyTouched || !this.props.valid}>
                    Para Yatır
                </Button>
            </Card>
        )
    }
}

export default reduxForm({form: "frm_deposit_money_to_bank", validate})(WithdrawMoney)
