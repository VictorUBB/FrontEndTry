import { APP_BASE_URL } from "./consts";
function status(response) {
    console.log('response status '+response.status);
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

export function GetAudits(){
    let headers= new Headers();
    headers.append('Accept','application/json');
    let init={method:'GET',
    headers: headers,
    mode:'cors'
    };
    let url=APP_BASE_URL+"log/audit"
    console.log(url);
    let request= new Request(url,init);
    console.log("GEt pt "+url);
    return fetch(request)
        .then(status)
        .then(json)
        .then(data=>{
            console.log("Request succeeded",data);
            return data;
        })
        .catch(error=>{
            console.log("Error"+error);
            return Promise.reject(error);
        })
}