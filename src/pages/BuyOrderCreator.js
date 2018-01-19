import React from 'react';
import SaveButton from "../components/FormComponents/SaveButton";
import {reduxForm} from "redux-form";
import TextField from "../components/FormComponents/TextField";

class BuyOrderCreator extends React.Component {
    render() {
        return(
            <div>
                <TextField name="btc_amount" label="BTC Amount"/>
                <br/>
                <TextField name="money_per_btc" label="Money Per BTC"/>
                <br/>
                <br/>
                <SaveButton raised={true} endpoint="buyorder" form="frm_new_buy_order">Kaydet</SaveButton>
            </div>
        )
    }
}
export default reduxForm({ form : "frm_new_buy_order"})(BuyOrderCreator)