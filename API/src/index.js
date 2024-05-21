const express = require("express");
const faker = require("faker"); // Importa la biblioteca faker
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

var datos = [];

// Genera datos aleatorios para el producto
const generateRandomProduct = () => {
  return {
    Codigo: faker.random.alphaNumeric(8),
    Nombre: faker.commerce.productName(),
    Marca: faker.company.companyName(),
    Garantia: faker.random.number({ min: 30, max: 365 }), // Garantía en días
    CodigoBarra: faker.random.number().toString(),
    PrecioaMostrar: faker.commerce.price(),
    PrecioTachado: faker.commerce.price(),
    CodigoSucursal: faker.random.number({ min: 1, max: 10 }).toString(),
    Sucursal: faker.company.companyName(),
    IdAlmacen: faker.random.alphaNumeric(6),
    Almacen: faker.company.companyName(),
    "Lista Precio": faker.random.number({ min: 1, max: 5 }).toString(),
    IdHablador: faker.random.number({ min: 1, max: 5 }),
    Hablador: faker.lorem.words(),
    IdMotivo: faker.random.number({ min: 1, max: 5 }),
    FecCrea: faker.date.past().toISOString(),
    CodigoServicio: null,
    PrecioServicio: null,
    Codigo_relacion: faker.random.number().toFixed(1),
    Codigo_suma_resta: faker.random.number().toFixed(1),
  };
};

// Genera datos aleatorios para los detalles
const generateRandomDetails = () => {
  const numDetails = faker.random.number({ min: 1, max: 3 });
  const details = [];

  for (let i = 0; i < numDetails; i++) {
    details.push({
      Codigo: faker.random.alphaNumeric(8),
      Nombre: faker.commerce.productName(),
      Marca: faker.company.companyName(),
      Garantia: faker.random.number({ min: 30, max: 365 }), // Garantía en días
      CodigoBarra: faker.random.number().toString(),
      PrecioaMostrar: faker.commerce.price(),
      PrecioTachado: faker.commerce.price(),
      CodigoSucursal: faker.random.number({ min: 1, max: 10 }).toString(),
      Sucursal: faker.company.companyName(),
      IdAlmacen: faker.random.alphaNumeric(6),
      Almacen: faker.company.companyName(),
      ListaPrecio: faker.random.number({ min: 1, max: 5 }).toString(),
      IdHablador: faker.random.number({ min: 1, max: 5 }),
      Hablador: faker.lorem.words(),
      IdMotivo: faker.random.number({ min: 1, max: 5 }),
      FecCrea: faker.date.past().toISOString(),
      CodigoServicio: faker.random.alphaNumeric(8),
      PrecioServicio: faker.commerce.price(),
      Codigo_relacion: faker.random.number().toFixed(1),
      Codigo_suma_resta: faker.random.number().toFixed(1),
    });
  }

  return details;
};

// Datos aleatorios de ejemplo
let numDatos = 100;
for (let i = 0; i <= numDatos; i++) {
  const dato = {
    product: generateRandomProduct(),
    details: generateRandomDetails(),
  };

  datos.push(dato);
}

// Ruta para obtener los datos
app.get("/api/dato", (req, res) => {
  res.json(datos);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
