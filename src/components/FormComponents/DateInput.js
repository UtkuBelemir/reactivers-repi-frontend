import React from 'react';
import {DatePicker} from 'antd';
import FormItem from "antd/es/form/FormItem";
import moment from 'moment';
moment.locale('tr');
export default class DateInput extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        //TODO : Öncelikle seçilen dile göre yoksa tarayıcının diline göre
        moment.locale('tr');
    }
    render() {
        const {placeholder, label, ...propsRest} = this.props;
        const {touched, valid, error} = this.props.meta;
        const {value, ...inputRest} = this.props.input;
        return (
            <FormItem help={touched && !valid ? error : ""}
                      validateStatus={touched && !valid ? "error" : "success"}>
                {label ? <p className="field-label">{label}</p> : null}
                <DatePicker {...inputRest} {...propsRest}
                            value={value ? moment(value) : null}
                            placeholder={placeholder}/>
            </FormItem>
        )
    }
}
