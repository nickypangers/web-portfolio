<template>
  <div class="container flex flex-col justify-center items-center">
    <img
      class="w-full lg:w-1/3 object-contain"
      src="../../assets/images/work/visachecker/app-vertical-right.png"
      alt=""
    />
    <div>
      <div class="w-52">
        <a
          href="https://play.google.com/store/apps/details?id=com.nickypangers.visacheckertravel&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          ><img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        /></a>
      </div>
      <p class="text-sm text-gray-500">
        Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
    </div>
  </div>
</template>
<script>
import banner from "@/assets/images/work/visachecker/banner.png";
export default {
  setup() {
    return {
      banner,
    };
  },
};
</script>

<style scoped>
.banner-container {
  background: #00d46d;
}
</style>
