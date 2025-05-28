const fs = require("fs");
const path = require("path");
const content = require("../../content.json");
const {
  generateMarkdown,
  sanitizeFileName,
} = require("./utils/createMarkdown");

// Load content from content.json
function generateMarkdownFiles(content) {
  // Directory to save the markdown files
  const outputDir = path.join(__dirname, "ssrPosts");

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Generate markdown files for each post in content.json
  content.forEach((post) => {
    const fileName = `${sanitizeFileName(post.title)}.md`;
    const filePath = path.join(outputDir, fileName);
    const markdownContent = generateMarkdown(post);

    fs.writeFileSync(filePath, markdownContent, "utf8");
    console.log(`Generated: ${filePath}`);
  });

  console.log("All markdown files have been generated.");
}

generateMarkdownFiles(content);
