describe('Poll Tests', function(){
  beforeEach(function(){
    cy.visit('http://test-challenge.bungalow.com/polls/')
  })

  it('votes', function(){
      
	cy.get('.action-radios [type="radio"]').not('[disabled]')
	  .check().should('be.checked')

	// .check() accepts a value argument
	cy.get('.action-radios [type="radio"]')
		.check('radio1').should('be.checked')
	
	cy.get('.action-form').submit()
		.next().should('contain', 'Your form has been submitted!')
  })
})