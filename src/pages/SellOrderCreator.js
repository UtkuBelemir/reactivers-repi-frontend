import React from 'react';
import SaveButton from "../components/FormComponents/SaveButton";
import {reduxForm} from "redux-form";
import TextField from "../components/FormComponents/TextField";

class SellOrderCreator extends React.Component {
    render() {
        return(
            <div>
                <TextField name="btc_amount" label="BTC Amount"/>
                <br/>
                <TextField name="money_per_btc" label="Money Per BTC"/>
                <br/>
                <br/>
                <SaveButton raised={true} endpoint="sellorder" form="frm_new_sell_order">Kaydet</SaveButton>
            </div>
        )
    }
}
export default reduxForm({ form : "frm_new_sell_order"})(SellOrderCreator)