describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1440, 798)
 
    cy.visit('https://twitter.com/')
    
    cy.get('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input').click()
 
    cy.get('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input').type('zhdkbot')
 
    cy.get('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-password > .text-input').type('password')
 
    cy.get('.StaticLoggedOutHomePage-content > .StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .EdgeButton').click()
 
    // write tweet into textarea box
    cy.get('.DraftEditor-editorContainer > .notranslate > div > div > .public-DraftStyleDefault-block').type("cypress.io rocks",{ delay: 100 })
    
   // find tweet button and click it (multiple because cypress finds two buttons, force to disable error checking)
    cy.get('[data-testid="tweetButtonInline"]').find('span').should('contain', 'Tweet').click({ multiple: true , force: true});

    cy.scrollTo('top')

})

})

