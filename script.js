const missionList = document.getElementById('mission-list');

// Replace with your logic to fetch mission data (e.g., API call)
const missions = [
  { name: "Mission Alpha", agency: "SpaceX", date: "2024-05-15" },
  { name: "Mission Beta", agency: "ESA", date: "2024-06-01" },
];

// Loop through missions and create HTML elements
missions.forEach(mission => {
  const missionItem = document.createElement('div');
  missionItem.classList.add('mission-item');
  missionItem.innerHTML = `<h3>${mission.name}</h3><p>Agency: ${mission.agency}, Launch Date: ${mission.date}</p>`;
  missionList.appendChild(missionItem);
});


// const missionList = document.getElementById('mission-list');

// // Replace with your actual API endpoint URL and parameters
// const apiUrl = 'https://api.example.spaceagency.com/missions';

// fetch(apiUrl)
//   .then(response => response.json())  // Parse JSON response
//   .then(data => {
//     const missions = data.missions;  // Assuming missions data is in "missions" key
//     missions.forEach(mission => {
//       const missionItem = document.createElement('div');
//       missionItem.classList.add('mission-item');
//       missionItem.innerHTML = `<h3>${mission.name}</h3><p>Agency: ${mission.agency}, Launch Date: ${mission.launch_date}</p>`;
//       missionList.appendChild(missionItem);
//     });
//   })
//   .catch(error => console.error(error));  // Handle errors
