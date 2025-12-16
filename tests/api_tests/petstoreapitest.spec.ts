import { expect, request, test } from '@playwright/test';


test('Fetch pet details', async ({ request }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet/' + 5);
    const respJson = await response.json();
    console.log(await response.json());
    console.log("Response status is: " + response.status());
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(respJson).toHaveProperty('category.id', 0);
});

test('Add a pet', async ({ request }) => {
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
        data: {
            id: 1234,
            category: {
                id: 0,
                name: 'string'
            },
            name: 'doggie1',
            photoUrls: ['string'],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'available'
        },
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();
    console.log(await response.text());
    console.log("Response status is: " + response.status());
    expect(response.status()).toBe(200);

    expect(data.name).toBe('doggie1');
    expect(data.status).toBe('available');
    console.log(data.id);
    // expect(data.id).toBe(101010);


    // verify with assertions that the record created with the post matches with the response of the get
    const getResponse = await request.get(`https://petstore.swagger.io/v2/pet/${data.id}`, {
        headers: { accept: 'application/json' }
    });
    const data2 = await getResponse.json();
    console.log(await getResponse.text());

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    expect(data2.id).toBe(data.id);
    expect(data2.name).toBe(data.name);
    expect(data2.status).toBe(data.status);
    expect(data2.category.name).toBe(data.category.name);
    expect(data2.tags[0].name).toBe(data.tags[0].name);
});

test('Update an existing pet', async ({ request }) => {
    const response = await request.put('https://petstore.swagger.io/v2/pet', {
        data: {
            id: 1234,
            category: {
                id: 0,
                name: 'string',
            },
            name: 'doggie updated',
            photoUrls: ['string'],
            tags: [
                {
                    id: 0,
                    name: 'string',
                },
            ],
            status: 'available',
        },
    })

    console.log(await response.json());
    console.log("Response status is: " + response.status());
    expect(response.status()).toBe(200);
});

test("Delete", async ({ request }) => {
    const response = await request.delete('https://petstore.swagger.io/v2/pet/' + 1234);
    console.log(await response.json());
    console.log("Response code: " + response.status());
    expect(response.status()).toBe(200);
});