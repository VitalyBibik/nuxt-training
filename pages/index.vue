<template>
  <main class="content">
    <cover
      @scrollToNextBlock="scrollToNextBlock"
      :blockContent="getBlockByName('cover')"
    />
    <container>
      <main-video
        class="content__main-video"
        ref="scroll-to-here"
        :blockContent="getBlockByName('videos')"
      />
      <!-- текст скроллится впритык к верхней границе экрана потому что заданы марджины -->
      <banner :blockContent="getBlockByName('note-1')" />
      <main-stories
        class="content__main-stories"
        :blockContent="getBlockByName('stories')"
      />
      <banner :blockContent="getBlockByName('note-2')" />
      <instagram
        class="content__instagram"
        :blockContent="getBlockByName('instagram')"
      />
    </container>
    <about-us
      class="content__tell-story"
      :blockContent="getBlockByName('story')"
      :showButton="true"
      :theme="'gray'"
    />
    <!-- <tell-story
        class="content__tell-story"
        :blockContent="getBlockByName('story')"
      /> -->
    <container>
      <statistika
        class="content__statistika"
        :blockContent="getBlockByName('statistics')"
      />
    </container>
    <about-us :blockContent="getBlockByName('about')" :theme="'purple'" />

    <!--<last-popup></last-popup НУЖНО ПЕРЕРАБОТАТЬ ДАННЫЙ ПОПАП>-->
  </main>
</template>

<script>
import Cover from '@/components/Cover';
import Banner from '@/components/Banner';
import Instagram from '@/components/Instagram';
import MainStories from '@/components/MainStories';
import Statistika from '@/components/Statistika';
import TellStory from '@/components/TellStory';
import MainVideo from '@/components/MainVideo';
import AboutUs from '@/components/AboutUs';
import Container from '@/components/Container';

export default {
  components: {
    container: Container,
    cover: Cover,
    'about-us': AboutUs,
    'main-stories': MainStories,
    banner: Banner,
    instagram: Instagram,
    statistika: Statistika,
    'tell-story': TellStory,
    'main-video': MainVideo,
  },

  methods: {
    scrollToNextBlock() {
      this.$refs['scroll-to-here'].$el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },

    getBlockByName(blockName) {
      const blocks = this.$store.getters['default/getBlocks'];
      return blocks.find((block) => block.block === blockName);
    },
  },
};
</script>

<style>
.content__main-video {
  margin: 100px 0 75px 0;
}

.content__main-stories {
  margin: 100px 0;
}

.content__instagram {
  margin: 100px 0;
}

.content__statistika {
  margin: 100px 0;
}

@media screen and (max-width: 1280px) {
  .content__main-video {
    margin: 90px 0 65px 0;
  }

  .content__main-stories {
    margin: 90px 0;
  }

  .content__instagram {
    margin: 90px 0;
  }

  .content__statistika {
    margin: 90px 0;
  }
}

@media screen and (max-width: 1024px) {
  .content__main-video {
    margin: 80px 0 55px 0;
  }

  .content__main-stories {
    margin: 80px 0;
  }

  .content__instagram {
    margin: 80px 0;
  }

  .content__statistika {
    margin: 80px 0;
  }
}

@media screen and (max-width: 768px) {
  .content__main-video {
    margin: 80px 0 45px 0;
  }
}
</style>
