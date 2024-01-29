import { describe, test, expect } from '@jest/globals';
import { retornaArreglo } from "../base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr', () => { 
  test('Probarndo retornaArreglo', () => { 
    const arregloFinal = [
      'ABC', 
      123
    ]
    const [letters, numbers] = retornaArreglo();
    const arregloTest = retornaArreglo();
    expect( arregloFinal ).toEqual( arregloTest );
    expect( typeof letters ).toBe( 'string' );
    expect( typeof numbers ).toBe( 'number' );
  })
})