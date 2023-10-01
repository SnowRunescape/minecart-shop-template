import React from 'react'
import { Outlet } from 'react-router-dom';

const Default = () => {

  return (
      <>
        <Outlet />
      </>
  );
}

export default Default;