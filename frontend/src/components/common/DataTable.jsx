import React from 'react';

const DataTable = ({ columns, data, keyField = 'id' }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 uppercase text-xs font-semibold text-bank-textLight tracking-wider">
            {columns.map((col, idx) => (
              <th key={idx} className="pb-4 pt-2 px-4 whitespace-nowrap">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-50">
          {data.map((row) => (
            <tr key={row[keyField]} className="hover:bg-gray-50/50 transition-colors">
              {columns.map((col, idx) => (
                <td key={idx} className="py-4 px-4 whitespace-nowrap">
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="py-8 text-center text-gray-400 font-medium">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
