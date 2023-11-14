import React from 'react'
import { ones, scales, teens, tens, monthNames } from '../RuConstants';


export default function Factura({ data }) {
    const datas = data.data

    function convertDateFormat(isoDateString) {
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const newDateFormat = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
        return newDateFormat;
    }

    const formatDate = (inputDate) => {
        const dateObject = new Date(inputDate);
        const day = dateObject.getDate();
        const monthIndex = dateObject.getMonth();
        const year = dateObject.getFullYear();
        const formattedDate = `${day} ${monthNames[monthIndex]} ${year} г`;
        return formattedDate;
    };

    function numberToFormattedString(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const boldTextStyle = {
        fontWeight: 'bold',
    };

    function numberToWordsRu(number) {
        if (number === 0) {
            return ones[0];
        }

        if (number < 0) {
            return `минус ${numberToWordsRu(-number)}`;
        }

        let words = '';

        for (let i = 0; number > 0; i++) {
            if (number % 1000 !== 0) {
                if (i === 0) {
                    words = `${words}${convertLessThanOneThousand(number % 1000)}`;
                } else {
                    words = `${convertLessThanOneThousand(number % 1000)} ${scales[i - 1]} ${words}`;
                }
            }
            number = Math.floor(number / 1000);
        }

        return words.trim();
    }

    function convertLessThanOneThousand(number) {
        let word = '';

        if (number >= 100) {
            word += ones[Math.floor(number / 100)] + ' сто ';
            number %= 100;
        }

        if (number >= 10 && number <= 19) {
            return word + teens[number - 10];
        } else if (number >= 20) {
            word += tens[Math.floor(number / 10) - 2] + ' ';
            number %= 10;
        }

        if (number > 0) {
            word += ones[number] + ' ';
        }

        return word;
    }

    return (
        <div className='pdf-openner'>
            <div className='pdf-send-id'>
                <p className='m-0'>ID документа (edocs.uz):{data._id}</p>
                <p className='m-0'>ID документа (rouming.uz):{data.roumingId}</p>
            </div>
            <div className='pdf-center text-center my-5'>
                <h4 className='title-of-pdf'>СЧЕТ-ФАКТУРА</h4>
                <p className='m-0' style={boldTextStyle}>№ {data.docNumber} от {formatDate(data.docDate)}.</p>
                <p className='m-0' style={boldTextStyle}>к Договору№ {datas.contractdoc.contractno} от {formatDate(datas.contractdoc.contractdate)}.</p>
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
                        {
                            datas.seller.branchname ?
                                <tr>
                                    <td>Филиал:</td>
                                    <td className='border-bottom'>{datas.seller.branchname}</td>
                                </tr>
                                :
                                ''
                        }
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
                        {
                            datas.buyer.branchname ?
                                <tr>
                                    <td>Филиал:</td>
                                    <td className='border-bottom'>{datas.buyer.branchname}</td>
                                </tr>
                                : ''
                        }
                    </tbody>
                </div>
            </div>
            <div className='my-2'>
                <tbody className='table table-calculation'>
                    <tr className='tr-calculation-1 tr-calculation text-center '>
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
                        <td class="trrr">
                            <div class="div1">НДС</div>
                            <div class="div2">ставка</div>
                            <div class="div3">сумма</div>
                        </td>
                        <td >
                            Стоимость
                            поставки с учетом НДС
                        </td>
                    </tr>
                    {
                        datas.productlist.products.map((product, index) => {
                            return (
                                <tr className='tr-calculation' key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.catalogcode} - {product.catalogname}</td>
                                    <td>{product.barcode}</td>
                                    <td>{product.packagename}</td>
                                    <td>{product.count}</td>
                                    <td style={{ width: '150px' }}>{numberToFormattedString(product.summa)}</td>
                                    <td>{numberToFormattedString(product.deliverysum)}</td>
                                    <td className='trrr1'>
                                        <div className='div11'>{numberToFormattedString(product.vatrate)}</div>
                                        <div className='div12'>{numberToFormattedString(product.vatsum)}</div>
                                    </td>
                                    <td>{numberToFormattedString(product.deliverysumwithvat)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr className='tr-calculation'>
                        <td colSpan='7' className='text-start'>Итого:</td>
                        <td>{numberToFormattedString(data.totalSum)}</td>
                        <td className='d-flex'>
                            <div style={{ padding: '10px' }}>x</div>
                            <div style={{ width: '100%', padding: '8px' }}>{numberToFormattedString(data.totalVatSum)}</div>
                        </td>
                        <td>{numberToFormattedString(data.totalDocSum)}</td>
                    </tr>
                    <tr className='tr-calculation'>
                        <td colSpan='10' className='text-start'>
                            <p className='m-0 bg-transparent text-dark' style={boldTextStyle}>Всего к оплате: {numberToWordsRu(data.totalSumWithVat)} сум, в том числе НДС {numberToFormattedString(data.totalVatSum)}</p>
                        </td>
                    </tr>
                </tbody>
            </div>
            <div className='row mt-5'>
                <div className='col-6 p-0 d-flex gap-4'>
                    <ul>
                        <li>
                            <span>Руководитель:</span>
                        </li>
                        <li>
                            <span>Главный бухгалтер:</span>
                        </li>
                        <li>Товар отпустил: </li>
                    </ul>
                    <ul>
                        <li>
                            <span>{datas.seller.director}</span>
                        </li>
                        <li>
                            <span>{datas.seller.accountant}</span>
                        </li>
                        <li>
                            <span>{datas.itemreleaseddoc.itemreleasedfio}</span>
                        </li>
                    </ul>
                </div>
                <div className='col-6 p-0 d-flex gap-4'>
                    <ul>
                        <li>
                            <span>Руководитель:</span>
                        </li>
                        <li>
                            <span>Главный бухгалтер:</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>{datas.buyer.director}</span>
                        </li>
                        <li>
                            <span>{datas.buyer.accountant}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='stamps my-5 row justify-content-between'>
                <h4 className='text-center my-5'>ПОДПИСИ СТОРОН</h4>
                {
                    datas.states.map((item, index) => {
                        if (item.stateid == 10) {
                            return (
                                <div className='stamp-seller stamp col-4 col-xl-3' key={index}>
                                    <div className='row justify-content-between'>
                                        <p className='col-5 text-start'>SN:{item.sender.certificateid}</p>
                                        <p className='col-5 text-end'>{convertDateFormat(item.timestamp)}</p>
                                    </div>
                                    <div className='stamp-send-1'>ОТПРАВЛЕН</div>
                                    <p>{data.ownerName}</p>
                                    <p>{item.sender.taxpayer.fio}</p>
                                    <p>ИНН/ПИНФЛ: {item.sender.taxpayer.tin}</p>
                                </div>
                            )
                        }
                    })
                }
                {
                    datas.states.map((item, index) => {
                        if (item.stateid == 30) {
                            return (
                                <div className='stamp-buyer stamp col-4 col-xl-3' key={index}>
                                    <div className='row justify-content-between'>
                                        <p className='col-5 text-start'>SN:{item.sender.certificateid}</p>
                                        <p className='col-5 text-end'>{convertDateFormat(item.timestamp)}</p>
                                    </div>
                                    <div className='stamp-send-2'>ПОДТВЕРЖДЁН</div>
                                    <p>{data.targetTins[0].name}</p>
                                    <p>{item.sender.taxpayer.fio}</p>
                                    <p>ИНН/ПИНФЛ: {item.sender.taxpayer.tin}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}