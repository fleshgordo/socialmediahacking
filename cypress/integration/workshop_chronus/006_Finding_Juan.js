describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1680, 971)
   
      cy.visit('https://www.facebook.com/?stype=lo&jlou=AfdkhRVf7GPwYRrWnFhjVcuSyDdzA6eRvlP3sh9VgcyaeWC0HXsa9E9P98NPlAoN_E2aZZxSvSUFwLeQzo12uEc2fH7QPEJuQOJlNhu8e00rbw&smuh=25305&lh=Ac_V77tgrs1_dvBl')
   
      cy.get('table > tbody > tr > td > #email').click()
   
      cy.get('table > tbody > tr > td > #email').type('gefope@app-mailer')
   
      cy.get('table > tbody > tr > td > #email').type('gefope@app-mailer.com')
   
      cy.get('table > tbody > tr > td > #pass').click()
   
      cy.get('table > tbody > tr > td > #pass').type('SMH2019!')
   
      cy.get('tbody > tr > td > #loginbutton > #u_0_b').click()
   
      cy.visit('https://www.facebook.com/')
   
      cy.get('#u_a_1 > .wrap > .innerWrap > #u_a_2 > .\_1frb').click()
   
      cy.get('#facebar_typeahead_view_list > div > #js_32 > .\_7g_o > .\_19bs').click()
   
      cy.get('#u_a_1 > .wrap > .innerWrap > #u_a_2 > .\_1frb').type('juan gomez')
   
      cy.get('.\_6v_2 > span > #u_z_3 > #u_z_4 > .FriendRequestAdd').click()
   
      cy.get('.\_6v_2 > span > #u_10_3 > #u_10_4 > .FriendRequestAdd').click()
   
      cy.get('.\_6v_2 > span > #u_11_3 > #u_11_4 > .FriendRequestAdd').click()
   
      cy.get('.\_6v_2 > span > #u_y_3 > #u_y_4 > .FriendRequestAdd').click()
   
      cy.get('div > .\_19_p > #u_ps_fetchstream_1_4_3 > .\_6ojs > a').click()
   
   })
  
  })
  