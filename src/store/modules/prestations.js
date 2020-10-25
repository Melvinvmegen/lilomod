import axios from "axios";

const state = {
  prestations: []
};

const getters = {
  prestations(state) {
    return state.prestations;
  }
};

const mutations = {
  setPrestations(state, prestationsData) {
    prestationsData.forEach(prestation => {
      state.prestations.push(prestation);
    });
  },
  addPrestation(state, prestationData) {
    state.prestations.unshift({
      id: prestationData.id,
      name: prestationData.name,
      price: prestationData.price,
      description: prestationData.description,
      image: prestationData.image,
      logo: prestationData.logo
    });
  },
  updatePrestation(state, prestationData) {
    const prestation = state.prestations.find(
      item => item.id === prestationData.id
    );
    state.prestations.splice(
      state.prestations.indexOf(prestation),
      1,
      prestationData
    );
  },
  deletePrestation(state, prestation) {
    state.prestations.splice(state.prestations.indexOf(prestation), 1);
  }
};

const actions = {
  getPrestations({ commit }) {
    axios.get("api/services").then(res => commit("setPrestations", res.data));
  },
  addPrestation({ commit }, prestationData) {
    const formData = new FormData();
    Object.keys(prestationData).forEach(prestation => {
      formData.append(prestation, prestationData[prestation]);
    });
    axios
      .post("api/services", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        commit("addPrestation", {
          id: res.data.id,
          name: prestationData.name,
          price: prestationData.price,
          description: prestationData.description,
          image: prestationData.image,
          logo: prestationData.logo
        });
      })
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite");
        }
      });
  },
  updatePrestation({ commit }, prestationData) {
    const formData = new FormData();
    Object.keys(prestationData).forEach(prestation => {
      if (prestation === 'image' || prestation === 'logo') {
        if (prestationData[prestation].signed_id) {
          formData.append(prestation, prestationData[prestation].signed_id);
        } else {
          formData.append(prestation, prestationData[prestation]);
        }
      } else {
        formData.append(prestation, prestationData[prestation]);
      }
    });
    axios
    .patch(`/api/services/${prestationData.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(() => commit("updatePrestation", prestationData))
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite");
        }
      });
  },
  deletePrestation({ commit }, prestation) {
    axios
      .delete(`api/services/${prestation.id}`)
      .then(() => commit("deletePrestation", prestation));
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
