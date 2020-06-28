import React from 'react';
import '../balanceSheet/balanceSheet.css';
import './balanceSheetList.css';

class BalanceSheetList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span>
                <div className="itemRow titleRow">
                    {this.props.title}
                </div>
                { this.createList() }
            </span>
        );
    }
    createList() {
        return this.props.items.map((item, index) => {
            if(index !== this.props.items.length-1){
                return (
                    <div className="itemRow" key={item.name}>
                        <div className="itemCellName">{item.name}</div>
                        <div className="itemCellContent">
                            <input className="itemInput" onChange={ this.enteredValue } value={item.value}></input>
                        </div>
                    </div>
                );
            }
            return (
                <div className="itemRow itemRowFinal" key={item.name}>
                    <div className="itemCellName">{item.name}</div>
                    <div className="itemCellContent">
                        <input className="itemInput itemInputFinal"></input>
                    </div>
                </div>
            );
        });
    }

    enteredValue(event){
        console.log(event.target.value);
    }
}

export default BalanceSheetList;