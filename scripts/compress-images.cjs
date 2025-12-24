const path = require('path');
const fs = require('fs');

const TARGET_WIDTH = 424; // 1/4 of original 1696

async function compressImages() {
  // Dynamic import for ES module
  const { Jimp } = await import('jimp');

  const IMAGES_DIR = path.join(__dirname, '../public/images');
  const children = ['finley', 'evie', 'maya'];

  for (const child of children) {
    const childDir = path.join(IMAGES_DIR, child);
    const files = fs.readdirSync(childDir).filter(f => f.endsWith('.png'));

    console.log(`Processing ${child} (${files.length} images)...`);

    for (const file of files) {
      const filePath = path.join(childDir, file);
      const stats = fs.statSync(filePath);
      const originalSize = (stats.size / 1024 / 1024).toFixed(2);

      try {
        const image = await Jimp.read(filePath);

        // Resize maintaining aspect ratio
        image.resize({ w: TARGET_WIDTH });

        // Save back to same file
        await image.write(filePath);

        const newStats = fs.statSync(filePath);
        const newSize = (newStats.size / 1024 / 1024).toFixed(2);

        console.log(`  ${file}: ${originalSize}MB -> ${newSize}MB`);
      } catch (err) {
        console.error(`  Error processing ${file}:`, err.message);
      }
    }
  }

  console.log('Done!');
}

compressImages().catch(console.error);
