<template>
  <section>
    <header><h1 class="text-white">Convertidor de bases numéricas</h1></header>
    <div class="container text-white">
      <div class="row p-4 m-1 bg-secondary rounded-3">
        <div class="row">
          <form @submit="multiplyBinary()">
            <div class="row">
              <div class="col-6 m-auto">
                <h5>Ingrese valor a convertir</h5>
                <div class="input-group mb-3">
                  <input type="number" class="form-control" id="numero" aria-describedby="numero" v-model="numero" required>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Elegir opcion...</option>
                    <option value="1">Decimal a octal</option>
                    <option value="2">Binario a decimal</option>
                  </select>
                  <button type="submit" class="btn btn-primary">Convetir</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8 m-auto bg-white text-dark rounded-3 p-4">
                <div class="row">
                  <div class="col-4 text-start">{{}}</div>
                </div>
                <div class="row mt-3">
                  <div v-for="(iteracion,i) in 3" :key="i" class="m-1">
                    <div class="row">
                      <div class="col-4 text-start">{{}}</div>
                    </div>  
                  </div>
                  <h5 class="mt-3">Resultado( x) = <sub>10</sub> = <sub>2</sub></h5>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <NavBar/>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// @ is an alias to /src

export default {
  name: 'Convertidor',
  components: {NavBar},
  data(){
    return {
      numero: '',
      operaciones: {
        entero: [],
        decimal: []
      }
    }
  },
  methods: {
    binarioToDecimal(){
      let cadenas = []
      if (this.numero.indexOf(',') > -1) {
        cadenas = numero.split(',')
        for (let i = 0; i < cadenas[0].length; i++) {
          this.operaciones = this.operaciones + ' = ' + cadenas[0].charAt(cadenas[0].length-1-i) + '(2)' + cadenas[0].length-1-i
        }
      }else {
        cadenas[0] = this.numero
      }
    }
  }
}
</script>

<style scoped>

</style>
