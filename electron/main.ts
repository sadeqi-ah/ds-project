import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";
// import * as url from "url";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // if (process.env.NODE_ENV === "development") {
  mainWindow.loadURL("http://localhost:4000");
  // mainWindow.webContents.openDevTools();
  // } else {
  //   mainWindow.loadURL(
  //     url.format({
  //       pathname: path.join(__dirname, "renderer/index.html"),
  //       protocol: "file:",
  //       slashes: true,
  //     })
  //   );
  // }

  mainWindow.on("close", function (e) {
    e.preventDefault();
    mainWindow?.destroy();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;

ipcMain.on("upload_photo", (event, photo, studentId) => {
  const profileDir = path.join(__dirname, "..", "src", "images", "student");
  let extension = photo.split(".").pop();
  if (extension === "jpg") extension = "jpeg";
  const fileName = `${studentId}.${extension}`;
  const filePath = path.join(profileDir, fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  fs.copyFileSync(photo, filePath);
});

ipcMain.on("delete_photo", (event, studentId) => {
  const profileDir = path.join(
    __dirname,
    "..",
    "src",
    "images",
    "student",
    studentId
  );
  if (fs.existsSync(`${profileDir}.jpeg`)) {
    fs.unlinkSync(`${profileDir}.jpeg`);
  } else if (fs.existsSync(`${profileDir}.png`)) {
    fs.unlinkSync(`${profileDir}.png`);
  } else if (fs.existsSync(`${profileDir}.gif`)) {
    fs.unlinkSync(`${profileDir}.gif`);
  }
});
