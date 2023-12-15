import React, { useState } from 'react'
import { MdOutlinePlaylistAdd, MdOutlinePlaylistRemove } from "react-icons/md";
import { tableColumns3 } from '../Constants';



export default function ETable() {
    const [tableData, setTableData] = useState([
        { id: 1, column1: '', column2: '', column3: '', column4: '' }
    ]);

    const handleAddRow = () => {
        const newId = tableData.length === 0 ? 1 : tableData[tableData.length - 1].id + 1;
        const newRow = { id: newId, column1: '', column2: '', column3: '', column4: '' };
        setTableData([...tableData, newRow]);
    };


    const handleRemoveRow = (id) => {
        const updatedTableData = tableData.filter(row => row.id !== id);
        setTableData(updatedTableData);
    }
    return (
        <div className='my-4'>
            <table className="table my-4 table-border">
                <tbody>
                    <tr className='backround-tr'>
                        {
                            tableColumns3.map((item, index) => {
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
                            <td>
                                <select name="" id="" className='input-animation'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </td>
                            <td>{row.column3}</td>
                            <td>{row.column4}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}