import React from 'react';
import {DatePicker} from 'antd';
import FormItem from "antd/es/form/FormItem";
import moment from 'moment';

const dateFormat = 'DD.MM.YYYY';

export default class FormInput extends React.Component {
    render() {
        const {placeholder,label,...propsRest} = this.props
        const {touched, valid, error} = this.props.meta
        const {value,...inputRest} = this.props.input
        return (
            <FormItem help={touched && !valid ? error : ""}
                      validateStatus={touched && !valid ? "error" : "success"}>
                {label ? <p className="field-label">{label}</p> : null}
                <DatePicker {...inputRest} {...propsRest} value={value ? moment(value,dateFormat) : null} format={dateFormat} placeholder={placeholder}/>
            </FormItem>
        )
    }
}
