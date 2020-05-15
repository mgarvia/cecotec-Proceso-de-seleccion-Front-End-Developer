const ENDPOINT = "http://localhost:3000/";

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData;