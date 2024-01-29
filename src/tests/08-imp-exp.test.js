import { describe, test, expect } from '@jest/globals';
import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from '../data/heroes';

describe('pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById( id );

    //expect( typeof hero ).toEqual( "undefined" );
    expect( hero ).toBeFalsy()

  });

  test('Funcion getHeroeById debe retornar un heroe por id', () => {  
    const id = 1;
    const hero = getHeroeById( id )
    expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
  });

  test('getHeroesByOwner debe retornar heroes de DC', () => {
    const owner = 'DC';
    const heros = getHeroesByOwner( owner );
    expect( heros.length ).toBe( 3 )
    expect( heros ).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])
    expect( heros ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
  });

})