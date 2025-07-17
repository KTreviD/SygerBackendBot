import { Message } from "../models/message";
import { MessageType } from "../models/message_type";
import { UselessMessage } from "../models/useless_message";

/////////////////////////////////////////////////////        BELONGS TO        /////////////////////////////////////////////////////
// Utiliza belongsTo cuando un modelo A tiene una clave foránea que referencia la clave primaria de otro modelo B.
// Si un registro de A "pertenece a" un registro de B.
// Branch.client_id Branch.belongsTo(Client)

Message.belongsTo(MessageType, {
  foreignKey: "message_type_id",
  as: "type",
});

UselessMessage.belongsTo(Message, {
  foreignKey: "user_message_id",
  as: "userMessage",
});

UselessMessage.belongsTo(Message, {
  foreignKey: "bot_message_id",
  as: "botMessage",
});

//////////////////////////////////////////////////////        HAS MANY        //////////////////////////////////////////////////////
// Utiliza hasMany cuando un modelo A tiene muchos registros en otro modelo B relacionados a través de una clave foránea.
// Si un registro de A "tiene muchos" registros de B
// Porque un mismo cliente puede estar en muchas branches
// Client.hasMany(Branch)

MessageType.hasMany(Message, {
  foreignKey: "message_type_id",
  as: "messages",
});

Message.hasMany(UselessMessage, {
  foreignKey: "user_message_id",
  as: "uselessFeedbackFromUser",
});

Message.hasMany(UselessMessage, {
  foreignKey: "bot_message_id",
  as: "uselessFeedbackToBot",
});
