import "../css/estilos.css";
import platzi from "../images/platzi-logo.png";
import { firstMessage, delayedMessage } from "./message.js";
//console.log('hola mundo!, desde webpack');
document.write(firstMessage);
delayedMessage();

const img = document.createElement("img");
img.setAttribute("src", platzi);
document.body.append(img);

console.log("hola mundo!, desde webpack en un webpack.config");
