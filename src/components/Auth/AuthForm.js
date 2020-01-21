export default {
  props: ['tab'],

  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      let emailError = this.$refs.email.hasError;
      let passwordError = this.$refs.password.hasError;

      if (!emailError && !passwordError) {
        if  (this.tab === 'login') {
          console.log('login');
        } else {
          console.log('register');
        }
      }
    },

    isValidEmail(val) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(val);
    }
  },

  filters: {
    titleCase(value) {
      let firstChar = value.charAt(0).toUpperCase();
      return firstChar + value.slice(1);
    }
  }
}
