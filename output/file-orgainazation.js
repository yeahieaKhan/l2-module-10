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
}

initializeDirectories();
