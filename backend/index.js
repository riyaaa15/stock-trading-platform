require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { UserModel } = require("./models/UserModel");
const { createSecretToken } = require("./utils/SecretToken");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await UserModel.create({ email, password, username });
    const token = createSecretToken(user._id);

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", success: false });
  }
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  if (req.body.mode === "BUY") {
    await new HoldingsModel({
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.price,
      price: req.body.price,
      net: "0.00%",
      day: "0.00%",
    }).save();
  }

  if (req.body.mode === "SELL") {
    const holding = await HoldingsModel.findOne({ name: req.body.name });

    if (!holding) {
      return res.status(400).send("Stock not in holdings");
    }

    if (holding.qty < req.body.qty) {
      return res.status(400).send("Not enough quantity to sell");
    }

    holding.qty -= req.body.qty;

    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ _id: holding._id });
    } else {
      await holding.save();
    }
  }

  await newOrder.save();

  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose
    .connect(url)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
});
