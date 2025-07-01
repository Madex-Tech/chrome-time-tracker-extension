// ✅ Reset data at Chrome startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.clear(() => {
    console.log("Time tracking data cleared on Chrome startup.");
  });
});

let activeUrl = null; // activeUrl is beign set to null
let startTime = null;  // startTimeUrl is beign set to null

function getHostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return 'unknown';
  }
}

function saveTime(url, timeSpent) {
  const hostname = getHostname(url);
  chrome.storage.local.get([hostname], (result) => {
    const prev = result[hostname] || 0;
    chrome.storage.local.set({ [hostname]: prev + timeSpent });
  });
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (startTime && activeUrl) {
    saveTime(activeUrl, Date.now() - startTime);
  }
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (!tab.url.startsWith('chrome://')) {
    activeUrl = tab.url;
    startTime = Date.now();
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url && !changeInfo.url.startsWith('chrome://')) {
    if (startTime && activeUrl) {
      saveTime(activeUrl, Date.now() - startTime);
    }
    activeUrl = changeInfo.url;
    startTime = Date.now();
  }
});

chrome.idle.onStateChanged.addListener((state) => {
  if ((state === 'idle' || state === 'locked') && startTime && activeUrl) {
    saveTime(activeUrl, Date.now() - startTime);
    startTime = null;
  } else if (state === 'active') {
    startTime = Date.now();
  }
});
