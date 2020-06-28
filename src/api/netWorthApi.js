export function getAssetSheet() {
    return {
        title: "Assets",
        lists: [
            {
                title: "Cash and Investments",
                items: [
                    {name: "Chequing"},
                    {name: "Savings for Taxes"},
                    {name: "Rainy Day Fund"},
                    {name: "Savings for Fun"},
                    {name: "Savings for Travel"},
                    {name: "Savings for Personal Development"},
                    {name: "Investment 1"},
                    {name: "Investment 2"},
                    {name: "Investment 3"},
                    {name: "Investment 4"},
                    {name: "Investment 5"}
                ]
            },
            {
                title: "Long Term Assets",
                items: [
                    {name: "Primary Home"},
                    {name: "Second Home"},
                    {name: "Other"}
                ]
            }
        ]
    };
}

export function getLiabilitiesSheet() {
    return {
        title: "Liabilities",
        lists: [
            {
                title: "LPart1",
                items: [
                    {name: "l0.0"},
                    {name: "l0.1"},
                    {name: "l0.2"}
                ]
            },
            {
                title: "LPart2",
                items: [
                    {name: "l1.0"},
                    {name: "l1.1"},
                    {name: "l1.2"}
                ]
            },
        ]
    };
}