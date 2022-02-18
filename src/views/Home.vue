<template>
  <section>
    <header><h1 class="text-white">Multiplicador por suma y desplazamiento binario</h1></header>
    <div class="container text-white">
      <div class="row py-4 p-md-4 mx-1 bg-secondary rounded-3">
        <div class="row mx-auto">
          <form @submit="multiplyBinary()">
            <div class="row">
              <div class="col-md-6 m-auto">
                <h5>Ingrese valores a multiplicar</h5>
                <div class="input-group mb-3">
                  <input type="number" class="form-control" id="multiplicador" aria-describedby="multiplicador" v-model="multiplicador" required>
                  <span class="input-group-text" id="basic-addon1">X</span>
                  <input type="number" class="form-control" id="multiplicando" aria-describedby="multiplicando" v-model="multiplicando" required>
                  <button type="submit" class="btn btn-primary">Multiplicar</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-11 col-md-8 m-auto bg-white text-dark rounded-3 p-4">
                <div class="row">
                  <div class="col-4 text-center">{{operaciones.binarios.multiplicador}}</div>
                  <div class="col-4 text-center">{{operaciones.binarios.multiplicando}}</div>
                  <div class="col-4 text-center">{{operaciones.binarios.resultado}}</div>
                </div>
                <div class="row mt-3">
                  <div v-for="(iteracion,i) in operaciones.iteraciones" :key="i" class="m-1">
                    <h6 class="text-start">{{iteracion.nombre}}</h6>
                    <div class="row">
                      <div class="col-4 text-center">{{iteracion.inicio.multiplicador}}</div>
                      <div class="col-4 text-center">{{iteracion.inicio.multiplicando}}</div>
                      <div class="col-4 text-center">{{iteracion.inicio.resultado}}</div>
                    </div>
                    <div class="row">
                      <div class="col-4 text-center">{{iteracion.final.multiplicador}}</div>
                      <div class="col-4 text-center">{{iteracion.final.multiplicando}}</div>
                      <div class="col-4 text-center">{{iteracion.final.resultado}}</div>
                    </div>    
                  </div>
                  <h5 class="mt-3">Resultado({{multiplicador}} x {{multiplicando}}) = {{multiplicador*multiplicando}}<sub>10</sub> = {{operaciones.resultado}}<sub>2</sub></h5>
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
  name: 'Home',
  components: {NavBar},
  data(){
    return {
      multiplicador: '',
      multiplicando: '',
      operaciones: {
        binarios: {
          multiplicador: '',
          multiplicando: '',
          resultado: ''
        },
        iteraciones: [
          {
            nombre: '',
            inicio: {
              multiplicador: '',
              multiplicando: '',
              resultado: ''
            },
            final: {
              multiplicador: '',
              multiplicando: '',
              resultado: ''
            }
          }
        ],
        resultado: ''
      }
    }
  },
  methods: {
    toBinary(a){
      let x = parseInt(a)
      return x.toString(2)
    },
    maxLength(x,y){
      return x.length>y.length ? x.length : y.length
    },
    addBinaries(a,b,length){
      let carry = 0
      let result = ''

      // Suma de binarios
      for (let i = length-1; i >= 0; i--) {
        let semiSum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry
        switch (semiSum) {
          case 0:
            result = semiSum + result
            carry = 0
            break;
          case 1:
            result = semiSum + result
            carry = 0
            break;
          case 2:
            result = 0 + result
            carry = 1
            break;
          case 3:
            result = 1 + result
            carry = 1
            break;
        }        
      }
      return result.padStart((length),'0')
    },
    multiplyBinary(){
      let a = this.toBinary(this.multiplicador)
      let b = this.toBinary(this.multiplicando)
      let result = ''
      let length = this.maxLength(a,b) * 2

      this.operaciones.iteraciones = []
      b = b.padStart((length),'0')
      result = result.padStart((length),'0')
      let aLength = a.length

      this.operaciones.binarios.multiplicador = a
      this.operaciones.binarios.multiplicando = b
      this.operaciones.binarios.resultado = result

      // Multiplicacion de binarios
      for (let i = 0; i < aLength; i++) {
        let iteracion = {nombre:'', inicio: {}, final: {}}
        iteracion.nombre = 'Iteracion ' + (i+1) + ':'
        let endDigit = parseInt(a.charAt(aLength-1))
        if (endDigit == 1) {
          result = this.addBinaries(result,b,length)
        }
        
        iteracion.inicio.multiplicador = a
        iteracion.inicio.multiplicando = b
        iteracion.inicio.resultado = result

        a = a.slice(0,aLength-1)
        a = a.padStart(aLength,'0')

        b = b.slice(1,b.length)
        b = b.padEnd(length,'0')
        
        iteracion.final.multiplicador = a
        iteracion.final.multiplicando = b
        iteracion.final.resultado = result
        this.operaciones.iteraciones.push(iteracion)
      }
      this.operaciones.resultado = result
    }
  }
}
</script>

<style scoped>

</style>
