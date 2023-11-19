import React, { Fragment, useState } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import { json_fac, json_actwork, json_actgoods, json_contract, json_empowerment } from './Information';
import PDFfactura from './Factura/PDFfactura';
import PDFempowerment from './Empowerment/PDFempowerment';
import PDFcontract from './Contract/PDFcontract';
import './PdfStyles.css';
import PDFactgoods from './ActGoods/PDFactgoods';
import PDFactwork from './ActWork/PDFactwork';

export default function PDFview() {
    const [selectedPDF, setSelectedPDF] = useState(null);

    const handleSelectChange = (event) => {
        setSelectedPDF(event.target.value);
    };

    const renderSelectedPDF = () => {
        switch (selectedPDF) {
            case 'factura':
                return <PDFfactura data={json_fac} />;
            case 'empowerment':
                return <PDFempowerment data={json_empowerment} />;
            case 'contract':
                return <PDFcontract data={json_contract} />;
            case 'actgoods':
                return <PDFactgoods data={json_actgoods} />;
            case 'actwork':
                return <PDFactwork data={json_actwork} />;
            default:
                return null;
        }
    };

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Invoice' parent='Pages' title='Invoice' />

            <select className='form-select w-25' value={selectedPDF} onChange={handleSelectChange} aria-label="Default select example">
                <option disabled selected value="">Select PDF</option>
                <option value="factura">Factura</option>
                <option value="empowerment">Empowerment</option>
                <option value="contract">Contract</option>
                <option value="actgoods">ActGoods</option>
                <option value="actwork">ActWork</option>
            </select>

            {renderSelectedPDF()}
        </Fragment>
    );
}
