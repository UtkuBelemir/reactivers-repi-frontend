import React from 'react';
import {Select} from 'antd';
import FormItem from "antd/es/form/FormItem";

const Option = Select.Option;
/*allowClear
autoFocus , defaultActiveFirstOption , defaultValue
disabled
dropdownClassName
dropdownMatchSelectWidth
dropdownStyle
filterOption
firstActiveValue
getPopupContainer
labelInValue
maxTagCount
maxTagPlaceholder
mode
notFoundContent
optionFilterProp
optionLabelProp
placeholder
showSearch
showArrow
size
tokenSeparators
value
onBlur
onSelect
*/
export default class SelectFieldInput extends React.Component {
    render() {
        const {placeholder, filterOption, items, label, ...propsRest} = this.props
        const {touched, valid, error} = this.props.meta
        const {...inputRest} = this.props.input
        return (
            <FormItem help={touched && !valid ? error : ""}
                      validateStatus={touched && !valid ? "error" : "success"}>
                {label ? <p className="field-label">{label}</p> : null}
                <Select
                    placeholder={placeholder}
                    {...propsRest}
                    {...inputRest}
                    filterOption={(input, option) => filterOption(input, option)}>
                    {items && items.length > 0 ? items.map((optItem) => <Option
                        value={optItem.value}>{optItem.dsc}</Option>) : null}
                </Select>
            </FormItem>
        )
    }
}
