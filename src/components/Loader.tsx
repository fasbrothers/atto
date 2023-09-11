import React from 'react';
import { Spin } from 'antd';

const Loader: React.FC = () => {
  return(
    <div className="text-center py-6 px-8 mb-5">
      <Spin />;
    </div>
  )

}

export default Loader;