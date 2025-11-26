const readline = require("readline");

const usuariosPermitidos = ["admin", "rubén", "invitado"];

function verificarAcceso(usuarioIngresado, edad) {
  const ahora = new Date();
  const hora = ahora.getHours();

  if (usuariosPermitidos.includes(usuarioIngresado)) {
    if ((hora >= 17 && hora < 19) || (hora >= 3 && hora < 5)) {
      console.log(`✅ Bienvenido, ${hora}:00 hora de ingreso`);
      return true;
    } else {
      console.log("❌ Fuera de rango horario: 17:00-19:00 o 03:00-05:00");
      return false;
    }
  } else {
    if (edad >= 18) {
      console.log(`✅ Bienvenido, ${hora}:00 hora de ingreso (mayor de edad)`);
      return true;
    } else {
      console.log("❌ Acceso denegado (menor de edad y no autorizado)");
      return false;
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre de usuario: ", usuario => {
  rl.question("Ingrese su edad: ", edad => {
    if (verificarAcceso(usuario, parseInt(edad, 10))) {
      const salida = new Date();
      console.log(`👋 Descanse, hora de salida ${salida.getHours()}:00`);
    }
    rl.close();
  });
});
