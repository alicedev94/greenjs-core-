<script setup>
import { watch, ref } from 'vue';
const inputBuscador = ref("")
const productos = ref(
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
  }])

watch(inputBuscador, () => {
  console.log(inputBuscador.value)
})
</script>

<template>
  <input type="text" v-model="inputBuscador">
  <table class="styled-table">
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
.styled-table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  text-align: left;
}

.styled-table thead tr {
  background-color: #42b883;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #35495e;
}

.styled-table ul {
  list-style-type: none;
  padding: 0;
}
</style>
