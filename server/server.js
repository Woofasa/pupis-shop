const port = 4000;
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { error } = require("console");

const app = express();

const DATA_FILE = path.join(__dirname, "data", "items.json");

app.use(bodyParser.json());

if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE));
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]");
}

function readData() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Ошибка чтения", err);
    return {};
  }
}

function writeData() {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.log("Ошибка записи", err);
    return false;
  }
}

app.get("/items", (req, res) => {
  const data = readData();
  res.json(data);
});

app.get("/items/get", (req, res) => {
  const { id } = req.body;
  const data = getData();
  const item = data.find((item) => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Файл не найден" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на ${port}`);
});
