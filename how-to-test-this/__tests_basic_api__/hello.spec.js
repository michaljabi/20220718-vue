import { it, expect } from 'vitest'

// Unit under test
function divide(a, b) {
  return a / b
}

it('should divide to numbers (90, 9) and return 10', () => {
  // Arrange
  const a = 90
  const b = 9
  // Act
  const result = divide(a, b)
  // Assert
  expect(result).toBe(10)
})
