import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import {HookApp} from './HookApp';
// import {CounterApp} from './components/01-useState/CounterApp';
// import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook';
// import {SimpleForm} from './components/02-useEffect/SimpleForm';
//import {FormWithCustomHook} from './components/02-useEffect/FormWithCustomHook';
//import {MiltipleCustomsHooks} from './components/03-examples/MiltipleCustomsHooks';

export const ModalContainer = () => {

  const [state, setState] = useState({
    visible: false,
    data: {},
    name: 'Haystack News'
  });

  const { visible, data, name } = state;

  return (
    <>
      <h1>Haystack News</h1>
      <button
        onClick={() => {
          setState({
            ...state,
            visible: !visible
          })
        }}
      > Toggle Show!!!</button>

      {visible && <ModalComponent name={name} data={data}/>}
    </>

  )
}

export const ModalComponent = ({ name, data }) => {


  return (
    <div>
      <h1>I am a modal released by {name}</h1>
    </div>
  )
}
ModalComponent.propTypes = {
  name: PropTypes.string.isRequired
}

ReactDOM.render(

  <ModalContainer />,
  document.getElementById('root')
);

