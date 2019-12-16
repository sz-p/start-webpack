import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function IndexPage() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div className={'hellowordPage'}>
        <p>hello indexpage</p>
      </div>
      <Link to={'/about'}>about</Link>
    </div>
  );
}
export default IndexPage;
