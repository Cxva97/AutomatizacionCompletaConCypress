import * as RegisterPage from '../../support/selectors/register-page'
const { faker } = require('@faker-js/faker');

Cypress.Commands.add('registerFixtures', () => { 
       const messageConfirm = 'Operación Exitosa';
        cy.fixture('registro').then((usuario)=>{
        const sufijoRandom = Math.floor(100 + Math.random()*900)
        const email = `${usuario.emailPre}${sufijoRandom}@${usuario.dominio}`
            cy.get(RegisterPage.EMAIL).type(email);
            cy.get(RegisterPage.NAME).type(usuario.nombre);
            cy.get(RegisterPage.PASSWORD).type(usuario.password);
            cy.get(RegisterPage.REPEATPASS).type(usuario.password);
        })
            cy.get(RegisterPage.SUBMITBTN).click();
            cy.get('[class="swal2-title"]').should('have.text', messageConfirm);
            cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
            cy.url().should('include', 'auth/login')
})

Cypress.Commands.add('registerFaker', () => { 
       const messageConfirm = 'Operación Exitosa';
        const password = faker.internet.password()
        cy.get(RegisterPage.EMAIL).type(faker.internet.email());
        cy.get(RegisterPage.NAME).type(faker.person.fullName());
        cy.get(RegisterPage.PASSWORD).type(password);
        cy.get(RegisterPage.REPEATPASS).type(password);
        cy.get(RegisterPage.SUBMITBTN).click();
        cy.get('[class="swal2-title"]').should('have.text', messageConfirm);
        cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.url().should('include', 'auth/login')
})

Cypress.Commands.add('registerFailure', () => { 
       const password = faker.internet.password()
        cy.get(RegisterPage.SUBMITBTN).should('be.visible');
        cy.get(RegisterPage.EMAIL).type(faker.internet.email());
        cy.get(RegisterPage.NAME).type(faker.person.fullName());
        cy.get(RegisterPage.PASSWORD).type(password);
        cy.get(RegisterPage.REPEATPASS).type(password);
        cy.get(RegisterPage.SUBMITBTN).click();
})

Cypress.Commands.add('registerExist', () => { 
       cy.get(RegisterPage.EMAIL).type('cxva97@hotmail.com');
        cy.get(RegisterPage.NAME).type('cesar');
        cy.get(RegisterPage.PASSWORD).type('12345678');
        cy.get(RegisterPage.REPEATPASS).type('12345678');
        cy.get(RegisterPage.SUBMITBTN).click();
        cy.get('#swal2-html-container').should('have.text', 'Este email ya está registrado');
        cy.get('.swal2-confirm').should('have.text','Volver');
})