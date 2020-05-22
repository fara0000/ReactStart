export const sendGetRequest = cb => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "/getValueOfInputs");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send();

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
