import React from 'react';
import { connect } from 'react-redux';

import { updateAssetsSheet } from '../../actions/updateAssetsSheet.js';
import { updateAssetValues } from '../../actions/updateAssetValues.js';
import { updateLiabilitiesSheet } from '../../actions/updateLiabilitiesSheet.js';
import { updateLiabilityValues } from '../../actions/updateLiabilityValues.js';

import './balanceSheet.css';

class BalanceSheet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
        if(this.props.title === "Assets"){
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "+ee++"});
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "My New Value"});
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "My New Value"});
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "Myeeeee"});
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "My New Value"});
        }else if(this.props.title === "Liabilities"){
            this.props.updateLiabilitiesSheet({listTitle: "Short Term Liabilities", name: "++asdf+"});
            this.props.updateLiabilitiesSheet({listTitle: "Short Term Liabilities", name: "My New Value"});
        }
    }

    render() {
        let total = 0;
        for(let value in this.props.values){
            total += this.props.values[value];
        }
        return (
            <div className="balanceSheet">
                <div className="itemRow titleRow">
                    {this.props.title}
                </div>
                { this.renderSubSheets() }
                <div className="itemRow totalRow">
                    <div className="itemCellName">
                        { "Total " + this.props.title }
                    </div>
                    <div className="itemCellContent">
                        { total }
                    </div>
                    <div className="doubleLine"></div>
                </div>
            </div>
        );
    }

    renderSubSheets() {
        if(this.props.lists){
            return this.props.lists.map((list) => {
                return (
                    <span key={ list.title }>
                        <div className="itemRow subTitleRow">
                            {list.title}
                        </div>
                        {
                            this.renderItems(list)
                        }
                    </span>
                );
            });
        }else{
            return null;
        }
    }

    renderItems(list) {
        return (
            list.items.map((item, index) => {
                if(index !== list.items.length-1){
                    return (
                        <div className="itemRow" key={item.name}>
                            <div className="itemCellName">{item.name}</div>
                            <div className="itemCellContent">
                                <input className="itemInput" onChange={ (event) => { this.enteredValue(item.id, event.target.value) } } value={item.value}></input>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="itemRow itemRowFinal" key={item.name}>
                        <div className="itemCellName">{item.name}</div>
                        <div className="itemCellContent">
                            <input className="itemInput itemInputFinal" onChange={ (event) => { this.enteredValue(item.id, event.target.value) } } value={item.value}></input>
                        </div>
                    </div>
                );
            })
        );
    }

    enteredValue(id, value) {
        console.log(id + ", " + value)
        if(this.props.title === 'Assets') {
            this.props.updateAssetValues({id: id, value: value});
        } else if(this.props.title === 'Liabilities') {
            this.props.updateLiabilityValues({id: id, value: value});
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let stateProps = {};
    if(ownProps.title === 'Assets'){
        if(state.assetsSheet){
            stateProps.lists = state.assetsSheet.lists;
        }
        if(state.assetValues){
            stateProps.values = state.assetValues;
        }
    }else if(ownProps.title === 'Liabilities'){
        if(state.liabilitiesSheet){
            stateProps.lists = state.liabilitiesSheet.lists;
        }
        if(state.liabilityValues){
            stateProps.values = state.liabilityValues;
        }
    }
    return stateProps;
}

export default connect(mapStateToProps, { updateAssetsSheet, updateAssetValues, updateLiabilitiesSheet, updateLiabilityValues })(BalanceSheet);