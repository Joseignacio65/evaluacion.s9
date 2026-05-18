<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
</head>
<body>

<h2>Iniciar sesión</h2>

<form action="/login" method="POST">
  <input type="text" name="usuario" placeholder="Usuario" required>
  <br><br>
  <input type="password" name="password" placeholder="Contraseña" required>
  <br><br>
  <button type="submit">Entrar</button>
</form>

</body>
</html>