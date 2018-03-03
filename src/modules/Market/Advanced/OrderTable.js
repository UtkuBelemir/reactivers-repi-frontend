import React from 'react';
import {Table} from 'antd';

export default class OrderTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableColumns: [],
            tableData: []
        }
    }

    componentWillMount() {
        if (this.props.data) {
            let allData = {}
            let allColumns = []
            this.props.data.map((dat, index) => {
                if (allData[dat.close]) {
                    allData[dat.close] = {...allData[dat.close], volume: (allData[dat.close].volume + dat.volume)}
                } else {
                    allData[dat.close] = {close: dat.close, volume: dat.volume,amount : dat.close, key: index}
                }
            })
            this.props.data.columns.map((col) => {
                if (col !== "date" && col !== "high" && col !== "low" && col !== "open") {
                    allColumns.push(
                        {
                            title: col.capitalize(),
                            dataIndex: col, width: 150,
                        }
                    )
                }
            })
            allColumns.push(
                {
                    title: "Amount",
                    dataIndex: "amount", width: 150,
                }
            )
            this.setState({
                tableColumns: allColumns,
                tableData: Object.values(allData),
            })
        }
    }

    //TODO : First Table For sale orders and second table for buy orders. After database design tables and data will be correct
    render() {
        window.xt = this.props.data
        return (
            <Table pagination={false} dropdownPrefixCls={null} onChange={(e) => null}
                   rowClassName="reactivers-order-table-row"
                   showHeader={this.props.showHeader}
                   columns={this.state.tableColumns} dataSource={this.state.tableData} size="small" style={{fontSize : '9px'}} scroll={{y: this.props.height}}/>
        )
    }
}
