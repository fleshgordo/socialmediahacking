describe('test_name', function() {

 it('performing a google search query', function() {

    cy.viewport(1280, 1289)
 
    cy.visit('https://www.google.com/')
 
    // getting focus on input field for search query
    cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').click()
 
    // typing into input field
    cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').type('my teacher is', { delay: 1000 })
 
    cy.get('.UUbT9 > .aajZCb > .VlcLAe > center > .gNO89b').click()

 })

})
