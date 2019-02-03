const { upperCase } = require('./index')

describe('upperCase', () => {
  it('returns upper cased string', () => {
    expect(upperCase('test')).toBe('TEST')
  })
})
