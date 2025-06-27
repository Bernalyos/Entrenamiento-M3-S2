console.log("Gestion de datos con objetos")

const productos={
    1:{ id: 1, nombre: "laptop", precio: 1500},
    2:{ id: 2, nombre: "mause", precio: 5000},
    3:{ id: 3, nombre: "Teclado", precio: 500}
};
let contador=4;
const setProductos=new Set(Object.values(productos));

const mapProductos= new Map([
    ["Electronica", "laptop"],
    ["Accesorios", "Mouse"],
    ["Accesorios", "Teclado"]
]);


//elementos de DOM
const nombre=document.getElementById("nombre");
const precio=document.getElementById("precio");
const categoria=document.getElementById("categoria");
const agregarBtn=document.getElementById("boton");
const actualizarBtn=document.getElementById("actualizarBtn");
const lista=document.getElementById("listas")

 agregarBtn.addEventListener("click", () => {
    const nombre=document.getElementById("nombre").values;
    const precio=document.getElementById("precio").values;
    const categoria=document.getElementById("categoria").values;
 })