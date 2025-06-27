const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function syncVersions() {
  try {
    // Get current version from package.json
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    const newVersion = packageJson.version;

    // Update Cargo.toml
    const cargoTomlPath = path.join('src-tauri', 'Cargo.toml');
    const cargoTomlContent = fs.readFileSync(cargoTomlPath, 'utf-8');
    const updatedCargoToml = cargoTomlContent.replace(
      /version = "[^"]+"/,
      `version = "${newVersion}"`,
    );
    fs.writeFileSync(cargoTomlPath, updatedCargoToml);

    // Update tauri.conf.json
    const tauriConfPath = path.join('src-tauri', 'tauri.conf.json');
    try {
      const tauriConf = JSON.parse(fs.readFileSync(tauriConfPath, 'utf-8'));
      tauriConf.version = newVersion;
      fs.writeFileSync(tauriConfPath, JSON.stringify(tauriConf, null, 2));
      console.log('Updated tauri.conf.json version to:', newVersion);
    } catch (err) {
      console.error('Error updating tauri.conf.json:', err);
      throw err;
    }

    console.log('Version synchronization completed successfully!');
  } catch (error) {
    console.error('Error syncing versions:', error);
    process.exit(1);
  }
}

syncVersions();
