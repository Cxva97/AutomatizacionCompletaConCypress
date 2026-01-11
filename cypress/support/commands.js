Cypress.Commands.add('login', () => { 
        cy.fixture('login').then((usuario)=>{
            cy.get('[name="email"]').type(usuario.email)
            cy.get('[name="password"]').type(usuario.password);
        })
            cy.get('[data-at="submit-login"]').click();
 })

Cypress.Commands.add('addToCart', () => { 
      cy.get('[data-at="product-card"]').eq(3)
            .find('.block.font-sans').eq(0).invoke('text').
            then((descripcion)=>{
                cy.wrap(descripcion).as('productDescription')
            });
        cy.get('[data-at="product-card"]').eq(3)
            .find('.block.font-sans').eq(1).invoke('text')
            .then((precio)=>{
                cy.wrap(precio).as('productPrice')
            });
        cy.get('.align-middle.select-none').eq(3).click()    
        cy.get('[data-at="cart-opener-mobile"]').first()
        .should('have.text','1')
        .click({force:true});
//comparando la descripcion del homepage vs cart        
        cy.get('@productDescription').then((description)=>{
            cy.get('.text-black').eq(1).invoke('text').then((descriptionCart)=>{
                expect(descriptionCart.trim()).to.eq(description.trim());
            });
        });
//comparando el precio homepage vs cart
        cy.get('@productPrice').then((price)=>{
            cy.get('.text-black').eq(3).invoke('text').then((priceCart)=>{
                expect(priceCart.trim()).to.eq(price.trim());
            });
        });
 })

Cypress.Commands.add('clearCart', () => { 
        cy.addToCart();
        cy.get('.cart-grid.items-center').should('exist')
        .and('be.visible');
        cy.get('[data-at="empty-cart"]').click();
        cy.get('.text-center.text-gray-600').should('contain','No tienes elementos')
 })

Cypress.Commands.add('validarSavedText', (alias, selector) => { 
        cy.get(alias).then((savedText)=>{
                cy.get(selector).invoke('text').then((currentText)=>{
                        expect(currentText.trim()).to.eq(savedText.trim())
                });
        });
 })
 