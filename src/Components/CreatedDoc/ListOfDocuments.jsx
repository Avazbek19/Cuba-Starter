import React, { useEffect, useState } from 'react'
import { Col, Card, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


export default function ListOfDocuments() {
  const [savedData, setSavedData] = useState([]);
  const navigate = useNavigate();

  const timeFormatter = (timestamp) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tashkent', year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(timestamp).toLocaleString('uz-UZ', options);
  }

  function send(item) {
    navigate(`/info-document/${item.formData.fileName}-${item.formData.contractNumber}`, {
      state: item
    });
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
                <tr key={index} onClick={() => send(item)}>
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