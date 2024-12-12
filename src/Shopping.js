import React from 'react';
import './Shopping.css';
import Main from './page/Main';
import Navwrap from './components/Navwrap';
import { Routes, Route } from 'react-router-dom';
import Detail from './page/Detail';
import New from './page/New';
import Best from './page/Best';
import Aaa from './page/Aaa';
import Bbb from './page/Bbb';
import Not from './page/Not';





const Shopping = () => {
  return (
    <div>
      <Navwrap />
      <Routes>
         <Route path="/" element={ <Main />} />  
         <Route path="/detail" element={<Detail />} />
         <Route path="/new" element={<New />}>
            <Route path="aaa" element={<Aaa />}/>
            <Route path="bbb" element={<Bbb />}/>
         </Route>
         <Route path="/best" element={<Best />} />
         <Route path="*" element={<Not />} />
      </Routes>
     
    </div>
  );
};


export default Shopping;