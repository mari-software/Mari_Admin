const fs = require('fs');

const date = new Date();

const exeFolder = './src-tauri/target/release/bundle/nsis';
const packageJson = fs.readFileSync('./package.json', 'utf8');
const packageData = JSON.parse(packageJson);
const signature = fs
  .readFileSync(
    `${exeFolder}/PHH EMR Extension_${packageData.version}_x64-setup.exe.sig`,
    'utf8',
  )
  .trim();

// release json
const releaseJson = {
  notes: `Release json for version ${packageData.version}`,
  version: packageData.version,
  pub_date: date.toISOString(),
  platforms: {
    'windows-x86_64': {
      url: '',
      signature,
    },
  },
};

const path = '';
fs.mkdirSync('./signatures', { recursive: true });
fs.writeFileSync(
  `./signatures/signature-${packageData.version}.json`,
  JSON.stringify(releaseJson, null, 2),
  'utf8',
);

const padding = 20;

console.log();
console.log();

console.log(`${'='.repeat(padding)} RELEASE SIGNATURE ${'='.repeat(padding)}`);
console.log(JSON.stringify(releaseJson, null, 2));
console.log(`${'='.repeat(padding)} RELEASE SIGNATURE ${'='.repeat(padding)}`);
console.log('Path: ', `./signatures/signature-${packageData.version}.json`);

console.log();
console.log();
