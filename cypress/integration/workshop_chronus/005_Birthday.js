describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1680, 971)
   
      cy.visit('https://www.facebook.com/')
   
      cy.get('.\_4kny > .\_1k67 > .\_2s25 > .\_1qv9 > .\_1vp5').click()
   
      cy.get('#fbTimelineHeadline > .\_70k > #u_fetchstream_4_a > li:nth-child(3) > .\_6-6').click()
   
      cy.get('.\_3cz > .clearfix > .\_3dc > #u_fetchstream_5_y > .\_3sz').click()
   
      cy.get('.uiList:nth-child(2) > .\_698:nth-child(1) > .clearfix > .clearfix > .\_6a > .\_6a > .\_5t4x > .\_42ft').click()
   
      cy.get('#js_z8 > .\_5yk2 > .\_5rp7 > .\_5rpb > .notranslate > div > div > .\_1mf').click()
   
      cy.get('#js_yr > .\_1j2v > .\_2dck > .clearfix > .\_ohf > .\_2ph- > .\_1mf7 > span').click()
   
   })
  
  })
  