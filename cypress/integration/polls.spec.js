describe('Poll Tests', function(){
  beforeEach(function(){
    cy.visit('http://test-challenge.bungalow.com/polls/')
  })

  it('home page content exists', function(){      
	cy.contains("Add a Poll")
  })
  
  it('single vote', function(){
	  
	cy.visit('http://test-challenge.bungalow.com/polls/2')
	
	cy.get('[type="radio"]').check('7')
		
	cy.get('[type="radio"]')
		.check('7').should('be.checked')
	
	cy.get('form').submit()
	
	cy.url().should('eq', 'http://test-challenge.bungalow.com/polls/2/results/')
  })
  
  it('single vote', function(){
	  
	cy.visit('http://test-challenge.bungalow.com/polls/1')
	
	cy.get('[type="radio"]').each(function() {
		
	console.log($el.value)
	cy.get($el.value).check()
	
	cy.get('form').submit()
	
	cy.url().should('eq', 'http://test-challenge.bungalow.com/polls/1/results/')
		
	})
  })
 
})