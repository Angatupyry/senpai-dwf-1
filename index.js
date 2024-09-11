const actualizarEstado = (estado, nuevoValor) => {
  estado = nuevoValor;
  return estado;
};

const useState = (initialValue) => {
  actualizarEstado(initialValue);
  return [initialValue, actualizarEstado("")];
};
