import React, { Fragment, useState } from 'react';
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import { HiOutlineUserAdd, HiOutlineUserRemove } from "react-icons/hi";
import CTable from './CTable';
import CAddField from './CAddField'


export default function CContract() {
    const [svernut, setSvernut] = useState(true);
    const [formData, setFormData] = useState({
        contractType: '',
        contractNumber: '',
        contractDate: '',
        contractPurpose: '',
        expiryDate: '',
        placeDetention: '',
        innPinfG: '',
        organizationNameG: '',
        basedOnG: '',
        adress: '',
        mobile: '',
        mobileOffice: '',
        bank: '',
        check: '',
        oked: '',
        innPinf: '',
        fullName: '',
        position: '',
    });
    const [recipients, setRecipients] = useState([
        { recipient: '', innPinf: '', organizationName: '', basedOn: '' }
    ]);
    const [recipientsComplate, setRecipientsComplate] = useState([
        { addressC: '', mobileC: '', officeMobileC: '', bankC: '', checkC: '', okedC: '', innPinfC: '', recipientsC: '', positionC: '' }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData =>", formData, recipients, recipientsComplate);
    };

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleButtonClick = (operation) => {
        if (operation === '+') {
            setRecipientsComplate([...recipientsComplate, { addressC: '', mobileC: '', officeMobileC: '', bankC: '', checkC: '', okedC: '', innPinfC: '', recipientsC: '', positionC: '' }]);
            setRecipients([...recipients, { recipient: '', innPinf: '', organizationName: '', basedOn: '' }]);
        } else if (operation === '-' && (recipients.length > 1 && recipientsComplate.length > 1)) {
            setRecipientsComplate(recipientsComplate.slice(0, -1));
            setRecipients(recipients.slice(0, -1));
        }
    };

    const handleInputChange1 = (index, field, value) => {
        const newRecipients = [...recipients];
        newRecipients[index][field] = value;
        setRecipients(newRecipients);
    };

    const handleInputChange2 = (index, field, value) => {
        const newRecipientsComplate = [...recipientsComplate];
        newRecipientsComplate[index][field] = value;
        setRecipientsComplate(newRecipientsComplate);
    };

    const toggleSvernut = () => {
        setSvernut(!svernut);
    };

    const renderInput1 = (label, value, onChange, fieldName) => (
        <input className='input-animation mt-2' type="text" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} />
    );

    const renderInput2 = (label, value, onChange, fieldName) => (
        <input className='input-animation mt-2' type="number" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} />
    )

    const renderDateInputField = (label, value, onChange, fieldName) => (
        <div className='box-of-input mt-2'>
            <input className="input-animation" type="date" value={value} onChange={(e) => onChange(e, fieldName)} required />
            <span>{label}</span>
        </div>
    );

    const renderRow1 = (fields) => <div className="row p-2">{fields}</div>;
    const renderRow2 = (fields) => <div className="row p-2 my-5">{fields}</div>;
    const renderRow3 = (fields) => <div className="row p-2 col-6 align-items-start">{fields}</div>;
    const renderRow4 = (fields) => <div className="row p-2 col-6 mt-3">{fields}</div>;
    const renderRow5 = (fields) => <div className={`row p-2 enter-more-info ${svernut ? 'svernut' : ''}`}>{fields}</div>

    const renderColumn = (size, fields) => <div className={`col-6 col-md-${size}`}>{fields}</div>;

    return (
        <Fragment>
            <div className="my-5">
                <p className='doc-element-title'>Договор:</p>
                <form action="" onSubmit={handleSubmit}>
                    {renderRow1([
                        renderColumn(3, renderInput1('Тип договора', formData.contractType, handleInputChange, 'contractType')),
                        renderColumn(3, renderInput1('№ договора', formData.contractNumber, handleInputChange, 'contractNumber')),
                    ])}
                    {renderRow1([
                        renderColumn(3, renderDateInputField('Дата договора', formData.contractDate, handleInputChange, 'contractDate')),
                        renderColumn(3, renderInput1('Цель договора', formData.contractPurpose, handleInputChange, 'contractPurpose'))
                    ])}
                    {renderRow1([
                        renderColumn(3, renderDateInputField('Дата истечения', formData.expiryDate, handleInputChange, 'expiryDate')),
                        renderColumn(3, renderInput1('Место заключения', formData.placeDetention, handleInputChange, 'placeDetention'))
                    ])}
                    {renderRow2([renderRow3([
                        renderColumn(12, <p className='doc-element-title mb-1'>Составитель*</p>),
                        renderColumn(12, renderInput1('ИНН/ПИНФЛ', formData.innPinfG, handleInputChange, 'innPinfG')),
                        renderColumn(12, renderInput1('Наименование', formData.organizationNameG, handleInputChange, 'organizationNameG')),
                        renderColumn(12, renderInput1('На основании', formData.basedOnG, handleInputChange, 'basedOnG'))]),
                    recipients.map((item, index) => {
                        return (
                            index === 0 ?
                                renderRow3([
                                    renderColumn(12, renderInput1('Получатель ' + (index + 1), item.recipient, (e) => handleInputChange1(index, 'recipient', e.target.value), 'recipient')),
                                    renderColumn(12, renderInput1('ИНН/ПИНФЛ', item.innPinf, (e) => handleInputChange1(index, 'innPinf', e.target.value), 'innPinf')),
                                    renderColumn(12, renderInput1('Наименование', item.organizationName, (e) => handleInputChange1(index, 'organizationName', e.target.value), 'organizationName')),
                                    renderColumn(12, renderInput1('На основании', item.basedOn, (e) => handleInputChange1(index, 'basedOn', e.target.value), 'basedOn'))
                                ])
                                :
                                renderRow4([
                                    renderColumn(12, renderInput1('Получатель ' + (index + 1), item.recipient, (e) => handleInputChange1(index, 'recipient', e.target.value), 'recipient')),
                                    renderColumn(12, renderInput1('ИНН/ПИНФЛ', item.innPinf, (e) => handleInputChange1(index, 'innPinf', e.target.value), 'innPinf')),
                                    renderColumn(12, renderInput1('Наименование', item.organizationName, (e) => handleInputChange1(index, 'organizationName', e.target.value), 'organizationName')),
                                    renderColumn(12, renderInput1('На основании', item.basedOn, (e) => handleInputChange1(index, 'basedOn', e.target.value), 'basedOn'))
                                ])
                        )
                    })
                    ]
                    )}
                    <div className='row col-12'>
                        <div className="col-6">
                            <button className='btn btn-outline-success p-2 w-25' onClick={() => handleButtonClick('+')}>
                                <HiOutlineUserAdd />
                            </button>
                            <button className='btn btn-outline-danger p-2 mx-2 w-25' onClick={() => handleButtonClick('-')}>
                                <HiOutlineUserRemove />
                            </button>
                        </div>
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-between">
                        <span className='text-y-center'>Дополнительные реквизиты</span>
                        <button onClick={toggleSvernut} className='btn-no-name'>
                            {svernut ? <TiArrowMaximise /> : <TiArrowMinimise />}
                        </button>
                    </div>
                    {renderRow5([
                        renderRow3([
                            renderColumn(12, <p className='doc-element-title mb-2'>Составитель* </p>),
                            renderColumn(12, renderInput1('Адрес', formData.adress, handleInputChange, 'adress')),
                            renderColumn(6, renderInput2('Мобильный', formData.mobile, handleInputChange, 'mobile')),
                            renderColumn(6, renderInput2('Мобильный', formData.mobileOffice, handleInputChange, 'mobileOffice')),
                            renderColumn(12, renderInput1('Банк', formData.bank, handleInputChange, 'bank')),
                            renderColumn(12, renderInput1('Счет', formData.check, handleInputChange, 'check')),
                            renderColumn(12, renderInput1('ОКЭД', formData.oked, handleInputChange, 'oked')),
                            renderColumn(12, renderInput1('ИНН/ПИНФЛ', formData.innPinf, handleInputChange, 'innPinf')),
                            renderColumn(12, renderInput1('Полное имя (ФИО)', formData.fullName, handleInputChange, 'fullName')),
                            renderColumn(12, renderInput1('Должность', formData.position, handleInputChange, 'position'))
                        ]),
                        recipientsComplate.map((item, index) => {
                            return (
                                index === 0 ?
                                    renderRow3([
                                        renderColumn(12, <p className='doc-element-title mb-2'>Получатель {index + 1} </p>),
                                        renderColumn(12, renderInput1('Адрес ' + (index + 1), item.addressC, (e) => handleInputChange2(index, 'addressC', e.target.value), 'addressC')),
                                        renderColumn(6, renderInput2('Мобильный', item.mobileC, (e) => handleInputChange2(index, 'mobileC', e.target.value), 'mobileC')),
                                        renderColumn(6, renderInput2('Мобильный', item.officeMobileC, (e) => handleInputChange2(index, 'officeMobileC', e.target.value), 'officeMobileC')),
                                        renderColumn(12, renderInput1('Банк', item.bankC, (e) => handleInputChange2(index, 'bankC', e.target.value), 'bankC')),
                                        renderColumn(12, renderInput1('Счет', item.checkC, (e) => handleInputChange2(index, 'checkC', e.target.value), 'checkC')),
                                        renderColumn(12, renderInput1('ОКЭД', item.okedC, (e) => handleInputChange2(index, 'okedC', e.target.value), 'okedC')),
                                        renderColumn(12, renderInput1('ИНН/ПИНФЛ', item.innPinfC, (e) => handleInputChange2(index, 'innPinfC', e.target.value), 'innPinfC')),
                                        renderColumn(12, renderInput1('Получатель', item.recipientsC, (e) => handleInputChange2(index, 'recipientsC', e.target.value), 'recipientsC')),
                                        renderColumn(12, renderInput1('Должность', item.positionC, (e) => handleInputChange2(index, 'positionC', e.target.value), 'positionC'))
                                    ])
                                    :
                                    renderRow4([
                                        renderColumn(12, <p className='doc-element-title mb-2'>Получатель {index + 1} </p>),
                                        renderColumn(12, renderInput1('Адрес ' + (index + 1), item.addressC, (e) => handleInputChange2(index, 'addressC', e.target.value), 'addressC')),
                                        renderColumn(6, renderInput2('Мобильный', item.mobileC, (e) => handleInputChange2(index, 'mobileC', e.target.value), 'mobileC')),
                                        renderColumn(6, renderInput2('Мобильный', item.officeMobileC, (e) => handleInputChange2(index, 'officeMobileC', e.target.value), 'officeMobileC')),
                                        renderColumn(12, renderInput1('Банк', item.bankC, (e) => handleInputChange2(index, 'bankC', e.target.value), 'bankC')),
                                        renderColumn(12, renderInput1('Счет', item.checkC, (e) => handleInputChange2(index, 'checkC', e.target.value), 'checkC')),
                                        renderColumn(12, renderInput1('ОКЭД', item.okedC, (e) => handleInputChange2(index, 'okedC', e.target.value), 'okedC')),
                                        renderColumn(12, renderInput1('ИНН/ПИНФЛ', item.innPinfC, (e) => handleInputChange2(index, 'innPinfC', e.target.value), 'innPinfC')),
                                        renderColumn(12, renderInput1('Получатель', item.recipientsC, (e) => handleInputChange2(index, 'recipientsC', e.target.value), 'recipientsC')),
                                        renderColumn(12, renderInput1('Должность', item.positionC, (e) => handleInputChange2(index, 'positionC', e.target.value), 'positionC'))
                                    ])
                            )
                        })
                    ])}
                    <CTable />
                    <CAddField />
                    <div className='text-center'>
                        <button type='submit' className='btn btn-outline-primary mx-2'>
                            Сохранить
                        </button>
                        <button className='btn btn-outline-success mx-2'>
                            Сохранить и подписать
                        </button>
                        <button className='btn btn-outline-secondary mx-2'>
                            Назад
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}