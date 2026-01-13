import * as CheckoutPage from '../../support/selectors/checkout-page'
Cypress.Commands.add('checkoutExitoso', () => { 
    cy.addToCart();
    //continuando con el checkout
    cy.fixture('checkout').then((cliente)=>{
        cy.contains('button', 'Ir al checkout')
        .should('be.visible')
        .click()
        cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
        cy.validarSavedText('@productPrice','.flex.mb-4 > :nth-child(2)')
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
        cy.get('[id="swal2-html-container"]').should('be.visible');
        cy.get('.swal2-confirm.swal2-styled').click();
    })
})

Cypress.Commands.add('checkoutInvalido', () => { 
    const retry = 'Reintentar';
    const messageInfo = 'Rechazo general de la entidad.';
    cy.addToCart();
    //continuando con el checkout
    cy.fixture('checkout').then((cliente)=>{
        cy.contains('button', 'Ir al checkout')
        .should('be.visible')
        .click()
        cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
        cy.validarSavedText('@productPrice','.flex.mb-4 > :nth-child(2)')
        cy.get(CheckoutPage.NAME_INPUT).type(cliente.nombre);
        cy.get(CheckoutPage.LASTNAME).type(cliente.apellido);
        cy.get(CheckoutPage.EMAIL).type(cliente.correo);
        cy.get(CheckoutPage.ADDRESS).type(cliente.direccion);
        cy.get(CheckoutPage.COUNTRY).select(cliente.pais);
        cy.get(CheckoutPage.NAMEHOLDER).type(cliente.nombre);
        cy.get(CheckoutPage.CARDNUMBER).type(cliente.num_tarj_inv);
        cy.get(CheckoutPage.EXPDATE).type(cliente.fech_inv);
        cy.get(CheckoutPage.CVVCODE).type(cliente.cvv_inv);
        cy.contains('Completar Pago').should('be.enabled');
        cy.contains('Completar Pago').click();
        cy.get('[id="swal2-html-container"]').should('have.text', messageInfo);
        cy.get('.swal2-confirm.swal2-styled').should('have.text', retry);
    })
})

Cypress.Commands.add('checkoutSinfondos', () => { 
    const messageReason = 'Fondos Insuficientes';
    const retry = 'Reintentar';
    cy.addToCart();
    //continuando con el checkout
    cy.fixture('checkout').then((cliente)=>{
        cy.contains('button', 'Ir al checkout')
        .should('be.visible')
        .click()
        cy.validarSavedText('@productDescription','.flex.items-center.gap-4 .font-bold');
        cy.validarSavedText('@productPrice','.flex.mb-4 > :nth-child(2)')
        cy.get(CheckoutPage.NAME_INPUT).type(cliente.nombre);
        cy.get(CheckoutPage.LASTNAME).type(cliente.apellido);
        cy.get(CheckoutPage.EMAIL).type(cliente.correo);
        cy.get(CheckoutPage.ADDRESS).type(cliente.direccion);
        cy.get(CheckoutPage.COUNTRY).select(cliente.pais);
        cy.get(CheckoutPage.NAMEHOLDER).type(cliente.nombre);
        cy.get(CheckoutPage.CARDNUMBER).type(cliente.tarj_insuf);
        cy.get(CheckoutPage.EXPDATE).type(cliente.fech_insuf);
        cy.get(CheckoutPage.CVVCODE).type(cliente.cvv_insuf);
        cy.contains('Completar Pago').should('be.enabled');
        cy.contains('Completar Pago').click();
        cy.get('[id="swal2-html-container"]').should('have.text',messageReason);
        cy.get('.swal2-confirm.swal2-styled').should('have.text', retry);
    })
})

Cypress.Commands.add('validarSavedText', (alias, selector) => { 
        cy.get(alias).then((savedText)=>{
                cy.get(selector).invoke('text').then((currentText)=>{
                        expect(currentText.trim()).to.eq(savedText.trim())
                });
        });
})

Cypress.Commands.add('validateDate', (selector) => { 
        cy.get(selector).first().invoke('text').then((fecha)=>{
            const date = new Date();
            const dias = String(date.getDate()).padStart(2,'0');
            const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sept','oct',
                            'nov','dic'];
            const mes = meses[date.getMonth()];
            const anio = String(date.getFullYear()).slice(-2);
            const expectedDate = `${dias} ${mes}, ${anio}`;
            expect(fecha.trim().toLowerCase()).to.equal(expectedDate);
        });        
})