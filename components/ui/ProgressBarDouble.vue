<template>
  <div class="progress-bar-double">
    <div class="progress-bar-double__old">
      <div class="progress-bar-double__fill" :style="styleOld"></div>
    </div>
    <div class="progress-bar-double__new">
      <div
        class="progress-bar-double__fill progress-bar-double__fill_violet"
        :style="styleNew"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newValue: Number,
    maxValue: Number,
    oldValue: Number,
  },
  computed: {
    styleOld() {
      return `width: ${(this.oldValue / this.maxValue) * 100}%;`;
    },
    styleNew() {
      return `width: ${(this.newValue / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar-double {
  max-width: 260px;
  height: 40px;
  background: #ffffff;
  position: relative;
}

.progress-bar-double__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #f4f4f4;
}

.progress-bar-double__fill_violet {
  background: #613a93;
}

.progress-bar-double__old {
  height: 50%;
  position: relative;
}

.progress-bar-double__new {
  height: 50%;
  position: relative;
}

@media screen and (max-width: 1280px) {
  .progress-bar-double {
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .progress-bar-double {
    height: 28px;
  }
}

@media screen and (max-width: 768px) {
  .progress-bar-double {
  }
}
</style>
