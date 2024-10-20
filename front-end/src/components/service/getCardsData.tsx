export default async function getCardsData() {
    const response = await fetch('http://localhost:8080/reports');
    const data = await response.json();
    console.log(data);
    return data;
}