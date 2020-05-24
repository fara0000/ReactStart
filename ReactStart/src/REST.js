export const sendPutRequest = (data, cb) => {
    let xhr = new XMLHttpRequest();
    let dataInJson = JSON.stringify(data);

    xhr.open("PUT", "/add-obj");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(xhr.statusText);
        } else {
            const data = JSON.parse(xhr.response);
            console.log(data);
            cb(data);
        }
    }
}
