<template>
  <div class="home">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      :interval="3000"
      img-width="1000"
      img-height="480"
    >
      <b-carousel-slide
        caption="Practice all you can"
        img-src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8d29ya3x8fHx8fDE2NDI1NzgyNzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Vue, Bootstrap, Vuex, Router, Vee validation"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Lets start"
        img-src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3RhcnR8fHx8fHwxNjQyNTg2NDU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      slide: 0,
    };
  },
};
</script>
<style>
.carousel-item {
  height: 90vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.carousel-caption {
  top: 50%;
}
</style>
