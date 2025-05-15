const port = 4000;
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const ITEM_DATA = path.join(__dirname, "data", "items.json");
const CART_DATA = path.join(__dirname, "data", "cartItems.json");

function dirCheck(dir) {
  if (!fs.existsSync(path.dirname(dir))) {
    fs.mkdirSync(path.dirname(dir));
  }

  if (!fs.existsSync(dir)) {
    fs.writeFileSync(dir, "[]");
  }
}

dirCheck(ITEM_DATA);
dirCheck(CART_DATA);

function readData(dir) {
  try {
    const data = fs.readFileSync(dir, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Ошибка чтения", err);
    return {};
  }
}

function writeData(data, dir) {
  try {
    fs.writeFileSync(dir, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.log("Ошибка записи", err);
    return false;
  }
}

app.get("/items", (req, res) => {
  const data = readData(ITEM_DATA);
  res.json(data);
});

app.get("/cart", (req, res) => {
  const data = readData(CART_DATA);
  res.json(data);
});

app.get("/cart/:uuid", (req, res) => {
  const itemUUID = req.params.uuid;
  const data = readData(CART_DATA);
  const item = data.find((item) => item.uuid === itemUUID);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Файл не найден" });
  }
});

app.delete("/cart/", (req, res) => {
  let data = readData(CART_DATA);
  data = [];
  writeData(data, CART_DATA);
  res.sendStatus(204);
});

app.delete("/cart/:id", (req, res) => {
  const id = req.params.id;
  let data = readData(CART_DATA);
  writeData(
    data.filter((item) => item.id !== id),
    CART_DATA
  );
  res.sendStatus(204);
});

app.post("/cart/", (req, res) => {
  const newItem = req.body;
  let data = readData(CART_DATA);
  data.push(newItem);
  writeData(data, CART_DATA);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Сервер запущен на ${port}`);
});
