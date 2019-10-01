import BasePage from './basepage'
//var BasePage = require('./basepage').BasePage;
import BolsaSelectors from './bolsa.selectors'
import { expect } from 'chai'

class BolsaPage extends BasePage { 

    openPage() {
        super.open('https://www.google.com/finance')
    }

    searchStock(stock_id){
        BolsaSelectors.searchBox.setValue(stock_id)
        BolsaSelectors.searchButton.click()
        var aux = BolsaSelectors.stockName.getText()
        console.log("Checking: " + aux)
        expect(aux).to.contain(stock_id)
        console.log("Stock value: " + BolsaSelectors.stockValue.getText())
    }

}

export default new BolsaPage()