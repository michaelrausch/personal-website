describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should show error if name is empty', () => {
    // Click submit on an empty contact form
    cy.get('#contact-submit').click()
    cy.contains('You must enter your name').should('exist')
  })

  it('Should show error if email is empty', () => {
    // Enter a name and no other information, click submit
    cy.get('#contact-name').type("Joe")
    cy.get('#contact-submit').click()

    cy.contains('You must enter your email').should('exist')
  })

  it('Should show error if message is empty', () => {
    // Enter a name and email, no other information, click submit
    cy.get('#contact-name').type("Joe")
    cy.get('#contact-email').type("email@example.com")
    cy.get('#contact-submit').click()

    cy.contains('You must enter a message').should('exist')
  })

  it('Should send a message if all fields are correct', () => {
    // Enter all valid information and submit
    cy.get('#contact-name').type("Test")
    cy.get('#contact-email').type("email@test.com")
    cy.get('#contact-message').type("This is a test message")
    cy.get('#contact-submit').click()

    cy.contains('Thanks, Test, I\'ll get back to you as soon as possible.').should('exist')
  })
})

