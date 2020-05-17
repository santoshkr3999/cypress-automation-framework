import {userName} from '../../../config'
export default class NavBar{
    static clickOnLogo(){
        cy.get('.brand').click()
    }

    static search(text){
        cy.get('#searchTerm').type(text + ' {enter}')
        // cy.get('#searchTerm').type('${text} {enter}')
    }

    static clickSignIn(){
        cy.get('button#signin_button').click()
    }

    static clickSettings(){
        cy.contains('Settings').click()
    }

    static logout(){
        cy.contains(userName).click()
        cy.get('#logout_link').click()
    }
}