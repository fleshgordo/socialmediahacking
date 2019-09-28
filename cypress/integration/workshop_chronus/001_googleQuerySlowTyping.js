describe('test_name', function() {

 it('performing a google search query', function() {

    cy.viewport(1280, 1289)
 
    cy.visit('https://www.google.com/')
 
    // getting focus on input field for search query
    cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').click()
 
    // typing into input field
    cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').type('my teacher is', { delay: 1000 })
 
    cy.get('.UUbT9 > .aajZCb > .VlcLAe > center > .gNO89b').click()
 
    cy.visit('https://www.google.com/search?safe=off&source=hp&ei=y2iPXaXEDemSmwWMi6KQBQ&q=hello+world&oq=hello+world&gs_l=psy-ab.12..0l10.2520.4189..8045...0.0..0.104.1147.10j2....3..0....1..gws-wiz.....0..0i131.ilyYmeP-1Vc&ved=0ahUKEwjl1ZuG2PPkAhVpyaYKHYyFCFIQ4dUDCAY')
 
 })

})
