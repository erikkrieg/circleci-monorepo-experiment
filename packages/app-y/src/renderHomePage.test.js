const renderHomePage = require('./renderHomePage')

describe('rednerHomePage', () => {
  it('returns a string', () => {
    expect(typeof renderHomePage()).toBe('string')
  })
  it('returns a message with the first parameter inserted and upper cased', () => {
    expect(renderHomePage('test')).toContain('TEST');
  })
  it('returns the expected message', () => {
    expect(renderHomePage('input')).toBe('Hello from INPUT')
  })
})
