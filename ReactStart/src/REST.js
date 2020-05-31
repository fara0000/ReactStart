export const sendPutRequest = (data, cb) => {
    const xhr = new XMLHttpRequest();
    const dataInJson = JSON.stringify(data);

    xhr.open("PUT", "/add-obj");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson);


}
