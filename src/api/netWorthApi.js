import axios from 'axios';

const axiosConfig =  {
    baseURL: 'http://localhost:8080'
};

//  ASSETS SHEET

export function getAssetsSheet(docId) {
    return axios.get('/assetsSheet', axiosConfig);
}

export function postAssetsSheetRow(assetsSheetField) {
    axios.post("/assetsSheet", assetsSheetField, axiosConfig)
}

//  ASSET VALUES

export function getAssetValues(docId) {
    return axios.get('/assetValues?docId=' + docId, axiosConfig);
}

export function postAssetValues(docId, assetValues) {
    axios.post("/assetValues?docId=" + docId, assetValues, axiosConfig);
}

export function getTotalAssetValue(docId) {
    return axios.get("/totalAssetValue?docId=" + docId, axiosConfig);
}

//  LIABILITIES SHEET

export function getLiabilitiesSheet(docId) {
    return axios.get('/liabilitiesSheet', axiosConfig);
}

export function postLiabilitiesSheetRow(liabilitiesSheetField) {
    axios.post("/liabilitiesSheet", liabilitiesSheetField, axiosConfig);
}

//  LIABILITY VALUES

export function getLiabilityValues(docId) {
    return axios.get("/liabilityValues?docId=" + docId, axiosConfig);
}

export function postLiabilityValues(docId, liabilityValues) {
    axios.post("/liabilityValues?docId=" + docId, liabilityValues, axiosConfig);
}

export function getTotalLiabilityValue(docId) {
    return axios.get("/totalLiabilityValue?docId=" + docId, axiosConfig);
}

//  NET WORTH VALUES

export function getNetWorthValue(docId) {
    return axios.get("/netWorthValue?docId=" + docId, axiosConfig);
}