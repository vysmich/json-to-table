import React, { FC } from "react";
import { tableKids } from "../data/data";
import { TableRowKids } from "./table-row-kids.component";

interface KidsTableProps {
    data: tableKids;
}

export const KidsTable: FC<KidsTableProps> = ({ data }) => {
    const kidsName = Object.keys(data)[0];
    const columns = Object.keys(data[kidsName]?.records[0].data);

    return (
        <div className='ml-12 my-3'>
            <h2 className='text-lg text-gray-400 font-medium uppercase text-left'>{kidsName}</h2>
            <table className='border border-black'>
                <thead className='bg-gray-600 text-xs uppercase font-medium'>
                    <tr className='px-6 py-3 text-left tracking-wider'>
                        <th className='whitespace-nowrap px-3'>Open</th>
                        {columns.map((column, index) => (
                            <th className='whitespace-nowrap px-3' key={index}>
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data[kidsName].records.map((row, index: number) => (
                        <TableRowKids key={index} row={row} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
