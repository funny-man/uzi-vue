<template>
  <div id="app">
    <audio ref="audio"></audio>
    <button @click="changeUrl">click me</button>
  </div>
</template>

<script>
const musicList = [
  'http://124.172.114.22/amobile.music.tc.qq.com/C400003HMQxv1d3HlR.m4a?guid=4838969920&vkey=3AD5FD1A6185ADFDB76AA868D60E5830C45E09BD594C39D83D44017F5014563041D50C0D1D08E03F99E0807F13F0B215F9B433E917B8E0FB&uin=0&fromtag=66',
  'http://124.172.114.22/amobile.music.tc.qq.com/C400001KLUF54YuzCp.m4a?guid=4838969920&vkey=FF77CFA8786F264F6824E4570C6F181E32C1BCA0CECC59DF45EAEFD73831FD374D70C14E7806855F1FFC55BFAC92B4F80E343DF17E08E01D&uin=0&fromtag=66',
  'http://124.172.114.22/amobile.music.tc.qq.com/C400004EtAZO12QNqB.m4a?guid=4838969920&vkey=B2266DB7145E1BAC1F9644F59A651CD12B9CF25DCEA89D877D38841DC4E1D5F69FD6131A00DEF894DDA2D898F8D406BB66AA36CED09482AC&uin=0&fromtag=66',
  'http://124.172.114.22/amobile.music.tc.qq.com/C4000040LVkc23Viyh.m4a?guid=4838969920&vkey=C419CAD9F9FD3A65845BC1AFB9769B4C3D2A4B9E2A47D2D7FF9DEE1D9ABD568796AED43EB32427D0445F6FF16ADE52203F2F62FF264F7C0C&uin=0&fromtag=66',
];

export default {
  name: 'play',
  data() {
    return {
      index: 0,
      url: '',
    };
  },
  methods: {
    changeUrl() {
      this.index = (this.index + 1) % musicList.length;
      this.url = musicList[this.index];
      setTimeout(() => {
        this.$refs.audio.src = this.url;
        this.$refs.audio.play();
      }, 1001);
    },
  },
  watch: {
    // url(newUrl) {
    //   this.$refs.audio.src = newUrl;
    //   this.$refs.audio.play();
    // },
  },
};
</script>
