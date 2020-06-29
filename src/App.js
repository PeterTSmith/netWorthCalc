import React from 'react';
import BalanceSheet from './components/balanceSheet/balanceSheet';

import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props){
        super(props);
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

export default connect(mapStateToProps)(App);