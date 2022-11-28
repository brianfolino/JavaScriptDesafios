let PrendaElegida = parseInt(
  prompt(
    'Escoge la prenda que deseas comprar: 1.Remera - 2.Bermuda - 3.Zapatilla - 4.Medias - 5.Gorra'
  )
)
let totalCompra = 0
let seguirComprando = true
let decision

class Prenda {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}
const Remera = new Prenda(1, 'Remera', 6000)

const Bermuda = new Prenda(2, 'Bermuda', 8000)

const Zapatilla = new Prenda(3, 'Zapatilla', 45000)

const Medias= new Prenda(4, 'Medias', 1500)

const Gorra= new Prenda(5, 'Gorra', 6500)

const PrendasExistentes = [Remera, Bermuda, Zapatilla, Medias, Gorra]
console.log(PrendasExistentes)

while (seguirComprando === true) {

  const PrendaCliente = PrendasExistentes.find(Prenda => Prenda.id === PrendaElegida)
  if (PrendaCliente) {
    totalCompra = PrendaCliente.precio + totalCompra 
  } else {
    PrendaElegida = parseInt(
      prompt(
        'Escoge un Item habilitado: 1.Remera - 2.Bermuda - 3.Zapatilla - 4.Medias - 5.Gorra'
      )
    )
    continue
  }
  console.log(PrendaCliente)

  decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
  if (decision === 1) {
    PrendaElegida = parseInt(
      prompt(
        'Escoge el Componente que deseas comprar: 1.Remera - 2.Bermuda - 3.Zapatilla - 4.Medias - 5.Gorra'
      )
    )
  } else {
    seguirComprando = false
  }

}
alert(`El total de tu compra es ${totalCompra}`) 