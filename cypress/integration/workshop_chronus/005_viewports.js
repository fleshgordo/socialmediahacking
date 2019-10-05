describe('Changing viewports ', function () {

   it('', function () {

      for(let i = 0; i<1000; i++) {
         cy.visit("http://motherfuckingwebsite.com/")
      cy.viewport(1440, 798)

      cy.wait(1000)

      cy.viewport(Math.random() * 1440, Math.random() * 800);

      cy.wait(1000)}
   })

})