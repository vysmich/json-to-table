import React, { useState, FC } from "react";
import { ITableRow } from "../data/data";
import { KidsTable } from "./kids-table.component";

interface TableRowKidsProps {
    row: ITableRow;
    index: number;
}
export const TableRowKids: FC<TableRowKidsProps> = ({ row, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <tr
                onClick={() => setIsOpen(!isOpen)}
                className={
                    index % 2 == 0 ? "bg-gray-800 bg-opacity-80 text-white" : "bg-gray-800 bg-opacity-60 text-white"
                }>
                <td className='py-2 cursor-pointer'>
                    {Object.keys(row.kids).length > 0 && (
                        <svg
                            className={`w-4 h-4 mx-auto  transform ${isOpen ? "rotate-180" : ""}`}
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                        </svg>
                    )}
                </td>
                {Object.values(row.data).map((cell, index) => (
                    <td className='whitespace-nowrap px-3' key={index}>
                        {cell}
                    </td>
                ))}
            </tr>
            {Object.keys(row.kids).length > 0 && isOpen && (
                <tr>
                    <td colSpan={5}>
                        {" "}
                        <KidsTable data={row.kids} />
                    </td>
                </tr>
            )}
        </>
    );
};
