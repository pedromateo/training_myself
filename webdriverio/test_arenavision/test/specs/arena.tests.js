import ArenaPage from '../objects/arena.page'
import ArenaData from '../objects/arena.data'
var data_driven = require('mocha-data-driven')

describe('main test', () => {
  
  it('test1', () => {
    ArenaPage.openMainPage()
    ArenaPage.lookForTVSeries("shameless (2011)","spa")
  })
  

  /*data_driven(ArenaData.LIST_1, () => {

    it('dd test2', (ctx) => {
        ArenaPage.openPage()
        ArenaPage.action1(ctx.value)
    })

  })*/

})