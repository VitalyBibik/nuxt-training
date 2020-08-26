<template>
  <section class="statistika">
    <section-title class="statistika__section-title">
      {{ blockContent.title }}
    </section-title>

    <div class="statistika__card">
      <div class="stat-card" v-for="item in statistics" :key="item.id">
        <h3 class="stat-card__title">
          {{ item.description }}
        </h3>

        <progress-bar
          v-if="item.oldValue === 0"
          :value="item.currentValue"
          :max-value="item.maxValue"
          class="stat-card__progress-bar"
        />

        <!-- <progress-bar-double
          v-else
          :max-value="item.maxValue"
          :new-value="item.currentValue"
          :old-value="item.oldValue"
          class="stat-card__progress-bar"
        /> -->
        <!-- Закомменчено потому что в api данные === null -->

        <progress-bar-double
          v-else
          :max-value="5"
          :new-value="3"
          :old-value="2"
          class="stat-card__progress-bar"
        />

        <p class="stat-card__number">
          {{ item.summary }}
        </p>
        <p class="stat-card__logo">{{ item.source }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import mixinBlockContent from '@/mixins/mixinBlockContent';
import SectionTitle from './ui/SectionTitle';
import ProgressBar from './ui/ProgressBar';
import ProgressBarDouble from './ui/ProgressBarDouble';

export default {
  components: {
    'section-title': SectionTitle,
    'progress-bar': ProgressBar,
    'progress-bar-double': ProgressBarDouble,
  },

  mixins: [mixinBlockContent],

  computed: {
    statistics() {
      return this.$store.getters['statistics/getStatistics'];
    },
  },
};
</script>

<style scoped>
.statistika {
  width: 100%;
}

.statistika__card {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.03030303%;
}

.stat-card {
  padding: 20px;
}

.stat-card__title {
  min-height: 48px;
  margin: 0 auto;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 76px;
}

.stat-card__number {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin: 20px 0;
}

.stat-card__logo {
  font-size: 12px;
  line-height: 16px;
  text-align: right;
}

.statistika__section-title {
  max-width: 370px;
  margin-bottom: 90px;
}

@media screen and (max-width: 1280px) {
  .stat-card {
    padding: 18px;
  }

  .statistika__section-title {
    margin-bottom: 60px;
  }

  .stat-card__title {
    margin-bottom: 56px;
  }
}

@media screen and (max-width: 1185px) {
  .stat-card__number {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 1024px) {
  .stat-card {
    padding: 10px;
  }

  .statistika__section-title {
    margin-bottom: 56px;
  }

  .stat-card__title {
    font-size: 10px;
    line-height: 14px;
    margin-bottom: 50px;
  }

  .stat-card__logo {
    font-size: 10px;
    line-height: 14px;
  }

  .stat-card__number {
    margin: 10px 0;
  }
}

@media screen and (max-width: 880px) {
  .statistika__card {
    overflow: scroll;
    grid-template-columns: repeat(4, 216px);
    grid-gap: 20px;
  }

  .section-title.statistika__section-title {
    max-width: 370px;
    margin-bottom: 60px;
  }

  .stat-card__title {
    margin-bottom: 62px;
  }
}

@media screen and (max-width: 768px) {
  .statistika__section-title {
    margin: auto;
  }
}

@media screen and (max-width: 320px) {
  .section-title.statistika__section-title {
    margin-bottom: 40px;
  }
}
</style>
