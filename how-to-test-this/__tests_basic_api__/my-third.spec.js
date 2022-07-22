import { it, expect, describe } from 'vitest'

describe('Skipped tests...', () => {
  it.skip('should be skipped', () => {
    expect(100).toBe(2000)
  })

  describe('another level', () => {
    it.skip('should also be skipped', () => {})
  })
})
