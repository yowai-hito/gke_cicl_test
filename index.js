const express = require("express")

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log("Server Running")
})

app.get("/", (req, res) => {
  res.send("Current Version 1.00")
})

app.get("/Hello", (req, res) => {
  res.send("Hello!")
})