<script setup>
import { watch, onMounted, ref } from 'vue';
const inputBuscador = ref("")
const api = ref(
  [{
    "product": {
      "Codigo": "LB-00000006",
      "Nombre": "RELOJ 0.8 PIE ACERO INOX. CNEGRO AME83M SAMSUNG",
      "Marca": "SAMSUNG",
      "Garantia": 365,
      "CodigoBarra": "8,80609E+12",
      "PrecioaMostrar": 68.96,
      "PrecioTachado": 100,
      "CodigoSucursal": "4",
      "Sucursal": "Agencia Valencia",
      "IdAlmacen": "EXH",
      "Almacen": "EXHIBICIÓN",
      "Lista Precio": "2",
      "IdHablador": 3,
      "Hablador": "SE FELIZ ENTERO",
      "IdMotivo": 3,
      "FecCrea": "2024-04-19T10:57:07.000Z",
      "CodigoServicio": null,
      "PrecioServicio": null,
      "Codigo_relacion": "1",
      "Codigo_suma_resta": "1",
      "ListaPrecio": "2"
    },
    "details": [
      {
        "Codigo": "LB-00000049",
        "Nombre": "CORREA RELOJ VERDE",
        "Marca": "BM",
        "Garantia": 365,
        "CodigoBarra": "9,09102E+11",
        "PrecioaMostrar": 13.79,
        "PrecioTachado": 0,
        "CodigoSucursal": "4",
        "Sucursal": "Agencia Valencia",
        "IdAlmacen": "ALM-GD-A",
        "Almacen": "Almacen Grado A",
        "ListaPrecio": "2",
        "IdHablador": 2,
        "Hablador": "SE FELIZ .99",
        "IdMotivo": 3,
        "FecCrea": "2024-04-19T10:57:07.000Z",
        "CodigoServicio": "LS-00000008",
        "PrecioServicio": 4500,
        "Codigo_relacion": "1.1",
        "Codigo_suma_resta": "1"
      },
      {
        "Codigo": "LB-00000012",
        "Nombre": "CORREA NARANJA",
        "Marca": "SAMSUNG",
        "Garantia": 365,
        "CodigoBarra": "8,80609E+12",
        "PrecioaMostrar": 68.96,
        "PrecioTachado": 0,
        "CodigoSucursal": "4",
        "Sucursal": "Agencia Valencia",
        "IdAlmacen": "EXH",
        "Almacen": "EXHIBICIÓN",
        "ListaPrecio": "2",
        "IdHablador": 3,
        "Hablador": "SE FELIZ ENTERO",
        "IdMotivo": 3,
        "FecCrea": "2024-04-19T10:57:07.000Z",
        "CodigoServicio": null,
        "PrecioServicio": null,
        "Codigo_relacion": "1.1",
        "Codigo_suma_resta": "1"
      }
    ]
  }, {
    "product": {
      "Codigo": "Lc-00000006",
      "Nombre": "RELOJ 0.8 PIE ACERO INOX. CNEGRO AME83M SAMSUNG",
      "Marca": "SAMSUNG",
      "Garantia": 365,
      "CodigoBarra": "8,80609E+12",
      "PrecioaMostrar": 68.96,
      "PrecioTachado": 100,
      "CodigoSucursal": "4",
      "Sucursal": "Agencia Valencia",
      "IdAlmacen": "EXH",
      "Almacen": "EXHIBICIÓN",
      "Lista Precio": "2",
      "IdHablador": 3,
      "Hablador": "SE FELIZ ENTERO",
      "IdMotivo": 3,
      "FecCrea": "2024-04-19T10:57:07.000Z",
      "CodigoServicio": null,
      "PrecioServicio": null,
      "Codigo_relacion": "1",
      "Codigo_suma_resta": "1",
      "ListaPrecio": "2"
    },
    "details": [
      {
        "Codigo": "LB-00000049",
        "Nombre": "CORREA RELOJ VERDE",
        "Marca": "BM",
        "Garantia": 365,
        "CodigoBarra": "9,09102E+11",
        "PrecioaMostrar": 13.79,
        "PrecioTachado": 0,
        "CodigoSucursal": "4",
        "Sucursal": "Agencia Valencia",
        "IdAlmacen": "ALM-GD-A",
        "Almacen": "Almacen Grado A",
        "ListaPrecio": "2",
        "IdHablador": 2,
        "Hablador": "SE FELIZ .99",
        "IdMotivo": 3,
        "FecCrea": "2024-04-19T10:57:07.000Z",
        "CodigoServicio": "LS-00000008",
        "PrecioServicio": 4500,
        "Codigo_relacion": "1.1",
        "Codigo_suma_resta": "1"
      },
      {
        "Codigo": "LB-00000012",
        "Nombre": "CORREA NARANJA",
        "Marca": "SAMSUNG",
        "Garantia": 365,
        "CodigoBarra": "8,80609E+12",
        "PrecioaMostrar": 68.96,
        "PrecioTachado": 0,
        "CodigoSucursal": "4",
        "Sucursal": "Agencia Valencia",
        "IdAlmacen": "EXH",
        "Almacen": "EXHIBICIÓN",
        "ListaPrecio": "2",
        "IdHablador": 3,
        "Hablador": "SE FELIZ ENTERO",
        "IdMotivo": 3,
        "FecCrea": "2024-04-19T10:57:07.000Z",
        "CodigoServicio": null,
        "PrecioServicio": null,
        "Codigo_relacion": "1.1",
        "Codigo_suma_resta": "1"
      }
    ]
  }])
const productos = ref([])
let productosOriginales;

// FUNCIONES LOCALES DE LA TABLA
const obtenerProductos = () => {
  productos.value = api.value;
  productosOriginales = api.value; // Guardamos los datos originales
}

const buscadorProductos = () => {
  if (inputBuscador.value.length === 0) {
    productos.value = productosOriginales;
  } else {
    productos.value = productosOriginales.filter((producto) =>
      producto.product.Codigo.toLocaleLowerCase().
        includes(inputBuscador.value.toLocaleLowerCase()));
  }
}

// ESTA FUNCION SE EJECUTA AL RECARGAR LA PAGINA.
onMounted(() => {
  obtenerProductos();
})

// ESTA FUNCION SE EJECUTA CADA VEZ QUE EL ELEMENTO ASIGNADO (inputBuscador) EN ESTE CASO, CAMBIA SU VALOR.
watch(inputBuscador, () => {
  buscadorProductos();
})
</script>

<template>
  <!-- ENTRADA BUSCADOR -->
  <div class="contenedor-buscador">
    <input class="buscador" type="text" placeholder="Barra de busqueda..." v-model="inputBuscador">
  </div>

  <!-- TABLA DATOS -->
  <table class="estilos-tabla">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Detalle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="producto in productos" :key="producto.codigo">
        <td>{{ producto.product.Codigo }} - {{ producto.product.Nombre }}</td>
        <td>
          <ul>
            <li v-for="detalle in producto.details">
              {{ detalle.Codigo }} - {{ detalle.Nombre }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* ESTILOS DE LA TABLA  */
.estilos-tabla {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  text-align: left;
}

.estilos-tabla thead tr {
  background-color: #42b883;
  color: #ffffff;
  text-align: left;
}

.estilos-tabla th,
.estilos-tabla td {
  padding: 12px 15px;
}

.estilos-tabla tbody tr {
  border-bottom: 1px solid #dddddd;
}

.estilos-tabla tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.estilos-tabla tbody tr:last-of-type {
  border-bottom: 2px solid #35495e;
}

.estilos-tabla ul {
  list-style-type: none;
  padding: 0;
}

/* ESTILOS PARA LA ENTRADA DE TEXTO DEL BUSCADOR  */
.contenedor-buscador {
  display: flex;
  align-items: flex-start;
}
.buscador {
  width: 20rem;
  height: 2rem;
  border-color: var(--verde-vue);
  margin-bottom: 0.2rem;
}

</style>
