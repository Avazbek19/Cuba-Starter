import React, { Fragment } from 'react'
import PDFdocument from './PDFdocument';
import { Breadcrumbs } from '../../AbstractElements';
import './PdfStyles.css'

export default function PDFview() {
    const jsonData = {
        "status": "sended",
        "local": false,
        "tins": [
            "203366731_1",
            "304426154_0",
            "203366731_00019_1"
        ],
        "_id": "654a07e7232ce341094209a2",
        "roumingId": "65487ce7742509089029c222",
        "type": "factura",
        "contractDate": "2020-09-22T00:00:00.000Z",
        "contractNumber": "Call-291",
        "createdAt": "2023-11-07T09:44:22.727Z",
        "data": {
            "buyer": {
                "name": "\"STARLAB\" MCHJ",
                "account": "20208000300691615001",
                "bank": {
                    "bankid": "01084",
                    "name": "ТОШКЕНТ Ш., \"ТУРОНБАНК\" АТ БАНКИНИНГ ЧИЛОНЗОР ФИЛИАЛИ"
                },
                "address": "Ўзбекистон Республикаси, Тошкент шаҳри, Чилонзор тумани, МАВЗЕ Е, уй. 9, ",
                "mobile": "",
                "workphone": "",
                "oked": "",
                "region": {
                    "regionid": 26,
                    "name": "ГОРОД ТАШКЕНТ"
                },
                "district": {
                    "districtid": "2606",
                    "regionid": 26,
                    "districtcode": 6,
                    "name": "ЧИЛОНЗАРСКИЙ РАЙОН"
                },
                "director": "",
                "accountant": "",
                "vatregcode": "326060121141",
                "vatregstatus": 20,
                "branchcode": "",
                "branchname": "",
                "taxgap": null,
                "category": 0
            },
            "seller": {
                "name": "\"O`ZBEKTELEKOM \" AJ / Филиал \"Центр развития телекоммуникаций и персонала\" ",
                "account": "20210000504074838088",
                "bank": {
                    "bankid": "00401",
                    "name": "ТОШКЕНТ Ш., АТ \"АЛОКАБАНК\" БОШ ОФИСИ"
                },
                "address": "г. Ташкент ул. Амир Темур, 97А, ",
                "mobile": "(99 ) 836-7600",
                "workphone": "(99 ) 836-7600",
                "oked": "",
                "region": {
                    "regionid": 26,
                    "name": "ГОРОД ТАШКЕНТ"
                },
                "district": {
                    "districtid": "2603",
                    "regionid": 26,
                    "districtcode": 3,
                    "name": "ЮНУСАБАДСКИЙ РАЙОН"
                },
                "director": "Туляганов Ядгар Рахимджанович",
                "accountant": "",
                "vatregcode": "326030013817",
                "vatregstatus": 20,
                "branchcode": "00019",
                "branchname": "Телекоммуникация ва Персонални ривожлантириш маркази филиали",
                "taxgap": null,
                "category": 0
            },
            "foreigncompany": {
                "countryid": null,
                "name": null,
                "address": null,
                "bank": null,
                "account": null
            },
            "itemreleaseddoc": {
                "itemreleasedtin": null,
                "itemreleasedfio": "",
                "itemreleasedpinfl": ""
            },
            "facturaempowermentdoc": {
                "empowermentno": "",
                "empowermentdateofissue": null,
                "agentfio": "",
                "agenttin": null,
                "agentpinfl": "",
                "agentfacturaid": "65487ce7742509089029c223"
            },
            "facturadoc": {
                "facturano": "1000005915799",
                "facturadate": "2023-10-31T00:00:00Z"
            },
            "oldfacturadoc": {
                "oldfacturaid": null,
                "oldfacturano": null,
                "oldfacturadate": null
            },
            "contractdoc": {
                "contractno": "Call-291",
                "contractdate": "2020-09-22T00:00:00Z"
            },
            "notes": null,
            "currentstateid": 15,
            "buyertin": "304426154",
            "sellertin": "203366731",
            "lotid": "",
            "investmentobjectdoc": {
                "objectid": null,
                "objectname": null
            },
            "contractid": null,
            "waybillid": null,
            "waybillids": null,
            "facturaproductid": "65487ce7742509089029c224",
            "facturaid": "65487ce7742509089029c222",
            "version": 1,
            "facturatype": 0,
            "singlesidedtype": 0,
            "isprimarydocument": false,
            "incometype": 0,
            "realizationpurpose": 0,
            "hasmarking": false,
            "states": [
                {
                    "stateid": 10,
                    "timestamp": "2023-11-07T09:48:23.053Z",
                    "sender": {
                        "taxpayer": {
                            "tin": "491433281",
                            "fio": "TULYAGANOV YADGAR RAXIMDJANOVICH"
                        },
                        "host": "factura-provider-api",
                        "clientip": "185.74.7.28",
                        "datasource": "30",
                        "certificateid": 2008042347
                    },
                    "notes": null,
                    "signtime": null,
                    "publickeyoid": null
                },
                {
                    "stateid": 15,
                    "timestamp": "2023-11-07T09:48:23.089Z",
                    "sender": {
                        "taxpayer": {
                            "tin": null,
                            "fio": null
                        },
                        "host": null,
                        "clientip": null,
                        "datasource": "system",
                        "certificateid": 0
                    },
                    "notes": null,
                    "signtime": null,
                    "publickeyoid": null
                }
            ],
            "created": "2023-11-07T09:48:23.064Z",
            "updated": "2023-11-07T09:48:23.097Z",
            "productlist": {
                "facturaproductid": "65487ce7742509089029c224",
                "tin": "203366731",
                "hascommittent": false,
                "haslgota": false,
                "hidereportcommittent": false,
                "hasmedical": false,
                "hasexcise": false,
                "hasvat": true,
                "products": [
                    {
                        "ordno": 1,
                        "committentname": "",
                        "committenttin": "",
                        "committentvatregcode": "",
                        "committentvatregstatus": null,
                        "name": "Виртуальные номера",
                        "catalogcode": "10310003002000000",
                        "catalogname": "Услуги фиксированной (стационарной) телефонной связи по предоставлению доступа и пользованию общественными телефонными сетями",
                        "barcode": "",
                        "marks": null,
                        "exchangeinfo": null,
                        "serial": null,
                        "measureid": null,
                        "packagecode": "1500684",
                        "packagename": "услуга (сум)",
                        "basesumma": 0,
                        "profitrate": 0,
                        "count": 0,
                        "summa": 0,
                        "deliverysum": 44642.86,
                        "exciserate": 0,
                        "excisesum": 0,
                        "withoutvat": false,
                        "vatrate": 12,
                        "vatsum": 5357.14,
                        "deliverysumwithvat": 50000,
                        "lgotaid": null,
                        "lgotaname": null,
                        "lgotavatsum": 0,
                        "lgotatype": null,
                        "warehouseid": null,
                        "origin": 3
                    }
                ],
                "timestamp": "2023-11-07T09:48:23.053Z",
                "updated": null,
                "created": "2023-11-07T09:48:23.066Z"
            }
        },
        "docDate": "2023-10-31T00:00:00.000Z",
        "docNumber": "1000005915799",
        "extension": {
            "facturatype": 0,
            "singlesidedtype": 0
        },
        "notes": "",
        "ownerBranch": "00019",
        "ownerName": "\"O`ZBEKTELEKOM \" AJ / Филиал \"Центр развития телекоммуникаций и персонала\" ",
        "ownerTin": "203366731",
        "sign": "",
        "stateId": 15,
        "subType": "factura",
        "targetTins": [
            {
                "tin": "304426154",
                "name": "\"STARLAB\" MCHJ",
                "branch": null,
                "signed": 0,
                "side": "buyer"
            }
        ],
        "totalDocSum": 50000,
        "totalFuelSum": 0,
        "totalSum": 44642.86,
        "totalSumWithVat": 50000,
        "totalVatSum": 5357.14,
        "updatedAt": "2023-11-07T09:44:22.727Z",
        "baseDocs": []
    }
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Invoice' parent='Pages' title='Invoice' />
            <PDFdocument data={jsonData} />
        </Fragment>
    )
}