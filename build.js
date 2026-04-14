const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Crea la estructura de output que Vercel espera
fs.mkdirSync('.vercel/output/static', { recursive: true });

// Copia index.html y assets a la carpeta de output estático
fs.copyFileSync('index.html', '.vercel/output/static/index.html');
copyDir('assets', '.vercel/output/static/assets');

// Archivo de configuración requerido por el Build Output API v3
fs.writeFileSync('.vercel/output/config.json', JSON.stringify({ version: 3 }));

console.log('✅ Build completo: archivos copiados a .vercel/output/static/');
