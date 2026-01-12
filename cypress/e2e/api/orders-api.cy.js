const cookie = Cypress.env('cookie')
describe('Orders API requests', () => {

    it('check order history', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.laboratoriodetesting.com/api/v1/orders',
        headers: {
            Authorization: `Bearer ${cookie}`
        }
     }).then((response)=>{
        expect(response.status).to.eq(200); //estatus code
        cy.log(JSON.stringify(response.body)); //sirve para ver el contenido de la respuesta
        expect(response.body).to.have.property('orders');
        response.body.orders.forEach((order)=>{
            expect(order).to.have.property('id');
            expect(order).to.have.property('userId');
            expect(order).to.have.property('createdAt');
            expect(order).to.have.property('updatedAt');
            expect(order).to.have.property('products');
            expect(order).to.have.property('total');
        })
    })
    });

    it('check an order', () => {
        const orderId = '9872b170-73b7-421a-8736-63ee9fb2ceaa';
    cy.request({
        method: 'GET',
        url: `https://api.laboratoriodetesting.com/api/v1/orders/${orderId}`,
        headers: {
            Authorization: `Bearer ${cookie}`
        }
     }).then((response)=>{
        expect(response.status).to.eq(200); 
        cy.log(JSON.stringify(response.body));
        expect(response.body).to.have.property('id', orderId);
        expect(response.body).to.have.property('products', '4');
        expect(response.body).to.have.property('total', 6500);
    })
    });

});