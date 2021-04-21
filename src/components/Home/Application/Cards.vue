<template>
<div class="row" v-for="(post, title" in posts" v-bind:key="post.id">
  <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">
       {{post.content}}
      </p>
      <a href="#" class="btn btn-primary">View Info</a>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>