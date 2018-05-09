const express = require("express")
const app = express()
const margs = require("./routes/margs")
const tacos = require("./routes/tacos")
const cors = require("cors")

app.use(cors())
app.use("/margs", margs)
app.use("/tacos", tacos)



// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    })
})

module.exports = app
