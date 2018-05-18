describe('map testing', function() {
  it('should test if there are custom markers, and test if the create a new place button has a name of createItem', function() {
    cy.visit('http://localhost:3001')
    cy.get('GoogleMapReact').should('have', 'CustomMarker')
    cy.get('input').should('have.attr', 'name', 'createItem')
  })
})
