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
  
  it('vote count increase by 1', function(){
	
	cy.visit('http://test-challenge.bungalow.com/polls/1')
		
	cy.get('[type="radio"]').check('4').should('be.checked')
	
	cy.get('form').submit()
	
	cy.url().should('eq', 'http://test-challenge.bungalow.com/polls/1/results/')
	
	cy.get('ul>li').contains('Red').invoke('text').then((text => {
            var prevNum = text.split(' ')[2]
			
			cy.get('a').contains('Vote again?').click()
				
			cy.get('[type="radio"]').check('4').should('be.checked')
	
			cy.get('form').submit()
	
			cy.url().should('eq', 'http://test-challenge.bungalow.com/polls/1/results/')
				
			cy.get('ul>li').contains('Red').invoke('text').then((text => {
				var postNum = text.split(' ')[2]
				expect(Number(prevNum)).to.equal(Number(postNum) - 1)
			}))
    }))
  })
 
})