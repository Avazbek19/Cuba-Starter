import React, { useState } from 'react'
import { MdOutlinePlaylistAdd, MdOutlinePlaylistRemove } from "react-icons/md";
import { tableColumns4 } from '../Constants'

export default function WTable() {
    const [tableData, setTableData] = useState([
        { id: 1, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '', column10: '', column11:''}
    ]);

    const handleAddRow = () => {
        const newId = tableData.length === 0 ? 1 : tableData[tableData.length - 1].id + 1;
        const newRow = { id: newId, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '', column10: '', column11: ''};
        setTableData([...tableData, newRow]);
    };

    const handleRemoveRow = (id) => {
        if (tableData.length > 1) {
            const updatedTableData = tableData.filter(row => row.id !== id);
            setTableData(updatedTableData);
        }
    }

    return (
        <div className='my-5'>
            <table className="table my-4 table-border">
                <tbody>
                    <tr className='backround-tr'>
                        {
                            tableColumns4.map((item, index) => {
                                return (
                                    <td key={index}>{item}</td>
                                )
                            })
                        }
                    </tr>
                    {tableData.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                <button className='btn-no-name table-action-btn text-success' onClick={handleAddRow}>
                                    <MdOutlinePlaylistAdd />
                                </button>
                                <button className='btn-no-name table-action-btn text-danger' onClick={() => handleRemoveRow(row.id)}>
                                    <MdOutlinePlaylistRemove />
                                </button>
                            </td>
                            <td>{row.column1}</td>
                            <td>{row.column2}</td>
                            <td>{row.column3}</td>
                            <td>{row.column4}</td>
                            <td>{row.column5}</td>
                            <td>{row.column6}</td>
                            <td>{row.column7}</td>
                            <td>{row.column8}</td>
                            <td>{row.column9}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}