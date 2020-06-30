import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8080'
});

//  ASSETS SHEET

export function getAssetsSheet() {
    return axiosApi.get('/assetsSheet');
}

export function putAssetsSheetRow(assetsSheetRow) {
    console.log("Sent new assets sheet row to server!");
}

//  ASSET VALUES

export function getAssetValues() {
    return {
        chequing: 55.60
    }
}

export function putAssetValues(assetValues) {
    console.log("Sent new asset values to server!");
}

export function getTotalAssetValue() {
    return -1;
}

//  LIABILITIES SHEET

export function getLiabilitiesSheet() {
    return {
        title: "Liabilities",
        content: [
            {
                title: "Short Term Liabilities",
                fields: [
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
                fields: [
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

export function putLiabilitiesSheetRow(liabilitiesSheetRow) {
    console.log("Sent new liabilities sheet row to server!");
}

//  LIABILITY VALUES

export function getLiabilityValues() {
    return {
        mortgage1: "42.60"
    }
}

export function putLiabilityValues(liabilityValues) {
    console.log("Sent new liability values to server!");
}

export function getTotalLiabilityValue() {
    return -1;
}

//  NET WORTH VALUES

export function getNetWorthValue() {
    return -1;
}