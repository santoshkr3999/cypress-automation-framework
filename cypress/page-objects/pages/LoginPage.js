import BasePage from "./BasePage"

export default class LoginPage extends BasePage{
    static login(userName, password){
        cy.login(userName, password)
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage(){
        cy.isVisible('.alert-error')

    }
}