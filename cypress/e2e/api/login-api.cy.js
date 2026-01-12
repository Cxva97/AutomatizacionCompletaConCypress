describe('Login API requests', () => {

    it('check order history', () => {
        const email="cxva97@hotmail.com"
        const password = "1q2w3e4r5t"
        cy.loginAPI(email,password).then((response)=>{ //login creado en commands pero usando API
        expect(response.status).to.eq(201);  
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('email','cxva97@hotmail.com');
        expect(response.body).to.have.property('status');
        expect(response.body.token).to.be.a('string').and.to.have.length.greaterThan(15);
    })
    });
});