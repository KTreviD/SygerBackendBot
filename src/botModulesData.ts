export const botInstructions: string = `
    **Temática restringida:** Solo responder dudas relacionadas con la aplicación SYGER. 
    - Si la consulta no está relacionada con SYGER, responde: Lo siento, solo puedo responder preguntas sobre la aplicación SYGER.
    - Si la pregunta parece relacionada con SYGER pero no estás seguro o las instrucciones no cubren el tema, indica: "Para obtener asistencia adicional, te recomiendo contactar a soporte técnico en el siguiente WhatsApp: https://wa.me/5218134022503 o acudir a la administración de tu fraccionamiento."

    **Formato de las respuestas:** Siempre responde de manera clara, paso a paso, y con un tono útil y amigable, los pasos ponlos sin renglones entre ellos.

    **Soporte técnico:** Si el usuario menciona un problema específico que no puedes resolver o si el usuario solicita hablar con alguien, sugiere contactar a soporte técnico utilizando el siguiente mensaje:
    - "Para asistencia adicional, puedes comunicarte con soporte técnico en el siguiente WhatsApp: https://wa.me/5218134022503 o acudir a la administración de tu fraccionamiento."

    **Casos generales:** Si el usuario hace una consulta claramente relacionada con SYGER, proporciona una respuesta basada en la información proporcionada. Si no tienes los datos necesarios para resolver el problema, sugiere contactar a soporte técnico.

    **No especulativo:** Nunca inventes respuestas si no estás seguro de la información. Siempre dirige al usuario a soporte técnico o a la administración de su fraccionamiento.
`;

export const noticiasData: string = `
    'Ver aviso': En la pantalla principal selecciona 'Noticias', selecciona la opción 'Avisos', selecciona el aviso que te interese ver.
    'Ver mensaje': En la pantalla principal selecciona 'Noticias', selecciona la opción 'Mensajes', selecciona el mensaje que quieras ver mas información.
    'Nuevo mensaje': En la pantalla principal selecciona 'Noticias', selecciona la opción 'Mensajes', da click en 'Nuevo Mensaje', selecciona si al administrador o al guardia, llena la informacion que te pide y da en 'Enviar Mensaje.'
    'Ver noticia': En la pantalla principal selecciona 'Noticias', selecciona la opción 'Notificaciones', selecciona la noticia que te interese para ver mas información.
    'Ver contactos recomendados': En la pantalla principal selecciona 'Noticias', selecciona la opción 'Recomendados', selecciona al recomendado que te interese para ver su información"
`;

export const visitasData: string = `
    'Activar o desactivar visitas': En la pantalla principal, para descactivar las visitas deshabilita la opción 'Permitir Visitas', se activan en la misma opción.
    
    Los tipos de visitas disponibles son: 'Regulares', 'Servicio a domicilio / Acceso único', 'Empleado Domestico', 'Eventos', 'Frecuentes' o 'Peatonal',
    Hay que sustituir <TIPO_VISITA> por el tipo de visita en la respuesta que le des al usuario, para cada tipo de prueba de los que te menciones tiene las siguientes 3 opciones:
    Si hacen una pregunta sobre el modulo de Visitas pero en general sin referirse a algun tipo en especifico, diles los tipos que hay, y sobre cual les interesaria saber.
    
    'Ver visitas':  En la pantalla principal selecciona 'Visitas', selecciona la opcion <TIPO_VISITA>, ahi se vera la lista de los que temenos'
    'Agregar visita': En la pantalla principal selecciona 'Visitas', selecciona la opcion <TIPO_VISITA>, seleccionamos 'Nueva vista', llenamos los datos que se nos pide y damos click en 'Generar Visita', creara un codigo qr con los datos de ese visitante, el cual puedes compartir dando click al botón de compartir.
    'Ver detalles de visitante': En la pantalla principal selecciona 'Visitas', selecciona la opcion <TIPO_VISITA>, selecciona el visitante que te interese y veras su información.

    'Agregar eventos':  En la pantalla principal selecciona 'Visitas', selecciona la opción 'Eventos', selecciona 'Nuevo evento', llena los datos y te sale si quieres compartir la informacion.
    'Ver la bitacora de acceso': En la pantalla principal selecciona 'Visitas', selecciona la opción 'Bitácora de acceso', para ver el historial de registro de tus visitas, ahi veras el historial de la visita de entradas y salidas con fecha y hora de esa persona.
`;

export const encuestasData: string = `
    'Ver encuestas': En la pantalla principal selecciona 'Encuestas', selecciona la encuesta que quieras ver mas detalles.
    'Contestar encuestas': En la pantalla principal selecciona 'Encuestas', selecciona la encuesta que quieres responder, llena sus datos y selecciona el boton de 'Enviar respuesta', saldra un aviso que te advierte que una vez respondida la encuesta no podras cambiar la respuesta, selecciona 'Aceptar', para guardar las respuestas en la encuesta.
`;

export const reservacionesData: string = `
    'Agregar reservación': En la pantalla principal selecciona 'Reservaciones', selecciona el espacios disponible que desees reservar, selecciona la fecha y la hora, despues da click en el botón de 'Reservar', se abrira la pantalla para que puedas pagar para reservar el espacio, llena los campos requeridos y da click en el boton de reservar, para despues agregar una imagen del comprobante de pago y dar click en agregar pago, puede ser posible que esa fecha ya se encuentre reservada por otro residente, puede verificarlo en el Calendario de reservaciones.
    'Ver reservación': En la pantalla principal selecciona 'Reservaciones', da click al boton 'Mis reservaciones', ahi podras ver tus reservaciones registradas, las verdes es que ya las valido la administracion, las rojas es que siguen pendientes.
    'Ver reglamento': En la pantalla principal selecciona 'Reservaciones', selecciona el espacio en el que te interese ver su reglamento, y al entrar dale click al boton 'Reglamento'.
`;

export const panicoData: string = `
    'Enviar alerta': En la pantalla principal selecciona 'Botón panico', presiona botón rojo 3 segundos.
    'Activar botón panico': En la pantalla principal selecciona 'Botón panico', presiona botón rojo 3 segundos.
    'Agregar nuevo contacto panico': En la pantalla principal selecciona 'Botón panico', selecciona opción 'Mis contactos', selecciona la opción 'Agregar contacto', la app acepta máximo 5 contactos, visualizaras la lista de contactos a quienes puedes enviar la invitación, seleccionas uno y se agregara a contactos pendientes.
    'Donde ver mis contactos': En la pantalla principal selecciona 'Botón panico', selecciona opción 'Mis contactos' para seleccionar los contactos que recibirán la alerta de emergencia, contactos aceptados son los que aceptaron recibir la alerta, contactos pendientes son los que se les envio la envitacion pero aun no la han aceptado.
    'Soy contacto de': En la pantalla principal selecciona 'Botón panico', selecciona opción 'Soy contacto de', veras la lista de quien te tiene en su lista de contactos en situación de panico.
    'Aceptar ser contacto': En la pantalla principal selecciona 'Botón panico', selecciona opción 'Soy contacto de', ahi veras la lista de que invitaciones para ser contacto en situacion de panico tienes, solo selecciona la opción de aceptar o de rechazar, y acepta la notificacion que te aparecera de tu telefono para que se agregue exitosamente.
`;

export const miCuentaData: string = `
    'Agregar pago': En la pantalla principal selecciona 'Mi cuenta', llena Fecha de pago, folio, monto, forma de pago, observaciones, le va a mostrar una lista de conceptos de pago y tiene que seleccionar el que desea pagar, dar clic en continuar y anexar su comprobante de pago, usando su cámara o desde su galería, Dar cllic en Guardar.
    'Mis pagos': En la pantalla principal selecciona 'Mi cuenta', podras ver la lista de historial de pagos realizados, si quieres ver mas detalles selecciona el comprobante de pago que te interese.
    'Mi estado de cuenta': En la pantalla principal selecciona 'Mi cuenta', podras seleccionar el periodo del cual te interese ver el estado de cuenta.
    'Datos bancarios': 'En la pantalla principal selecciona 'Mi cuenta', este apartado nos muestra la información de la cuenta que proporciono la  Administración o Mesa Directiva de su fraccionamiento para recibir pagos de los residentes mediante deposito o transferencia bancaria, solo tienen Banco, CLABE, Cuenta y Referencia.'
`;

export const hablarConSoporteData: string = `
    Comunicate con soporte técnico en el siguiente WhatsApp: https://wa.me/5218134022503 o acude a la administración de tu fraccionamiento.
`;
