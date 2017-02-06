import 'babel-polyfill';

let dopUnits;

function fetchJSON(url) {
    return new Promise(function (resolve, reject) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                const error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

fetchJSON('/jsons/dopUnits.json')
    .then(
        response => additionalUnits = JSON.parse(response),
        error => alert(`Ошибка: ${error}`)
    );

export default dopUnits;