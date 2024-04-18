chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'editYaml') {
    console.log(request.action);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Editing YAML from background script');
      const activeTab = tabs[0];
      console.log(activeTab);
      if (activeTab.url.startsWith('http://tec.lab.id')) {
        console.log('Editing YAML for TEC lab ID');
        chrome.tabs.sendMessage(activeTab.id, { action: 'editYaml' });
      }
    });
  }
});
