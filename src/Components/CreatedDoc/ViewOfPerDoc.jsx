import React from 'react'
import { useLocation } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './PDF';


export default function ViewOfPerDoc() {
  const { state } = useLocation()

  return (
    <div>
      <PDFViewer width="1000" height="800">
        <MyDocument data={state} />
      </PDFViewer>
    </div>
  )
}