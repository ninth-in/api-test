import request from 'supertest'

describe('User', ()=>{
  
  //beforeAll(async() => {
  //antes dos testes rode algo
  //})

  it('should be able to create a new use', async()=>{
    const response = await (await resquest(app).post('/users')).send({
      nome:'joao'
    })
    
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty(`id` )
  })

  //afterall(async()=>{
  //depois dos teste rode algo  
  //})
})

describe('User', ()=>{
  
  //beforeAll(async() => {
  //antes dos testes rode algo
  //})

  it('should be able to create a new use', async()=>{
    const response = await (await resquest(app).get('/users'))
    
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty(body)
  })

  //afterall(async()=>{
  //depois dos teste rode algo  
  //})
})

//arrange 

//act

//assert
 /*
//axios usa para fazer request
nock -> moca integrações nao precisa usar

supertest -> testar so controller



 //jest.mock(axios)
const getRandomUserOfNationality = n =>
fetch(`https://randomuser.me/api/?nat=${n}`)
  .then(throwNon200)
  .then(res => res.json())
  .catch(e => console.log(e));

describe('routes mocked tests', () => {
  it('should return a user', () => {

      nock('https://randomuser.me')
        .get('/api/')
        .reply(200, {
          results: [{ name: 'Dominic' }],
        });
      return query
        .getRandomUser()
        .then(res => res.results[0].name)
        .then(res => expect(res).toEqual('Dominic'));
    });
})
 */