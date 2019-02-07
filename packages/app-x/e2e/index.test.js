const puppeteer = require('puppeteer')
const url = process.env.URL || 'http://localhost:3000/'

let browser, page

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    // This is needed for puppeteer to run on CI/CD containers
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  page = await browser.newPage()
})

describe('home page', () => {
  it('has the expected content', async () => {
    await page.goto(url)
    expect(await page.content()).toContain('Hello from APP X')
  })
})

afterAll(() => {
  browser.close()
})
