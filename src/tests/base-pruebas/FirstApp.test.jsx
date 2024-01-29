import { describe, test, expect } from '@jest/globals';

import { render } from "@testing-library/react"
import { FirstApp } from '../../components/FirstApp';


describe('Puebas en <FirstApp />', () => { 

  test('Debe hacer match con el snapshot', () => {

    const title = 'Hola, Soy Armando';
    const { container } =render( <FirstApp title={ title } /> );

    expect( container ).toMatchSnapshot()

  });

  test('Debe mostrar el título en un h1', () => {

    const title = 'Hola, Soy Armando';
    const { container } =render( <FirstApp title={ title } /> );

    // const h1 = container.querySelector('h1')
    // expect( h1.innerHTML ).toContain( title )
    
  });

  test('Debe mostrar el sub-título enviado por props', () => {

    const title = 'Hola, Soy Armando';
    const subTitle = 'SOY UN SUB-TITULO';
    const { getByText } =render( 
      <FirstApp 
        title = { title }
        subTitle = { subTitle }
      /> 
    );
    
    expect( getByText(subTitle) ).toBeTruthy();
    
  });

});