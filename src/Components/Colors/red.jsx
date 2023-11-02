import React from 'react'
import { Breadcrumbs } from '../../AbstractElements'
import './colorStyle.css'

export default function RedColor() {
  return (
    <div className='red-bg'>
      <Breadcrumbs mainTitle='Red' parent='Colors' title='Red Field' />
      red
    </div>
  )
}