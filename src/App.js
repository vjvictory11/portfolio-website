import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

function App() {

  const cube = useRef();

  function onLoad(spline) {
    console.log("on load called");
    const obj = spline.findObjectById('1d2d1902-5a9b-43c4-98e5-f50a78bcfbf2');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
  }

  function moveObj() {
    console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    cube.current.emitEvent('keyUp', '1d2d1902-5a9b-43c4-98e5-f50a78bcfbf2');
  }


  return (
    <div className="App">
     
      <Wrapper>
        <div>
          <Spline className="spline" scene="https://prod.spline.design/SRMVAU9KfH6ZvDZl/scene.splinecode"
          onLoad={onLoad}
          />
        </div>
        <button type="button" onClick={moveObj}>
          Move monitor
        </button>

        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>

        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>
        <h1>sdsds</h1>

      </Wrapper>

    </div>
  );
}

export default App;

const Wrapper = styled.div`

position: relative;

  .spline {
  position: fixed;
  z-index:-1;
  }
`;
