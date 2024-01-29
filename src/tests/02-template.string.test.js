import { describe, test, expect } from '@jest/globals';
import { getSaludo } from "../base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Johnson"', () => {
      const name = 'Johnson'
      const  message = getSaludo( name )
      expect( message ).toBe(`Hola ${ name }`)
  })
})



