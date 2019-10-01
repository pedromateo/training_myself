export default class BasePage {
    constructor() {
        this.title = 'Base Page'
    }

    open(path) {
        browser.url(path)
    }
}