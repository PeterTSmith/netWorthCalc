import React from 'react';
import BalanceSheet from './components/balanceSheet/balanceSheet';

import './App.css';

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
                    <BalanceSheet title={ 'Assets' } />
                    <BalanceSheet title={ 'Liabilities' } />
                </div>
            </div>
        );
    }
}

export default App;