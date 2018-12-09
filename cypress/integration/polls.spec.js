describe('Poll Tests', function(){
  beforeEach(function(){
    cy.visit('http://test-challenge.bungalow.com/polls/')
  })

  it('home page content exists', function(){      
	cy.contains("Add a Poll")
  })
  
  it('votes', function(){
	  
	cy.visit('http://test-challenge.bungalow.com/polls/2')
	
	cy.get('[type="radio"]').check('7')
		
	cy.get('[type="radio"]')
		.check('7').should('be.checked')
	
	cy.get('form').submit()
	
	cy.url().should('eq', 'http://test-challenge.bungalow.com/polls/2/results/')
  })
  
})