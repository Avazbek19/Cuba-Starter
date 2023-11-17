import React from 'react'
import { monthNames } from '../RuConstants';

export default function Empowerment({ data }) {
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

    return (
        <div>
            <div className='pdf-send-id'>
                <p className='m-0'>ID документа (edocs.uz):{data._id}</p>
                <p className='m-0'>ID документа (rouming.uz):{data.roumingId}</p>
            </div>
            <div className='pdf-center text-center my-5'>
                <h4 className='title-of-pdf'>ДОВЕРЕННОСТЬ №{datas.empowermentdoc.empowermentno}</h4>
                <p className='m-0 mt-3'>Дата выдачи: <span>{formatDate(data.docDate)}.</span></p>
                <p className='m-0 mb-3'>Действительна по <span>{formatDate(datas.empowermentdoc.empowermentdateofexpire)}.</span></p>
                <h5>Организация: <span>{data.ownerName}</span></h5>
                <p className='m-0'>{data.ownerName}, ИНН/ПИНФЛ {data.ownerTin}, ОКЭД {datas.buyer.address}</p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-7'>
                    <div className='d-flex gap-3'>
                        <ul>
                            <li>
                                <p style={boldTextStyle} className='m-0 p-0'>Доверенность выдана:</p>
                            </li>
                            <li>
                                <p style={boldTextStyle} className='m-0 p-0'>На получение от:</p>
                            </li>
                            <li>
                                <p style={boldTextStyle} className='m-0 p-0'>Материальных ценностей по:</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p className='m-0 p-0 border-bottom'>{datas.agent.fio}, ИНН/ПИНФЛ {datas.agent.agenttin}</p>
                            </li>
                            <li>
                                <p className='m-0 p-0 border-bottom'>{datas.seller.name}</p>
                            </li>
                            <li>
                                <p className='m-0 p-0 border-bottom'>Договор № {datas.contractdoc.contractno} от {formatDate(datas.contractdoc.contractdate)}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h6 className='text-center my-3'>Перечень товарно-материальных ценностей, подлежащих получению</h6>
                <table className="table table-border">
                    <tbody>
                        <tr>
                            <td>п/п</td>
                            <td>Идентификационный код и название по Единому электронному
                                национальному каталогу товаров (услуг)</td>
                            <td>Наименование товаров (услуг) </td>
                            <td>Ед. изм.</td>
                            <td>Количество</td>
                        </tr>
                        {
                            datas.productlist.products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.catalogname}</td>
                                        <td>{product.name}</td>
                                        <td>штук</td>
                                        <td>{product.count}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='my-4 d-flex gap-4'>
                <ul>
                    <li>
                        <p style={boldTextStyle}>Руководитель:</p>
                    </li>
                    <li>
                        <p style={boldTextStyle}>Главный бухгалтер:</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>{datas.buyer.director}</p>
                    </li>
                    <li>
                        <p>{datas.buyer.accountant}</p>
                    </li>
                </ul>
            </div>
            <div className='stamps row justify-content-between mt-4'>
                <div className='col-4 col-xl-3 stamp-seller'>
                    <div className='row justify-content-between'>
                        <p className='col-5 text-start m-0 p-0'>SN:</p>
                        <p className='col-5 text-end m-0 p-0'>{convertDateFormat(data.createdAt)}</p>
                    </div>
                    <div className='stamp-send-1'>ОТПРАВЛЕН</div>
                    <p className='m-0 p-0 text-center'>{data.ownerName}</p>
                    <p className='m-0 p-0 text-center'>{datas.buyer.director}</p>
                    <p className='m-0 p-0 text-center'>ИНН/ПИНФЛ: </p>
                </div>
            </div>
        </div>
    )
}