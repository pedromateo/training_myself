import Page from './page'
import ArenaSelectors from './arena.locators'
import { expect } from 'chai'

class ArenaPage extends Page { 

    openMainPage() {
        super.open('https://www.opensubtitles.org/es')
    }

    lookForTVSeries(series, lang){
        ArenaSelectors.languageButton.click()
        ArenaSelectors.languageOption(lang).waitForEnabled()
        var aux = ArenaSelectors.languageOption(lang)
        if (!aux.isSelected()){
            aux.click()
        }
        //ArenaSelectors.languageDropDown.selectByAttribute("value", lang)
        ArenaSelectors.searchBox.setValue(series)
        //ArenaSelectors.searchButton.click()
        browser.pause(2000)
        browser.keys(['ArrowDown'])
        browser.pause(1000)
        browser.keys(['Enter'])

        browser.pause(3000)
    }

    action1(param){
        ArenaSelectors.searchBox.setValue(param)
        console.log("Checking: " + param)
        expect(param).to.contain(param)
    }

}

export default new ArenaPage()