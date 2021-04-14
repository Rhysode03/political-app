<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <blockquote class="blockquote">
          <h1 class="display-4 mb-5 text-center">Welcome to A-political!</h1>
          <h1 class="mb-0">Sign In</h1>
          <footer class="blockquote-footer">Or create and account</footer>
        </blockquote>
        <div class="input-group d-flex justify-content-center">
          <!--h1>Sign In</h1>
        <router-link to="/NewUser" active-class="active" tag="li">
          <h5>Or <a>create an account</a></h5>
        </router-link-->
          <form class="d-flex flex-column col-4">
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-left"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <!--small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            --></div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="PasswordText"
                placeholder="Password"
              />
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
};
</script>

<style>
</style>
