import React, { Fragment, useState } from 'react'
import { MdOutlineHorizontalSplit } from "react-icons/md";
import { HiOutlineUserAdd, HiOutlineUserRemove } from "react-icons/hi";

export default function CContract() {
    const [contractType, setContractType] = useState('');
    const [contractNumber, setContractNumber] = useState('');
    const [contractDate, setContractDate] = useState('');
    const [contractPurpose, setContractPurpose] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [placeDetention, setPlaceDetention] = useState('');
    const [recipient1, setRecipient1] = useState('');
    const [innPinfl, setInnPinfl] = useState('');
    const [innPinf2, setInnPinf2] = useState('');
    const [organizationName1, setOrganizationName1] = useState('');
    const [organizationName2, setOrganizationName2] = useState('');
    const [basedOn1, setBasedOn1] = useState('');
    const [basedOn2, setBasedOn2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            contractType,
            contractNumber,
            contractDate,
            contractPurpose,
            expiryDate,
            placeDetention,
            recipient1,
            innPinfl,
            innPinf2,
            organizationName1,
            organizationName2,
            basedOn1,
            basedOn2,
        });
    }

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
                        <div className='col-6 col-md-3 box-of-input'>
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
                    <div className="row p-2 mt-2">
                        <div className="col-6">
                            <p className='doc-element-title'>Составитель*</p>
                        </div>
                        <div className='col-6'>
                            <input
                                className='input-animation w-75'
                                type="text"
                                required
                                placeholder='Получатель 1*'
                                value={recipient1}
                                onChange={(e) => setRecipient1(e.target.value)}
                            />
                        </div>
                        <div className='col-6 mt-3 box-of-input'>
                            <input
                                className='input-animation w-75'
                                type="number"
                                required
                                value={innPinfl}
                                onChange={(e) => setInnPinfl(e.target.value)}
                            />
                            <span>ИНН/ПИНФЛ</span>
                        </div>
                        <div className='col-6 mt-3'>
                            <input
                                className='input-animation w-75'
                                type="number"
                                required
                                placeholder='ИНН/ПИНФЛ'
                                value={innPinf2}
                                onChange={(e) => setInnPinf2(e.target.value)}
                            />
                        </div>
                        <div className='col-6 mt-3 box-of-input'>
                            <input
                                className='input-animation w-75'
                                type="text"
                                required
                                value={organizationName1}
                                onChange={(e) => setOrganizationName1(e.target.value)}
                            />
                            <span>Наименование</span>
                        </div>
                        <div className='col-6 mt-3'>
                            <input
                                className='input-animation w-75'
                                type="text"
                                required
                                placeholder='Наименование'
                                value={organizationName2}
                                onChange={(e) => setOrganizationName2(e.target.value)}
                            />
                        </div>
                        <div className='col-6 mt-3'>
                            <input
                                className='input-animation w-75'
                                type="text"
                                required
                                placeholder='На основании'
                                value={basedOn1}
                                onChange={(e) =>setBasedOn1(e.target.value)}
                            />
                        </div>
                        <div className='col-6 mt-3'>
                            <input
                                className='input-animation w-75'
                                type="text"
                                required
                                placeholder='На основании'
                                value={basedOn2}
                                onChange={(e) =>setBasedOn2(e.target.value)}
                            />
                        </div>
                        <div className='col-6 mt-3'></div>
                        <div className='col-6 mt-3'>
                            <button className='btn btn-outline-success p-2 w-25'>
                                <HiOutlineUserAdd />
                            </button>
                            <button className='btn btn-outline-danger p-2 mx-2 w-25'>
                                <HiOutlineUserRemove />
                            </button>
                        </div>
                        <div className="col-12 mt-3 d-flex justify-content-between">
                            <span className='text-y-center'>Дополнительные реквизиты</span>
                            <button type='submit' className='btn-no-name'>
                                <MdOutlineHorizontalSplit />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}