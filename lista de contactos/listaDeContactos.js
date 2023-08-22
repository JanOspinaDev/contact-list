let listaContactos = [];

function crearContacto(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
    const contacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: ubicaciones,
        ciudad: ciudad,
        direccion: direccion
    };
    
    listaContactos.push(contacto);
    console.log("Contacto creado:", contacto);
}

function eliminarContacto(id) {
    const indice = listaContactos.findIndex(contacto => contacto.id === id);
    
    if (indice !== -1) {
        const contactoEliminado = listaContactos.splice(indice, 1)[0];
        console.log("Contacto eliminado:", contactoEliminado);
    } else {
        console.log("No se encontró un contacto con ese ID.");
    }
}

function actualizarContacto(id, nuevasPropiedades) {
  const indice = listaContactos.findIndex(contacto => contacto.id === id);
  
  if (indice !== -1) {
      listaContactos[indice] = { ...listaContactos[indice], ...nuevasPropiedades };
      console.log("Contacto actualizado:", listaContactos[indice]);
  } else {
      console.log("No se encontró un contacto con ese ID.");
  }
}

crearContacto(1, "Juan", "Pérez", "123456789", [], "Ciudad A", "Calle 123");
crearContacto(2, "María", "López", "987654321", [], "Ciudad B", "Avenida 456");

console.log(listaContactos);

eliminarContacto(1);

console.log(listaContactos);
