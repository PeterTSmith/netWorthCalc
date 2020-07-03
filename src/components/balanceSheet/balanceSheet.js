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
    }

    render() {
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
                        { this.props.total }
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
                        { this.renderFields(list) }
                    </span>
                );
            });
        }else{
            return null;
        }
    }

    renderFields(list) {
        return (
            list.fields.map((item, index) => {
                if(index !== list.fields.length-1){
                    return (
                        <div className="itemRow" key={item.name}>
                            <div className="itemCellName">{item.name}</div>
                            <div className="itemCellContent">
                                <input className="itemInput" onChange={ (event) => { this.enteredValue(item.id, event.target.value) } } value={ this.props.values[item.id] }></input>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="itemRow itemRowFinal" key={item.name}>
                        <div className="itemCellName">{item.name}</div>
                        <div className="itemCellContent">
                            <input className="itemInput itemInputFinal" onChange={ (event) => { this.enteredValue(item.id, event.target.value) } } value={ this.props.values[item.id] }></input>
                        </div>
                    </div>
                );
            })
        );
    }

    enteredValue(id, value) {
        if(this.props.title === 'Assets') {
            this.props.updateAssetValues(this.props.docId, {id: id, valueChange: { prevVal: this.props.values[id], newVal: parseInt(value)}, dateModified: new Date().getTime()});
        } else if(this.props.title === 'Liabilities') {
            this.props.updateLiabilityValues(this.props.docId, {id: id, valueChange: { prevVal: this.props.values[id], newVal: parseInt(value)}, dateModified: new Date().getTime()});
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let stateProps = {};
    if(ownProps.title === 'Assets') {
        if(state.assetsSheet) {
            stateProps.lists = state.assetsSheet.content;
        }
        if(state.assetValues) {
            stateProps.values = {};
            for(let fieldValue of state.assetValues) {
                stateProps.values[fieldValue.fieldId] = fieldValue.value;
            }
        }
        stateProps.total = state.totalAssets;
    } else if(ownProps.title === 'Liabilities') {
        if(state.liabilitiesSheet) {
            stateProps.lists = state.liabilitiesSheet.content;
        }
        if(state.liabilityValues) {
            stateProps.values = {};
            for(let fieldValue of state.liabilityValues) {
                stateProps.values[fieldValue.fieldId] = fieldValue.value;
            }
        }
        stateProps.total = state.totalLiabilities;
    }
    stateProps.docId = state.activeDocId;
    for(let list of stateProps.lists) {
        for(let field of list.fields) {
            if(stateProps.values[field.id] === undefined){
                stateProps.values[field.id] = 0;
            }
        }
    }
    return stateProps;
}

export default connect(mapStateToProps, {
    updateAssetsSheet,
    updateAssetValues,
    updateLiabilitiesSheet,
    updateLiabilityValues
})(BalanceSheet);