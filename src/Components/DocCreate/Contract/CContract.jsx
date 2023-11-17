import React, { Fragment } from 'react'

export default function CContract() {
    return (
        <Fragment>
            <div>
                <p className='doc-element-title'>Договор:</p>
                <div className='p-2'>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3 box-of-input'>
                        <input className='form-control' type="text" required='required'/>
                        <span>Тип договора</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}