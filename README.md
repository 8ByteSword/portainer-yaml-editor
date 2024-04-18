# Portainer YAML Editor

**Portainer YAML Editor** is a Chrome extension that simplifies the process of editing YAML fields in Portainer stack configurations. It allows users to modify the METEOR_SETTINGS value within the YAML content directly from the browser.

## Features
- Edit YAML fields in Portainer stack configurations.
- Automatically extracts the METEOR_SETTINGS value from the YAML content.
- Modifies the METEOR_SETTINGS object and updates the YAML content.
- Seamlessly integrates with the Portainer web interface.

## Installation
1. Clone this repository or download the source code as a ZIP file.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable the "Developer mode" toggle switch located in the top right corner.
4. Click on the "Load unpacked" button and select the directory containing the extension files.
5. The Portainer YAML Editor extension should now be installed and visible in the extensions list.

## Usage
1. Navigate to the Portainer web interface in your Chrome browser.
2. Open the stack configuration page where you want to edit the YAML fields.
3. Click on the Portainer YAML Editor extension icon in the Chrome toolbar.
4. In the extension popup, click on the "Edit YAML" button.
5. The extension will automatically extract the METEOR_SETTINGS value from the YAML content.
6. Modify the METEOR_SETTINGS object as needed.
7. The extension will update the YAML content with the modified METEOR_SETTINGS value.
8. The updated YAML content will be displayed in the Portainer editor.

## File Structure
- `manifest.json`: The manifest file for the Chrome extension, specifying permissions and scripts.
- `popup.html`: The HTML file for the extension popup.
- `popup.js`: The JavaScript file handling the popup functionality.
- `content.js`: The content script injected into the web page to interact with the Portainer editor.
- `background.js`: The background script for handling extension events and communication.

## Permissions
The extension requires the following permissions:
- `activeTab`: Allows the extension to interact with the currently active tab.
- `storage`: Allows the extension to store and retrieve data using the Chrome storage API.
- `tabs`: Allows the extension to interact with browser tabs.
- `clipboardRead`: Allows the extension to read data from the clipboard.
- `*://*/*`: Allows the extension to access and modify data on all websites.

## Contributing
Contributions to the Portainer YAML Editor extension are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the MIT License.
