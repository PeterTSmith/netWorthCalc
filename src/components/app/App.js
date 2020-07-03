import React from 'react';
import BalanceSheet from '../balanceSheet/balanceSheet';
import { updateActiveDocId } from '../../actions/updateActiveDocId.js';
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

        this.props.updateActiveDocId(0);

        this.props.retrieveAssetsSheet(this.props.activeDocId);
        this.props.retrieveAssetValues(this.props.activeDocId);
        this.props.retrieveTotalAssetValue(this.props.activeDocId);

        this.props.retrieveLiabilitiesSheet(this.props.activeDocId);
        this.props.retrieveLiabilityValues(this.props.activeDocId);
        this.props.retrieveTotalLiabilityValue(this.props.activeDocId);

        this.props.retrieveNetWorthValue(this.props.activeDocId);
    }

    funTest = () => {

        this.props.updateActiveDocId(1);

        this.props.retrieveAssetsSheet(1);
        this.props.retrieveAssetValues(1);
        this.props.retrieveTotalAssetValue(1);

        this.props.retrieveLiabilitiesSheet(1);
        this.props.retrieveLiabilityValues(1);
        this.props.retrieveTotalLiabilityValue(1);

        this.props.retrieveNetWorthValue(1);

    }

    render() {
        return (
            <div className="netWorthTracker">
                <div className="netWorthTrackerSheets">
                    <h2 className="netWorthTrackerTitle" onClick={this.funTest}>
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
    console.log(state.activeDocId);
    stateProps.activeDocId = state.activeDocId;
    return stateProps;
}

export default connect(mapStateToProps, {
    updateActiveDocId,
    retrieveAssetValues,
    retrieveAssetsSheet,
    retrieveTotalAssetValue,
    retrieveLiabilityValues,
    retrieveLiabilitiesSheet,
    retrieveTotalLiabilityValue,
    retrieveNetWorthValue
})(App);