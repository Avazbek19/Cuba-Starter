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
                    <tbody className='table table-bordered'>
                        <tr>
                            <td>
                                <h6 className='m-0 p-0 bg-transparent text-dark'>Доверенность выдана: </h6>
                            </td>
                            <td>{datas.agent.fio}, ИНН/ПИНФЛ {datas.agent.agenttin}</td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className='m-0 p-0 bg-transparent text-dark'>На получение от:</h6>
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    )
}