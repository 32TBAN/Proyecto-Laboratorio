import { createStore } from "vuex";

export default createStore({
  state: {
    paciente: null,
  },
  mutations: {
    SET_PACIENTE(state, pacienteData) {
      state.paciente = pacienteData;
    },
  },
  actions: {
    setPaciente({ commit }, pacienteData) {
      commit("SET_PACIENTE", pacienteData);
    },
  },
  getters: {
    getPaciente(state) {
      return state.paciente;
    },
  },
});
