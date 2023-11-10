import React, { Fragment } from 'react'
import PDFfactura from './Factura/PDFfactura';
import { Breadcrumbs } from '../../AbstractElements';
import './PDFstyles.css'

export default function PDFview() {
    const jsonData = {
        "status": "signed",
        "local": true,
        "tins": [
            "306180825_1",
            "304426154_0"
        ],
        "_id": "65327404315f2b0bf46b3f1b",
        "notes": "",
        "ownerTin": "306180825",
        "ownerName": "\"MONT CLOUD \" MAS'ULIYATI CHEKLANGAN JAMIYAT XORIJIY KORXONA",
        "ownerBranch": null,
        "docNumber": "705",
        "docDate": "2023-10-20T00:00:00.000Z",
        "contractNumber": "27П",
        "contractDate": "2020-08-27T00:00:00.000Z",
        "totalSum": 32166375,
        "totalSumWithVat": 36026340,
        "totalVatSum": 3859965,
        "totalFuelSum": 0,
        "totalDocSum": 36026340,
        "type": "factura",
        "subType": "factura",
        "roumingId": "65327404315f2b0bf46b3f19",
        "extension": {
            "facturatype": 0,
            "singlesidedtype": 0
        },
        "targetTins": [
            {
                "tin": "304426154",
                "name": "\"STARLAB\" MAS'ULIYATI CHEKLANGAN JAMIYAT",
                "branch": null,
                "signed": 1,
                "side": "buyer"
            }
        ],
        "stateId": 30,
        "baseDocs": [
            {
                "id": "65327401315f2b0bf46b3f13",
                "type": "actGoodsAcceptance"
            }
        ],
        "createdAt": "2023-10-20T12:35:16.453Z",
        "updatedAt": "2023-10-26T08:24:00.364Z",
        "sentDate": "2023-10-20T12:35:36.722Z",
        "sign": "",
        "data": {
            "buyer": {
                "name": "\"STARLAB\" MAS'ULIYATI CHEKLANGAN JAMIYAT",
                "account": "20208000200691615001",
                "bank": {
                    "bankid": "00446",
                    "name": "ТОШКЕНТ Ш., \"ТУРОНБАНК\" АТ БАНКИНИНГ БОШ ОФИСИ"
                },
                "address": "E MAVZE, 9  ",
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
                "director": "UMAROV XUSNITDIN NURIDDINOVICH",
                "accountant": "UMAROV XUSNITDIN NURIDDINOVICH",
                "vatregcode": "326060121141",
                "vatregstatus": 20,
                "branchcode": "",
                "branchname": "",
                "taxgap": null,
                "category": 0
            },
            "seller": {
                "name": "\"MONT CLOUD \" MAS'ULIYATI CHEKLANGAN JAMIYAT XORIJIY KORXONA",
                "account": "20214000101037058001",
                "bank": {
                    "bankid": "00974",
                    "name": "ТОШКЕНТ Ш., \"КАПИТАЛБАНК\" АТ БАНКИНИНГ АМАЛИЁТ БОШКАРМАСИ"
                },
                "address": "AMIR TEMUR SHOX KO'CHASI 107 A-UY  ",
                "mobile": "998977772589",
                "workphone": "998977772589",
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
                "director": "ASKAROV RUSTAM TAXIROVICH",
                "accountant": "SOLOVEVA YELENA VLADIMIROVNA",
                "vatregcode": "326030038818",
                "vatregstatus": 20,
                "branchcode": "",
                "branchname": "",
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
                "itemreleasedfio": "ASKAROV R.T.",
                "itemreleasedpinfl": "33101756800026"
            },
            "facturaempowermentdoc": {
                "empowermentno": "",
                "empowermentdateofissue": null,
                "agentfio": null,
                "agenttin": null,
                "agentpinfl": null,
                "agentfacturaid": ""
            },
            "facturadoc": {
                "facturano": "705",
                "facturadate": "2023-10-20T00:00:00Z"
            },
            "oldfacturadoc": {
                "oldfacturaid": null,
                "oldfacturano": null,
                "oldfacturadate": null
            },
            "contractdoc": {
                "contractno": "27П",
                "contractdate": "2020-08-27T00:00:00Z"
            },
            "notes": null,
            "currentstateid": 30,
            "buyertin": "304426154",
            "sellertin": "306180825",
            "lotid": null,
            "investmentobjectdoc": {
                "objectid": null,
                "objectname": null
            },
            "contractid": null,
            "waybillid": null,
            "waybillids": null,
            "facturaproductid": "65327404315f2b0bf46b3f1a",
            "facturaid": "65327404315f2b0bf46b3f19",
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
                    "timestamp": "2023-10-20T12:39:13.24Z",
                    "sender": {
                        "taxpayer": {
                            "tin": "611130702",
                            "fio": "ASKAROV RUSTAM TAXIROVICH"
                        },
                        "host": "factura-provider-api",
                        "clientip": "194.149.242.6",
                        "datasource": "160",
                        "certificateid": 2014257253
                    },
                    "notes": null,
                    "signtime": null,
                    "publickeyoid": null
                },
                {
                    "stateid": 15,
                    "timestamp": "2023-10-20T12:39:13.279Z",
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
                },
                {
                    "stateid": 30,
                    "timestamp": "2023-10-26T08:27:44.471Z",
                    "sender": {
                        "taxpayer": {
                            "tin": "30108871580014",
                            "fio": "UMAROV XUSNITDIN NURIDDINOVICH"
                        },
                        "host": "soliqservis.uz",
                        "clientip": "213.230.80.50",
                        "datasource": "factura",
                        "certificateid": 2014784186
                    },
                    "notes": null,
                    "signtime": null,
                    "publickeyoid": null
                }
            ],
            "created": "2023-10-20T12:39:13.255Z",
            "updated": "2023-10-26T08:27:44.468Z",
            "productlist": {
                "facturaproductid": "65327404315f2b0bf46b3f1a",
                "tin": "306180825",
                "hascommittent": false,
                "haslgota": false,
                "hidereportcommittent": false,
                "hasmedical": false,
                "hasexcise": false,
                "hasvat": true,
                "products": [
                    {
                        "ordno": 1,
                        "committentname": null,
                        "committenttin": null,
                        "committentvatregcode": null,
                        "committentvatregstatus": null,
                        "name": "E-EPEss On-prem. 1 y. Ren. for 100. ESET PROTECT Essential On-prem (E). For 1 year. Renewal.For protection 100 objects.",
                        "catalogcode": "09800001009000000",
                        "catalogname": "Dasturiy mahsulotlar",
                        "barcode": "",
                        "marks": null,
                        "exchangeinfo": null,
                        "serial": null,
                        "measureid": null,
                        "packagecode": "1500242",
                        "packagename": "шт.",
                        "basesumma": 0,
                        "profitrate": 0,
                        "count": 1,
                        "summa": 14055825,
                        "deliverysum": 14055825,
                        "exciserate": 0,
                        "excisesum": 0,
                        "withoutvat": false,
                        "vatrate": 12,
                        "vatsum": 1686699,
                        "deliverysumwithvat": 15742524,
                        "lgotaid": null,
                        "lgotaname": "",
                        "lgotavatsum": 0,
                        "lgotatype": null,
                        "warehouseid": null,
                        "origin": 2
                    },
                    {
                        "ordno": 2,
                        "committentname": null,
                        "committenttin": null,
                        "committentvatregcode": null,
                        "committentvatregstatus": null,
                        "name": "ESET PROTECT Essential On-prem (E). For 1 year. Over 100. For protection 50 objects. E-EPEss O. 1 y. 100. for 50., право на использование",
                        "catalogcode": "09800001009000000",
                        "catalogname": "Dasturiy mahsulotlar",
                        "barcode": "",
                        "marks": null,
                        "exchangeinfo": null,
                        "serial": null,
                        "measureid": null,
                        "packagecode": "1500242",
                        "packagename": "шт.",
                        "basesumma": 0,
                        "profitrate": 0,
                        "count": 1,
                        "summa": 10777912.5,
                        "deliverysum": 10777912.5,
                        "exciserate": 0,
                        "excisesum": 0,
                        "withoutvat": false,
                        "vatrate": 12,
                        "vatsum": 1293349.5,
                        "deliverysumwithvat": 12071262,
                        "lgotaid": null,
                        "lgotaname": "",
                        "lgotavatsum": 0,
                        "lgotatype": null,
                        "warehouseid": null,
                        "origin": 2
                    },
                    {
                        "ordno": 3,
                        "committentname": null,
                        "committenttin": null,
                        "committentvatregcode": null,
                        "committentvatregstatus": null,
                        "name": "ESET PROTECT Entry On-prem (E). For 1 year. Makeover. For protection 150 objects E-EPEntr O1 y. Make. for 150., право на использование",
                        "catalogcode": "09800001009000000",
                        "catalogname": "Dasturiy mahsulotlar",
                        "barcode": "",
                        "marks": null,
                        "exchangeinfo": null,
                        "serial": null,
                        "measureid": null,
                        "packagecode": "1500242",
                        "packagename": "шт.",
                        "basesumma": 0,
                        "profitrate": 0,
                        "count": 1,
                        "summa": 7332637.5,
                        "deliverysum": 7332637.5,
                        "exciserate": 0,
                        "excisesum": 0,
                        "withoutvat": false,
                        "vatrate": 12,
                        "vatsum": 879916.5,
                        "deliverysumwithvat": 8212554,
                        "lgotaid": null,
                        "lgotaname": "",
                        "lgotavatsum": 0,
                        "lgotatype": null,
                        "warehouseid": null,
                        "origin": 2
                    }
                ],
                "timestamp": "2023-10-20T12:39:13.24Z",
                "updated": null,
                "created": "2023-10-20T12:39:13.258Z"
            }
        }
    }
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Invoice' parent='Pages' title='Invoice' />
            <PDFfactura data={jsonData} />
        </Fragment>
    )
}