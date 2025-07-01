function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

chrome.storage.local.get(null, (data) => {
  const siteList = document.getElementById("siteList");
  siteList.innerHTML = "";
  const entries = Object.entries(data);
  if (entries.length === 0) {
    siteList.innerHTML = "<li>No data yet</li>";
  } else {
    entries.sort((a, b) => b[1] - a[1]); // sort by time descending
    for (const [site, time] of entries) {
      const li = document.createElement("li");
      li.textContent = `${site}: ${formatTime(time)}`;
      siteList.appendChild(li);
    }
  }
});

