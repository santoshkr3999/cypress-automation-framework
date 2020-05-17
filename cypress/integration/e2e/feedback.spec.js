import {url} from '../../../config'
import FeedbackPage from '..//../page-objects/pages/feedbacPage'
describe('verify feedback functionality', () => {
    before(function(){
        cy.visit(url)
        FeedbackPage.clickFeedbackLink()
    })

    it('fill feedback form', () => {
        FeedbackPage.submitFeedback()
    })
})