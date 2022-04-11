describe('App', () => {
    it('increments the counter', () => {
        cy.visit('/')
        cy.get('button').should('contain.html', '0')

        cy.get('button').click()
        cy.get('button').should('contain.html', '1')

        cy.get('button').click()
        cy.get('button').should('contain.html', '2')
    })
})
