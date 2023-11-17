import React, { Fragment, useState } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CContract from './Contract/CContract';
import './DocCreate.css'

export default function DocCreate() {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const handleSelectChange = (event) => {
        setSelectedDoc(event.target.value);
    };

    const renderSelectedPDF = () => {
        switch (selectedDoc) {
            case 'contract':
                return <CContract />;
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
                    <option disabled selected>Выберите тип документа</option>
                    <option value="contract">Договор (ГНК)</option>
                </select>
            </div>

            {renderSelectedPDF()}
        </Fragment>
    )
}