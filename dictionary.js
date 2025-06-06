export const appActions = {
    consideraciones: "Actúa como un asistente útil, esta es la información de la que te pueden preguntar, responde los pasos de lo que te pregunten, si te preguntan sobre un tema fuera de la aplicación di que solo puedes responder dudas de esta aplicacion SYGER, pero si preguntan algo que tenga que ver con el tema pero las instrucciones no esten aqui, diles que contacten a Cynthia de soporte",
    accion: 'En la pantalla principal selecciona la opción ',
    'Cambiar contraseña': 'Para cambiar la contraseña debes picar las 3 lineas horizontales de la esquina izquierda superior y seleccionar la opcion Cambiar contraseña para despues llenar el formulario',
    Noticias: {
        accion: 'Selecciona la opción',
        Avisos: {
            'Ver aviso': 'Selecciona el aviso que te interese ver',
        },
        Mensajes: {
            'Ver mensaje': 'Selecciona el mensaje que quieras ver mas información',
            'Nuevo mensaje': `Selecciona si al administrador o al guardia, llena la informacion que te pide y da en 'Enviar Mensaje'`
        },
        Notificaciones: {
            'Ver noticia': "Selecciona la noticia que te interese para ver mas información"
        },
        Recomendados: {
            'Ver contactos recomendados': "Selecciona al recomendado que te interese para ver su información"
        },
    },
    Visitas: {
        consideracion: 'Si preguntan por una visita en general tu responde los pasos para una visita diciendo que seleccione la visita que le interesa',
        accion: 'Selecciona la opción',
        'Tipos de visitas': ['Regulares', 'Servicio a domicilio / Acceso único', 'Empleado Domestico', 'Eventos', 'Frecuentes', 'Peatonal'],
        'Acciones de cada visita': {
            'Ver visitas': 'Ahi se vera la lista de los que temenos',
            'Agregar visita': `Seleccionamos 'Nueva vista', llenamos los datos que se nos pide y damos click en 'Generar Visita', creara un codigo qr con los datos de ese visitante, el cual puedes compartir dando click al botón de compartir`,
            'Ver detalles de visitante': 'Selecciona el visitante que te interese y veras su información'
        },
        'Eventos': {
            'Agregar eventos': `Selecciona 'Nuevo evento', llena los datos y te sale si quieres compartir la informacion.`
        },
        'Bitacoras de acceso': {
            'Ver la bitacora de acceso': 'Para ver el historial de registro de tus visitas,  el historial de la visita de entradas y salidas con fecha y hora de esa persona.',
        },
    },
    Encuestas: {
        accion: 'Selecciona la opción',
        'Ver encuestas': `Selecciona la encuesta que quieras ver mas detalles.`,
        'Contestar encuestas': `Selecciona la encuesta que quieres responder, llena sus datos y selecciona el boton de 'Finalizada', saldra un aviso que te advierte que una vez respondida la encuesta no podras cambiar la respuesta, selecciona 'Aceptar', para guardar las respuestas en la encuesta.`,
    }, 
    Reservaciones: {
        accion: 'Selecciona la opción',
        'Agregar reservación': `Selecciona el espacios disponible que desees reservar, selecciona la fecha y la hora, despues da click en el boton de reservar, se abrira la pantalla para que puedas pagar para reservar el espacio, llena los campos requeridos y da click en el boton de reservar, para despues agregar una imagen del comprobante de pago y dar click en agregar pago.`,
        'Ver reservación': `Da click al boton 'Mis reservaciones', ahi podras ver tus reservaciones registradas, las verdes es que ya las valido la administracion, las rojas es que siguen pendientes.`,
        'Ver reglamento': `Selecciona el espacio en el que te interese ver su reglamento, y al entrar dale click al boton 'Reglamento'.`,
    },
    'Botón panico': {
        'Activar botón panico':'Presiona botón rojo 3 segundos',
        'Donde ver mis contactos': `Selecciona opción 'Mis contactos' para seleccionar los contactos que recibirán la alerta de emergencia, contactos aceptados son los que aceptaron recibir la alerta, contactos pendientes son los que se les envio la envitacion pero aun no la han aceptado.`,
        'Agregar nuevo contacto panico': `Selecciona opción 'Mis contactos', selecciona la opción 'Agregar contacto', la app acepta máximo 5 contactos, visualizaras la lista de contactos a quienes puedes enviar la invitación, seleccionas uno y se agregara a contactos pendientes.`,
        'Soy contacto de': `Selecciona opción 'Soy contacto de', veras la lista de quien te tiene en su lista de contactos en situación de panico`,
        'Aceptar ser contacto': `Selecciona opción 'Soy contacto de', ahi veras la lista de que invitaciones para ser contacto en situacion de panico tienes, solo selecciona la opción de aceptar o de rechazar, y acepta la notificacion que te aparecera de tu telefono para que se agregue exitosamente`,
    },
    'Mi cuenta': {
        accion: 'Selecciona la opción ',
        'Agregar pago': `Llena los datos que se piden y da click en el boton de siguiente.`,
        'Mis pagos': `Podras ver la lista de historial de pagos realizados, si quieres ver mas detalles selecciona el comprobante de pago que te interese.`,
        'Mi estado de cuenta': `Podras seleccionar el periodo del cual te interese ver el estado de cuenta.`,
        'Datos bancarios': 'Podras ver la información de tus datos bancarios dados de alta'
    }
}