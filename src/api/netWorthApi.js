export function getAssetsSheet() {
    return {
        title: "Assets",
        lists: [
            {
                title: "Cash and Investments",
                items: [
                    {
                        id: "chequing",
                        name: "Chequing"
                    },
                    {
                        id: "savingsForTaxes",
                        name: "Savings for Taxes"
                    },
                    {
                        id: "rainyDayFund",
                        name: "Rainy Day Fund"
                    },
                    {
                        id: "savingsForFun",
                        name: "Savings for Fun"
                    },
                    {
                        id: "savingsForTravel",
                        name: "Savings for Travel"
                    },
                    {
                        id: "savingsForPersonalDevelopment",
                        name: "Savings for Personal Development"
                    },
                    {
                        id: "investment1",
                        name: "Investment 1"
                    },
                    {
                        id: "investment2",
                        name: "Investment 2"
                    },
                    {
                        id: "investment3",
                        name: "Investment 3"
                    },
                    {
                        id: "investment4",
                        name: "Investment 4"
                    },
                    {
                        id: "investment5",
                        name: "Investment 5"
                    }
                ]
            },
            {
                title: "Long Term Assets",
                items: [
                    {
                        id: "primaryHome",
                        name: "Primary Home"
                    },
                    {
                        id: "secondHome",
                        name: "Second Home"
                    },
                    {
                        id: "other",
                        name: "Other"
                    }
                ]
            }
        ]
    };
}

export function getAssetValues() {
    return [
        {
            id: "chequing",
            value: "55.60"
        }
    ]
}

export function getLiabilitiesSheet() {
    return {
        title: "Liabilities",
        lists: [
            {
                title: "Short Term Liabilities",
                items: [
                    {
                        id: "creditCard1",
                        name: "Credit Card 1"
                    },
                    {
                        id: "creditCard2",
                        name: "Credit Card 2"
                    },
                    {
                        id: "others",
                        name: "(others...)"
                    }
                ]
            },
            {
                title: "Long Term Debt",
                items: [
                    {
                        id: "mortgage1",
                        name: "Mortgage 1"
                    },
                    {
                        id: "mortgage2",
                        name: "Mortgage 2"
                    },
                    {
                        id: "lineOfCredit",
                        name: "Line of Credit"
                    },
                    {
                        id: "investmentLoan",
                        name: "Investment Loan"
                    },
                    {
                        id: "studentLoan",
                        name: "Student Loan"
                    },
                    {
                        id: "carLoan",
                        name: "Car Loan"
                    }
                ]
            },
        ]
    };
}

export function getLiabilityValues() {
    return [
        {
            id: "mortgage1",
            value: "42.60"
        }
    ]
}