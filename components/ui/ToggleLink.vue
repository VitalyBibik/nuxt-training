<template>
  <div class="toggle">
    <input
      class="toggle__radio"
      type="radio"
      :id="`${name}-${id}`"
      :name="name"
      :value="id === 0 ? radioButtonValue : ''"
      v-model="radioButtonValue"
    />

    <label
      :for="`${name}-${id}`"
      :class="['toggle__label', `toggle__label_theme_${theme}`]"
      :value="label"
    >
      <slot>Text</slot>
    </label>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'name', 'value', 'theme'],
  computed: {
    radioButtonValue: {
      get: function () {
        return this.label;
      },
      set: function () {
        this.$emit('change', this.value);
      },
    },
  },
};
</script>

<style scoped>
.toggle__radio {
  display: none;
}

.toggle__label {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  cursor: pointer;
}

.toggle__label_theme_purple {
  color: #c9c9c9;
}

.toggle__label_theme_gray {
  color: #a2a2a2;
}

.toggle__radio:checked + .toggle__label_theme_purple {
  font-weight: 500;
  color: #ffffff;
}

.toggle__radio:checked + .toggle__label_theme_gray {
  font-weight: 500;
  color: #000000;
}

@media screen and (max-width: 320px) {
  .toggle__label {
    font-size: 13px;
    line-height: 19px;
  }
}
</style>
