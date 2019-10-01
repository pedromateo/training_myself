import BolsaPage from '../objects/bolsa.page'
//var bolsa_page = require('../objects/bolsa.page').BolsaPage;
import BolsaData from '../objects/bolsa.data'
var data_driven = require('mocha-data-driven')

describe('obtener cotizaciones', () => {
  
  it('Banco Santander', () => {

    const ID = "Banco Santander SA"

    BolsaPage.openPage()
    BolsaPage.searchStock(ID)
  })
  

  data_driven(BolsaData.STOCK_LIST_1, () => {

    it('Mocha data driven', (ctx) => {
      BolsaPage.openPage()
      BolsaPage.searchStock(ctx.value)
    })

  })

})


