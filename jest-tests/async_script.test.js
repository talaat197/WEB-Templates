const fetch = require('node-fetch');
const fetchPeople = require("./async_script");
jest.setTimeout(300000);

it('calls swapi api to get people' , (done) => {
    // number of comparing we want to make , here we just make one comparing
    expect.assertions(1);
    fetchPeople.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        // telling the jest that this test case is done
        done();
    });
})

it('test swapi name' , () => {
    expect.assertions(2);
    return fetchPeople.getPeople(fetch).then(data => {
         expect(data.results[0].name).toEqual("Luke Skywalker");
         expect(data.results.length).toBeGreaterThan(3);

    });
})