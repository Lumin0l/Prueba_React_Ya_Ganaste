# Prueba de React de Imanol de la Iglesia Muriel para el puesto de desarrollador front-end en Ya Ganaste

## Contexto:

Antes de empezar con los ejercicios, me gustaría describir un poco el entorno de trabajo en el que me encuentro para la prueba.
Normalmente trabajo en un entorno Unix, ya sea linux en mi ordenador personal u Os en la escuela 42, pero, por razones personales (mala suerte de tener una avería en mi ordenador, la vida es así), me encuentro realizando el ejercicio en el ordenador de mi padre, que es windows. 
Por intervenir lo más mínimo y no perder demasiado tiempo, he usado PowerShell y solo he instalado VSCode y React con Node.js para windows.

## Tarea 1: React Application

En primer lugar he instalado react y he comprobado estar funcionando en la última versión estable: la 18. Mirando en internet he confirmado que, si bien muchos siguen recomendando la 17, la 18 es la más reciente, con lo que sería la decisión que mejor cumple con las especificaciones.

Tras crear el proyecto y enlazarlo a un nuevo repositorio git público: https://github.com/Lumin0l/Prueba_React_Ya_Ganaste.git, he creado el archivo "bankList.js" y he pegado el objeto especificado en el pdf y después le he dado la estructura requerida en el archivo "App.js" para poder visualizarlo, ya que he asumido despues de ver el resto del pdf que el núcleo o la funcionalidad principal era simplemente mostrar el contenido de los objetos.
	
Una vez iniciado el servidor le he dado algo de formato en el archivo "App.css" para hacerlo responsive, en mi caso mediante la implementación de flexbox, y darle un poco de color y estilo visual, aunque no he invertido demasiado el tiempo en ello, solo porque no duela la vista al verlo. Una vez terminado, he pasado a la siguiente tarea.

## Tarea 2: Architecture

Tras leer algo de documentación, me he decidido por una arquitectura 'Model-View-Controller' porque los tres componentes diferenciados me parecen más fáciles de segmentar y manipular con el tiempo que tengo, porque puedo manipularl los elementos de forma independiente sin romper el resto (importante teniendo en cuenta mi experiencia) y porque se pueden testar de forma independiente también.

Una vez establecido el modelo, he pasado a diferenciar los elementos que entrarían en cada categoría.

En el caso de este proyecto tan pequeño, el Modelo consistiría en la capa de datos que gestiona la información de los Bancos (la lista aportada por el pdf), la Vista se encargaría de la capa de presentación que muestra la lista (App, teniendo en cuenta que el objetivo es la visualización de las listas), y el Controlador sería el mediador que interactúa con el Modelo y la Vista.

He estructurado las funciones en directorios separados dentro de una carpeta architectures.

Para que haya algo dentro de "controllers" también he decidido crear una pequeña funcionalidad que indica "esto no es un enlace" mediante un mensaje al hacer clic en el nombre del banco en cuestión.

Una vez establecido esto, paso a la siguiente tarea.

## Tarea 3: Network Request

Este apartado me ha sido más complicado y me ha requerido buscar más información. He dejado comentado el código anterior como backup en caso de error porque es más fiable.

Para obtener la información con una @GET request, en el archivo 'bankList.js' definimos la funcion 'fetchBankList'.
Esta función utiliza la API 'fetch()' con la url como argumento para extraer la info en forma de respuesta.
Después uso el método 'then()' en la respuesta para comprobar que la respuesta es correcta. Si la respuesta no está bien (ok), lanzará un error denegando la petición. Si no, utilizamos en método '.json' en la respuesta para devolver la información que queremos.

Para asegurar, si ocurre algún otro error en el proceso utilizo el método 'catch()' para notificar el error.

Después en 'App.js' importo los componentes necesarios de react y las funciones involucradas. Creamos una variable de estado para utilizar la información de los bancos que proviene de 'fetchBankList()'.

Una vez usado el hook para asignar la información sin errores se genera este Array de bancos y lo utilizamos en las divisiones que se mostrarán en la aplicación.

Una vez hecho esto y subido a git, paso a la última tarea.

## Tarea 4: Data Persistence







