export default class BasePage  {
    static pause(seconds){
        cy.wait(seconds * 1000)
    }

    static logInfo(message){
        cy.log(message)
    }

    static setMobileViewport(){
        cy.viewport('iphone-x')
    }

    static setTableViewport(){
        cy.viewport('ipad-2')
    }

    static setDesktopViewport(){
        cy.viewport('macbook-15')
    }

    static setLargeDesktopViewport(){
        cy.viewport(1980, 1080)
    }
}