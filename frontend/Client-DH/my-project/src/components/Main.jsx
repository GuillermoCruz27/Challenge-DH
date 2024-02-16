import React from 'react'
import { useState } from "react";
import Article from './Article';

function Main() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <main class="content-wrap">
            <Article/>
        </main>
      </>
    );
  }
  
  export default Main;