import * as CartPage from '../../support/selectors/cart-page'
describe('flujos de Carrito de compras', () => {
    beforeEach(() => {
        cy.visit('/auth/login');
        cy.login();
    });
    
    it('Agregar producto', () => {
        cy.get('[id="outsiders"]')
        .find('a[href="/products/mancuernas-recubiertas-de-neopreno"]')
        .closest('article')
        .as('seccionAirelibre')
        cy.get('@seccionAirelibre')
        .contains('button', 'Añadir al carrito')
        .click()
        cy.get(CartPage.CART).click();
    });

   it('Agregar un producto', () => {
        cy.addToCart();
    });


   it('Agregar un producto', () => {
        //buscar desde destacados
        cy.get('a[href="/products/mancuernas-recubiertas-de-neopreno"]')
        .closest('article')
        .as('destacados')
        cy.get('@destacados')
        .contains('button', 'Añadir al carrito')
        .click()
        //buscar desde otra seccion - Aire libre
        cy.get('[id="outsiders"]')
        .find('a[href="/products/mancuernas-recubiertas-de-neopreno"]')
        .closest('article')
        .as('seccionAirelibre')
        cy.get('@seccionAirelibre')
        .contains('button', 'Añadir al carrito')
        .click()
        //abre el carrito y verifica
        cy.get(CartPage.CART).click();
        cy.get(CartPage.INFO).should('contain.text','Mancuerna')  
    }); 
});