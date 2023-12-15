import React, { Fragment, useState } from 'react'
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import FTable from './FTable';

export default function FFactura() {
  const [svernut1, setSvernut1] = useState(true);
  const [svernut2, setSvernut2] = useState(true);

  const [formData, setFormData] = useState({
    documentNumber: '',
    dateDocument: '',
    tthID: '',
    contractID: '',
    contractNumber: '',
    contractDate: '',
    pinfPhis: '',
    fullName: '',
    organizationName: '',
    vatPayer: '',
    vatPayerStatus: '',
    adress: '',
    region: '',
    district: '',
    mobile: '',
    mobileOffice: '',
    bank: '',
    check: '',
    oked: '',
    innPinf: '',
    director: '',
    accountant: '',
  })

  const [recipients, setRecipients] = useState({
    region: '',
    district: '',
    mobile: '',
    mobileOffice: '',
    bank: '',
    check: '',
    oked: '',
    innPinf: '',
    director: '',
    accountant: '',
    adress: ''
  })

  const toggleSvernut = (number) => {
    if (number === 1) {
      setSvernut1(!svernut1);
    } else {
      setSvernut2(!svernut2)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData =>", formData, recipients);
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const renderInput1 = (label, value, onChange, fieldName) => (
    <input className='input-animation mt-2' type="text" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} />
  );

  const renderInput2 = (label, value, onChange, fieldName) => (
    <input className='input-animation mt-2' type="number" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} />
  )

  const renderInput3 = (label, value, onChange, fieldName) => (
    <input className='input-animation mt-2' type="date" placeholder={label} value={value} onChange={(e) => onChange(e, fieldName)} />
  )

  const renderColumn = (size, fields) => <div className={`col-6 col-md-${size}`}>{fields}</div>;
  const renderColumnNoSize = (fields) => <div className='col-12'>{fields}</div>;

  const renderRow1 = (fields) => <div className="row mt-2">{fields}</div>;
  const renderRow2 = (fields) => <div className={`row mt-5 enter-more-info ${svernut1 ? 'svernut' : ''}`}>{fields}</div>
  const renderRow3 = (fields) => <div className='row col-6'>{fields}</div>
  const renderRow4 = (fields) => <div className={`row mt-5 enter-more-info ${svernut2 ? 'svernut' : ''}`}>{fields}</div>


  return (
    <Fragment>
      <div className='my-5 p-2'>
        <form action="" onSubmit={handleSubmit}>
          {renderRow1([
            renderColumn(3, renderInput2('№ документа', formData.documentNumber, handleInputChange, 'documentNumber')),
            renderColumn(3, renderInput3('', formData.dateDocument, handleInputChange, 'dateDocument'))
          ])}

          {renderRow1([
            renderColumn(3, renderInput2('ТТН ID', formData.tthID, handleInputChange, 'tthID')),
            renderColumn(3, renderInput2('Договор ID', formData.contractID, handleInputChange, 'contractID')),
          ])}

          <p className='doc-element-title mt-4'>Договор:</p>

          {renderRow1([
            renderColumn(3, renderInput2('№ договора', formData.contractNumber, handleInputChange, 'contractNumber')),
            renderColumn(3, renderInput3('', formData.contractDate, handleInputChange, 'contractDate'))
          ])}

          <p className='doc-element-title mt-4'>Товар отпустил:</p>

          {renderRow1([
            renderColumn(3, renderInput2('ПИНФЛ (физ. лица)', formData.pinfPhis, handleInputChange, 'pinfPhis')),
            renderColumn(3, renderInput1('Полное имя (ФИО)', formData.fullName, handleInputChange, 'fullName'))
          ])}

          {renderRow1([
            renderColumn(6, <>
              <p className='doc-element-title mt-4'>Продавец*</p>
              <div className="form-check form-check-inline mt-3">
                <input className="form-check-input" type="radio" name="sellerType" id="sellerTypeCommissioner" value="commissioner" />
                <label className="form-check-label" htmlFor="sellerTypeCommissioner">Комиссионер</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sellerType" id="sellerTypeExcise" value="excise" />
                <label className="form-check-label" htmlFor="sellerTypeExcise">Акциз</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sellerType" id="sellerTypePharm" value="pharm" />
                <label className="form-check-label" htmlFor="sellerTypePharm">Фарм</label>
              </div>
              {renderInput2('№ договора', formData.contractNumber, handleInputChange, 'contractNumber')}
              {renderInput2('Плательщик НДС+ (сертификат активный)', formData.vatPayer, handleInputChange, 'vatPayer')}
              {renderInput1('Наименование', formData.organizationName, handleInputChange, 'organizationName')}
            </>),
            renderColumn(6, <>
              <p className='doc-element-title mt-4'>Покупатель</p>
              <div className="form-check form-check-inline mt-3">
                <input className="form-check-input" type="radio" name="buyerType" id="buyerTypeGuarantor" value="guarantor" />
                <label className="form-check-label" htmlFor="buyerTypeGuarantor">Поручитель</label>
              </div>
              {renderInput2('№ договора', formData.contractNumber, handleInputChange, 'contractNumber')}
              {renderInput2('Статус плательщика НДС', formData.vatPayer, handleInputChange, 'vatPayer')}
              {renderInput1('Наименование', formData.organizationName, handleInputChange, 'organizationName')}
              <select className='mt-3 input-animation' name="" id="">
                <option value="" disabled selected>Подразделение</option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </>)
          ])}
          <div className="col-12 mt-3 d-flex justify-content-between mt-5">
            <span className='text-y-center'>Реквизиты сторон</span>
            <button onClick={() => toggleSvernut(1)} className='btn-no-name'>
              {svernut1 ? <TiArrowMaximise /> : <TiArrowMinimise />}
            </button>
          </div>
          {renderRow2([
            renderRow3([
              renderColumnNoSize(<p className='doc-element-title px-1'>Продавец </p>),
              renderColumnNoSize(renderInput1('Регион', formData.region, handleInputChange, 'region')),
              renderColumnNoSize(renderInput1('Район', formData.district, handleInputChange, 'district')),
              renderColumnNoSize(renderInput1('Адрес', formData.adress, handleInputChange, 'adress')),
              renderColumnNoSize(renderInput2('Мобильный', formData.mobile, handleInputChange, 'mobile')),
              renderColumnNoSize(renderInput2('Мобильный', formData.mobileOffice, handleInputChange, 'mobileOffice')),
              renderColumnNoSize(renderInput1('Банк', formData.bank, handleInputChange, 'bank')),
              renderColumnNoSize(renderInput2('Счет', formData.check, handleInputChange, 'check')),
              renderColumnNoSize(renderInput1('ОКЭД', formData.oked, handleInputChange, 'oked')),
              renderColumnNoSize(renderInput1('Код плательщика НДС', formData.innPinf, handleInputChange, 'innPinf')),
              renderColumnNoSize(renderInput1('Директор', formData.director, handleInputChange, 'director')),
              renderColumnNoSize(renderInput1('гл. Бухгалтер', formData.accountant, handleInputChange, 'accountant'))
            ]),
            renderRow3([
              renderColumnNoSize(<p className='doc-element-title px-1'>Покупатель </p>),
              renderColumnNoSize(renderInput1('Регион', recipients.region, handleInputChange, 'region')),
              renderColumnNoSize(renderInput1('Район', recipients.district, handleInputChange, 'district')),
              renderColumnNoSize(renderInput1('Адрес', recipients.adress, handleInputChange, 'adress')),
              renderColumnNoSize(renderInput2('Мобильный', recipients.mobile, handleInputChange, 'mobile')),
              renderColumnNoSize(renderInput2('Мобильный', recipients.mobileOffice, handleInputChange, 'mobileOffice')),
              renderColumnNoSize(renderInput1('Банк', recipients.bank, handleInputChange, 'bank')),
              renderColumnNoSize(renderInput2('Счет', recipients.check, handleInputChange, 'check')),
              renderColumnNoSize(renderInput1('ОКЭД', recipients.oked, handleInputChange, 'oked')),
              renderColumnNoSize(renderInput1('Код плательщика НДС', recipients.innPinf, handleInputChange, 'innPinf')),
              renderColumnNoSize(renderInput1('Директор', recipients.director, handleInputChange, 'director')),
              renderColumnNoSize(renderInput1('гл. Бухгалтер', recipients.accountant, handleInputChange, 'accountant'))
            ])
          ])}
          <div className="col-12 mt-3 d-flex justify-content-between">
            <span className='text-y-center'>Доверенность</span>
            <button onClick={() => toggleSvernut(2)} className='btn-no-name'>
              {svernut2 ? <TiArrowMaximise /> : <TiArrowMinimise />}
            </button>
          </div>
          {
            renderRow4(<FTable />)
          }
          <div className='text-center mt-5'>
            <button type='submit' className='btn btn-outline-primary mx-2'>Сохранит</button>
            <button className='btn btn-outline-success mx-2'>Сохранить и подписать</button>
            <button className='btn btn-outline-secondary mx-2'>Назад</button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}