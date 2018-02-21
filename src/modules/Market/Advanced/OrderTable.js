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
                    allData[dat.close] = {close: dat.close, volume: dat.volume, key: index}
                }
            })
            this.props.data.columns.map((col) => {
                if (col !== "date" && col !== "high" && col !== "low" && col !== "open") {
                    allColumns.push(
                        {
                            title: col.capitalize(),
                            dataIndex: col,width: 150,
                        }
                    )
                }
            })
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
            <div style={{width : 300}}>
                <Table pagination={false} dropdownPrefixCls={null} onChange={() => null} rowSelection={null}
                       columns={this.state.tableColumns} dataSource={this.state.tableData} size="small" scroll={{ y: 266 }}/>
                <Table pagination={false} dropdownPrefixCls={null} onChange={() => null} rowSelection={null}
                       showHeader={false}
                       columns={this.state.tableColumns} dataSource={this.state.tableData} size="small" scroll={{ y: 266 }}/>
            </div>
        )
    }
}
