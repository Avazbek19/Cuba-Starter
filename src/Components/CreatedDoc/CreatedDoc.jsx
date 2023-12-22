import React, { Fragment } from 'react'
import { Breadcrumbs } from '../../AbstractElements'
import ListOfDocuments from './ListOfDocuments'
import './Style.css'


export default function CreatedDoc() {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Created Documents' parent='Pages' title='Created doc' />
            <ListOfDocuments/>
        </Fragment>
    )
} 