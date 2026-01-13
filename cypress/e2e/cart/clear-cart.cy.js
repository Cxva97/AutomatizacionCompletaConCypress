describe('Limpiar carrito', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
        cy.login();
    });
    it('Clear cart', () => {
        cy.clearCart()
    });
});