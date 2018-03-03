import React from 'react';
import {InputNumber, Button, Divider} from 'antd';

const OwnInput = (props) => {
    return (
        <div style={{padding: '4px 0px 4px 0px', width: '100%'}}>
            <InputNumber min={0} defaultValue={0} style={{width: '100%'}} step="0.00000001"/>
        </div>
    )
}
export default class LimitOrder extends React.Component {
    render() {
        return (
            <div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    borderBottom: '1px solid #dedede',
                    justifyContent: 'space-around'
                }}>
                    <div style={{fontSize: '16px', fontWeight: 'bold'}}>ALIŞ EMRİ</div>
                    <div style={{fontSize: '16px', fontWeight: 'bold'}}>SATIŞ EMRİ</div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1, borderRight: '0.5px solid #dedede', padding: '16px'}}>
                        <div>
                            <div>BALANCEEEE</div>
                        </div>
                        <div style={{padding : '8px'}}>
                            <div>
                                <div>Adet Fiyatı TRY Cinsinden</div>
                                <OwnInput/>
                            </div>
                            <div>
                                <div>Toplam Miktar</div>
                                <OwnInput/>
                            </div>
                            <div>
                                <div>Toplam BTC</div>
                                <OwnInput/>
                            </div>
                            <div style={{paddingTop : '16px'}}>
                                <Button style={{width: '100%'}} type="primary"
                                        onClick={() => null}
                                        icon="caret-down">Alış</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{flex: 1, borderLeft: '0.5px solid #dedede', padding: '16px'}}>
                        <div>
                            <div>BALANCEEEE</div>
                        </div>
                        <div style={{padding : '8px'}}>
                            <div>
                                <div>Adet Fiyatı TRY Cinsinden</div>
                                <OwnInput/>
                            </div>
                            <div>
                                <div>Toplam Miktar</div>
                                <OwnInput/>
                            </div>
                            <div>
                                <div>Toplam BTC</div>
                                <OwnInput/>
                            </div>
                            <div style={{paddingTop : '16px'}}>
                                <Button style={{width: '100%'}} type="primary"
                                        onClick={() => null}
                                        icon="caret-up">Satış</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
