import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p>hello AboutPage</p>
      </div>
      <Link to={'/'}>back</Link>
    </div>
  );
}
export default AboutPage;
