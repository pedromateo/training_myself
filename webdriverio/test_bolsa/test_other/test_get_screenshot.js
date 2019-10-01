
describe('test screenshot', () => {
    it('should take one screenshot', () => {
        browser.url('https://webdriver.io')
        browser.saveScreenshot('screenshot_works.png') 
    })
})
  
  