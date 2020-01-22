import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light:  {
            primary: '#607d8b',
            secondary: '#cddc39',
            accent: '#00bcd4',
            error: '#f44336',
            warning: '#ffeb3b',
            info: '#4caf50',
            success: '#03a9f4',
          },
        },
      },
});
