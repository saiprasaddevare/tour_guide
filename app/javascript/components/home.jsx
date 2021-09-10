import React, { useState, useEffect } from 'react';
import Joyride from 'react-joyride';

const Home = () => {
  const [steps, setSteps] = useState([
    {
      target: '#name',
      content: 'This is name field',
      disableBeacon: true
    },
    {
      target: '#actual_name',
      content: 'This is actual name',
    },
    {
      target: '#address',
      content: 'This is actual name',
    },
    {
      target: '#actual_address',
      content: 'This is actual name',
    }
  ]);

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setDisplay(true)
  }, [])

  return (
    <div>
      <Joyride steps={steps} showSkipButton continuous/>
      <div style={{ border: '1px solid black' }}>
        <div id='name'> Name </div>
        <div id='actual_name'> My name is XYZ </div>
      </div>

      <div style={{ border: '1px solid black', marginTop: '3rem' }}>
        <div id='address'> Address </div>
        <div id='actual_address'> Follow me to know address </div>
      </div>
    </div>
  )
}

export default Home;
