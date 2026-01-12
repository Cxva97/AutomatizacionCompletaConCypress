const email= 'cxva97@hotmail.com'
const password = '1q2w3e4r5t'
before(() => {
    cy.loginAPI(email,password).then((response)=>{
        cy.wrap(response.body.token).as('token'); //
    })
});

it('Add Favorites using API', () => {
    cy.get('@token').then((token)=>{
         cy.request({
        method: 'POST',
        url: 'https://api.laboratoriodetesting.com/api/v1/favorites',
        headers: {
            Authorization : `Bearer ${token}`
        },
        body: {
            "products": "12",
        },
        body: {
            "products": "20",
        }
     })
    }) 
});
