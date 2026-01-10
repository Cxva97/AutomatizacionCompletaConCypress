const { faker } = require('@faker-js/faker');
describe('Flujo de Registro', () => {
    beforeEach(() => {
        cy.visit('auth/signup');
    });

    it('Registro de usuario exitoso con fixtures', () => {
        cy.fixture('registro').then((usuario)=>{
            const sufijoRandom = Math.floor(100 + Math.random()*900)
            const email = `${usuario.emailPre}${sufijoRandom}@${usuario.dominio}`
            cy.get('[name="email"]').type(email);
            cy.get('[name="name"]').type(usuario.nombre);
            cy.get('[name="password"]').type(usuario.password);
            cy.get('[name="repeatPassword"]').type(usuario.password);
        })
        cy.get('[data-at="submit-signup"]').click();
        cy.get('[class="swal2-title"]').should('have.text', 'Operación Exitosa');
        cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.url().should('include', 'auth/login')
     });

     it('Registro de usuario exitoso con faker', () => {  
        const password = faker.internet.password()
        cy.get('[name="email"]').type(faker.internet.email());
        cy.get('[name="name"]').type(faker.person.fullName());
        cy.get('[name="password"]').type(password);
        cy.get('[name="repeatPassword"]').type(password);
        cy.get('[data-at="submit-signup"]').click();
        cy.get('[class="swal2-title"]').should('have.text', 'Operación Exitosa');
        cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.url().should('include', 'auth/login')
     });

     it('Registro de usuario no exitoso', () => {  
        const password = faker.internet.password()
        cy.get('[data-at="submit-signup"]').should('be.visible');
        cy.get('[name="email"]').type(faker.internet.email());
        cy.get('[name="name"]').type(faker.person.fullName());
        cy.get('[name="password"]').type(password);
        cy.get('[name="repeatPassword"]').type(password);
        cy.get('[data-at="submit-signup"]').click();
     });
    
     it.only('Registro con usuario ya existente', () => {  
        cy.get('[name="email"]').type('cxva97@hotmail.com');
        cy.get('[name="name"]').type('cesar');
        cy.get('[name="password"]').type('12345678');
        cy.get('[name="repeatPassword"]').type('12345678');
        cy.get('[data-at="submit-signup"]').click();
        cy.get('#swal2-html-container').should('have.text', 'Este email ya está registrado');
        cy.get('.swal2-confirm').should('have.text','Volver');
        
     });
});