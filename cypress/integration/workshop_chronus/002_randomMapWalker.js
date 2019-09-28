
describe('test_name', function() {

 it('what_it_does', function() {

    cy.visit('https://www.google.com/maps')
 
    cy.viewport(1280, 1289)
 
    cy.visit('https://www.google.com/maps')
 
    
 
    let arrowkeys = ["{leftarrow}","{rightarrow}","{uparrow}","{downarrow}"]
    for (let i = 0; i < 4; i++ ) {
        
        let j = Math.floor(Math.random() * 3)
        const pointerEvent = {
            force: true,
            pointerType: 'touch',
        };
        cy.get('#app-container > #content-container > #scene > .widget-scene > .widget-scene-canvas')
        .trigger('pointerdown', 'topLeft', pointerEvent)
            .trigger('pointerup', 'center', pointerEvent)
        
        // .trigger('mousedown', { which: 1, clientX: 600, clientY: 400 })
        // .trigger('mousemove', { which: 1, clientX: 600, clientY: 800 })
        // .trigger('mouseup')
        //cy.get('canvas').trigger('pointerdown', {clientX: 900, clientY: 500})
        //cy.get('#app-container > #content-container > #scene > :nth-child(1)').trigger('dragstart')
        //.trigger('pointerup',pointerEventEnd)
        cy.wait(1000);
    }
 
 })

})