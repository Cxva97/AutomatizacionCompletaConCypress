describe('flujos completo de comprar', () => {
    beforeEach(() => {
        cy.visit('auth/login');
        cy.login();
    });
    
    it('checkout completo VALIDO', () => {  
        cy.checkoutExitoso();
    });

    it('checkout completo INVALIDO', () => {
        cy.checkoutInvalido();
    });

    it('checkout completo SIN FONDOS', () => {
       cy.checkoutSinfondos();
    });
});