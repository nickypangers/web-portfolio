<template>
  <div>Work Detail: {{ $route.params.work }}</div>
  <!-- <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <div>
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLTt1zxLZuTUrvtizjedt2f2SpFv5jfvz1rhKghZAd0=s900-c-k-c0x00ffffff-no-rj"
              alt="test"
              srcset=""
            />
          </div>
        </li>
        <li class="glide__slide">
          <div>
            <img
              src="https://i.pinimg.com/originals/c9/ab/e0/c9abe069c0455fadb2bc0378a78ee77d.jpg"
              alt="test"
              srcset=""
            />
          </div>
        </li>
        <li class="glide__slide">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTt1zxLZuTUrvtizjedt2f2SpFv5jfvz1rhKghZAd0=s900-c-k-c0x00ffffff-no-rj"
            alt="test"
            srcset=""
          />
        </li>
      </ul>
    </div>
  </div> -->
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">0</li>
        <li class="glide__slide">1</li>
        <li class="glide__slide">2</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import Glide from "@glidejs/glide";
export default {
  setup() {
    onMounted(() => {
      let glide = new Glide(".glide");
      console.log(glide);
      glide.mount();
    });
  },
};
</script>
