import { describe, test, expect } from '@jest/globals';

import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../../components/counterApp"

describe('Pruebas en el <CounterApp />', () => {

  const initialValue = 10;

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={ initialValue } />)
    expect( container ).toMatchSnapshot();
  })
  
  test('debe mostrar el valor inicial de 100 <CounterApp value={ 100 } />', () => {
    render( <CounterApp value={initialValue} /> )
    expect(screen.getByText('10') ).toBeTruthy()
  })

  test('debe incrementar el boton +1 ', () => {
    render( <CounterApp value={initialValue} /> )
    fireEvent.click(screen.getByText('+1') )
    expect( screen.getByText('11')  ).toBeTruthy()
  })

  test('debe restar el boton -1 ', () => {
    render( <CounterApp value={initialValue} /> ) 
    fireEvent.click(screen.getByText('-1') )
    expect( screen.getByText('9')  ).toBeTruthy()
  })

  test('debe reiniciar el contador a su estado inicial ', () => {
    render( <CounterApp value={ initialValue } /> ) 
    
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('reset') )

    //screen.debug(); 
    //expect(screen.getByText('10')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
    expect(screen.getByText(initialValue)).toBeTruthy()
  })

})