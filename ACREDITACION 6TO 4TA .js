1
edad_perro = int(input("Edad del perro: "))
edad_humana = edad_perro * 7
print(f"La edad del perro en años humanos es {edad_humana} años.")

2
coste_total = sum(float(input(f"Ingrese el gasto estimado para {categoria}: $")) for categoria in ["alojamiento", "alimentación", "entretenimiento"])

print(f"El coste total del viaje es: ${coste_total:.2f}")

3
def areaRectangulo(base, altura):
    return base * altura
print(f"El área del rectángulo es: {areaRectangulo(float(input('Base: ')), float(input('Altura: ')))} unidades cuadradas.")

4
def calcular_descuento(precio, descuento):
    return precio * (1 - descuento / 100)
print(f"Precio final: ${calcular_descuento(float(input('Precio: $')), float(input('Descuento: '))):.2f}")

5
let bandas = ["Nirvana", "Metallica", "Pink Floyd", "Queen", "The Beatles", "AC/DC", "Led Zeppelin", "Rolling Stones", "The Doors", "Imagine Dragons"];

console.log(bandas[2], bandas[3], bandas[6]);  // Mostrar 3er, 4to y 7mo
bandas[1] = "The Killers"; bandas[2] = "Foo Fighters"; bandas.push("Green Day"); // Modificar y añadir
console.log(bandas, bandas.length, bandas.sort()); // Mostrar array, longitud y ordenado
bandas.forEach(b => console.log(b)); // Recorrer el array 
