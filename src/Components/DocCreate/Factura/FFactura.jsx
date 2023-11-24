import React, { Fragment, useState } from 'react'
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import FTable from './FTable';

export default function FFactura() {
    const [svernut1, setSvernut1] = useState(true);
    const [svernut2, setSvernut2] = useState(true);

    const [documentNumber, setDocumentNumber] = useState('');
    const [dateDocument, setDateDocument] = useState('');
    const [tthID, setTthID] = useState('')
    const [contractID, setContractID] = useState('')
    const [contractNumber, setContractNumber] = useState('')
    const [contractDate, setContractDate] = useState('')
    const [pinfPhis, setPinfPhis] = useState('')
    const [fullName, setFullName] = useState('')

    const [adress, setAdress] = useState('')
    const [region, setRegion] = useState('')
    const [district, setDistrict] = useState()
    const [mobile, setMobile] = useState('')
    const [mobileOffice, setMobileOffice] = useState('')
    const [bank, setBank] = useState('')
    const [check, setCheck] = useState('')
    const [oked, setOked] = useState('')
    const [innPinf, setInnPinf] = useState('')
    const [director, setDirector] = useState('')
    const [accountant, setAccountant] = useState('')
    const [recipients, setRecipients] = useState([
        { recipient: '', innPinf: '', organizationName: '', basedOn: '' }
    ])

    const toggleSvernut = (number) => {
        if (number === 1) {
            setSvernut1(!svernut1);
        } else {
            setSvernut2(!svernut2)
        }
    };

    function handleSubmit(e) {
        e.preventDefault()
    }

    const handleInputChange2 = (index, field, value) => {
        const newRecipients = [...recipients];
        newRecipients[index][field] = value;
        setRecipients(newRecipients);
    }

    return (
        <Fragment>
            <div className="my-5 p-2">
                <form action="" onSubmit={handleSubmit}>
                    <div className="row mt-2">
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="number"
                                placeholder='№ документа'
                                value={documentNumber}
                                onChange={(e) => setDocumentNumber(e.target.value)}
                            />
                        </div>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="date"
                                value={dateDocument}
                                onChange={(e) => setDateDocument(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="number"
                                placeholder='ТТН ID'
                                value={tthID}
                                onChange={(e) => setTthID(e.target.value)}
                            />
                        </div>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="number"
                                placeholder='Договор ID'
                                value={contractID}
                                onChange={(e) => setContractID(e.target.value)}
                            />
                        </div>
                    </div>
                    <p className='doc-element-title mt-4'>Договор:</p>
                    <div className="row mt-2">
                        <div className='col-6 col-md-3'>
                            <input className='input-animation' type="number" placeholder='№ договора' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                        </div>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="date"
                                value={contractDate}
                                onChange={(e) => setContractDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <p className='doc-element-title mt-4'>Товар отпустил:</p>
                    <div className="row mt-2">
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="number"
                                placeholder='ПИНФЛ (физ. лица) '
                                value={pinfPhis}
                                onChange={(e) => setPinfPhis(e.target.value)}
                            />
                        </div>
                        <div className='col-6 col-md-3'>
                            <input
                                className='input-animation'
                                type="text"
                                value={fullName}
                                placeholder='Полное имя (ФИО)'
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row mt-2 justify-content-end'>
                        <div className="col-12 col-md-6">
                            <p className='doc-element-title mt-4'>Продавец*</p>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Комиссионер</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Акциз</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" for="inlineRadio3">Фарм</label>
                            </div>
                            <input className='input-animation mt-3' type="number" placeholder='№ договора' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                            <input className='input-animation mt-3' type="number" placeholder='Плательщик НДС+ (сертификат активный)' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                            <input className='input-animation mt-3' type="text" placeholder='Наименование' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                        </div>
                        <div className="col-12 col-md-6">
                            <p className='doc-element-title mt-4'>Покупатель</p>
                            <div className="form-check form-check-inline mt-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Поручитель</label>
                            </div>
                            <input className='input-animation mt-3' type="number" placeholder='№ договора' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                            <input className='input-animation mt-3' type="number" placeholder='Плательщик НДС+ (сертификат активный)' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                            <input className='input-animation mt-3' type="text" placeholder='Наименование' value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
                        </div>
                        <div className="col-6">
                            <select className='mt-3 input-animation' name="" id="">
                                <option value="">Подразделение</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 mt-3 d-flex justify-content-between mt-5">
                        <span className='text-y-center'>Реквизиты сторон</span>
                        <button onClick={() => toggleSvernut(1)} className='btn-no-name'>
                            {svernut1 ? <TiArrowMaximise /> : <TiArrowMinimise />}
                        </button>
                    </div>
                    <div className={`row enter-more-info ${svernut1 ? 'svernut' : ''}`}>
                        <div className="row col-6">
                            <div className="col-12">
                                <p className='doc-element-title px-1'>Продавец* </p>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                />
                                <span>Регион</span>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                />
                                <span>Район</span>
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
                                <span>Код плательщика НДС</span>
                            </div>
                            <div className='col-12 box-of-input mt-3'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={director}
                                    onChange={(e) => setDirector(e.target.value)}
                                />
                                <span>Директор</span>
                            </div>
                            <div className='col-12 mt-3 box-of-input'>
                                <input
                                    className='input-animation'
                                    type="text"
                                    required
                                    value={accountant}
                                    onChange={(e) => setAccountant(e.target.value)}
                                />
                                <span>гл. Бухгалтер</span>
                            </div>
                        </div>
                        {
                            recipients.map((item, index) => {
                                return (
                                    <div key={index} className="row col-6">
                                        <div className="col-12">
                                            <p className='doc-element-title px-1'>Покупатель</p>
                                        </div>
                                        <div className='col-12 box-of-input mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                value={region}
                                                onChange={(e) => setRegion(e.target.value)}
                                            />
                                            <span>Регион</span>
                                        </div>
                                        <div className='col-12 box-of-input mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                value={district}
                                                onChange={(e) => setDistrict(e.target.value)}
                                            />
                                            <span>Район</span>
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                placeholder='Адрес'
                                                value={item.address}
                                                onChange={(e) => handleInputChange2(index, 'addressC', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-12 col-lg-6 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="number"
                                                required
                                                placeholder='Мобильный'
                                                value={item.mobile}
                                                onChange={(e) => handleInputChange2(index, 'mobileC', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-12 col-lg-6 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="number"
                                                required
                                                placeholder='Мобильный'
                                                value={item.officeMobile}
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
                                                value={item.check}
                                                onChange={(e) => handleInputChange2(index, 'checkC', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                value={item.oked}
                                                placeholder='ОКЭД'
                                                onChange={(e) => handleInputChange2(index, 'okedC', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                placeholder='Код плательщика НДС'
                                                value={item.innPinf}
                                                onChange={(e) => handleInputChange2(index, 'innPinfC', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                placeholder='Директор'
                                                value={item.recipients}
                                                onChange={(e) => handleInputChange2(index, 'recipientsC', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <input
                                                className='input-animation'
                                                type="text"
                                                required
                                                value={item.position}
                                                placeholder='гл. Бухгалтер'
                                                onChange={(e) => handleInputChange2(index, 'positionC', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 mt-3 d-flex justify-content-between">
                        <span className='text-y-center'>Доверенность</span>
                        <button onClick={() => toggleSvernut(2)} className='btn-no-name'>
                            {svernut2 ? <TiArrowMaximise /> : <TiArrowMinimise />}
                        </button>
                    </div>
                    <div className={`row enter-more-info ${svernut2 ? 'svernut' : ''}`}>
                        <FTable />
                    </div>
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