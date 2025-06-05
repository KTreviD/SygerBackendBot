import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { OpenAI } from 'openai';
import 'dotenv/config';
import { dictionary } from './dictionary.js';

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors({
  origin: 'https://syger-frontend-flutter.vercel.app',
  methods: ['POST'],
}));

app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
    console.log({prompt})
  if (!prompt) {
    return res.status(400).json({ error: 'El mensaje es requerido.' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `
Actúa como un asistente útil, esta es la info de la que te pueden preguntar dime los pasos para lo que te pregunten, si no tiene que ver con estos datos di que solo puedes responder dudas de esta aplicacion SYGER:
            opciones:


cambiar_contrasena: Selecciona en la pantalla principal el icono de las 3 lineas horizontales que está en la esquina superior izquierda y seleccionamos la opción de "Cambiar contraseña".

cerrar_sesion: Selecciona en la pantalla principal el icono de las 3 lineas horizontales que está en la esquina superior izquierda y seleccionamos la opción de "Cerrar sesión".

noticias:

ver_avisos: En la pantalla principal, selecciona la opción "Avisos", se muestra los avisos emitidos por la administración, para visualizar a más detalle un aviso en concreto selecciona el aviso deseado.

ver_mensajes: En la pantalla principal, selecciona la opción "Mensajes", se muestra la lista de mensajes que hemos mandado a la administración. Para ver más detalles sobre el mensaje enviado, selecciona el que quieras.

enviar_mensajes: En la pantalla principal, selecciona la opción "Mensajes", selecciona el botón de "Nuevo mensaje", captura los datos de "Título" y "Mensaje". Puedes agregar imágenes dando clic al icono de imágenes o adjuntar PDFs dando clic en donde dice "Adjuntar archivos PDF". Luego selecciona el botón de "Enviar mensaje".

visitas:

frecuentes: En la pantalla principal, selecciona la opción visitas, seleccionamos la opción frecuentes. Ahí se verá la lista de los que tenemos, para agregar una nueva seleccionamos Nueva vista, llenamos los datos que se nos pide de la persona y damos clic en aceptar. Puedes agregar foto de la galería, Nombre, placas, proveedor, color de auto, modelo. Una vez llenados los datos da clic en aceptar, se te mostrará un mensaje de éxito de visita creada y creará un código QR con los datos de ese visitante, el cual puedes compartir dando clic al botón de compartir.

bitacoras_de_acceso: En la pantalla principal, selecciona el menú visitas, selecciona la bitácora de acceso, donde se pueden ver todas las personas registradas como visitas y previsualizaciones de sus accesos. Selecciona la visita que deseas, y ahí se visualizará el historial de la visita de entradas y salidas con fecha y hora de esa persona.

regulares: En la pantalla principal, selecciona la opción regulares para dar de alta visitas que recibiremos durante un periodo de tiempo. Para dar de alta una nueva visita damos clic al botón de Nueva visita, y se muestra como sugerencia para capturar todos los datos, ya que esto agiliza el acceso de nuestra visita. Da clic en aceptar, se muestra pantalla para capturar los datos y lo llenas con nombre, eliges la fecha a partir de la cual quieres otorgar el acceso, seleccionas la cantidad de días que quieres que sea el acceso, llenas la información como placas, proveedor, color de auto, modelo. Da clic en aceptar, verifica los datos, te saldrá un mensaje de éxito y un QR el cual puedes compartir. Puedes ver la visita creada en tu menú sin salirte de visitantes. Si quieres ver los datos y bitácora le puedes dar en bitácora y ahí visualizarás los datos de entrada y salida.

empleado_domestico: En la pantalla principal, selecciona visitas, selecciona la opción de empleado doméstico. Se muestra la lista de empleados previamente registrados. Para dar de alta un nuevo empleado selecciona la opción Nueva visita. Registra la información solicitada del empleado, verifica los datos y da clic en generar visita. Te aparecerá mensaje de éxito y un QR para poder compartir con los datos de la visita. Si seleccionas uno puedes ver sus datos y modificarlos, por ejemplo, seleccionar que viene otro día que no tenía seleccionado. Te saldrá un mensaje de que ha sido actualizado y puedes compartir su código QR con la información actualizada. Si le damos en bitácora de acceso podemos ver todo su historial de entradas y salidas con fecha y hora. También puedes borrarlo dándole al botón de borrar empleado.

servicio_a_domicilio_acceso_unico: En la pantalla principal, selecciona la opción de visitas, muestra el menú de visitas, selecciona la opción de servicio a domicilio acceso único. Entras a la pantalla y le das clic a generar nueva visita. Aparece sugerencia de que al capturar toda la información se agiliza la entrada de las visitas. Capturas los datos para el registro, como: Nombre, seleccionas la fecha, das clic en aceptar, y continuas llenando la información como placas, proveedor, color de auto y modelo. Das clic en aceptar, te aparecerá un mensaje de éxito para el buen registro. Se muestra el código QR con los siguientes datos: visita, fecha de visita, vigencia, domicilio, leyenda de pase de un solo acceso y su código QR que puedes compartir. Verás el registro de la visita creada. Si le das clic podrás ver todos sus datos y si le das clic a borrar podrás borrar esa visita.

encuestas:

ver_encuestas: En la pantalla principal, selecciona la opción "Encuestas", selecciona la encuesta que quieras ver más detalles.

contestar_encuestas: En la pantalla principal, selecciona la opción "Encuestas", verás la lista de encuestas, selecciona la encuesta que quieres responder, llena sus datos y selecciona el botón de "Finalizada". Saldrá un aviso que te advierte que una vez respondida la encuesta no podrás cambiar la respuesta, selecciona "Cancelar" para no guardar, o "Aceptar" para guardar las respuestas en la encuesta.

reservaciones:

agregar_reservacion: En la pantalla principal, selecciona la opción "Reservaciones", se mostrará la lista de espacios disponibles a reservar. Selecciona el que desees reservar, selecciona la fecha y la hora, después da clic en el botón de reservar. Se abrirá la pantalla para que puedas pagar para reservar el espacio, llena el campo folio con el número de transacción del pago y da clic en el botón de reservar, para después agregar una imagen del comprobante de pago y dar clic en agregar pago.

ver_reservacion: En la pantalla principal, selecciona la opción "Reservaciones", después da clic al botón "Mis reservaciones". Ahí podrás ver tus reservaciones registradas. Las verdes indican que ya las validó la administración, las rojas indican que siguen pendientes.

ver_reglamento: En la pantalla principal, selecciona la opción "Reservaciones", después selecciona el espacio en el que te interese ver su reglamento, y al entrar dale clic al botón "Reglamento".

boton_panico:

activar_boton_panico: En la pantalla principal, selecciona "Botón pánico". Para activar presiona el botón rojo tres veces.

donde_ver_mis_contactos: En la pantalla principal, selecciona "Botón pánico", selecciona la opción "Mis contactos" para seleccionar los contactos que recibirán la alerta de emergencia. Contactos aceptados son los que aceptaron recibir la alerta, contactos pendientes son los que se les envió la invitación pero aún no la han aceptado.

agregar_nuevo_contacto_panico: En la pantalla principal, selecciona "Botón pánico", selecciona la opción "Mis contactos", selecciona la opción "Agregar contacto" para añadir uno nuevo. La app acepta máximo 5 contactos. Visualizarás la lista de contactos a quienes puedes enviar la invitación, selecciona uno y se agregará a contactos pendientes.

soy_contacto_de: En la pantalla principal, selecciona "Botón pánico", selecciona la opción "Soy contacto de", ahí verás la lista de quien te tiene en su lista de contactos en situación de pánico.

aceptar_ser_contacto: En la pantalla principal, selecciona "Botón pánico", selecciona la opción "Soy contacto de", ahí verás la lista de invitaciones para ser contacto en situación de pánico que tienes. Solo selecciona la opción de aceptar o rechazar, y acepta la notificación que te aparecerá en tu teléfono para que se agregue exitosamente.

mi_cuenta:

agregar comprobante de pago: En la pantalla principal, selecciona la opción "Agregar Pago", llena los datos que se piden y da clic en el botón de siguiente.

ver pagos: En la pantalla principal, selecciona la opción "Mis pagos", podrás ver la lista de historial de pagos realizados. Si quieres ver más detalles selecciona el comprobante de pago que te interese.

ver_estado_de_cuenta: En la pantalla principal, selecciona la opción "Mi estado de cuenta", podrás seleccionar el periodo del cual te interese ver el estado de cuenta.

Usuario y contraseña: Dale click en "Olvido su contraseña? Debes ingresar tu usuario y te llega a tu correo la contraseña.

` },
        { role: 'user', content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const botReply = response.choices[0].message.content;
    console.log({botReply})
    res.json({ response: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
