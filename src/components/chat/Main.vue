<template>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
            style="font-size:20px"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>
          

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Uber Tennis Masters <span class="grey--text text--lighten-1">7</span>',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Taichi Masters!!! <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Mayazhagu',
          subtitle: '<span class="text--primary">Mayazhagu</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { header: 'Yesterday' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Photography Pals!! <span class="grey--text text--lighten-1">5</span>',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Oscar',
          subtitle: '<span class="text--primary">Oscar</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ]
    };
  },
};
</script>

<style scoped>
.v-sheet.v-card {
  width: 95%;
  margin: auto;
}

ul {
  padding: 0px;
}

li {
  list-style: none;
}

.v-list-item .v-list-item__subtitle, .v-list-item .v-list-item__title {
    text-align: left;
}
</style>