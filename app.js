const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");
const errorController = require('./controllers/error');
const app = express();

// Custom middleWares
app.use(bodyParser.urlencoded({ extended: false }));
// End of MiddleWares

//  Ejs

app.set("view engine", "ejs");
app.set("views", "views");

// End of Ejs
// Statics
setStatics(app);
// Routes
app.use('/admin', adminRoutes);
app.use(indexRoutes);
// End of Routes
// 404
app.use(errorController.get404)
app.listen(3000, () => console.log("listening on port 3000"));
