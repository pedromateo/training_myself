export default class Page {
    constructor() {
        this.title = 'Base Page'
    }

    open(path) {
        browser.url(path)
    }
}