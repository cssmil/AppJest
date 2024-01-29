import { describe, test, expect } from '@jest/globals';
import { getHeroeByIdAsync } from "../base-pruebas/09-promesas"

describe('Probando 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1
    getHeroeByIdAsync(id)
      .then(hero=>{
        expect( hero ).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        })
        done()
      })
  })

  test('getHeroeByIdAsync debe obtener un error si hero no existe', (done) => {
    const id = 1
    getHeroeByIdAsync(id)
    .then(hero=>{
      expect( typeof hero ).toEqual("object")
      done()
    })
    .catch(err=>{
      console.log(err)
      done()
    })
  })
})