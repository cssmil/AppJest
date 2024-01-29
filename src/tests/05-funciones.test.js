import { describe, test, expect } from '@jest/globals';
import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";


describe('Pruebas 1 en 05-funciones', () => { 
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    expect( testUser ).toEqual( user )
  })
})

describe('Pruebas 2 en 05-funciones', () => { 
  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'johnson';
    const testUser = {
      uid: 'ABC567',
      username: name
    }
    const user = getUsuarioActivo(name);
    expect( testUser ).toEqual( user )
  })
})