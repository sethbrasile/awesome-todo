import { Dialog } from 'quasar';

export default function showErrorMessage(err) {
  let message = err.message || err;

  Dialog.create({
    title: 'Error',
    message
  });
}
