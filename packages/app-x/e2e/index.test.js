const puppeteer = require('puppeteer')
const url = process.env.URL

let browser, page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('home page', () => {
  it('has the expected content', async (done) => {
    await page.goto(url)
    expect(await page.content()).toContain('Hello from APP X')
    done()
  })
})

afterAll(() => {
  browser.close()
})
