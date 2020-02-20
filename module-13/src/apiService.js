const KEY = "15302072-a81be31270c5e4995077a81d4";
import PNotify from "pnotify/dist/es/PNotify.js";
import "../node_modules/pnotify/dist/es/PNotifyButtons.js";
import "../node_modules/pnotify/dist/PNotifyBrightTheme.css";
PNotify.defaults.width = "180px";
PNotify.defaults.delay = 900;
let st;
export default function pixiApi(search, numberPage, callback) {
  const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=${KEY}`;
  fetch(baseURL)
    .then(data => {
      st = data.status;
      return data.json();
    })

    .then(data =>
      callback(
        data,
        PNotify.closeAll(),
        PNotify.success({ title: "Status:" + st, text: "Server is active." })
      )
    )
    .catch(error => console.log(error));
}

// fetch(baseURL)
//     .then(data => data.json())
//     .then(data =>
//       callback(
//         data,
//         PNotify.closeAll(),
//         PNotify.success({ title: "Status", text: "Server is active." })
//       )
//     )
//     .catch(error => console.log(error));
// }
