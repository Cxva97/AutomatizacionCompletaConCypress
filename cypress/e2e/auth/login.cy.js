const { faker } = require('@faker-js/faker');
describe('flujos de login', () => {
    beforeEach(() => {
        cy.visit('auth/login');
    });
    
    it('login exitoso con credenciales validas', () => {
        cy.fixture('login').then((usuario)=>{
            cy.get('[name="email"]').type(usuario.email)
            cy.get('[name="password"]').type(usuario.password);
        })
            cy.get('[data-at="submit-login"]').click();
            cy.get('[href="/whishlist"]').should('be.visible');
            cy.get('[href="/my-account"]').click();
            cy.get('.text-lg.font-bold').should('have.text','Cesar Villacis');
    });

    it('Login con credenciales invalidas', () => {
        cy.get('[name="email"]').type(faker.internet.email())
        cy.get('[name="password"]').type(faker.internet.password());
        cy.get('[data-at="submit-login"]').click();
        cy.get('#swal2-html-container').should('have.text','No pudimos iniciar sesión con estas credenciales. Intenta de nuevo.');
        cy.get('.swal2-confirm').should('have.text','Volver').click();
    });
});