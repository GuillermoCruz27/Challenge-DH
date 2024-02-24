import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [dataApplicants, setApplicants] = useState(null);
  const [loading, setLoading] = useState(true); //Da feadback de que la informacion se esta cargando
  const [error, setError] = useState(null); //Da feadback de que ocurrio un error
  const [controller, setControler] = useState(null); //Controla cuando el usuario cambia el request al servidor

  useEffect(() => {
    setLoading(true); //Para evitar probles secundarios por si recarga la aplicacion
    const abortController = new AbortController(); //Importamos objeto literal para crear una instancia de control en el fetch
    setControler(abortController);
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) =>
        setApplicants(data.data.applicants)
      ) /*setError('Ocurrio un error')=> Codigo para forzar un error*/
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request"); //Informa que se cancelo el error
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      abortController.abort();
    }; //Fucion de limpieza que se ejecuta al desmontarce el componente
  }, []);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Cancelled Request");
    }
  }; // Aborta el request al servidor

  return { dataApplicants, loading, error, handleCancelRequest };
}
