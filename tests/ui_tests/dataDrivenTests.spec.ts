import { test, expect } from "@playwright/test";
import { readExcelData, writeExcelData } from "../../utils/excelUtils.js";


test('read data from excel', async ({ page }) => {
    //read data
    const data = readExcelData("./testData/TestData.xlsx", "Sheet 1");

    console.log("Data from the excel file is:")
    console.log(data);
});

test('write data to excel', async ({ page }) => {
    const data2 = [
        { FName: 'Lion', LName: 'Last', DOB: 1012021, Email: 'eagle@gmail.com' },
    ];

    //write data
    writeExcelData("./testData/TestData2.xlsx", "Sheet 2", data2);

    console.log("Data from the excel file is:")
    console.log(readExcelData("./testData/TestData2.xlsx", "Sheet 2"));
});