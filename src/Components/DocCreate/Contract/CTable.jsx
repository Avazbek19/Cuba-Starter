import React, { useState } from 'react'
import { MdOutlinePlaylistAdd, MdOutlinePlaylistRemove } from "react-icons/md";
import { tableColumns } from '../Constants';



export default function CTable() {
    const [table, setTable] = useState('')
    const [tableData, setTableData] = useState([
        { id: 1, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '', column10: '', column11: '', column12: '', column13: '' }
    ]);

    const handleAddRow = () => {
        const newId = tableData.length + 1;
        const newRow = { id: newId, column1: '', column2: '', };
        setTableData([...tableData, newRow]);
    };

    const handleRemoveRow = (id) => {
        const updatedTableData = tableData.filter(row => row.id !== id);
        setTableData(updatedTableData);
    }
    return (
        <div className='my-4'>
            <div className='row align-items-center'>
                <div className="col-2 row">
                    <div className="col-4">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">НДС </label>
                    </div>
                    <div className="col-8">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">Обратный расчет</label>
                    </div>
                </div>
                <div className='col-2 box-of-input'>
                    <input
                        className='input-animation'
                        type="number"
                        required
                        value={table}
                        onChange={(e) => setTable(e.target.value)}
                    />
                    <span>Положение таблицы</span>
                </div>
            </div>
            <table className="table my-4 table-border">
                <tbody>
                    <tr className='backround-tr'>
                        {
                            tableColumns.map((item, index) => {
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
                            <td>{row.column10}</td>
                            <td>{row.column11}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}