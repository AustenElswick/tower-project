describe('header test', function() {
  it('should see if there is a header img, and if Margs is in the h1 tag', function() {
    cy.visit('http://localhost:3001')
    cy.get('header').should('have', 'img')
    cy.get('h1').should('contain', 'Margs')
  })
})
