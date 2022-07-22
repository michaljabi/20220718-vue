import { it, expect, describe } from 'vitest'

// Some outside logic to test:
const sumNumbers = (a, b) => a + b

describe('sumNumbers', () => {

  it('should be 3 x A (Arrange Act Assert) format', () => {
    // Arrange (Given)
    const a = 100
    const b = 20

    // Act (When)
    const result = sumNumbers(a, b)

    // Assert (Then)
    expect(result).toBe(120)
  })

  it.todo('should be written in other time...')
})
