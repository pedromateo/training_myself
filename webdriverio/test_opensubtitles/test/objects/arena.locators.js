class ArenaLocators { 

    get searchBox() { return $('#search_text') }
    get searchButton() { return $('#search_submit')}
    get languageButton() { return $('button[type="button"].ui-multiselect') }
    get languageDropDown() { return $('#SubLanguageID') }
    languageOption(lang) { return $('input[type="checkbox"][name="multiselect_SubLanguageID"][value="' + lang + '"]') }
    

    get seasonTableElems() { return $('#search_results > tbody').$$('tr:not(.head)') }
    get subtitleTableElems() { return $('#search_results > tbody').$$('tr:not(.head)') }
    get subtitleTitlesTableElems() { return $('fieldset > table > tbody').$$('tr:not(.head)') }
    

    // TO DELETE - some examples
    get searchBoxa() { return $('#lst-ib') }
    get stockName() { return $('div[data-attrid="title"]') }
    get stockValue() { return $('g-card-section[class="N9cLBc"] > span > span > span:nth-of-type(1)') }
    get submitBtn() { return $('form button[type="submit"]') }
    get headerLinks() { return $$('#header a') }

}

export default new ArenaLocators()