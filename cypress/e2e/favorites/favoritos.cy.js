const cookie = Cypress.env('cookie')
describe('Flujo favoritos', () => {
    beforeEach(() => {
        cy.setCookie('__AUTH-TOKEN-APP', cookie,
            { path: '/'});
    });

    it('Agregar productos a favoritos', () => {
        cy.visit('/whishlist');
        cy.get('[data-at="favorite-card"]').then(($item)=>{
            cy.wrap($item.length).as('favorite');
        });
        cy.visit('');
        cy.get('.rounded-sm.aspect-square').first().click();
        cy.get('[data-at="add-to-favorites"]').click();
        cy.visit('/whishlist');
        cy.get('@favorite').then((favoritos)=>{
            cy.get('[data-at="favorite-card"]').then(($listUpdated)=>{
                expect($listUpdated).to.have.length(favoritos+1);
            })
        });
    }); 

    it('Eliminar productos de favoritos ', () => {
        cy.visit('whishlist');
        cy.get('[data-at="favorite-card"]').then(($item) =>{
            cy.wrap($item.length).as('favorite');
        });
        cy.visit('');
        cy.get('.rounded-sm.aspect-square').first().click();
        cy.visit('whishlist');
        cy.get('[data-at="favorite-card"]').last().click();
        cy.get('[data-at="remove-from-favorites"]').should('be.visible').click();
        cy.get('[data-at="add-to-favorites"]').should('be.visible');
        cy.visit('whishlist');
    }); 
});