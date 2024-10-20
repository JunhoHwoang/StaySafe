export default async function getCardsData() {
    const response = await fetch('http://localhost:8080/');
    const data = await response.json();
    console.log(data);
    return data;
}