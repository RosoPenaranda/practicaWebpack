import renderToDom from "./render-to-dom";
import makeMessage from "./make-message";

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Han pasado 3 segundo, omg");
  }, 3000);
});

export const firstMessage = "hola mundo desde un modulo";
export const delayedMessage = async () => {
  const message = await waitTime;
  console.log(message);
  renderToDom(makeMessage(message));
};
