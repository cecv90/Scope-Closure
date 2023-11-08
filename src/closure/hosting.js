//Hosting es un término para describir que las declaraciones de variables y funciones.
//Son desplazada a la parte superior del scope más cercano, scope global o de funcion.
//Esto sucede solamente con las declaraciones y no con las asignaciones. El código permanece igual
//solo es una interpretación del motor de javascript. En el caso de las variables solamente sucede cuando son declarada con var.
//Hostin let y const no es del todo cierto que solo pasa con var, tambien hara que el motor de jv entienda y eleve las declaraciones a la temporal dead zone.
//Es una region del código donde la variable está declarada pero no es posible acceder, provocando errores.
//Buena practica, no utilices var en las declaraciones de variables, escribe primero las funciones y luego su invocaciones.




