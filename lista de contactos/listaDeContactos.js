const contactos = ["Juan Perez", "Maria Lopez", "Carlos Ramirez"];

function agregarContacto(nombreApellido) {
  contactos.push(nombreApellido);
}

function borrarContacto(nombreApellido) {
  const indice = contactos.indexOf(nombreApellido);
  if (indice !== -1) {
    contactos.splice(indice, 1);
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

function imprimirContactos() {
  for (const contacto of contactos) {
    console.log(contacto);
  }
}