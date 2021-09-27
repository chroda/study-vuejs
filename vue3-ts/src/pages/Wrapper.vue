<template>
  <Nav />
  <div class="container-fluid">
    <div class="row">
      <Menu />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";

export default {
  name: "Wrapper",
  components: { Nav, Menu }
};
</script>

<style lang="scss" scoped></style>
