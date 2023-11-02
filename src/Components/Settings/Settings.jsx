import React, { useState } from 'react';
import { Input, Label, Media } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import './settings.css'
import Themecustomizer from '../../Layout/ThemeCustomizer';


export default function Settings() {
  const [toggle, setToggle] = useState(false)

  const toggleCustomize = () => {
    setToggle(!toggle)
  }

  return (
    <section>
      <Breadcrumbs mainTitle='Settings' parent='Settings' title='Customize Settings' />
      <div className='p-2'>
        <Media>
          <Label className="col-form-label m-r-10">Theme Customize</Label>
          <Media body className="icon-state switch-outline">
            <Label className="switch">
              <Input type="checkbox" onClick={() => toggleCustomize()} />
              <span className="switch-state bg-success switch-outline" ></span>
            </Label>
          </Media>
        </Media>
      </div>
      <div>
        {
          toggle ? <Themecustomizer />
            : ''
        }
      </div>
    </section>
  )
}