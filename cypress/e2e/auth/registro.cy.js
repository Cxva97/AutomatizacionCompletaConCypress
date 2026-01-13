describe('Flujo de Registro', () => {
    beforeEach(() => {
        cy.visit('auth/signup');
    });

   it('Registro de usuario exitoso con fixtures', () => {
         cy.registerFixtures();
     });

   it('Registro de usuario exitoso con faker', () => {  
         cy.registerFaker();
     });

   it('Registro de usuario no exitoso', () => {  
        cy.registerFailure();
     });
    
   it('Registro con usuario ya existente', () => {  
        cy.registerExist();
     });
});