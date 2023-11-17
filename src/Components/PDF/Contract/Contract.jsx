import React from 'react'
import { monthNames, ones, scales, teens, tens } from '../RuConstants';


export default function Contract({ data }) {
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
                <h4 className='title-of-pdf'>ДОГОВОР № {data.docNumber}</h4>
                <h6>ДОГОВОР НА ПРОДАЖУ</h6>
                <div className='row justify-content-between'>
                    <div className='col-3'>
                        <p>{datas.contractdoc.contractplace}</p>
                    </div>
                    <div className='col-3'>
                        <p>{formatDate(datas.contractdoc.contractdate)}.</p>
                    </div>
                </div>
            </div>
            {
                datas.parts.map((item, index) => {
                    return (
                        <div key={index}>
                            <h5 className='text-center'>{item.title}</h5>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
            <div className='my-2'>
                <table class="table table-border">
                    <tbody>
                        <tr>
                            <td>п/п</td>
                            <td>Наименование товаров (услуг)</td>
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
                            <td>ставка</td>
                            <td>сумма</td>
                            <td >
                                Стоимость
                                поставки с учетом НДС
                            </td>
                        </tr>
                        {
                            datas.products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.catalogcode} - {product.catalogname}</td>
                                        <td>{product.barcode}</td>
                                        <td>{product.packagename}</td>
                                        <td>{product.count}</td>
                                        <td style={{ width: '150px' }}>{numberToFormattedString(product.summa)}</td>
                                        <td>{numberToFormattedString(product.deliverysum)}</td>
                                        <td>{numberToFormattedString(product.vatrate)}</td>
                                        <td>{numberToFormattedString(product.vatsum)}</td>
                                        <td>{numberToFormattedString(product.deliverysumwithvat)}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan='7' className='text-start'>Итого:</td>
                            <td>{numberToFormattedString(data.totalSum)}</td>
                            <td>x</td>
                            <td>{numberToFormattedString(data.totalVatSum)}</td>
                            <td>{numberToFormattedString(data.totalSumWithVat)}</td>
                        </tr>
                        <tr>
                            <td colSpan='11'>
                                <p className='m-0 text-start' style={boldTextStyle}>Всего к оплате: {numberToWordsRu(data.totalSumWithVat)} сум, в том числе НДС {numberToFormattedString(data.totalVatSum)}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-3'>
                <h5 className='text-center'>2. ЮРИДИЧЕСКИЕ АДРЕСА И РЕКВИЗИТЫ СТОРОН</h5>
                <div className='row my-5'>
                    <div className="col-5">
                        <h6 className='text-center'>Исполнитель</h6>
                        <h5 className='text-center'>{datas.owner.name}</h5>
                        <p className='m-0 p-0'>Адрес: {datas.owner.address}</p>
                        <p className='m-0 p-0'>Тел.: {datas.owner.workphone}</p>
                        <p className='m-0 p-0'>Факс:</p>
                        <p className='m-0 p-0'>ИНН: {datas.owner.tin}</p>
                        <p className='m-0 p-0'>ОКЭД: {datas.owner.oked}</p>
                        <p className='m-0 p-0'>р/сч: {datas.owner.account}</p>
                        <p className='m-0 p-0'>Банк: {datas.owner.branchname}</p>
                        <p className='m-0 p-0'>МФО: {datas.owner.bankid}</p>
                    </div>
                    {
                        datas.clients.map(item => {
                            return (
                                <div className="col-5">
                                    <h6 className='text-center'>Исполнитель</h6>
                                    <h5 className='text-center'>{item.name}</h5>
                                    <p className='m-0 p-0'>Адрес: {item.address}</p>
                                    <p className='m-0 p-0'>Тел.: {item.workphone}</p>
                                    <p className='m-0 p-0'>Факс:</p>
                                    <p className='m-0 p-0'>ИНН: {item.fiztin}</p>
                                    <p className='m-0 p-0'>ОКЭД: {item.oked}</p>
                                    <p className='m-0 p-0'>р/сч: {item.account}</p>
                                    <p className='m-0 p-0'>Банк: {item.branchname}</p>
                                    <p className='m-0 p-0'>МФО: {item.bankid}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='stamps row justify-content-between mt-4'>
                <div className='col-4 col-xl-3 stamp-seller'>
                    <div className='row justify-content-between'>
                        <p className='col-5 text-start m-0 p-0'>SN:</p>
                        <p className='col-5 text-end m-0 p-0'>{convertDateFormat(data.createdAt)}</p>
                    </div>
                    <div className='stamp-send-1'>ОТПРАВЛЕН</div>
                    <p className='m-0 p-0 text-center'>{data.ownerName}</p>
                    <p className='m-0 p-0 text-center'>{}</p>
                    <p className='m-0 p-0 text-center'>ИНН/ПИНФЛ: </p>
                </div>
            </div>
        </div>
    )
}