<template>
  <div class="pagination">
    <button
      :class="[
        'pagination__link',
        {
          pagination__link_inactive: activePage === 1,
        },
      ]"
      @click="jumpToPage(true)"
    >
      Первая
    </button>
    <div class="pagination__container">
      <button
        class="pagination__control pagination__control_direction_left"
        @click="changeActivePage(false)"
      ></button>

      <ul class="pagination__items">
        <li
          v-for="page in definePagesToRender()"
          :key="page"
          class="pagination__item"
        >
          <button
            @click="setActive(page)"
            :class="[
              'pagination__control pagination__control_type_button',
              {
                pagination__control_active: page === activePage,
              },
            ]"
          >
            {{ page }}
          </button>
        </li>
      </ul>

      <button
        class="pagination__control pagination__control_direction_right"
        @click="changeActivePage(true)"
      ></button>
    </div>

    <button
      :class="[
        'pagination__link',
        {
          pagination__link_inactive: activePage === numberOfPages,
        },
      ]"
      @click="jumpToPage(false)"
    >
      Последняя
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePage: 1,
      pageLimit: 5,
      pagesToRender: [],
    };
  },

  props: {
    numberOfPages: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    setActive(item) {
      this.activePage = item;
      this.$emit('onPageChanged', item);
    },

    changeActivePage(increasing) {
      if (increasing) {
        if (this.activePage != this.numberOfPages) {
          this.activePage++;
        }
      } else {
        if (this.activePage != 1) {
          this.activePage--;
        }
      }

      this.$emit('onPageChanged', this.activePage);
    },

    jumpToPage(first) {
      if (first) {
        this.activePage = 1;
      } else {
        this.activePage = this.numberOfPages;
      }

      this.$emit('onPageChanged', this.activePage);
    },

    definePageLimit() {
      if (process.browser) {
        if (window.innerWidth <= 570) return 3;
        if (window.innerWidth <= 768) return 4;
      }

      return 5;
    },

    definePagesToRender() {
      //безумная логика чтобы определить какие странички должны попасть в нужный промежуток для отображения
      const result = [];

      let from = this.activePage - 2, // сначала устанавливаем "От"
        to,
        limit;

      if (from < 1) from = 0; // если "От" меньше 1, то "От" равно 1

      if (this.pageLimit >= this.numberOfPages) {
        // Выясняем что больше - либо ограничитель страниц, либо количество страниц
        limit = this.numberOfPages;
      } else {
        limit = this.pageLimit;
      }

      to = from + limit; // "До" - в зависимости от лимита

      if (to >= this.numberOfPages) {
        // если "До" получилось больше кол-ва страниц, то уравниваем
        to = this.numberOfPages;
        from = this.numberOfPages - limit; // и тогда снова выставляем "От"
      }

      for (let i = 1; i <= this.numberOfPages; i++) {
        result.push(i);
      }

      return result.slice(from, to);
    },
  },

  beforeMount() {
    this.pageLimit = this.definePageLimit();
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination__container {
  display: flex;
  justify-content: center;
}

.pagination__link {
  padding: 0;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
}

.pagination__link:first-of-type {
  margin-left: 0;
}

.pagination__link:last-of-type {
  margin-right: 0;
}

.pagination__link_inactive {
  color: #a2a2a2;
}

.pagination__control {
  width: 58px;
  height: 58px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
}

.pagination__control_direction_left {
  background-image: url('../../static/images/icon_arrow_left.svg');
}

.pagination__control_direction_right {
  background-image: url('../../static/images/icon_arrow_right.svg');
}

.pagination__control_type_button {
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
}

.pagination__control_active {
  background: #f4f4f4;
}

.pagination__items {
  margin: 0 10px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.pagination__item {
  margin: 0;
  padding: 0;
  margin-right: 10px;
}

.pagination__item:last-of-type {
  margin-right: 0;
}

@media screen and (max-width: 640px) {
  .pagination {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .pagination__container {
    grid-row-start: 1;
    grid-column: span 2;
  }

  .pagination__link {
    margin: 0;
    margin-top: 34px;
    font-size: 15px;
    line-height: 18px;
    justify-self: start; /* PP */
  }

  .pagination__link:last-of-type {
    justify-self: end; /* PP */
  }

  .pagination__control {
    width: 50px;
    height: 50px;
  }

  .pagination__control_type_button {
    font-size: 15px;
    line-height: 18px;
  }
}
</style>
