<script setup>
import navComponent from '../components/navComponent.vue'
</script>

<template>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      <div class="profile mx-auto py-md-4">
        <div class="rounded-circle profile-pic m-1 flex-shrink-0 p-1">
          <img src="../assets/images/test.jpg" alt="" />
        </div>
        <div>shelly</div>
      </div>

      <article class="row mx-auto border-top">
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
        <div class="mt-1 col-4 px-0 ps-1">
          <div class="profile-post">
            <img src="../assets/images/test.jpg" alt="" />
          </div>
        </div>
      </article>
    </main>
  </div>
</template>
<style lang="scss">
.profile-post {
  // height: 150px;
  width: 100%;
  padding-bottom: 100%;
  // height: 100%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}
.profile-pic {
  height: 90px;
  width: 90px;
  overflow: hidden;
  object-fit: contain;
  position: relative;
  border: 3px solid transparent;
  background-clip: padding-box;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}
.profile,
article {
  width: 100%;
}
@media (min-width: 768px) {
  .profile-pic {
    height: 150px;
    width: 150px;
  }
  .profile,
  article {
    width: 80%;
  }
}
</style>
