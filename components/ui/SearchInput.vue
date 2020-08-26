<template>
  <input
    :class="['search', { 'search_bottom-bordered': bottomBordered }]"
    :type="type"
    v-model="content"
    @input="handleInput"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    value: String,
    bottomBordered: Boolean,
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) =>
        'text|number|email|password|search|url|tel'.split('|').indexOf(value) >
        -1,
    },
  },

  data() {
    return {
      content: this.value,
    };
  },

  methods: {
    handleInput() {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.search {
  width: calc(100% - 226px - 20px);
  min-height: 52px;
  border: 1px solid #e8e8e8;
  border-radius: 0;
  font-size: 18px;
  line-height: 24px;
  padding: 0 10px;
}

.search_bottom-bordered {
  border: unset;
  border-bottom: 1px solid #e8e8e8;
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .search {
    width: calc(100% - 200px - 20px);
    min-height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .search {
    min-height: 46px;
  }
}

@media screen and (max-width: 768px) {
  .search {
    width: calc(100% - 226px);
  }
}

@media screen and (max-width: 600px) {
  .search {
    width: calc(100% - 46px - 10px);
  }
}
</style>
