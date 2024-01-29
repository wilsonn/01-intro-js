import { invoiceFindById } from "./data/invoices"

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceFindById(4);
    if (result) {
      resolve(result);
    } else {
      reject("Error: no existe la factura por el id.")
    }
  }, 2500);
});

promise.then((result) => {
  console.log(result);
  console.log("realizada alguna tarea con delay")
}).catch((error) => {
  console.error(error);
});
