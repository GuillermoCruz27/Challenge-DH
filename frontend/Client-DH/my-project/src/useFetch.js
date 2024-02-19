import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [dataApplicants, setApplicants] = useState(null);
  const [loading, setLoading] = useState(true); //Da feadback de que la informacion se esta cargando

  useEffect(() => {
    setLoading(true); //Para evitar probles secundarios por si recarga la aplicacion
    fetch(url)
    .then(response=>response.json())
    .then(data=>setApplicants(data.data.applicants))
    .finally(()=>setLoading(false));//
  }, []);

  return {dataApplicants, loading}
}
