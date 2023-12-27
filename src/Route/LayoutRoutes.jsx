import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../Layout/Layout';
import ViewOfPerDoc from '../Components/CreatedDoc/ViewOfPerDoc';

const LayoutRoutes = () => {

  return (
    <Routes>
      {routes.map(({ path, Component }, i) => (
        <Fragment key={i}>
          <Route element={<AppLayout />} key={i}>
            <Route path={path} element={Component} />
            <Route path='/info-document/:name' element={<ViewOfPerDoc />} />
          </Route>
        </Fragment>
      ))}
    </Routes>
  );
};

export default LayoutRoutes;