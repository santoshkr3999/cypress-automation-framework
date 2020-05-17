export const accountSummary = '#account_summary_tab'
export const accountActivity = '#account_activity_tab'
export const transferFunds = '#transfer_funds_tab'
export const payBills = '#pay_bills_tab'
export const moneyMap ='#money_map_tab'
const onlineStatements = '#online_statements_tab'

export default class AccountLinks {
    
    static clickAccountSummary() {
        cy.get(accountSummary).click
    }

    static clickAccountActivity(){
        cy.get(accountSummary).click()
    }

    static clickTransferFunds() {
        cy.get(payBills).click()
    }

    static clickPayBills(){
        cy.get(moneyMap).click()
    }

    static clickOnlineStatements(){
        cy.get(onlineStatements).click()
    }
}