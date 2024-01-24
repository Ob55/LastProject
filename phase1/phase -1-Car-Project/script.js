const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash access key
const apiUrl = 'https://api.unsplash.com/search/photos';
const defaultCar = {
    name: "Rolls Royce",
    temperature: "25°C",
    image: "/rolls_royce.webp"
};

function searchCar() {
    const inputElement = document.getElementById("searchInput");
    const carName = inputElement.value.toLowerCase();
    const carUrl = `${apiUrl}?query=${carName}&client_id=${accessKey}`;

    // Fetch car image from Unsplash API
    fetch(carUrl)
        .then(response => response.json())
        .then(data => {
            const carImage = data.results[0]?.urls.regular || defaultCar.image;

            document.getElementById("carName").innerText = carName || defaultCar.name;
            document.getElementById("carImage").src = carImage;
            document.querySelector(".temperature").innerText = "Temperature: " + defaultCar.temperature;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
