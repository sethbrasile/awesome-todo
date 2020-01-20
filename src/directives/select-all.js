export default {
  inserted(el) {
    let inp = el.querySelector('.q-field__native');
    setTimeout(() => inp.select(), 100);
    inp.addEventListener('focus', () => inp.select());
  }
}
