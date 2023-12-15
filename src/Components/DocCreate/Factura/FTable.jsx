import React, { useState } from 'react'
import { MdOutlinePlaylistAdd, MdOutlinePlaylistRemove } from "react-icons/md";
import { tableColumns2 } from '../Constants';



export default function FTable() {
    const [tableData, setTableData] = useState([
        { id: 1, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '', column10: '', column11: '', column12: '', column13: '' }
    ]);

    const handleAddRow = () => {
        const newId = tableData.length === 0 ? 1 : tableData[tableData.length - 1].id + 1;
        const newRow = { id: newId, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '', column10: '', column11: '', column12: '', column13: '' };
        setTableData([...tableData, newRow]);
    };

    const handleRemoveRow = (id) => {
        if (tableData.length > 1) {
            const updatedTableData = tableData.filter(row => row.id !== id);
            setTableData(updatedTableData);
        }
    }
    return (
        <div className='my-2'>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <input className='input-animation mt-3' type="number" placeholder='Номер' value={''} onChange={(e) => (e.target.value)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <input className='input-animation mt-3' type="date" value={''} onChange={(e) => (e.target.value)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <input className='input-animation mt-3' type="number" placeholder='ПИНФЛ (физ. лица)' value={''} onChange={(e) => (e.target.value)} />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <input className='input-animation mt-3' type="text" placeholder='Полное имя (ФИО)' value={''} onChange={(e) => (e.target.value)} />
                </div>
                <div className="col-12">
                    <div className="form-check form-check-inline mt-5">
                        <input className="form-check-input" type="radio" name="taxOptions" id="nds" value="nds" />
                        <label className="form-check-label" htmlFor="nds">НДС</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="taxOptions" id="productMar" value="productMar" />
                        <label className="form-check-label" htmlFor="productMar">Товар маркирован</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="taxOptions" id="reverseCalculation" value="reverseCalculation" />
                        <label className="form-check-label" htmlFor="reverseCalculation">Обратный расчет</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="taxOptions" id="manualCalculation" value="manualCalculation" />
                        <label className="form-check-label" htmlFor="manualCalculation">Ручное вычисление</label>
                    </div>
                </div>
            </div>
            <button className='btn btn-outline-success mt-3'>Заполнить по лоту</button>
            <table className="table my-4 table-border">
                <tbody>
                    <tr className='backround-tr'>
                        {
                            tableColumns2.map((item, index) => {
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
                            <td>{row.column11}</td>
                            <td>{row.column11}</td>
                            <td>{row.column11}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}