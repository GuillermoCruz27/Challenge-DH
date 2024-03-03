import React from 'react'
import { useState } from "react";
import Article from './Article';
import Section from './Section';

function Main() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <main class="content-wrap p-12 overflow-auto scroll-smooth">
            <Article/>
            <Section/>
        </main>
      </>
    );
  }
  
  //export default Main;