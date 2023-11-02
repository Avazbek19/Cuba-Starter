import React from 'react'
import { Breadcrumbs } from '../../AbstractElements'
import './colorStyle.css'

export default function GreenColor() {
  return (
    <div className='green-bg'>
      <Breadcrumbs mainTitle='Green' parent='Colors' title='Green Field' />
      green
    </div>
  )
}