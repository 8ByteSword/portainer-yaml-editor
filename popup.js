document.getElementById('editYamlButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'editYaml' });
});
