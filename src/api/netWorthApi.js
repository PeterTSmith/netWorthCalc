import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8080'
});

//  ASSETS SHEET

export function getAssetsSheet() {
    return axiosApi.get('/assetsSheet');
}

export function postAssetsSheetRow(assetsSheetField) {
    axiosApi.post("/assetsSheet", assetsSheetField)
}

//  ASSET VALUES

export function getAssetValues() {
    return axiosApi.get('/assetValues');
}

export function postAssetValues(assetValues) {
    axiosApi.post("/assetValues", assetValues);
}

export function getTotalAssetValue() {
    return axiosApi.get("/totalAssetValue");
}

//  LIABILITIES SHEET

export function getLiabilitiesSheet() {
    return axiosApi.get('/liabilitiesSheet');
}

export function postLiabilitiesSheetRow(liabilitiesSheetField) {
    axiosApi.post("/liabilitiesSheet", liabilitiesSheetField);
}

//  LIABILITY VALUES

export function getLiabilityValues() {
    return axiosApi.get("/liabilityValues");
}

export function postLiabilityValues(liabilityValues) {
    axiosApi.post("/liabilityValues", liabilityValues);
}

export function getTotalLiabilityValue() {
    return axiosApi.get("/totalLiabilityValue");
}

//  NET WORTH VALUES

export function getNetWorthValue() {
    return axiosApi.get("/netWorthValue");
}