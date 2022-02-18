<template>
  <section>
    <header><h1 class="text-white">Convertidor de bases numéricas</h1></header>
    <div class="container text-white">
      <div class="row p-2 p-md-4 mx-1 bg-secondary rounded-3">
        <div class="row mx-auto">
          <form @submit="switchOperation()">
            <div class="row">
              <div class="col-md-6 m-auto">
                <h5>Ingrese valor a convertir</h5>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="numero" aria-describedby="numero" v-model="numero" required>
                  <select class="form-select" id="inputGroupSelect01" v-model="operacion">
                    <option value="1">Decimal a octal</option>
                    <option value="2">Binario a decimal</option>
                  </select>
                  <button type="submit" class="btn btn-primary">Convetir</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-11 col-md-8 m-auto bg-white text-dark rounded-3 p-4">
                <div class="row">
                  <div class="col-12 text-start" v-for="(cadena,i) in operaciones.entero" :key="i"><div v-html="cadena"></div></div>
                </div>
                <div class="row mt-3">
                  <div class="col-12 text-start" v-for="(cadena,j) in operaciones.decimal" :key="j"><div v-html="cadena"></div></div>
                </div>
                <div class="row mt-3">
                  <h5 class="mt-3" v-html="resultado"></h5>
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
      }, 
      resultado: '',
      operacion: '1'
    }
  },
  methods: {
    binarioToDecimal(){
      let cadenas = []
      let total = 0
      this.operaciones.decimal = []
      cadenas = this.numero.split(',')
      let cd1 = '<span>' + cadenas[0] + ' = '
      let cd2 = '<span>' + cadenas[0] + ' = '
      let cd3 = '<span>' + cadenas[0] + ' = '
      let semiSum = 0
      
      for (let i = 0; i < cadenas[0].length; i++) {
        let expo = (cadenas[0].length-1-i)
        let digit = parseInt(cadenas[0].charAt(i))

        cd1 += digit + '(2<sup>'+ expo +'</sup>)'+ '</span>';
        (i<cadenas[0].length-1) ? cd1 += '+' : cd1 += '';
        cd2 += digit * Math.pow(2,expo) + '</span>';
        (i<cadenas[0].length-1) ? cd2 += '+' : cd2 += ''
        semiSum += digit * Math.pow(2,expo)
      }
      cd3 += semiSum + '</span>'
      total += semiSum
      this.operaciones.entero = []
      this.operaciones.entero.push(cd1)
      this.operaciones.entero.push(cd2)
      this.operaciones.entero.push(cd3)

      if (cadenas.length > 1) {
        cd1 = '<span>0,' + cadenas[1] + ' = '
        cd2 = '<span>0,' + cadenas[1] + ' = '
        cd3 = '<span>0,' + cadenas[1] + ' = '
        semiSum = 0

        for (let i = 0; i < cadenas[1].length; i++) {
          let expo = -(i+1)
          let digit = parseInt(cadenas[1].charAt(i))

          cd1 += digit + '(2<sup>'+ expo +'</sup>)'+ '</span>';
          (i<cadenas[1].length-1) ? cd1 += '+' : cd1 += '';
          cd2 += digit * Math.pow(2,expo) + '</span>';
          (i<cadenas[1].length-1) ? cd2 += '+' : cd2 += ''
          semiSum += digit * Math.pow(2,expo)
        }
        cd3 += semiSum + '</span>'
        this.operaciones.decimal.push(cd1)
        this.operaciones.decimal.push(cd2)
        this.operaciones.decimal.push(cd3)
      }

      total += semiSum
      this.resultado = '<span>' + this.numero + '<sub>2</sub> = ' + total + '<sub>10</sub>'
    },
    decimalToOctal(){
      let strFinal = ''
      let residuo = 0
      let temp = this.numero
      let sn = 8
      this.operaciones.entero = []

      while (temp > sn) {
        residuo = temp % sn
        let str = '<span>' + temp + ' / ' + sn + ' = '
        temp = (temp - residuo) / sn
        if (temp > sn) {
          str += temp + ' <span class="text-danger fw-bold">' + residuo +'</span></span>'
        } else {
          str += ' <span class="text-danger fw-bold">'+ temp + ' ' + residuo +'</span></span>'
        }
        strFinal = residuo + strFinal
        this.operaciones.entero.push(str)
      }
      strFinal = temp + strFinal
      this.resultado = '<span>' + this.numero + '<sub>10</sub> = ' + strFinal + '<sub>'+ sn +'</sub>'
    },
    switchOperation(){
      console.log(this.operacion);
      switch (this.operacion) {
        case '1':
          this.decimalToOctal()
          break;
        case '2':
          this.binarioToDecimal()
          break;
      }
    }
  }
}
</script>

<style scoped>
  .resto {
    font-weight: bold !important;
    color: brown !important;
  }
</style>
