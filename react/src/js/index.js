import "../css/estilos.css";
import platzi from "../images/platzi-logo.png";
import { firstMessage, delayedMessage } from "./message.js";
import videoPlatzi from "../video/que-es-core.mp4";

//console.log('hola mundo!, desde webpack');
document.write(firstMessage);
delayedMessage();

const img = document.createElement("img");
img.setAttribute("src", platzi);
document.body.append(img);

const video = document.createElement("video");
video.setAttribute("src", videoPlatzi);
video.setAttribute("width", 480);
video.setAttribute("autoplay", true);
video.setAttribute("mute", true);
video.setAttribute("controls", true);
document.body.append(video);

console.log("hola mundo!, desde webpack en un webpack.config");
