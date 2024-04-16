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

