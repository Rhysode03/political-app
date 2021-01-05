<template>
  <div class="container">
    <div class="row justify-content: flex-start | flex-end | center |">
    <div class="col-sm-6 col-md-6 col-lg-6 ">
      <blockquote class="blockquote">
        <h1 class="mb-0">Sign In</h1>
        <footer class="blockquote-footer">Or create and account</footer>
      </blockquote>
      <div class="input-group">
        <!--h1>Sign In</h1>
        <router-link to="/NewUser" active-class="active" tag="li">
          <h5>Or <a>create an account</a></h5>
        </router-link-->
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" class="text-left">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  computed: {

  },
};
</script>

<style>
</style>
