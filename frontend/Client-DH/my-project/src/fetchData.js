function getSuspender (promise) {
    let status = "pending"; //Estado de la promesa
    let response;

    const suspender = promise.then(
        (res) => {
            status = "succes";
            response = res
        },
        (err) => {
            status = "error";
            response = err
        }
    );

    const read = () => { //Funcion que lee el estado de la promesa
        switch (status) {
            case "pending": //Espera a que se termine de cumplir la promesa
                throw suspender
            case "error": //Devuelve el error en caso que lo hubiera
                throw response
            default: //Retorna los datos cuando se cumple la promesa
                return response
        }
    }

    return {read}
}

export function fetchData (url) {
    /* Retorna los datos solamente cuando la promesa se cumple */
    const promise = fetch(url)
    .then((response)=>response.json())
    .then((json)=>json) 

    return getSuspender(promise); //Funcion que realiza la promesa
}