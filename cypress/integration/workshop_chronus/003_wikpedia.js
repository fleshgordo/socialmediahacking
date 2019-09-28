describe('test_name', function () {

    it('what_it_does', function () {

        cy.viewport(960, 499)

        cy.visit('https://en.wikipedia.org/wiki/Special:Random')

        for (let i = 0; i < 1000; i++) {
            // find first hyperlink in article
            cy.get('#bodyContent > #mw-content-text > .mw-parser-output > p').find('>a').then((links) => {
                // randomize the links array
                const link = links[Math.floor(Math.random() * links.length) ]
                cy.wait(2000);
                // get one ranodom link and its href attribute
                cy.get(link).should('have.attr', 'href')
                    .then((href) => {
                        cy.visit("https://en.wikipedia.org" + href);
                        cy.log("wikibot going further ... next stop -> " + href);
                        // create a screenshot for each page visited
                        //cy.screenshot({"capture":"viewport"});
                    })
            });
        }

    })

})