import { formData } from "./form"


const form = document.querySelector('form');

form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = formData(form);
  console.log(data);
});