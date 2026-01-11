describe('flujos completo de comprar', () => {
    beforeEach(() => {
        cy.visit('auth/login');
        cy.login();
    });
    
    it('checkout completo VALIDO', () => {  
        cy.addToCart();
        //continuando con el checkout
        cy.fixture('checkout').then((cliente)=>{
            cy.contains('button', 'Ir al checkout')
            .should('be.visible')
            .click()
            cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
            cy.validarSavedText('@productPrice','.flex.mb-4 > :nth-child(2)')
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
            cy.get('[id="swal2-html-container"]').should('be.visible');
            cy.get('.swal2-confirm.swal2-styled').click();
        })
    });

    it('checkout completo INVALIDO', () => {
        cy.addToCart();
        //continuando con el checkout
        cy.fixture('checkout').then((cliente)=>{
            cy.contains('button', 'Ir al checkout')
            .should('be.visible')
            .click()
            cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
            cy.validarSavedText('@productPrice','.flex.mb-4 > :nth-child(2)')
            cy.get('[name="name"]').type(cliente.nombre);
            cy.get('[name="lastname"]').type(cliente.apellido);
            cy.get('[name="email"]').type(cliente.correo);
            cy.get('[name="address"]').type(cliente.direccion);
            cy.get('[name="country"]').select(cliente.pais);
            cy.get('[name="nameHolder"]').type(cliente.nombre);
            cy.get('[name="cardNumber"]').type(cliente.num_tarj_inv);
            cy.get('[name="expiryDate"]').type(cliente.fech_inv);
            cy.get('[name="securityCode"]').type(cliente.cvv_inv);
            cy.contains('Completar Pago').should('be.enabled');
            cy.contains('Completar Pago').click();
            cy.get('[id="swal2-html-container"]').should('have.text','Rechazo general de la entidad.');
            cy.get('.swal2-confirm.swal2-styled').should('have.text','Reintentar');
        })
    });

    it('checkout completo SIN FONDOS', () => {
        cy.addToCart();
        //continuando con el checkout
        cy.fixture('checkout').then((cliente)=>{
            cy.contains('button', 'Ir al checkout')
            .should('be.visible')
            .click()
            cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
            cy.validarSavedText('@productPrice','.flex.mb-4 > :nth-child(2)')
            cy.get('[name="name"]').type(cliente.nombre);
            cy.get('[name="lastname"]').type(cliente.apellido);
            cy.get('[name="email"]').type(cliente.correo);
            cy.get('[name="address"]').type(cliente.direccion);
            cy.get('[name="country"]').select(cliente.pais);
            cy.get('[name="nameHolder"]').type(cliente.nombre);
            cy.get('[name="cardNumber"]').type(cliente.tarj_insuf);
            cy.get('[name="expiryDate"]').type(cliente.fech_insuf);
            cy.get('[name="securityCode"]').type(cliente.cvv_insuf);
            cy.contains('Completar Pago').should('be.enabled');
            cy.contains('Completar Pago').click();
            cy.get('[id="swal2-html-container"]').should('have.text','Fondos Insuficientes');
            cy.get('.swal2-confirm.swal2-styled').should('have.text','Reintentar');
        })
    });
});