import BasePage from "./BasePage";
const LINK_FEEDBACK = '#feedback'
const INPUT_NAME = '#name'
const INPUT_EMAIL = '#email'
const INPUT_SUBJECT = '#subject'
const INPUT_MESSAGE = '#comment'
export default class FeedbackPage extends BasePage{
    static clickFeedbackLink(){
        cy.get(LINK_FEEDBACK).click()
    }

    static submitFeedback(){
        cy.fixture('feedback').then(feedback => {
            // const NAME = feedback.name
            // const EMAIL = feedback.email
            // const SUBJECT = feedback.subject
            // const MESSAGE = feedback.message
            cy.get(INPUT_NAME).type(feedback.name)
            cy.get(INPUT_EMAIL).type(feedback.email)
            cy.get(INPUT_SUBJECT).type(feedback.subject)
            cy.get(INPUT_MESSAGE).type(feedback.message)

        })
    }
}