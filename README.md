# TASK 4 – Chrome Extension for Time Tracking and Productivity Analytics

*COMPANY*: CODTECH IT SOLUTIONS  
*NAME*: MAADESHWAR D V  
*INTERN ID*: CITS0D500  
*DOMAIN*: FULL STACK DEVELOPMENT  
*DURATION*: 4 WEEKS  
*MENTOR*: NEELA SANTOSH  

## Description:

For the final task of the internship, I was assigned to develop a **Chrome Extension** that tracks the amount of time a user spends on different websites and provides visual productivity analytics. The aim of the task was to understand how browser extensions work, explore Chrome’s extension APIs, and build a lightweight productivity tool that runs directly within the browser environment without needing a traditional web page interface.

The core idea was to monitor user activity in the browser tabs and keep a time log of each website visited. The extension then classifies these websites into "productive" and "distracting" categories and displays analytics in a popup interface using graphical representations like pie charts and bar graphs.

To implement this, I structured the project into four main components:
1. **Manifest File**: This file declares metadata about the extension such as its name, version, permissions (e.g., access to tabs, activeTab, storage), and background scripts.
2. **Background Script**: This JavaScript file runs in the background and listens to Chrome events like tab switches, URL changes, and idle time. It calculates how long each tab remains active.
3. **Content Script (optional)**: Although not strictly necessary for time tracking, this could be used to interact with content pages or display overlays.
4. **Popup UI**: This is the interface the user sees when clicking on the extension icon. It’s built with HTML, CSS, and JavaScript and fetches the tracked data from Chrome’s `localStorage` or `chrome.storage` to display as charts using **Chart.js**.

When the user is browsing, the extension continuously records which tab is currently active and how long it remains focused. Once the tab is changed or the user becomes idle, the timer stops, and the duration is logged against that domain. At any moment, the user can open the popup to view a daily or weekly breakdown of how much time was spent on each domain.

One major learning point in this task was understanding the architecture of Chrome extensions. Unlike normal web apps, extensions use event-driven APIs and require efficient memory and permission management. I also explored concepts like:
- Persistent vs. event pages
- Chrome runtime messaging
- Declarative content scripts
- Using `chrome.tabs`, `chrome.runtime`, `chrome.storage` APIs effectively

To make the tool meaningful, I implemented a basic **categorization system**, where common domains like `stackoverflow.com` or `docs.google.com` are marked as productive, while sites like `youtube.com` or `instagram.com` are categorized as distracting. These categories can be expanded or made configurable in future updates.

For data visualization, I used **Chart.js**, which is lightweight and responsive. I created a pie chart that shows percentage time per domain and a bar graph showing time vs. hour-of-the-day activity. The popup also displays total screen time, top 5 visited websites, and average productivity score.

This project taught me how powerful browser extensions can be when it comes to personal productivity, automation, and user engagement. It also highlighted the importance of performance optimization — since background scripts must consume minimal resources to avoid draining the browser.

In conclusion, Task 4 helped me understand a new domain of web development — browser tooling — and pushed me to build a utility tool that directly interacts with user behavior. It combined all aspects of JavaScript programming, data tracking, storage management, and user interface design into one compact package. With further improvements like notification alerts, dark mode, or syncing across devices, this extension can become a fully functional digital well-being tool.

This task not only rounded off my internship experience but also gave me confidence to publish and maintain my own browser extensions on the Chrome Web Store in the future.
