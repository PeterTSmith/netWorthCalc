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

        this.state = {
            stickyNetWorth: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.getNetWorthClass);
        //setInterval(this.getNetWorthClass, 100);
    }

    getNetWorthClass = () => {
        let bounds = document.getElementById('contents').getBoundingClientRect();
        console.log(bounds);
        if(bounds.top <= 0) {
            this.setState({stickyNetWorth: true});
        }else{
            this.setState({stickyNetWorth: false});
        }

    }

    render() {
        return (
            <div className="netWorthTracker">
                <div className="netWorthTrackerSheets">
                    <h2 className="netWorthTrackerTitle">
                        Tracking Your Net Worth
                    </h2>
                    <div id="contents">
                        <div className={"itemRow titleRow" + (this.state.stickyNetWorth ? " netRow" : "")}>
                            <div className="itemCellName">
                                Net Worth
                            </div>
                            <div className="itemCellContent">
                                { this.props.netWorth }
                            </div>
                        </div>
                        <div className={(this.state.stickyNetWorth ? "netRowBuffer" : "")}></div>
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