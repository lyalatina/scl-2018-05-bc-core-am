# Proyecto Cifrado Cesar
## **Introducción**
El cifrado César es uno de los primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

### **Reto**
El reto incluye diseñar un producto pensando en los usuarios, construir una interfaz, escuchar eventos básicos del DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación del DOM para mostrar (escribir) los resultados.

### **Aplicación Party Sorprise**

¿Cómo se descarga la aplicación y se instala? 

* Clonar repositorio. 
* Debes instalar Git en tu computador, si tienes sistema operativo Linux/MacOS puedes usar la terminal. Si tienes Windows, GitBash.
* Posicionado en nuestro proyecto hacer correr npm install para descargar e instalar todas las dependencias utilizadas.


#### Demo
* La aplicación se verá con gh-pages.

### **Introduccion a la Aplicación**.

__*“Party Sorprise”*__, es una aplicación pensada en poder comunicarse con cierto grupo de personas elegidas, ya sean amigos, familiares, compañeros de trabajo, etc. Especialmente usada para fiestas sorpresas, cumpleaños, 
La función es que la aplicación permita enviar mensajes de texto cifrados, (que son incomprensibles), y que solo las personas que tengan la aplicación, puedan verlo, decifrarlo y entenderlo.

¿Cómo funciona la aplicación?

1. **En key** debes colocar el numero de posiciones en la cual quieres desplazar tu mensaje. Si son 3 posiciones de la palabra "Hola", se desplazaría dos letras hacia la derecha de tu mensaje quedando la H en K, la O en R, la L en O, y la A en D. 

2. En la cajita de    *__"Escribe tu mensaje"__*  , debe ir el texto que deseas ocultar (Cifrar), o descubrir (Descifrar). 

3. Si quieres descubrir que mensaje es, debes hacer click en el botón **Descifrar**, arriba del botón en la cajita donde dice *__"Descubre tu mensaje"__* aparecerá la frase descubierta. **por ej:** si la palabra es "Krod" y quieres saber que dice, debes hacer click en descifrar y arriba aparecerá el mensaje descubierto,

4. Si quieres ocultar un mensaje, debes hacer click en el botón **Cifrar**, arriba del botón en la cajita donde dice *__"Oculta tu mensaje"__* aparecerá la frase descubierta. **por ej:** si la palabra es "Hola" y cifrar u ocultarlo, debes hacer click en cifrar y arriba aparecerá el mensaje oculto.


## **Diseño**

El diseño es simple, pero colorido. Quise enfocarme en el usuario (los invitados al evento o fiesta sorpresa), creando una interfaz y estructura centrada en la facilidad, para entender y escribir el mensaje a cifrar y descifrar.
Para ello cree: 
1 input type, para que el usuario colocara el número de posiciones (Key).
1 textarea para escribir el mensaje a cifrar o descifrar, destacado con color y mas grande para que sea el foco de atención del usuario, se sienta con facilidad para escribir. En un textarea, así el usuario puede escribir gran cantidad de caracteres ya que cuenta con un scroll, que como estar en un word o página web.
2 textarea, en una aparece el mensaje a cifrar, con su respectivo botón, y en la otra lo mismo.
Las cajas llevan un mensaje en transparencia, como ayuda y orientación de donde verá o escribirá su mensaje.
Cree un enlace en un menú, en el top de la página, con un texto con instrucciones de la aplicación.

El diseño de colores está basado en una paleta de colores fuerte y cálidos, morado, azul, y verde claro realizando un dregadé.

## **Metodología de trabajo**

Utilicé Trello como herramienta para organizar mis tareas y organizar mi tiempo.
Como también la herramienta de comunicación Slack, para así tener una comunicación óptima con mis coach y compañeras.