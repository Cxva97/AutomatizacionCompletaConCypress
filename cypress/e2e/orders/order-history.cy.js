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
            cy.get('[name="name"]').type(cliente.nombre);
            cy.get('[name="lastname"]').type(cliente.apellido);
            cy.get('[name="email"]').type(cliente.correo);
            cy.get('[name="address"]').type(cliente.direccion);
            cy.get('[name="country"]').select(cliente.pais);
            cy.get('[name="nameHolder"]').type(cliente.nombre);
            cy.get('[name="cardNumber"]').type(cliente.num_tarjeta);
            cy.get('[name="expiryDate"]').type(cliente.fech_exp);
            cy.get('[name="securityCode"]').type(cliente.cvv);
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