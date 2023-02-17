import React, { FC } from "react";
import { ITableRow } from "../data/data";
import { TableRow } from "./table-row.component";

interface MainTableProps {
    data: ITableRow[];
    setTableData: React.Dispatch<React.SetStateAction<ITableRow[]>>;
}

export const MainTable: FC<MainTableProps> = ({ data, setTableData }) => {
    const columns = Object.keys(data[0].data);
    return (
        <div className='container mx-auto'>
            <table className='min-w-full text-sm text-gray-400 border border-black'>
                <thead className='bg-gray-800 text-xs uppercase font-medium'>
                    <tr>
                        <th className='px-3 py-3 text-left tracking-wider'>Open</th>
                        {columns.map((column, index) => (
                            <th className='px-3 py-3 text-left tracking-wider' key={index}>
                                {column}
                            </th>
                        ))}
                        <th className='px-3 py-3 text-left tracking-wider'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <TableRow
                            key={row.data["Identification number"]}
                            row={row}
                            index={index}
                            setTableData={setTableData}
                            tableData={data}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
