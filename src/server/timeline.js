
export async function createFeed(name, body){
    const createResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            owner: name,
            content:body,
        }),
    });
    return await createResult.json();
}

export async function readFeeds() {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
        method:'get',
        headers: {
            Authorization:'Token ' + window.sessionStorage.getItem("token"),
        }
    })
    const readJson = await readResult.json();
    const propsData = readJson.map(read => {
        return {
            name: read.owner,
            body: read.content,
            id: read.id,
        }
    });
    return propsData.reverse();
}

export async function readFeed(id) {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+id+'/',{
        method:'get',
        headers: {
            Authorization:'Token ' + window.sessionStorage.getItem("token"),
        }
    })
    return await readResult.json();
}

export async function readComments(id) {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+id+'/comment/',{
        method:'get',
        headers: {
            Authorization:'Token ' + window.sessionStorage.getItem("token"),
        }
    })
    return await readResult.json();
}

export async function createComments(nameC, bodyC,id) {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+1+'/comment/',{
        method:'post',
        headers: {
            'Content-Type':'application/json',
            Authorization:'Token ' + window.sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            owner: nameC,
            content: bodyC,
        }),
    })
    return await readResult.json();
}