import React, { useEffect, useState } from 'react'
import { Col, Card, CardHeader, Table } from 'reactstrap';


export default function ListOfDocuments() {
  const [savedData, setSavedData] = useState([]);

  const timeFormatter = (timestamp) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tashkent', year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(timestamp).toLocaleString('uz-UZ', options);
  }

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const data = keys
      .filter((key) => key.startsWith("formData_"))
      .map((key) => {
        const { timestamp, formData } = JSON.parse(localStorage.getItem(key));
        return { timestamp, formData };
      });

    setSavedData(data);
  }, []);
  return (
    <Col sm='12'>
      <Card>
        <div className='table-responsive'>
          <Table hover={true} className='table-border-horizontal'>
            <thead>
              <tr>
                <th scope='col'>№</th>
                <th scope='col'>Документ</th>
                <th scope='col'>Получатель</th>
                <th scope='col'>Договор</th>
                <th scope='col'>Сумма</th>
                <th scope='col'>Изменен</th>
              </tr>
            </thead>
            <tbody>
              {savedData.map((item, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.formData.fileName} {item.formData.documentNumber}</td>
                  <td>{item.formData.buyerName}</td>
                  <td>{item.formData.contractNumber}</td>
                  <td></td>
                  <td>{timeFormatter(item.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  )
}