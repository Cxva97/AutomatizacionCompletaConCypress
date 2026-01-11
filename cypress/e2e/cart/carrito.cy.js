describe('flujos de Carrito de compras', () => {
    beforeEach(() => {
        cy.visit('/auth/login');
    });
    
    /*it('Agregar producto', () => {
        cy.get('[id="outsiders"]')
        .find('a[href="/products/mancuernas-recubiertas-de-neopreno"]')
        .closest('article')
        .as('seccionAirelibre')
        cy.get('@seccionAirelibre')
        .contains('button', 'Añadir al carrito')
        .click()
        cy.get('[data-at="cart-opener-mobile"]').click();
    });*/

   it('Agregar un producto', () => {
        cy.login();
        cy.addToCart();
    });


   /* it('Agregar un producto', () => {
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
        cy.get('[data-at="cart-opener-mobile"]').click();
        cy.get('.cart-grid.items-center').should('contain.text','Mancuerna')  
    }); */

});