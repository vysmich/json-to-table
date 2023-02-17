import React, { useState, FC } from "react";
import { ITableRow } from "../data/data";
import { KidsTable } from "./kids-table.component";

interface TableRowProps {
    row: ITableRow;
    index: number;
    setTableData: React.Dispatch<React.SetStateAction<ITableRow[]>>;
    tableData: ITableRow[];
}

export const TableRow: FC<TableRowProps> = ({ row, index, setTableData, tableData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const removeRowHandler = (row: ITableRow) => {
        return () => {
            const newTableData = tableData.filter(
                (item) => item.data["Identification number"] !== row.data["Identification number"]
            );
            setTableData(newTableData);
        };
    };

    return (
        <>
            <tr
                className={
                    index % 2 == 0
                        ? "bg-gray-800 bg-opacity-80 text-white py-4"
                        : "bg-gray-800 bg-opacity-60 text-white "
                }>
                <td className='py-3 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    {Object.keys(row.kids).length > 0 && (
                        <svg
                            className={`w-6 h-6 mx-auto  transform ${isOpen ? "rotate-180" : ""}`}
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                        </svg>
                    )}
                </td>
                {Object.values(row.data).map((value, index) => (
                    <td className='py-3' onClick={() => setIsOpen(!isOpen)} key={index}>
                        {value}
                    </td>
                ))}
                <td className='p-3 cursor-pointer' key={index} onClick={removeRowHandler(row)}>
                    x
                </td>
            </tr>

            {Object.keys(row.kids).length > 0 && isOpen && (
                <tr>
                    <td colSpan={5}>
                        <KidsTable data={row.kids} />
                    </td>
                </tr>
            )}
        </>
    );
};
