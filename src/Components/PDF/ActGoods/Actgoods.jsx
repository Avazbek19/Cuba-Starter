import React from 'react'
import { ones, scales, teens, tens, monthNames } from '../RuConstants';

export default function Actgoods({ data }) {
    const datas = data.data

    const boldTextStyle = {
        fontWeight: 'bold',
    };

    const formatDate = (inputDate) => {
        const dateObject = new Date(inputDate);
        const day = dateObject.getDate();
        const monthIndex = dateObject.getMonth();
        const year = dateObject.getFullYear();
        const formattedDate = `${day} ${monthNames[monthIndex]} ${year} г`;
        return formattedDate;
    };

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

    function numberToFormattedString(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

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
        <div>
            <div className='pdf-send-id'>
                <p className='m-0'>ID документа (edocs.uz):{data._id}</p>
                <p className='m-0'>ID документа (rouming.uz):{data.roumingId}</p>
            </div>
            <div className='pdf-center text-center my-5'>
                <h4 className='title-of-pdf'>АКТ ПРИЕМА-ПЕРЕДАЧИ</h4>
                <h6>№ {data.docNumber} от {formatDate(datas.actdoc.actdate)}.</h6>
                <h6>к Договору№ {datas.contractdoc.contractno} от {formatDate(datas.contractdoc.contractdate)}.</h6>
            </div>
            <div className='pdf-table row'>
                <div className='col-6'>
                    <tbody className='table table-seller'>
                        <tr>
                            <td>Поставщик:</td>
                            <td className='border-bottom'>
                                <h6 className='bg-transparent text-dark m-0'>{datas.sellername}</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>Идентификационный номер налогоплательщика ИНН/ПИНФЛ:</td>
                            <td className='border-bottom'>{datas.sellertin}</td>
                        </tr>
                    </tbody>
                </div>
                <div className='col-6'>
                    <tbody className='table table-buyer'>
                        <tr>
                            <td>Покупатель:</td>
                            <td className='border-bottom'>
                                <h6 className='bg-transparent text-dark m-0'>{datas.buyername}</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>Идентификационный номер налогоплательщика ИНН/ПИНФЛ:</td>
                            <td className='border-bottom'>{datas.buyertin}</td>
                        </tr>
                    </tbody>
                </div>
            </div>
            <div className='my-5'>
                <table className="table table-border">
                    <tbody>
                        <tr>
                            <td>п/п</td>
                            <td>Идентификационный код и название
                                по Единому электронному
                                национальному каталогу товаров
                                (услуг)
                            </td>
                            <td>Наименование товаров (услуг)</td>
                            <td>Ед. изм.</td>
                            <td>Количество</td>
                            <td>Цена</td>
                            <td>Стоимость
                                поставки
                            </td>
                            <td>ставка</td>
                            <td>сумма</td>
                            <td >
                                Стоимость
                                поставки с учетом НДС
                            </td>
                        </tr>
                        {
                            datas.productlist.products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.catalogcode} - {product.catalogname}</td>
                                        <td>{product.name}</td>
                                        <td>{product.packagename}</td>
                                        <td>{product.count}</td>
                                        <td style={{ width: '150px' }}>{numberToFormattedString(product.summa)}</td>
                                        <td>{numberToFormattedString(product.totalsum)}</td>
                                        <td>{numberToFormattedString(product.vatrate)}</td>
                                        <td>{numberToFormattedString(product.vatsum)}</td>
                                        <td>{numberToFormattedString(product.totalsumwithvat)}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan='6' className='text-end'>Итого:</td>
                            <td>{numberToFormattedString(data.totalSum)}</td>
                            <td>x</td>
                            <td>{numberToFormattedString(data.totalVatSum)}</td>
                            <td>{numberToFormattedString(data.totalDocSum)}</td>
                        </tr>
                        <tr>
                            <td colSpan='10'>
                                <p className='m-0 text-start' style={boldTextStyle}>Всего к оплате: {numberToWordsRu(data.totalSumWithVat)} сум, в том числе НДС {numberToFormattedString(data.totalVatSum)}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}