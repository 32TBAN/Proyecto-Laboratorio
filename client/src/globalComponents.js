import BaseInput from "./components/Inputs/BaseInput.vue";
import BaseCheckbox from "./components/Inputs/BaseCheckbox.vue";
import BaseRadio from "./components/Inputs/BaseRadio.vue";
import BaseDropdown from "./components/BaseDropdown.vue";
import CardVue from "./components/Cards/Card.vue";

const GlobalComponents = {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component("CardVue", CardVue);
  },
};

export default GlobalComponents;
