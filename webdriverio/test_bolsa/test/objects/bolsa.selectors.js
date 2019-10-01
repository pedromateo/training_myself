class BolsaSelectors { 

    get searchBox() { return $('#lst-ib') }
    get searchButton() { return $('#mKlEF') }

    get stockName() { return $('div[data-attrid="title"]') }
    //get stockValue() { return $('div[id="aviV4d"] > span > span > span:nth-of-type(1)') }
    get stockValue() { return $('g-card-section[class="N9cLBc"] > span > span > span:nth-of-type(1)') }


    // TO DELETE
    get password() { return $('#password') }
    get submitBtn() { return $('form button[type="submit"]') }
    get flash() { return $('#flash') }
    get headerLinks() { return $$('#header a') }

}

export default new BolsaSelectors()