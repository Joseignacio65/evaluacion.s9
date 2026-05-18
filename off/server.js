const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "secreto123",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.get("/", (req, res) => {
  if (req.session.usuario) {
    res.send(`
      <h1>Bienvenido ${req.session.usuario}</h1>
      <a href="/logout">Cerrar sesión</a>
    `);
  } else {
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  if (usuario === "alex" && password === "1234") {
    req.session.usuario = usuario;
    res.redirect("/");
  } else {
    res.send("Usuario o contraseña incorrectos");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});