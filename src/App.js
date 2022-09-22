import {Button, Container ,Row ,Col} from 'react-bootstrap';
import Datescount from './components/Datescount';
import Dateslist from './components/Dateslist';
import Datesaction from './components/Datesactoin';
import React ,{ useEffect, useState } from 'react';
import { person } from './Data';

function App() {
  const [personData, setperson] = useState(person);
  const onDelete=()=>{
    setperson([])
  }
  const onVew=()=>{
    setperson(person)
  }
  useEffect(()=>{
    setperson([])
  },[])
  return (
    <div className="font color-body">
      <Container className='py-5'>
        <Datescount person={personData}/>
        <Dateslist person={personData}/>
        <Datesaction DeleteData={onDelete} VewData={onVew}/>
        
      </Container>
    </div>
  );
}

export default App;
