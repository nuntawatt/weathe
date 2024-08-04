const apiKey = '9bbbd14d97f2095956530386dd878dfc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const cityCoordinates = {
    "London": { lat: 51.5074, lon: -0.1278 },
    "New York": { lat: 40.7128, lon: -74.0060 },
    "Tokyo": { lat: 35.6762, lon: 139.6503 },
    "Sydney": { lat: -33.8688, lon: 151.2093 },
    "Paris": { lat: 48.8566, lon: 2.3522 },
    "Bangkok": { lat: 13.7563, lon: 100.5018 },
    "Moscow": { lat: 55.7558, lon: 37.6176 },
    "Beijing": { lat: 39.9042, lon: 116.4074 },
    "Dubai": { lat: 25.2048, lon: 55.2708 },
    "Rio de Janeiro": { lat: -22.9068, lon: -43.1729 },
    "Los Angeles": { lat: 34.0522, lon: -118.2437 },
    "Berlin": { lat: 52.5200, lon: 13.4050 },
    "Toronto": { lat: 43.6510, lon: -79.3470 },
    "Mexico City": { lat: 19.4326, lon: -99.1332 },
    "Johannesburg": { lat: -26.2041, lon: 28.0473 },
    "Buenos Aires": { lat: -34.6037, lon: -58.3816 },
    "Istanbul": { lat: 41.0082, lon: 28.9784 },
    "Seoul": { lat: 37.5665, lon: 126.9780 },
    "Jakarta": { lat: -6.2088, lon: 106.8456 },
    "Cairo": { lat: 30.0444, lon: 31.2357 },
    "Mumbai": { lat: 19.0760, lon: 72.8777 },
    "Rome": { lat: 41.9028, lon: 12.4964 },
    "Nairobi": { lat: -1.2864, lon: 36.8172 },
    "Lagos": { lat: 6.5244, lon: 3.3792 },
    "Lima": { lat: -12.0464, lon: -77.0428 },
    "Madrid": { lat: 40.4168, lon: -3.7038 },
    "Hanoi": { lat: 21.0285, lon: 105.8542 },
    "Manila": { lat: 14.5995, lon: 120.9842 },
    "Bogotá": { lat: 4.7110, lon: -74.0721 },
    "Santiago": { lat: -33.4489, lon: -70.6693 },
    "Kuala Lumpur": { lat: 3.1390, lon: 101.6869 },
    "Singapore": { lat: 1.3521, lon: 103.8198 },
    "Hong Kong": { lat: 22.3193, lon: 114.1694 },
    "Barcelona": { lat: 41.3851, lon: 2.1734 },
    "Athens": { lat: 37.9838, lon: 23.7275 },
    "Warsaw": { lat: 52.2297, lon: 21.0122 },
    "Budapest": { lat: 47.4979, lon: 19.0402 },
    "Vienna": { lat: 48.2082, lon: 16.3738 },
    "Helsinki": { lat: 60.1695, lon: 24.9354 },
    "Stockholm": { lat: 59.3293, lon: 18.0686 },
    "Oslo": { lat: 59.9139, lon: 10.7522 },
    "Copenhagen": { lat: 55.6761, lon: 12.5683 },
    "Amsterdam": { lat: 52.3676, lon: 4.9041 },
    "Brussels": { lat: 50.8503, lon: 4.3517 },
    "Zurich": { lat: 47.3769, lon: 8.5417 },
    "Prague": { lat: 50.0755, lon: 14.4378 },
    "Lisbon": { lat: 38.7223, lon: -9.1393 },
    "Dublin": { lat: 53.3498, lon: -6.2603 },
    "Edinburgh": { lat: 55.9533, lon: -3.1883 },
    "Venice": { lat: 45.4408, lon: 12.3155 },
    "Munich": { lat: 48.1351, lon: 11.5820 },
    "Frankfurt": { lat: 50.1109, lon: 8.6821 },
    "Hamburg": { lat: 53.5511, lon: 9.9937 },
    "Casablanca": { lat: 33.5731, lon: -7.5898 },
    "Cape Town": { lat: -33.9249, lon: 18.4241 },
    "Lusaka": { lat: -15.3875, lon: 28.3228 },
    "Accra": { lat: 5.6037, lon: -0.1870 },
    "Algiers": { lat: 36.7372, lon: 3.0861 },
    "Rabat": { lat: 34.0209, lon: -6.8416 },
    "Tunis": { lat: 36.8065, lon: 10.1815 },
    "Tripoli": { lat: 32.8872, lon: 13.1913 },
    "Amman": { lat: 31.9539, lon: 35.9106 },
    "Damascus": { lat: 33.5138, lon: 36.2765 },
    "Baghdad": { lat: 33.3152, lon: 44.3661 },
    "Tehran": { lat: 35.6892, lon: 51.3890 },
    "Islamabad": { lat: 33.6844, lon: 73.0479 },
    "Karachi": { lat: 24.8607, lon: 67.0011 },
    "Dhaka": { lat: 23.8103, lon: 90.4125 },
    "Kolkata": { lat: 22.5726, lon: 88.3639 },
    "Chennai": { lat: 13.0827, lon: 80.2707 },
    "Bangalore": { lat: 12.9716, lon: 77.5946 },
    "Hyderabad": { lat: 17.3850, lon: 78.4867 },
    "Pune": { lat: 18.5204, lon: 73.8567 },
    "Ahmedabad": { lat: 23.0225, lon: 72.5714 },
    "Surat": { lat: 21.1702, lon: 72.8311 },
    "Patna": { lat: 25.5941, lon: 85.1376 },
    "Lucknow": { lat: 26.8467, lon: 80.9462 },
    "Bhopal": { lat: 23.2599, lon: 77.4126 },
    "Indore": { lat: 22.7196, lon: 75.8577 },
    "Nagpur": { lat: 21.1458, lon: 79.0882 },
    "Kanpur": { lat: 26.4499, lon: 80.3319 },
    "Agra": { lat: 27.1767, lon: 78.0081 },
    "Jaipur": { lat: 26.9124, lon: 75.7873 },
    "Vadodara": { lat: 22.3072, lon: 73.1812 },
    "Guadalajara": { lat: 20.6597, lon: -103.3496 },
    "Medellin": { lat: 6.2442, lon: -75.5812 },
    "Marseille": { lat: 43.2965, lon: 5.3698 },
    "Krakow": { lat: 50.0647, lon: 19.9450 },
    "Sofia": { lat: 42.6977, lon: 23.3219 },
    "Belgrade": { lat: 44.7866, lon: 20.4489 },
    "Zagreb": { lat: 45.8150, lon: 15.9819 }
};

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!cityCoordinates[city]) {
        alert('กรุณาใส่ชื่อเมืองที่ถูกต้อง');
        return;
    }

    const { lat, lon } = cityCoordinates[city];
    
    try {
        const weatherResponse = await fetch(`${apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const weatherData = await weatherResponse.json();
        
        if (weatherData.cod !== 200) {
            document.getElementById('weather-info').innerText = `ข้อผิดพลาด: ${weatherData.message}`;
            return;
        }

        const { main, wind } = weatherData;
        const weatherInfoHTML = `
            <h2>สภาพอากาศใน ${city}</h2>
            <p>อุณหภูมิ: ${main.temp} °C</p>
            <p>ความชื้น: ${main.humidity} %</p>
            <p>ความเร็วลม: ${wind.speed} m/s</p>
        `;

        document.getElementById('pop-up-weather-info').innerHTML = weatherInfoHTML;
        document.getElementById('weatherPopUp').style.display = 'flex';

    } catch (error) {
        document.getElementById('weather-info').innerText = `ข้อผิดพลาด: ${error.message}`;
    }
}

function closePopUp() {
    document.getElementById('weatherPopUp').style.display = 'none';
}
