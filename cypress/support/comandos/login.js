const { faker } = require('@faker-js/faker');
import * as LoginPage from '../selectors/login-page'

Cypress.Commands.add('login', () => {  
        //const user = 'Cesar Villacis';
        cy.fixture('login').then((usuario)=>{
            cy.get(LoginPage.EMAIL).type(usuario.email)
            cy.get(LoginPage.PASSWORD).type(usuario.password);
        })
            cy.get(LoginPage.LOGINBTN).click();
            cy.get(LoginPage.FAVORITESITEM).should('be.visible');
            /*cy.get('[href="/my-account"]').click();
            cy.get('.text-lg.font-bold').should('have.text',user);*/
})

Cypress.Commands.add('loginFallido', ()=>{
    const MensajeValidacion = 'No pudimos iniciar sesión con estas credenciales. Intenta de nuevo.';
        cy.get(LoginPage.EMAIL).type(faker.internet.email())
        cy.get(LoginPage.PASSWORD).type(faker.internet.password());
        cy.get(LoginPage.LOGINBTN).click();
        cy.get('#swal2-html-container').should('have.text',MensajeValidacion);
        cy.get('.swal2-confirm').should('have.text','Volver').click();
})

Cypress.Commands.add('loginAPI',(email,password)=>{
     cy.request({
        method: 'POST',
        url: 'https://api.laboratoriodetesting.com/api/v1/auth/login',
        body: {
            "email": email,
            "password" : password
        }
     })
}) 