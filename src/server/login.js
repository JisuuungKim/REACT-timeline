
export async function createToken(id, pw) {
        const res = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/api-token-auth/', {
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
    const res = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/', {
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
    const readResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/',{
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