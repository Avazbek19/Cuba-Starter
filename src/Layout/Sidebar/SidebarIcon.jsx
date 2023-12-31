import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cubaimg from "../../assets/images/logo/starlabIconNoletter.png"
import CustomizerContext from '../../_helper/Customizer';

const SidebarIcon = () => {
  const { layoutURL } = useContext(CustomizerContext);
  return (
    <div className="logo-icon-wrapper">
      <Link to={`${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`}>
        <img style={{width: '30px', height: '30px', objectFit: 'cover' }} src={ cubaimg } alt="" />
      </Link>
    </div>
  );
};

export default SidebarIcon;         