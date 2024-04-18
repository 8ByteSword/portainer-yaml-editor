window.onload = function () {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'editYaml') {
      console.log('Received editYaml message');

      // Simular un clic en el botón "Copy to clipboard"
      const copyButton = document.querySelector('button[title="Copy Value"]');
      copyButton.click();
      // Leer el contenido del portapapeles
      // Crear un elemento temporal para pegar el contenido
      const tempElement = document.createElement('textarea');
      document.body.appendChild(tempElement);
      tempElement.focus();
      document.execCommand('paste');
      const yamlContent = tempElement.value;
      document.body.removeChild(tempElement);
      console.log('YAML content:', yamlContent);

      // Dividir el contenido en líneas
      const yamlLines = yamlContent.split('\n');

      // Buscar la línea que contiene METEOR_SETTINGS usando una expresión regular
      const meteorSettingsLine = yamlLines.find((line) => /^\s*-\s*METEOR_SETTINGS=/.test(line));

      console.log('METEOR_SETTINGS line:', meteorSettingsLine);

      if (meteorSettingsLine) {
        // Extraer el valor de METEOR_SETTINGS
        const meteorSettingsValue = meteorSettingsLine.replace(/^\s*-\s*METEOR_SETTINGS=/, '');

        console.log('METEOR_SETTINGS value:', meteorSettingsValue);

        // Parsear el valor de METEOR_SETTINGS como JSON
        const meteorSettings = JSON.parse(meteorSettingsValue);

        console.log('Parsed METEOR_SETTINGS:', meteorSettings);

        // Modificar el objeto METEOR_SETTINGS
        meteorSettings.OCPI.party_id = 'NEW_PARTY_ID';

        console.log('Modified METEOR_SETTINGS:', meteorSettings);

        // Convertir el objeto modificado a JSON
        const modifiedMeteorSettings = JSON.stringify(meteorSettings);

        console.log('Modified METEOR_SETTINGS JSON:', modifiedMeteorSettings);

        // Actualizar el valor de METEOR_SETTINGS en el YAML
        const modifiedYamlLines = yamlLines.map((line) => {
          if (/^\s*-\s*METEOR_SETTINGS=/.test(line)) {
            return `${line.replace(/=.*$/, '')}=${modifiedMeteorSettings}`;
          }
          return line;
        });

        console.log('Modified YAML lines:', modifiedYamlLines);

        // Unir las líneas modificadas en un solo YAML
        const modifiedYamlContent = modifiedYamlLines.join('\n');

        console.log('Modified YAML content:', modifiedYamlContent);

        // Actualizar el contenido del editor
        const editorElement = document.querySelector('.cm-content');
        editorElement.innerText = modifiedYamlContent;

        console.log('Updated editor content');
      } else {
        console.log('METEOR_SETTINGS line not found');
      }
    }
  });
};
