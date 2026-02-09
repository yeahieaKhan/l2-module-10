const fs = require("fs");
const path = require("path");
const sourceDir = path.join(__dirname, "output", "messy-file");
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".svg", ".gif", ".webp"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".ppt", ".pptx"],
  videos: [".mp4", ".mkv", ".avi", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".aac", ".ogg"],
  code: [".js", ".ts", ".html", ".css", ".json", ".py", ".java", ".c", ".cpp"],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz"],
  spreadsheets: [".xls", ".xlsx", ".csv", ".ods"],
  others: [],
};

const testFiles = [
  "vacation.jpg",

  "report.pdf",

  "movie.mp4",

  "song.mp3",

  "app.js",
  "backup.zip",
  "data.xlsx",
  "file.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }
  console.log("messy directory files are created");

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }

  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }

    console.log("organization directory creating done");
  });
}

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();

  // ✔ correct object name + no semicolon + proper loop body
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category; // ✔ return category name
    }
  }

  return "others"; // ✔ return string
}

function organizeFiles() {
  console.log("file organizer \n");
  console.log("source", sourceDir);
  console.log("Destination", organizedDir);
  console.log("\n" + "-".repeat(50) + "\n");
  const files = fs.readdirSync(sourceDir);
  if (files.length === 0) {
    console.log("No files to work on");
    return;
  }
  console.log(`found ${files.length} files to organize \n`);
  const stats = {
    total: 0,
    byCategory: {},
  };
  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);
    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(sourcePath, destPath);

    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stats.size}`);
  });
}

function showHelper() {
  console.log(
    `file organizer  -  usage : 
    commands:
    init - create files
    organize   -  organize files into categories


    example:
    node output/file-orgainazation init 
    node output/file-orgainazation organize

    
    `,
  );
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    showHelper();
    break;
}
