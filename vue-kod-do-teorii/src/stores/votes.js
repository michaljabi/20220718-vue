import { defineStore } from "pinia";

export const useVotesStore = defineStore({
  id: "votes",
  state: () => ({
    totalScore: 10,
    totalVotes: 2,
  }),
  getters: {
    rating: (state) => {
      const average = state.totalScore / state.totalVotes;
      return average.toFixed(1);
    },
  },
  actions: {
    vote(value) {
      this.totalVotes++;
      this.totalScore += value;
    },
  },
});
