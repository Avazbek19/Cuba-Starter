import React, { Fragment, useState } from 'react'
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import { HiOutlineUserAdd, HiOutlineUserRemove } from "react-icons/hi";
import CTable from './CTable';
import CAddField from './CAddField';

export default function CContract() {
    const [svernut, setSvernut] = useState(true);

    const [contractType, setContractType] = useState('');
    const [contractNumber, setContractNumber] = useState('');
    const [contractDate, setContractDate] = useState('');
    const [contractPurpose, setContractPurpose] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [placeDetention, setPlaceDetention] = useState('');
    const [innPinfG, setInnPinfG] = useState('');
    const [organizationNameG, setOrganizationNameG] = useState('');
    const [basedOnG, setBasedOnG] = useState('');
    const [adress, setAdress] = useState('')
    const [mobile, setMobile] = useState('')
    const [mobileOffice, setMobileOffice] = useState('')
    const [bank, setBank] = useState('')
    const [check, setCheck] = useState('')
    const [oked, setOked] = useState('')
    const [innPinf, setInnPinf] = useState('')
    const [fullName, setFullName] = useState('')
    const [position, setPosition] = useState('')
    const [recipients, setRecipients] = useState([
        { recipient: '', innPinf: '', organizationName: '', basedOn: '' }
    ]);
    const [recipientsComplate, setRecipientsComplate] = useState([
        { addressC: '', mobileC: '', officeMobileC: '', bankC: '', checkC: '', okedC: '', innPinfC: '', recipientsC: '', positionC: '' }
    ])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            contractType,
            contractNumber,
            contractDate,
            contractPurpose,
            expiryDate,
            placeDetention,
            recipients,
            recipientsComplate,
            innPinfG,
            organizationNameG,
            basedOnG,
            adress,
            mobile,
            mobileOffice,
            bank,
            check,
            oked,
            innPinf,
            fullName,
            position
        });
    }

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
    }

    const toggleSvernut = () => {
        setSvernut(!svernut);
    };

    return (
        <Fragment>
            <div className='my-5'>
                <p className='doc-element-title'>Договор:</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className='row p-2'>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="text"
                                required
                                placeholder='Тип договора'
                                value={contractType}
                                onChange={(e) => setContractType(e.target.value)}
                            />
                        </div>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="number"
                                required
                                placeholder='№ договора'
                                value={contractNumber}
                                onChange={(e) => setContractNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className='col-6 col-md-3 box-of-input'>
                            <input
                                className='input-animation'
                                type="date"
                                required
                                value={contractDate}
                                onChange={(e) => setContractDate(e.target.value)}
                            />
                            <span>Дата договора</span>
                        </div>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="text"
                                required
                                placeholder='Цель договора'
                                value={contractPurpose}
                                onChange={(e) => setContractPurpose(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className='col-6 col-md-3 box-of-input'>
                            <input
                                className='input-animation'
                                type="date"
                                required
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                            <span>Дата истечения</span>
                        </div>
                        <div className='col-6 col-md-3 box-of-input'>
                            <input
                                className='input-animation'
                                type="text"
                                required
                                placeholder='Место заключения'
                                value={placeDetention}
                                onChange={(e) => setPlaceDetention(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row p-2 my-5">
                        <div className="row p-2 col-6 align-items-start">
                            <div className='col-12 mb-2'>
                                <p className='doc-element-title'>Составитель*</p>
                            </div>
                            <div className="col-12 mt-3 box-of-input">
                                <input
                                    className='input-animation'
                                    type="number"
                                    required
                                    value={innPinfG}
                                    onChange={(e) => setInnPinfG(e.target.value)}
                                />
                                <span>ИНН/ПИНФЛ</span>
                            </div>
                            <div className='col-12 mt-3 box-of-input'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={organizationNameG}
                                    onChange={(e) => setOrganizationNameG(e.target.value)}
                                />
                                <span>Наименование</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    placeholder='На основании'
                                    value={basedOnG}
                                    onChange={(e) => setBasedOnG(e.target.value)}
                                />
                            </div>
                        </div>
                        {recipients.map((item, index) => (
                            index == 0 ?
                                <div key={index} className="row p-2 col-6">
                                    <div className='col-12'>
                                        <input
                                            className='input-animation'
                                            type="text"
                                            required
                                            placeholder={`Получатель ${index + 1}`}
                                            value={item.recipient}
                                            onChange={(e) => handleInputChange1(index, 'recipient', e.target.value)}
                                        />
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <input
                                            className='input-animation'
                                            type="number"
                                            required
                                            placeholder='ИНН/ПИНФЛ'
                                            value={item.innPinf}
                                            onChange={(e) => handleInputChange1(index, 'innPinf', e.target.value)}
                                        />
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <input
                                            className='input-animation'
                                            type="text"
                                            required
                                            placeholder='Наименование'
                                            value={item.organizationName}
                                            onChange={(e) => handleInputChange1(index, 'organizationName', e.target.value)}
                                        />
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <input
                                            className='input-animation'
                                            type="text"
                                            required
                                            placeholder='На основании'
                                            value={item.basedOn}
                                            onChange={(e) => handleInputChange1(index, 'basedOn', e.target.value)}
                                        />
                                    </div>
                                </div>
                                :
                                <div key={index} className="row p-2 col-6 mt-5">
                                    <div className='col-12'>
                                        <input
                                            className='input-animation'
                                            type="text"
                                            required
                                            placeholder={`Получатель ${index + 2}`}
                                            value={item.recipient}
                                            onChange={(e) => handleInputChange1(index, 'recipient', e.target.value)}
                                        />
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <input
                                            className='input-animation'
                                            type="number"
                                            required
                                            placeholder='ИНН/ПИНФЛ'
                                            value={item.innPinf}
                                            onChange={(e) => handleInputChange1(index, 'innPinf', e.target.value)}
                                        />
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <input
                                            className='input-animation'
                                            type="text"
                                            required
                                            placeholder='Наименование'
                                            value={item.organizationName}
                                            onChange={(e) => handleInputChange1(index, 'organizationName', e.target.value)}
                                        />
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <input
                                            className='input-animation'
                                            type="text"
                                            required
                                            placeholder='На основании'
                                            value={item.basedOn}
                                            onChange={(e) => handleInputChange1(index, 'basedOn', e.target.value)}
                                        />
                                    </div>
                                </div>
                        ))}
                        <div className='row col-12 mt-3'>
                            <div className="col-6">
                                <button className='btn btn-outline-success p-2 w-25' onClick={() => handleButtonClick('+')}>
                                    <HiOutlineUserAdd />
                                </button>
                                <button className='btn btn-outline-danger p-2 mx-2 w-25' onClick={() => handleButtonClick('-')}>
                                    <HiOutlineUserRemove />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 d-flex justify-content-between">
                        <span className='text-y-center'>Дополнительные реквизиты</span>
                        <button onClick={toggleSvernut} className='btn-no-name'>
                            {svernut ? <TiArrowMaximise /> : <TiArrowMinimise />}
                        </button>
                    </div>
                    <div className={`row p-2 enter-more-info ${svernut ? 'svernut' : ''}`}>
                        <div className="row col-6">
                            <div className="col-12">
                                <p className='doc-element-title'>Составитель* </p>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={adress}
                                    onChange={(e) => setAdress(e.target.value)}
                                />
                                <span>Адрес</span>
                            </div>
                            <div className='col-12 col-lg-6 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="number"
                                    required
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                <span>Мобильный</span>
                            </div>
                            <div className='col-12 col-lg-6 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="number"
                                    required
                                    value={mobileOffice}
                                    onChange={(e) => setMobileOffice(e.target.value)}
                                />
                                <span>Мобильный</span>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                />
                                <span>Банк</span>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={check}
                                    onChange={(e) => setCheck(e.target.value)}
                                />
                                <span>Счет</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={oked}
                                    placeholder='ОКЭД'
                                    onChange={(e) => setOked(e.target.value)}
                                />
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={innPinf}
                                    onChange={(e) => setInnPinf(e.target.value)}
                                />
                                <span>ИНН/ПИНФЛ</span>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                <span>Полное имя (ФИО)</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={position}
                                    placeholder='Должность'
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </div>
                        </div>
                        {
                            recipientsComplate.map((item, index) => {
                                return (
                                    index == 0 ?
                                        <div key={index} className="row col-6">
                                            <div className="col-12">
                                                <p className='doc-element-title'>Получатель {index + 1}* </p>
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Адрес'
                                                    value={item.addressC}
                                                    onChange={(e) => handleInputChange2(index, 'addressC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="number"
                                                    required
                                                    placeholder='Мобильный'
                                                    value={item.mobileC}
                                                    onChange={(e) => handleInputChange2(index, 'mobileC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="number"
                                                    required
                                                    placeholder='Мобильный'
                                                    value={item.officeMobileC}
                                                    onChange={(e) => handleInputChange2(index, 'officeMobileC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Банк'
                                                    value={item.bankC}
                                                    onChange={(e) => handleInputChange2(index, 'bankC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Счет'
                                                    value={item.checkC}
                                                    onChange={(e) => handleInputChange2(index, 'checkC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    value={item.okedC}
                                                    placeholder='ОКЭД'
                                                    onChange={(e) => handleInputChange2(index, 'okedC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='ИНН/ПИНФЛ'
                                                    value={item.innPinfC}
                                                    onChange={(e) => handleInputChange2(index, 'innPinfC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Полное имя (ФИО)'
                                                    value={item.recipientsC}
                                                    onChange={(e) => handleInputChange2(index, 'recipientsC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    value={item.positionC}
                                                    placeholder='Должность'
                                                    onChange={(e) => handleInputChange2(index, 'positionC', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        :
                                        <div key={index} className="row col-6 mt-5">
                                            <div className="col-12">
                                                <p className='doc-element-title'>Получатель {index + 1}* </p>
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Адрес'
                                                    value={item.addressC}
                                                    onChange={(e) => handleInputChange2(index, 'addressC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="number"
                                                    required
                                                    placeholder='Мобильный'
                                                    value={item.mobileC}
                                                    onChange={(e) => handleInputChange2(index, 'mobileC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="number"
                                                    required
                                                    placeholder='Мобильный'
                                                    value={item.officeMobileC}
                                                    onChange={(e) => handleInputChange2(index, 'officeMobileC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Банк'
                                                    value={item.bankC}
                                                    onChange={(e) => handleInputChange2(index, 'bankC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Счет'
                                                    value={item.checkC}
                                                    onChange={(e) => handleInputChange2(index, 'checkC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    value={item.okedC}
                                                    placeholder='ОКЭД'
                                                    onChange={(e) => handleInputChange2(index, 'okedC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='ИНН/ПИНФЛ'
                                                    value={item.innPinfC}
                                                    onChange={(e) => handleInputChange2(index, 'innPinfC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    placeholder='Полное имя (ФИО)'
                                                    value={item.recipientsC}
                                                    onChange={(e) => handleInputChange2(index, 'recipientsC', e.target.value)}
                                                />
                                            </div>
                                            <div className='col-12 mt-3'>
                                                <input
                                                    className='input-animation'
                                                    type="text"
                                                    required
                                                    value={item.positionC}
                                                    placeholder='Должность'
                                                    onChange={(e) => handleInputChange2(index, 'positionC', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
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