import os

os.system('cls')

import math

#Solicitar coeficientes

a = float(input("Ingrese el valor de a: "))
b = float(input("Ingrese el valor de b: "))
c = float(input("Ingrese el valor de c: "))

#Verificar que no sea cero
if a == 0:
    print("No es una ecuacion de segundo grado.")
else:
    #Calcular discriminante
    discriminante = b**2 - 4*a*c

    if discriminante > 0:
        x1 = ((-1*b) + math.sqrt(discriminante)) / (2*a)
        x2 = ((-1*b) - math.sqrt(discriminante)) / (2*a)
        print(f"Las soluciones son: x1 = {x1} and x2 = {x2}")

    elif discriminante == 0:
        x = -b / (2*a)
        print(f"La solucion unica es: x = {x}")

    else:
        print("La ecuacion no tiene soluciones reales")