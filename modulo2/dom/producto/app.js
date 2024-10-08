const productos = [
  {
    nombre: "Limones",
    precio: 60,
    link: "https://images.unsplash.com/photo-1622754311409-e3419609d816?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    disponible: false,
  },
  {
    nombre: "Late",
    precio: 250,
    link: "https://images.unsplash.com/photo-1617590590964-2acb6414a31d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    disponible: false,
  },
  {
    nombre: "Pasta",
    precio: 300,
    link: "https://images.unsplash.com/photo-1628079251261-624e723b7326?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    disponible: false,
  },
  {
    nombre: "Cereales",
    precio: 120,
    link: "https://images.unsplash.com/photo-1628132232967-fb1807288edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    disponible: false,
  },
  {
    nombre: "Jugo",
    precio: 80,
    link: "https://images.unsplash.com/photo-1628134187787-51c21f177a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    disponible: true,
  },
  {
    nombre: "Donas",
    precio: 280,
    link: "https://images.unsplash.com/photo-1626379801357-537572de4ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    disponible: true,
  },
  {
    nombre: "Cerveza",
    precio: 250,
    link: "https://images.unsplash.com/photo-1627772329965-8ec1de188eeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    disponible: false,
  },
  {
    nombre: "Pan",
    precio: 70,
    link: "https://images.unsplash.com/photo-1618194696448-c21afdbb90be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    disponible: true,
  },
  {
    nombre: "Waffles",
    precio: 300,
    link: "https://images.unsplash.com/photo-1598578273254-cf2b91351d56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    disponible: true,
  },
];

const main = document.getElementsByTagName("main")[0];

const crearYAgregarProducto = (producto) => {
  const contenedorProducto = document.createElement("div");
  contenedorProducto.classList.add("producto");

  const nombreProducto = document.createElement("h2");
  nombreProducto.textContent = producto.nombre;

  const imagenProducto = document.createElement("img");
  imagenProducto.setAttribute("src", producto.link);
  imagenProducto.setAttribute("alt", producto.nombre);

  const precioProducto = document.createElement("p");
  precioProducto.textContent = `Por tan solo: ${producto.precio}`;

  contenedorProducto.appendChild(nombreProducto);
  contenedorProducto.appendChild(imagenProducto);
  contenedorProducto.appendChild(precioProducto);

  main.appendChild(contenedorProducto);
};

const productosFiltrados = productos.filter((producto) => producto.disponible);

for (let i = 0; i < productosFiltrados.length; i++) {
  crearYAgregarProducto(productosFiltrados[i]);
}
