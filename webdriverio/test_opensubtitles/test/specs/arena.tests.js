import ArenaPage from '../objects/arena.page'
import ArenaData from '../objects/arena.data'
var data_driven = require('mocha-data-driven')

describe('main test', () => {

  const TV_SERIES_NAME = "Shameless (2011)"
  const LANG = "Espańól"
  const LANG_SHORT = "spa"
  
  it('test1', () => {
    ArenaPage.openMainPage()
    ArenaPage.lookForTVSeries(TV_SERIES_NAME,LANG_SHORT)
    ArenaPage.downloadAllSubtitles(LANG,LANG_SHORT)
  })
  

  /*data_driven(ArenaData.LIST_1, () => {

    it('dd test2', (ctx) => {
        ArenaPage.openPage()
        ArenaPage.action1(ctx.value)
    })

  })*/

})