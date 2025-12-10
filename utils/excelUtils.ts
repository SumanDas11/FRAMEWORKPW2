import XLSX from "xlsx";

//Read data from excel
export function readExcelData(filePath: string, sheetName: string) {
    const wb = XLSX.readFile(filePath);
    const ws = wb.Sheets[sheetName]!;
    const data = XLSX.utils.sheet_to_json(ws);
    return data;
}

//Write data to excel
export function writeExcelData(filePath: string, sheetName: string, newData: any[]) {
    let wb;
    // If file exists → read it, else create new workbook
    try {
        wb = XLSX.readFile(filePath);
    } catch (err) {
        wb = XLSX.utils.book_new();
    }

    let ws = wb.Sheets[sheetName];

    // If sheet does not exist → create it directly with new data
    if (!ws) {
        const newWS = XLSX.utils.json_to_sheet(newData);
        XLSX.utils.book_append_sheet(wb, newWS, sheetName); // To append new sheet
        XLSX.writeFile(wb, filePath);
        return;
    }

    // If sheet exists
    const existingData = XLSX.utils.sheet_to_json(ws);
    const updatedData = [...existingData, ...newData];
    const updatedWs = XLSX.utils.json_to_sheet(updatedData);
    // Replace old sheet with updated one
    wb.Sheets[sheetName] = updatedWs;
    XLSX.writeFile(wb, filePath);
}