import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join } from "path";

const inputDir = "./public/assets/Game"; // Update this if needed

const convertToWebP = async () => {
  try {
    const files = await readdir(inputDir);

    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/)) {
        const inputPath = join(inputDir, file);
        const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/, ".webp");

        await sharp(inputPath)
          .toFormat("webp", { quality: 80 }) // Convert to WebP
          .toFile(outputPath);

        console.log(`Converted: ${file} → ${outputPath}`);

        // Wait for 2 seconds before deleting the original file
        await new Promise((resolve) => setTimeout(resolve, 500));

        await unlink(inputPath); // Delete the original PNG/JPG file
        console.log(`Deleted: ${file}`);
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

void convertToWebP();
