export const sendPutRequest = (data, cb) => {
    let xhr = new XMLHttpRequest();
    let dataInJson = JSON.stringify(data);

    xhr.open("PUT", "/add-obj");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson);


}
