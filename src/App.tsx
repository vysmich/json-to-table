import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainTable } from "./components/main-table.component";
import { ITableRow, data } from "./data/data";

function App() {
    const [tableData, setTableData] = useState<ITableRow[]>(data);
    return (
        <div className='App'>
            <MainTable data={tableData} setTableData={setTableData} />
        </div>
    );
}

export default App;
