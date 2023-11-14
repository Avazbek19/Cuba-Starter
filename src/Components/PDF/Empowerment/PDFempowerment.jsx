import React, { Fragment, useRef } from 'react';
import { Btn } from '../../../AbstractElements';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Empowerment from './Empowerment';

export default function PDFempowerment({ data }) {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Fragment>
            <section ref={componentRef} className='p-3'>
                <Empowerment data={data} />
            </section>
            <Col sm="12" className="text-center my-5 pt-5">
                <Btn attrBtn={{ color: 'primary', className: 'me-2', onClick: handlePrint }}>
                    Print
                </Btn>
                <Link to={''}>
                    <Btn attrBtn={{ color: 'secondary' }}>Cancel</Btn>
                </Link>
            </Col>
        </Fragment>
    )
}