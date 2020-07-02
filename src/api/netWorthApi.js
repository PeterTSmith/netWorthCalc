import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8080'
});

//  ASSETS SHEET

export function getAssetsSheet(docId) {
    return axiosApi.get('/assetsSheet');
}

export function postAssetsSheetRow(assetsSheetField) {
    axiosApi.post("/assetsSheet", assetsSheetField)
}

//  ASSET VALUES

export function getAssetValues(docId) {
    return axiosApi.get('/assetValues?docId=' + docId);
}

export function postAssetValues(assetValues) {
    axiosApi.post("/assetValues", assetValues);
}

export function getTotalAssetValue(docId) {
    return axiosApi.get("/totalAssetValue?docId=" + docId);
}

//  LIABILITIES SHEET

export function getLiabilitiesSheet(docId) {
    return axiosApi.get('/liabilitiesSheet');
}

export function postLiabilitiesSheetRow(liabilitiesSheetField) {
    axiosApi.post("/liabilitiesSheet", liabilitiesSheetField);
}

//  LIABILITY VALUES

export function getLiabilityValues(docId) {
    return axiosApi.get("/liabilityValues?docId=" + docId);
}

export function postLiabilityValues(liabilityValues) {
    axiosApi.post("/liabilityValues", liabilityValues);
}

export function getTotalLiabilityValue(docId) {
    return axiosApi.get("/totalLiabilityValue?docId=" + docId);
}

//  NET WORTH VALUES

export function getNetWorthValue(docId) {
    return axiosApi.get("/netWorthValue?docId=" + docId);
}