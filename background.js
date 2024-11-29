

function switchTabs() {
  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    var activeTab = tabs.find(tab => tab.active);
    var activeTabIndex = tabs.findIndex(tab => tab.active);

    var nextTabIndex = (activeTabIndex -1) % tabs.length;

    var nextTab = tabs[nextTabIndex];


    chrome.tabs.update(nextTab.id, { active: true });
  });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Keypressed:',message.key);
  if (message.key === '.') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.create({url: "http://localhost:8000"});
    });
  }
  if (message.key === 'Alt') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  }
  // if (message.key === 'ArrowRight') {
  //   switchTabs();
  // }
});
