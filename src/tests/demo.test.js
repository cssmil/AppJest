import { describe, test, expect } from '@jest/globals';
describe('Pruebas en <DemonComponent />' , () => {
  test('esta prueba no debe fallar', () => {
      // 1. Inicializacion
      const mensaje1 = 'hola mundo'
      // 2. Estímulo
      const mensaje2 = mensaje1.trim()
      // 3. Observar el comportamiento... esperado
      expect( mensaje1 ).toBe( mensaje2 );
  })
})