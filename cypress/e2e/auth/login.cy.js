describe('flujos de login', () => {
    beforeEach(() => {
        cy.visit('auth/login');
    });
    
    it('login exitoso con credenciales validas', () => {
        cy.login();
    });

    it('Login con credenciales invalidas', () => {
        cy.loginFallido();
    });
});