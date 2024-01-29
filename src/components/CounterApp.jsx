import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({value, name}) => { 
  
  const [counter, setCounter] = useState(value)
  const handleAdd = () => setCounter( counter + 1 );
  const handleSub = () => setCounter( counter - 1 );
  const handleReseT = () => setCounter( value );
  
  return(
    <> 
      <h2>AppTest Jest {name}</h2>
      <h1 >{ counter }</h1>
      <button onClick={ handleAdd } >
        +1
      </button>
      <button onClick={ handleSub } >
        -1
      </button>
      <button aria-label='btn-reset'  onClick={ handleReseT } >
        reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

CounterApp.defaultProps = {
  value: 1,
  name: "name test default"
}