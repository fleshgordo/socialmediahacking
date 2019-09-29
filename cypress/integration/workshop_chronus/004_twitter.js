describe('Login in to a Twitter account', function() {

 it('goes to twitter.com and fills in username/password and login', function() {

    cy.viewport(1440, 798)
 
    cy.visit('https://twitter.com/')
 
    cy.get('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input').click()
 
    cy.get('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input').type('zhdkbot')
 
   // change password!
    cy.get('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-password > .text-input').type('password')
 
    cy.get('.StaticLoggedOutHomePage-content > .StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .EdgeButton').click()
     
 })

})
