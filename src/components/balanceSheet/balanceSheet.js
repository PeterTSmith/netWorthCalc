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
        if(this.props.title === "Assets"){
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "+++"});
            this.props.updateAssetsSheet({listTitle: "Cash and Investments", name: "My New Value"});
        }else if(this.props.title === "Liabilities"){
            this.props.updateLiabilitiesSheet({listTitle: "Short Term Liabilities", name: "+++"});
            this.props.updateLiabilitiesSheet({listTitle: "Short Term Liabilities", name: "My New Value"});
        }
    }

    render() {
        return (
            <div className="balanceSheet">
                <div className="itemRow titleRow">
                    {this.props.title}
                </div>
                { this.renderSubSheets() }
                <div className="itemRow">
                    {"Total " + this.props.title}
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
                        <div className="itemRow titleRow">
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
        console.log("ASSET PROPS");
        console.log(stateProps);
    }else if(ownProps.title === 'Liabilities'){
        if(state.liabilitiesSheet){
            stateProps.lists = state.liabilitiesSheet.lists;
        }
        if(state.liabilityValues){
            stateProps.values = state.liabilityValues;
        }
        console.log("LIABILITY PROPS");
        console.log(stateProps);
    }
    return stateProps;
}

export default connect(mapStateToProps, { updateAssetsSheet, updateAssetValues, updateLiabilitiesSheet, updateLiabilityValues })(BalanceSheet);