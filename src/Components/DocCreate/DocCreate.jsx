import React, { Fragment, useState } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CContract from './Contract/CContract';
import './DocCreate.css'
import FFactura from './Factura/FFactura';
import Empowerment from './Empowerment/Empowerment';
import WorkDoneAct from './WorkDoneAct/WorkDoneAct';

export default function DocCreate() {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const handleSelectChange = (event) => {
        setSelectedDoc(event.target.value);
    };

    const renderSelectedPDF = () => {
        switch (selectedDoc) {
            case 'contract':
                return <CContract />;
            case 'factura':
                return <FFactura />;
            case 'empowerment':
                return <Empowerment />;
            case 'workDoneAct':
                return <WorkDoneAct />;
            default:
                return null;
        }
    };
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Document Creator' parent='Pages' title='Doc create' />

            <div className='select-type-doc'>
                <p className='doc-element-title'>Документ:</p>
                <select className='form-select w-25' value={selectedDoc} onChange={handleSelectChange} aria-label="Default select example">
                    <option disabled selected value=''>Выберите тип документа</option>
                    <option value="contract">Договор (ГНК)</option>
                    <option value="factura">Счет-фактура </option>
                    <option value="empowerment">Доверенность</option>
                    <option value="workDoneAct">Акт выполненных работ</option>
                </select>
            </div>

            {renderSelectedPDF()}
        </Fragment>
    )
}