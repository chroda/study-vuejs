<template>
  <main class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <input
        type="text"
        class="form-control"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        class="form-control"
        placeholder="Last Name"
        required
      />
      <input type="email" class="form-control" placeholder="Email" required />
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <input
        type="password"
        class="form-control"
        placeholder="Password Confirm"
        required
      />

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Register"

  // setup() {}
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
