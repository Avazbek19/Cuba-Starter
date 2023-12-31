import React, { Fragment, useState } from 'react'
import { toast } from "react-toastify";
import { Btn } from '../../../AbstractElements';
import WTable from './WTable';


export default function WorkDoneAct() {
    const [formData, setFormData] = useState({
        documentNumber: '',
        dateDocument: '',
        contractNumber: '',
        contractDate: '',
        buyerINN: '',
        buyerName: '',
        sellerINN: '',
        sellerName: '',
        textarea: '',
        fileName: 'Акт выполненных работ №'
    })

    const autoclosetoaster = (toastname) => {
        switch (toastname) {
            case "autoclose3Toast":
                toast.success("Файл сохранен !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData((prevData) => ({
            ...prevData,
        }));

        const timestamp = new Date().getTime(); // Unique identifier (timestamp)
        const localStorageKey = `formData_${timestamp}`;
        localStorage.setItem(localStorageKey, JSON.stringify({ timestamp, formData }));

        setFormData({
            documentNumber: '',
            dateDocument: '',
            contractNumber: '',
            contractDate: '',
            buyerINN: '',
            buyerName: '',
            sellerINN: '',
            sellerName: '',
            textarea: '',
        });
    };


    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const renderInput1 = (label, value, onChange, fieldName) => (
        <input className='input-animation mt-2' type="text" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} required />
    );

    const renderInput2 = (label, value, onChange, fieldName) => (
        <input className='input-animation mt-2' type="text" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} required />
    )

    const renderInput3 = (label, value, onChange, fieldName) => (
        <input className='input-animation mt-2' type="date" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} required />
    )

    const renderColumn = (size, fields) => <div className={`col-6 col-md-${size}`}>{fields}</div>;

    const renderRow = (fields) => <div className="row mt-2">{fields}</div>;


    return (
        <Fragment>
            <div className='my-5 p-2'>
                <form action="" onSubmit={handleSubmit}>
                    {renderRow([
                        renderColumn(3, renderInput2('№ документа', formData.documentNumber, handleInputChange, 'documentNumber')),
                        renderColumn(3, renderInput3('', formData.dateDocument, handleInputChange, 'dateDocument'))
                    ])}

                    <p className='doc-element-title mt-4'>Договор:</p>

                    {renderRow([
                        renderColumn(3, renderInput2('№ договора', formData.contractNumber, handleInputChange, 'contractNumber')),
                        renderColumn(3, renderInput3('', formData.contractDate, handleInputChange, 'contractDate'))
                    ])}

                    {renderRow([
                        renderColumn(
                            5,
                            <>
                                <p className="doc-element-title mt-4">Покупатель *</p>
                                {renderInput2('ИНН/ПИНФЛ', formData.buyerINN, handleInputChange, 'buyerINN')}
                                {renderInput1('Наименование', formData.buyerName, handleInputChange, 'buyerName')}
                            </>
                        ),
                        renderColumn(
                            5,
                            <>
                                <p className="doc-element-title mt-4">Продавец *</p>
                                {renderInput2('ИНН/ПИНФЛ', formData.sellerINN, handleInputChange, 'sellerINN')}
                                {renderInput1('Наименование', formData.sellerName, handleInputChange, 'sellerName')}
                                <select className='mt-3 input-animation' name="" id="">
                                    <option value="" disabled selected>Подразделение</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </>
                        )
                    ])}
                    <p className='mt-5 mb-0 mx-0'>Описание</p>
                    <textarea name="text" id="text" cols="150" rows="10" value={formData.textarea} onChange={(e) => handleInputChange(e, 'textarea')}></textarea>
                    <WTable />
                    <div className='text-center mt-5'>
                        <button type='submit' name="autoclose3Toast" className='btn btn-outline-primary mx-2' onClick={(e) => autoclosetoaster(e.target.name)}>Сохранит</button>
                        <button className='btn btn-outline-success mx-2'>Сохранить и подписать</button>
                        <button className='btn btn-outline-secondary mx-2'>Назад</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}