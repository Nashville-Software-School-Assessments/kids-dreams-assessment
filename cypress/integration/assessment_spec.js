describe('Test the children output', () => {
    it('Contains the children', () => {
        cy.visit('http://localhost:8080')

        cy.get(".details__kids").contains("Christan Swindles")
        cy.get(".details__kids").contains("Findlay Dumini")
        cy.get(".details__kids").contains("Micheil Guerrazzi")
        cy.get(".details__kids").contains("Karine McKennan")
        cy.get(".details__kids").contains("Cissy Weavers")
        cy.get(".details__kids").contains("Bendick Standbrooke")
        cy.get(".details__kids").contains("Ethyl Copnell")
        cy.get(".details__kids").contains("Elisha Betchley")
        cy.get(".details__kids").contains("Enrica Mathivon")
        cy.get(".details__kids").contains("Humfrid Madner")
    })

    it('Checks if children have an id of "child--{n}', () => {
        cy.get(".details__kids")
            .contains("Christan Swindles")
            .invoke('attr', 'id')
            .should('contain', '--1')
    })

    it('Alerts a child\'s wish when clicked', () => {
        cy.visit('http://localhost:8080')

        const child = cy.get(".details__kids").contains("Elisha Betchley")

        const stub = cy.stub()
        cy.on('window:alert', stub)
        child.click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Elisha Betchley has a wish of Ride on a helicopter')
            })

    })
})

describe('Test the celebrity output', () => {
    it('Contains the celebrity', () => {
        cy.visit('http://localhost:8080')

        cy.get(".details__celebrities").contains("Alphonse Meron")
        cy.get(".details__celebrities").contains("Damara Pentecust")
        cy.get(".details__celebrities").contains("Anna Bowton")
        cy.get(".details__celebrities").contains("Hunfredo Drynan")
        cy.get(".details__celebrities").contains("Elmira Bick")
        cy.get(".details__celebrities").contains("Bernie Dreger")
        cy.get(".details__celebrities").contains("Rolando Gault")
        cy.get(".details__celebrities").contains("Tiffanie Tubby")
        cy.get(".details__celebrities").contains("Tomlin Cutill")
        cy.get(".details__celebrities").contains("Arv Biddle")
    })

    it('Checks if celebrities have an id of "child--{n}', () => {
        cy.get(".details__celebrities")
            .contains("Alphonse Meron")
            .invoke('attr', 'id')
            .should('contain', '--1')
    })

    it('Alerts a child\'s wish when clicked', () => {
        cy.visit('http://localhost:8080')

        const child = cy.get(".details__celebrities").contains("Alphonse Meron")

        const stub = cy.stub()
        cy.on('window:alert', stub)
        child.click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Alphonse Meron is Hockey star')
            })

    })
})

describe('Test the pairings output', () => {
    it('Contains the pairings', () => {
        const assignments = cy.get(".assignments")

        assignments.should('contain', "Christan Swindles will be making memories with Bernie Dreger, a Gymnastics star, by Throw the opening pitch at a baseball game")
        assignments.should('contain', "Humfrid Madner will be making memories with Hunfredo Drynan, a Baseball star, by Put out a fire as a fireman after riding on the truck with the siren on")
        assignments.should('contain', "Enrica Mathivon will be making memories with Alphonse Meron, a Hockey star, by Take care of ponies on a farm and spend the whole night riding one")
        assignments.should('contain', "Elisha Betchley will be making memories with Damara Pentecust, a Basketball star, by Ride on a helicopter")
        assignments.should('contain', "Ethyl Copnell will be making memories with Hunfredo Drynan, a Baseball star, by Dunk on LeBron James")
        assignments.should('contain', "Bendick Standbrooke will be making memories with Damara Pentecust, a Basketball star, by Sing a song with Taylor Swift and pet her cats")
        assignments.should('contain', "Cissy Weavers will be making memories with Elmira Bick, a Gymnastics star, by Disneyworld trip and spend the day with Mickey Mouse")
        assignments.should('contain', "Karine McKennan will be making memories with Bernie Dreger, a Gymnastics star, by Drive a race car")
        assignments.should('contain', "Micheil Guerrazzi will be making memories with Tomlin Cutill, a Hockey star, by Visit the White House")
        assignments.should('contain', "Findlay Dumini will be making memories with Tiffanie Tubby, a Basketball star, by Drive a race car")
    })
})
