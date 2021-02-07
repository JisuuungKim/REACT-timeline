
export async function createToken(id, pw) {
        const res = await fetch('https://react-js-sample-api.kmuwink.net/api-token-auth/', {
            method: 'post',
            headers: {'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: id,
                password: pw,
            })
        });
    return await res.json();
    };

export async function createID(id, email, pw, lastN, firstN) {
    const res = await fetch('https://react-js-sample-api.kmuwink.net/user/', {
        method: 'post',
        headers: {'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: id,
            email: email,
            password: pw,
            last_name: lastN,
            first_name: firstN
        })
    });
    return await res.json();
};

export async function readID() {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/user/',{
        method:'get'
    })
    const readJson = await readResult.json();
    const propsData = {
        username: readJson.username,
        email: readJson.email,
        last_name: readJson.last_name,
        first_name : readJson.first_name }
    return propsData;
}