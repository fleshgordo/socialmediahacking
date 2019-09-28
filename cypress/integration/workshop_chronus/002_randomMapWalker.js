describe('test_name', function() {

 it('what_it_does', function() {

    cy.visit('https://www.google.com/maps')
 
    cy.viewport(1280, 1289)
 
    cy.visit('https://www.google.com/maps')
 
    
 
    let arrowkeys = ["{leftarrow}","{rightarrow}","{uparrow}","{downarrow}"]
    for (let i = 0; i < 10; i++ ) {
        
        let j = Math.floor(Math.random() * 3)
        cy.get('#app-container > #content-container > #scene > .widget-scene > .widget-scene-canvas').type(arrowkeys[j],{ force: true });
        cy.wait(1000);
    }
 
 })

})