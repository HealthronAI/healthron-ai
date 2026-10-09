const sharp = require('sharp');
const fs = require('fs');

async function convertSvgToPng() {
  try {
    const svgBuffer = fs.readFileSync('public/icon-only.svg');
    await sharp(svgBuffer)
      .resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile('public/logo-high-quality.png');
    console.log('Successfully created high-quality PNG logo.');
  } catch (error) {
    console.error('Error generating PNG:', error);
  }
}

convertSvgToPng();
