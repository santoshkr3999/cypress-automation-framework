import { url, userName, password } from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'
describe('login failed test', () => {
    before(function(){
        cy.visit(url)
        NavBar.clickSignIn()
    })

    it('enter invalid credentials', () => {
        LoginPage.login("somename", "somepassword")
    })

    it('should displaye error message', () => {
        LoginPage.displayErrorMessage()
    })

})

describe('login success', () => {
    before(function() {
        cy.visit(url)
        NavBar.clickSignIn()
    })

    it('enter valid credentials', () =>{
        LoginPage.login(userName, password)
    })

    it('log out of the application', () => {
        NavBar.logout()
    })

})