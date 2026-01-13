import * as CheckoutPage from '../../support/selectors/checkout-page'
describe('Historial de compras', () => {
    beforeEach(() => {
        cy.visit('auth/login');
        cy.login();
    });
    
    it('Ver historia de registros de compras', () => {  
        cy.addToCart();
        //continuando con el checkout
        cy.fixture('checkout').then((cliente)=>{
            cy.contains('button', 'Ir al checkout')
            .should('be.visible')
            .click()
            cy.get(CheckoutPage.NAME_INPUT).type(cliente.nombre);
            cy.get(CheckoutPage.LASTNAME).type(cliente.apellido);
            cy.get(CheckoutPage.EMAIL).type(cliente.correo);
            cy.get(CheckoutPage.ADDRESS).type(cliente.direccion);
            cy.get(CheckoutPage.COUNTRY).select(cliente.pais);
            cy.get(CheckoutPage.NAMEHOLDER).type(cliente.nombre);
            cy.get(CheckoutPage.CARDNUMBER).type(cliente.num_tarjeta);
            cy.get(CheckoutPage.EXPDATE).type(cliente.fech_exp);
            cy.get(CheckoutPage.CVVCODE).type(cliente.cvv);
            cy.contains('Completar Pago').click();
            cy.visit('my-account');
            cy.get('.underline.text-black.font-bold').first().click();
            cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
            cy.validarSavedText('@productPrice','.font-bold.text-lg');
            //cy.validateDate('.flex.gap-2.my-3 p:nth-child(2)');
            cy.get('.bg-yellow-300').should('exist').and('be.visible');
        })
    });
});