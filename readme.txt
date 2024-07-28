###Reservación de Hotel###

Descripción
Esta aplicación ayuda a los clientes a encontrar el hotel más barato entre Lakewood,
Bridgewood y Ridgewood en función de las fechas ingresadas y el tipo de cliente
(Regular o Recompenza). La selección de fechas se realiza mediante la biblioteca Flatpickr,
que facilita la entrada y manipulación de fechas en la interfaz de usuario.

Instalación
Clona el repositorio en tu máquina local. https://github.com/isabelmoscatel/reserva-de-hoteles.git 
Abre el archivo index.html en tu navegador

Uso
Activa el toggle si eres un cliente con recompensas.
Selecciona las fechas utilizando el campo de entrada de fechas (usa el calendario emergente).
Haz clic en el botón "Buscar".
La aplicación mostrará todos los hoteles disponibles, resaltando el más barato basado 
en la información proporcionada.

Suposiciones
Los datos de entrada se ingresan en el formato correcto.
Las fechas proporcionadas son válidas y siguen el formato especificado.
Una vez escogidos los precios se validará que el cliente antes de realizar
la reserva, puede ser con un login o ingresando un número de socio

Estructura del Proyecto
-index.html: Estructura de la página web.
-csss/style.css: Estilos para la página web.
-script/filtro.js: Lógica de la aplicación para calcular el hotel más barato.
-flatpickr: Biblioteca utilizada para la selección de fechas.
-Imágenes

El toggle switch se utiliza para cambiar entre cliente Regular y Recompenzas,
actualizando dinámicamente la etiqueta del tipo de cliente. Las fechas se
ingresan utilizando el componente de calendario de Flatpickr, que asegura que
las fechas se seleccionen .
