<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExpreiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found.</p>
      <!-- <ul v-else-if="!isLoading && results && results.length > 0"> -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
        results: [],
        isLoading: false,
        error: null
    }
  },
  methods: {
    loadExpreiences() {
        this.isLoading = true;
        this.error = null;
        fetch('https://vue-http-demo-413ff-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json')
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
            })
            .then(data => {
                this.isLoading = false;
                const results = [];
                for(const id in data) {
                    results.push({
                        id,
                        name: data[id].name,
                        rating: data[id].rating
                    })
                }
                this.results = results
            })
            .catch(err => {
                console.log(err);
                this.isLoading = false;
                this.error = 'fail to fetch!'
            })
    }
  },
  mounted() {
    this.loadExpreiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>