import React, { Fragment, useRef } from 'react';
import { Btn } from '../../AbstractElements';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';



export default function PDFdocument({ data }) {
    const datas = data.data
    const componentRef = useRef();
    const boldTextStyle = {
        fontWeight: 'bold',
    };
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    // console.log(data.contractdoc);

    return (
        <Fragment>
            <section ref={componentRef}>
                <div className='pdf-send-id'>
                    <p className='m-0'>ID документа (edocs.uz):{data._id}</p>
                    <p className='m-0'>ID документа (rouming.uz):{data.roumingId}</p>
                </div>
                <div className='pdf-center text-center my-5'>
                    <h4 className='title-of-pdf'>СЧЕТ-ФАКТУРА</h4>
                    <p className='m-0' style={boldTextStyle}>№ {data.docNumber} от {data.docDate.substring(0, 10)}.</p>
                    <p className='m-0' style={boldTextStyle}>к Договору№ {datas.contractdoc.contractno} от {datas.contractdoc.contractdate.substring(0, 10)}.</p>
                </div>
                <div className='pdf-table row'>
                    <div className='col-6'>
                        <tbody className='table table-seller'>
                            <tr>
                                <td>Поставщик:</td>
                                <td className='border-bottom'>{datas.seller.name}</td>
                            </tr>
                            <tr>
                                <td>Адрес:</td>
                                <td className='border-bottom'>
                                    {datas.seller.region.name},
                                    {datas.seller.district.name},
                                    {datas.seller.address}
                                </td>
                            </tr>
                            <tr>
                                <td>Идентификационный номер поставщика ИНН/ПИНФЛ:</td>
                                <td className='border-bottom'>{datas.sellertin}</td>
                            </tr>
                            <tr>
                                <td>Регистрационный код плательщика НДС:</td>
                                <td className='border-bottom'>{datas.seller.vatregcode} - Сертификат НДС активный</td>
                            </tr>
                            <tr>
                                <td>Расчетный счет:</td>
                                <td className='border-bottom'>{datas.seller.account}</td>
                            </tr>
                            <tr>
                                <td>Банк:</td>
                                <td className='border-bottom'>{datas.seller.bank.bankid} - {datas.seller.bank.name}</td>
                            </tr>
                            <tr>
                                <td>Филиал:</td>
                                <td className='border-bottom'>{datas.seller.branchname}</td>
                            </tr>
                        </tbody>
                    </div>
                    <div className='col-6'>
                        <tbody className='table table-buyer'>
                            <tr>
                                <td>Покупатель:</td>
                                <td className='border-bottom'>{datas.buyer.name}</td>
                            </tr>
                            <tr>
                                <td>Адрес:</td>
                                <td className='border-bottom'>
                                    {datas.buyer.region.name},
                                    {datas.buyer.district.name},
                                    {datas.buyer.address}
                                </td>
                            </tr>
                            <tr>
                                <td>Идентификационный номер поставщика ИНН/ПИНФЛ:</td>
                                <td className='border-bottom'>{datas.buyertin}</td>
                            </tr>
                            <tr>
                                <td>Регистрационный код плательщика НДС:</td>
                                <td className='border-bottom'>{datas.buyer.vatregcode} - Сертификат НДС активный</td>
                            </tr>
                            <tr>
                                <td>Расчетный счет:</td>
                                <td className='border-bottom'>{datas.buyer.account}</td>
                            </tr>
                            <tr>
                                <td>Банк:</td>
                                <td className='border-bottom'>{datas.buyer.bank.bankid} - {datas.buyer.bank.name}</td>
                            </tr>
                            <tr>
                                <td>Филиал:</td>
                                <td className='border-bottom'>{datas.buyer.branchname}</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
                <div className='my-2'>
                    <tbody className='table table-calculation'>
                        <tr className='tr-calculation text-center'>
                            <td className='td-calculation-1'>п/п</td>
                            <td className='td-calculation-2'>Наименование товаров (услуг)</td>
                            <td>Идентификационный код и название
                                по Единому электронному
                                национальному каталогу товаров
                                (услуг)
                            </td>
                            <td>Штрихкод
                                товаров
                                (услуг)
                            </td>
                            <td>Ед. изм.</td>
                            <td>Количество</td>
                            <td>Цена</td>
                            <td>Стоимость
                                поставки
                            </td>
                            <td className='text-center'>
                                НДС
                                <td className='text-dark bg-transparent'>ставка</td>
                                <td className='text-dark bg-transparent'>сумма</td>
                            </td>
                            <td >
                                Стоимость
                                поставки с учетом НДС
                            </td>
                        </tr>
                        <tr className='tr-calculation'>
                            <td>1</td>
                            <td>{datas.productlist.products[0].name}</td>
                            <td>{datas.productlist.products[0].catalogcode} - {datas.productlist.products[0].catalogname}</td>
                            <td>{datas.productlist.products[0].barcode}</td>
                            <td>{datas.productlist.products[0].packagename}</td>
                            <td>{datas.productlist.products[0].count}</td>
                            <td>{datas.productlist.products[0].summa}</td>
                            <td>{datas.productlist.products[0].deliverysum}</td>
                            <td>
                                <td>{datas.productlist.products[0].vatrate}</td>
                                <td>{datas.productlist.products[0].vatsum}</td>
                            </td>
                            <td>{datas.productlist.products[0].deliverysumwithvat}</td>
                        </tr>
                        <tr className='tr-calculation'>
                            <td colSpan='7'>Итого:</td>
                            <td>{datas.productlist.products[0].deliverysum}</td>
                            <td>
                                <td>x</td>
                                <td>{data.totalVatSum}</td>
                            </td>
                            <td>{data.totalDocSum}</td>
                        </tr>
                    </tbody>
                </div>
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