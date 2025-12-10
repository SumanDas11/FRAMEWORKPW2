import { test, expect, request } from '@playwright/test';

var userId: number;

test('Get user', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
    console.log("Response code: " + response.status());
});

test('Create user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
        // headers: {
        //     "Accept": "application/json"
        // }
    });
    console.log("Response json is: " + await response.json());
    console.log("Response text is: " + await response.text());
    console.log("Response code: " + response.status());
    expect(response.status()).toBe(201);

    var resp = await response.json();
    userId = resp.id;
});

test("Update user", async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/' + userId, {
        data: {
            "name": "morpheus",
            "job": "ceo"
        }
        // headers: {
        //     "Accept": "application/json"
        // }
    });
    console.log("Response json is: " + await response.json());
    console.log("Response code: " + response.status());
    expect(response.status()).toBe(200);

});

test("Delete user", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userId);
    console.log("Response json is: " + await response.json());
    console.log("Response code: " + response.status());
    expect(response.status()).toBe(204);
});