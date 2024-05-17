<script setup>
import { watch, onMounted, ref } from 'vue'
import axios from 'axios'

const inputBuscador = ref("")

const productos = ref([])
let productosOriginales;

// FUNCIONES LOCALES DE LA TABLA
const obtenerProductos = async () => {
  const { data } = await axios.get('http://localhost:3000/api/dato')
  productos.value = data;
  productosOriginales = data;
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

// FUNCIONES PARA PRUEBAS
function mostrar2() {
  productos.value = productos.value.slice(0, 2)
}

function mostrarTodo() {
  productos.value = productosOriginales
}
// ELIMINAR DESPUES DE SU USO, FIN DEL BLOQUE

// ESTA FUNCION SE EJECUTA AL RECARGAR LA PAGINA.
onMounted(async () => {
  await obtenerProductos();
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

  <!-- BOTON DE PRUEBAS ELIMINAR DESPUES DE USAR -->
  <button class="estilo-boton" @click="mostrar2">MOSTRAR 2</button>
  <button class="estilo-boton" @click="mostrarTodo">MOSTAR TODO</button>
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

.estilo-boton {
  background-color: gray;
  color: floralwhite;
  margin: 10px 10px;
}
</style>
