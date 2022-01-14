/// <reference types="cypress" />

const ITEM_ONE = 'Realizar ejercicio'
const ITEM_TWO = 'Probar ejercicio'
const ITEM_THREE = 'Mostrar ejercicio'

describe('Last excersise - course', () => {
    


    it('should enter TODOS ', () => {
        cy.visit('/')
        cy.get('.new-todo').type(`${ITEM_ONE} {enter}`)
        cy.get('.new-todo').type(`${ITEM_TWO} {enter}`)
        cy.get('.new-todo').type(`${ITEM_THREE} {enter}`)
    })

    it('should be 3 items on the list', () => {
        cy.get('.todo-list > li').should('have.length',3)
    })

    it('should mark TODOS as completed', () => {
        cy.get('.todo-list > li > .view > .toggle').click({ multiple: true })
    })
})
