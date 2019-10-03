import Page from './page'
import ArenaLocators from './arena.locators'
import { expect } from 'chai'

class ArenaPage extends Page { 

    openMainPage() {
        super.open('https://www.opensubtitles.org/es')
    }

    lookForTVSeries(series, lang){
        ArenaLocators.languageButton.click()
        ArenaLocators.languageOption(lang).waitForEnabled()
        var aux = ArenaLocators.languageOption(lang)
        if (!aux.isSelected()){
            aux.click()
        }
        //ArenaLocators.languageDropDown.selectByAttribute("value", lang)
        ArenaLocators.searchBox.setValue(series)
        //ArenaLocators.searchButton.click()
        browser.pause(1000)
        browser.keys(['ArrowDown'])
        browser.pause(1000)
        browser.keys(['Enter'])
    }

    downloadAllSubtitles(lang, lang_short){

        var list = ArenaLocators.seasonTableElems
        var current_season = ""
        var current_episode = ""
        //console.log(list);

        list.forEach(function(elem, index) {
            var itemprop = elem.getAttribute("itemprop")
            // episode case
            if (itemprop == "episode"){
                var link = elem.$('td > a')
                console.log(index + " --> " + link.getAttribute("title"))//$('tr > ta').title)
                // go to subtitle page
                link.click()
                // find lang among all subtitles
                var sublist = ArenaLocators.subtitleTableElems
                sublist.forEach(function(subrow, index){
                    var rowelems = subrow.$$('td')
                    //console.log(rowelems[0].$('a'))
                    var elemlink = rowelems[1].$('a')
                    var sublang = elemlink.getAttribute('title')
                    console.log(sublang + " vs. " + lang)
                    if (sublang == lang){
                        console.log("lang found!!!!")
                        // go to subtitle page
                        elemlink.click()
                        // get the list of available files and get the first
                        var subfile = ArenaLocators.subtitleTitlesTableElems[0]
                        var subfilelink = subfile.$('td > a')
                        subfilelink.click()
                    }
                })
            }
            // season case
            else{
                current_season = elem.$('td > span > a').getText()
                console.log("Extracting season: " + current_season)
            }

            //console.log(elem.toString());
            
        });

    }

    action1(param){
        ArenaLocators.searchBox.setValue(param)
        console.log("Checking: " + param)
        expect(param).to.contain(param)
    }

}

export default new ArenaPage()