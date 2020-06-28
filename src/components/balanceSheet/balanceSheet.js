import React from 'react';
import { connect } from 'react-redux';

import BalanceSheetList from '../balanceSheetList/balanceSheetList.js';
import './balanceSheet.css'
import { updateAssetsSheet } from '../../actions/updateAssetsSheet.js';
import { updateLiabilitiesSheet } from '../../actions/updateLiabilitiesSheet.js';

class BalanceSheet extends React.Component{
    constructor(props) {
        super(props);
        if(props.title === 'Assets'){
            this.props.updateAssetsSheet();
        }else if(props.title === 'Liabilities'){
            this.props.updateLiabilitiesSheet();
        }
    }
    render() {
        return (
            <div className="balanceSheet">
                <div className="itemRow titleRow">
                    {this.props.title}
                </div>
                { this.subSheets() }
                <div className="itemRow">
                    {"Total " + this.props.title}
                    <div className="doubleLine"></div>
                </div>
            </div>
        );
    }
    subSheets() {
        if(this.props.lists){
            return this.props.lists.map((list) => {
                return (
                    <BalanceSheetList title={list.title} items={list.items} key={list.title}/>
                );
            });
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    if(ownProps.title === 'Assets'){
        if(state.assetsSheet){
            return { lists: state.assetsSheet.lists };
        }
    }else if(ownProps.title === 'Liabilities'){
        if(state.liabilitiesSheet){
            return { lists: state.liabilitiesSheet.lists };
        }
    }
    return {};
}

export default connect(mapStateToProps, { updateAssetsSheet, updateLiabilitiesSheet } )(BalanceSheet);