import React from 'react';
import BalanceSheet from '../balanceSheet/balanceSheet';
import { retrieveAssetValues } from '../../actions/retrieveAssetValues.js';
import { retrieveAssetsSheet } from '../../actions/retrieveAssetsSheet.js';
import { retrieveTotalAssetValue } from '../../actions/retrieveTotalAssetValue.js';
import { retrieveLiabilityValues } from '../../actions/retrieveLiabilityValues.js';
import { retrieveLiabilitiesSheet } from '../../actions/retrieveLiabilitiesSheet.js';
import { retrieveTotalLiabilityValue } from '../../actions/retrieveTotalLiabilityValue.js';
import { retrieveNetWorthValue } from '../../actions/retrieveNetWorthValue.js';

import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props){
        super(props);

        this.props.retrieveAssetsSheet();
        this.props.retrieveAssetValues();
        this.props.retrieveTotalAssetValue();

        this.props.retrieveLiabilitiesSheet();
        this.props.retrieveLiabilityValues();
        this.props.retrieveTotalLiabilityValue();

        this.props.retrieveNetWorthValue();
    }

    render() {
        return (
            <div className="netWorthTracker">
                <div className="netWorthTrackerSheets">
                    <h2 className="netWorthTrackerTitle">
                        Tracking Your Net Worth
                    </h2>
                    <div>
                        <div className="itemRow titleRow">
                            <div className="itemCellName">
                                Net Worth
                            </div>
                            <div className="itemCellContent">
                                { this.props.netWorth }
                            </div>
                        </div>
                        <BalanceSheet title={ 'Assets' } />
                        <BalanceSheet title={ 'Liabilities' } />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state, ownProps){
    let stateProps = {};
    if(state.netWorth){
        stateProps.netWorth = state.netWorth;
    }
    return stateProps;
}

export default connect(mapStateToProps, {
    retrieveAssetValues,
    retrieveAssetsSheet,
    retrieveTotalAssetValue,
    retrieveLiabilityValues,
    retrieveLiabilitiesSheet,
    retrieveTotalLiabilityValue,
    retrieveNetWorthValue
})(App);