const ENDPOINT = "https://my-json-server.typicode.com/mgarvia/cecotec-Proceso-de-seleccion-Front-End-Developer/db";

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData;