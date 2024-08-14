import React, { useState } from 'react';
import TableModifier from './TableModifier';

const Table = ({ data, selectedRowIndex, updateSelectedRowIndex, insertRow, deleteRow, updateData, isLoading }) => {
    const columns = {
        timestamp: 'Time',
        move: 'Move',
        prev: 'Starting FEN String',
        next: 'Ending FEN String'
    };
    let [selectedColumns, updateSelectedColumns] = useState(Object.keys(columns).reduce((acc, key) => {
        acc[key] = true;
        return acc;
    }, {}));
    if (!data || data.length === 0) {
        return (
            <>
                <h5 style={{ textAlign: 'center' }}>No data found</h5>
                <TableModifier insertRow={insertRow} deleteRow={deleteRow} updateData={updateData} isLoading={isLoading}/>
            </>
        );
    }

    function getUsedColumns(selectedColumns) {
        return Object.keys(selectedColumns).filter(key => selectedColumns[key]);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {getUsedColumns(selectedColumns).map((key, index) => {
                            return (
                                <th key={index}>{columns[key]}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <tr
                                key={index}
                                className={selectedRowIndex === index ? 'highlight-row' : ''}
                                onClick={() => updateSelectedRowIndex(index)}
                            >
                                {getUsedColumns(selectedColumns).map((key, index) => {
                                    return (
                                        <td key={index}>{row[key]}</td>
                                    );
                                })}
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
            <section className='flexbox-row'>
                <section className='flexbox-column'>
                    <h2>Columns</h2>
                    {Object.keys(columns).map((key, index) => {
                        return (
                            <label key={index}>
                                <input
                                    type='checkbox'
                                    checked={selectedColumns[key]}
                                    onChange={() => updateSelectedColumns({ ...selectedColumns, [key]: !selectedColumns[key] })}
                                />
                                {columns[key]}
                            </label>
                        );
                    })}
                </section>
                <TableModifier insertRow={insertRow} deleteRow={deleteRow} updateData={updateData} isLoading={isLoading}/>
            </section>
        </div>
    );
};

export default Table;