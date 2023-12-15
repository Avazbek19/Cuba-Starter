import React, { useState } from 'react';
import { TiArrowMaximise, TiArrowMinimise } from 'react-icons/ti';
import ETable from './ETable';

const Empowerment = () => {
    const [svernut, setSvernut] = useState(true);
    const [formData, setFormData] = useState({
        documentNumber: '',
        documentDate: '',
        expirationDate: '',
        contractNumber: '',
        contractDate: '',
        buyerINN: '',
        buyerName: '',
        sellerINN: '',
        sellerName: '',
        buyerRegion: '',
        buyerDistrict: '',
        buyerAddress: '',
        buyerMobile: '',
        buyerWork: '',
        buyerBank: '',
        buyerAccount: '',
        buyerOKED: '',
        buyerVATCode: '',
        buyerDirector: '',
        buyerChiefAccountant: '',
        sellerRegion: '',
        sellerDistrict: '',
        sellerAddress: '',
        sellerMobile: '',
        sellerWork: '',
        sellerBank: '',
        sellerAccount: '',
        sellerOKED: '',
        sellerVATCode: '',
        sellerDirector: '',
        sellerChiefAccountant: '',
        attorneyPINFL: '',
        attorneyFullName: '',
    });

    const toggleSvernut = () => {
        setSvernut(!svernut);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form date =>', formData)
    };

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const renderInputField = (label, value, onChange, fieldName) => (
        <input className="input-animation mt-3" type="text" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)}  required/>
    );

    const renderDateInputField = (label, value, onChange, fieldName) => (
        <div>
            <span>{label}</span>
            <input className="input-animation" type="date" value={value} onChange={(e) => onChange(e, fieldName)}  required/>
        </div>
    );

    const renderSelectField = (options, label, value, onChange, fieldName) => (
        <select name="" id="" className="input-animation mt-3" value={value} onChange={(e) => onChange(e, fieldName)} required>
            <option selected disabled value={''}>
                {label}
            </option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );

    const renderDoubleInputField = (placeholder1, value1, onChange1, fieldName1, placeholder2, value2, onChange2, fieldName2) => (
        <div className="doubled">
            {renderInputField(placeholder1, value1, onChange1, fieldName1)}
            {renderInputField(placeholder2, value2, onChange2, fieldName2)}
        </div>
    );

    const renderRow = (fields) => <div className="row p-2">{fields}</div>;

    const renderColumn = (size, fields) => <div className={`col-6 col-md-${size}`}>{fields}</div>;

    return (
        <div className="my-5 p-2">
            <form action="" onSubmit={handleSubmit}>
                {renderRow([
                    renderColumn(4, renderInputField('№ документа', formData.documentNumber, handleInputChange, 'documentNumber')),
                    renderColumn(4, renderDateInputField('Дата документа', formData.documentDate, handleInputChange, 'documentDate')),
                    renderColumn(4, renderDateInputField('Дата истечения', formData.expirationDate, handleInputChange, 'expirationDate')),
                ])}
                <p className="doc-element-title mt-4">Договор:</p>
                {renderRow([
                    renderColumn(4, renderInputField('№ документа', formData.contractNumber, handleInputChange, 'contractNumber')),
                    renderColumn(4, renderDateInputField('Дата договора', formData.contractDate, handleInputChange, 'contractDate')),
                ])}
                <div className="row justify-content-between">
                    {renderColumn(
                        5,
                        <>
                            <p className="doc-element-title mt-4">Покупатель *</p>
                            {renderInputField('ИНН/ПИНФЛ', formData.buyerINN, handleInputChange, 'buyerINN')}
                            {renderInputField('Наименование', formData.buyerName, handleInputChange, 'buyerName')}
                        </>
                    )}
                    {renderColumn(
                        5,
                        <>
                            <p className="doc-element-title mt-4">Продавец *</p>
                            {renderInputField('ИНН/ПИНФЛ', formData.sellerINN, handleInputChange, 'sellerINN')}
                            {renderInputField('Наименование', formData.sellerName, handleInputChange, 'sellerName')}
                        </>
                    )}
                </div>
                <div className="col-12 mt-3 d-flex justify-content-between mt-5">
                    <span className="text-y-center">Реквизиты сторон</span>
                    <button onClick={toggleSvernut} className="btn-no-name">
                        {svernut ? <TiArrowMaximise /> : <TiArrowMinimise />}
                    </button>
                </div>
                <div className={`row justify-content-between enter-more-info ${svernut ? 'svernut' : ''}`}>
                    {renderColumn(
                        5,
                        <>
                            <p className="doc-element-title mt-4">Покупатель</p>
                            {renderSelectField(['1'], 'Регион', formData.buyerRegion, handleInputChange, 'buyerRegion')}
                            {renderSelectField(['1'], 'Район', formData.buyerDistrict, handleInputChange, 'buyerDistrict')}
                            {renderInputField('Адрес', formData.buyerAddress, handleInputChange, 'buyerAddress')}
                            {renderDoubleInputField('Мобильный', formData.buyerMobile, handleInputChange, 'buyerMobile', 'Рабочий', formData.buyerWork, handleInputChange, 'buyerWork')}
                            {renderInputField('Банк', formData.buyerBank, handleInputChange, 'buyerBank')}
                            {renderInputField('Счет', formData.buyerAccount, handleInputChange, 'buyerAccount')}
                            {renderInputField('ОКЭД', formData.buyerOKED, handleInputChange, 'buyerOKED')}
                            {renderInputField('Код плательщика НДС', formData.buyerVATCode, handleInputChange, 'buyerVATCode')}
                            {renderInputField('Директор', formData.buyerDirector, handleInputChange, 'buyerDirector')}
                            {renderInputField('гл. Бухгалтер', formData.buyerChiefAccountant, handleInputChange, 'buyerChiefAccountant')}
                        </>
                    )}
                    {renderColumn(
                        5,
                        <>
                            <p className="doc-element-title mt-4">Продавец</p>
                            {renderSelectField(['1'], 'Регион', formData.sellerRegion, handleInputChange, 'sellerRegion')}
                            {renderSelectField(['1'], 'Район', formData.sellerDistrict, handleInputChange, 'sellerDistrict')}
                            {renderInputField('Адрес', formData.sellerAddress, handleInputChange, 'sellerAddress')}
                            {renderDoubleInputField('Мобильный', formData.sellerMobile, handleInputChange, 'sellerMobile', 'Рабочий', formData.sellerWork, handleInputChange, 'sellerWork')}
                            {renderInputField('Банк', formData.sellerBank, handleInputChange, 'sellerBank')}
                            {renderInputField('Счет', formData.sellerAccount, handleInputChange, 'sellerAccount')}
                            {renderInputField('ОКЭД', formData.sellerOKED, handleInputChange, 'sellerOKED')}
                            {renderInputField('Код плательщика НДС', formData.sellerVATCode, handleInputChange, 'sellerVATCode')}
                            {renderInputField('Директор', formData.sellerDirector, handleInputChange, 'sellerDirector')}
                            {renderInputField('гл. Бухгалтер', formData.sellerChiefAccountant, handleInputChange, 'sellerChiefAccountant')}
                        </>
                    )}
                    <p className="doc-element-title mt-4">Доверенное лицо</p>
                    {renderRow([
                        renderColumn(4, renderInputField('ПИНФЛ', formData.attorneyPINFL, handleInputChange, 'attorneyPINFL')),
                        renderColumn(4, renderInputField('Ф.И.О', formData.attorneyFullName, handleInputChange, 'attorneyFullName')),
                    ])}
                    <ETable />
                </div>
                <div className='text-center mt-4'>
                    <button type='submit' className='btn btn-outline-primary mx-2'> Сохранить </button>
                    <button className='btn btn-outline-success mx-2'> Сохранить и подписать </button>
                    <button className='btn btn-outline-secondary mx-2'> Назад </button>
                </div>
            </form>
        </div>
    );
};

export default Empowerment;
