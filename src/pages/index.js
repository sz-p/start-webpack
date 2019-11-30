import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p>hello indexpage</p>
      </div>
      <Link to={'/about'}>about</Link>
    </div>
  );
}
export default IndexPage;
