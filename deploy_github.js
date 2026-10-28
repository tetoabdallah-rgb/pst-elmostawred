const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.env.USERPROFILE, '.env');
let token = '';
if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
        const m = line.match(/^GITHUB_TOKEN=(.*)/);
        if (m) token = m[1].trim();
    }
}

if (!token) {
    console.error('No token found in .env');
    process.exit(1);
}

const git = 'e:\\AI\\apk\\mingit\\cmd\\git.exe';
const cwd = __dirname;

function run(cmd) {
    return execSync(cmd, { cwd, encoding: 'utf8', stdio: 'pipe' });
}

console.log('1. Initializing Git...');
try {
    run(`"${git}" init`);
} catch(e) {}

run(`"${git}" config user.name "tetoabdallah-rgb"`);
run(`"${git}" config user.email "tetoabdallah@users.noreply.github.com"`);
run(`"${git}" branch -M main`);

console.log('2. Staging files...');
run(`"${git}" add -A`);

console.log('3. Committing...');
try {
    run(`"${git}" commit -m "Launch PST Store - El-Mostawred PWA"`);
} catch(e) {
    console.log('Nothing to commit or already committed.');
}

console.log('4. Configuring Remote...');
try {
    run(`"${git}" remote remove origin`);
} catch(e) {}

const remoteUrl = `https://${token}@github.com/tetoabdallah-rgb/pst-elmostawred.git`;
run(`"${git}" remote add origin ${remoteUrl}`);

console.log('5. Pushing to GitHub main...');
try {
    run(`"${git}" push -u origin main --force`);
    console.log('Push complete!');
} catch(err) {
    console.error('Push failed:', err.message);
    process.exit(1);
}
