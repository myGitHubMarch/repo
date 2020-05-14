/// <reference types="cypress" />

context('S a m p l e -  T e s t', () => {
  beforeEach(() => {
    cy.visit('https://vanguardfastest.appiancloud.com/suite/portal/login.jsp')
  })

  it('logon to appian', () => {
    // https://on.cypress.io/window
    cy.get('#un').type('processor3')
    cy.get('#pw').type('Appian2020!')
    cy.get('.choice_pair > label').click()
    cy.get('#loginForm > .button_box > .button_box_content > .button_box_buttons > .btn').click()
  })

  // it('cy.document() - get the document object', () => {
  //   // https://on.cypress.io/document
  //   cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  // })

  // it('cy.title() - get the title', () => {
  //   // https://on.cypress.io/title
  //   cy.title().should('include', 'Kitchen Sink')
  // })
})
