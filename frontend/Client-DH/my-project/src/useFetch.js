import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [dataApplicants, setApplicants] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response=>response.json())
    .then(data=>setApplicants(data.data.applicants))
  }, []);

  return {dataApplicants}
}
