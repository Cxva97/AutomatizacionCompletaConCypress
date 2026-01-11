describe('Limpiar carrito', () => {
    beforeEach(() => {
        cy.visit('');
    });
    it('Clear cart', () => {
        cy.clearCart()
    });
});