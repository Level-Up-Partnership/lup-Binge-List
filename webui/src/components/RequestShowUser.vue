<template>
  <div id="request-show-user" class="d-flex justify-content-center">
    <div class="card border border-primary shadow-0">
      <div>
        <form @submit.prevent="submitRequestShow">
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="requestShowName">Name of show *</label>
                <input type="text" id="requestShowName" v-model="enteredShowName" class="form-control" />
                <div class="requiredFields" v-if="v$.enteredShowName.$error">Show field is required</div>
              </div>
            </div>
            <div class="col">
              <!-- Country -->
              <label class="form-label" for="requestShowCountry">Country of origin *</label>
              <select
                v-model="enteredCountry"
                id="requestShowCountry"
                class="form-select"
                aria-label="Default select example"
              >
                <option v-for="(country, i) in listOfCountries" :key="i">{{ country }}</option>
              </select>
              <div class="requiredFields" v-if="v$.enteredCountry.$error">Country field is required</div>
            </div>
          </div>

          <!-- Date aired input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="requestShowDateAired">Date aired *</label>
            <input type="date" v-model="enteredDateAired" id="requestShowDateAired" class="form-control" />
            <div class="requiredFields" v-if="v$.enteredDateAired.$error">Date aired field is required</div>
          </div>

          <!-- Genre input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="requestShowGenre">Genre *</label>
            <select
              v-model="enteredGenre"
              id="requestShowGenre"
              class="form-select"
              aria-label="Default select example"
            >
              <option v-for="(genre, i) in listOfGenres" :key="i">{{ genre }}</option>
            </select>
            <div class="requiredFields" v-if="v$.enteredGenre.$error">Genre field is required</div>
          </div>

          <!-- Number of seasons input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="requestShowNumSeasons"># of seasons (Optional)</label>
            <input type="number" v-model="enteredNumSeasons" id="requestShowNumSeasons" class="form-control" />
          </div>

          <!-- Number of episodes input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="requestShowNumEpisodes">Total # of episodes (Optional) </label>
            <input type="number" v-model="enteredNumEpisodes" id="requestShowNumEpisodes" class="form-control" />
          </div>

          <!-- Addition Link input (Note) -->
          <div class="form-outline mb-4">
            <label class="form-label" for="requestShowNotes">Any link to show info/Notes (Optional)</label>
            <textarea class="form-control" v-model="enteredNote" id="requestShowNotes" rows="4"></textarea>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form-outline,
.form-label {
  color: black;
}

.requiredFields {
  color: red;
}
.card {
  padding: 15px;
}
/* #request-show-user {
  width: 90%;
} */
</style>
<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import DataService from '../../service/dataService';
export default {
  data() {
    return {
      v$: useVuelidate(),
      enteredShowName: '',
      enteredCountry: '',
      enteredDateAired: '',
      enteredGenre: '',
      enteredNumSeasons: 0,
      enteredNumEpisodes: 0,
      enteredNote: '',
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      listOfCountries: [],
      listOfGenres: [],
    };
  },
  validations() {
    return {
      enteredShowName: { required },
      enteredCountry: { required },
      enteredDateAired: { required },
      enteredGenre: { required },
    };
  },
  name: 'Forum Users',
  computed: {
    getCountries() {
      return this.$store.getters.getCountries;
    },
    getGenres() {
      return this.$store.getters.getGenres;
    },
  },
  mounted() {
    this.listOfCountries = this.getCountries;
    this.listOfGenres = this.getGenres;
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
  },
  methods: {
    async submitRequestShow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert('SUCCESSFULLY SUBMITTED FORM!');
        if (this.enteredNote) {
          this.enteredNote = this.enteredNote.replace(/'/g, "''");
        }
        const data = {
          requested_by: this.user.id,
          show_title: this.enteredShowName.replace(/'/g, "''"),
          country: this.enteredCountry,
          release_date: this.enteredDateAired,
          genre: this.enteredGenre,
          seasons: this.enteredNumSeasons,
          number_episodes: this.enteredNumEpisodes,
          note: this.enteredNote,
        };
        await DataService.postRequestShow(data);
      } else {
        alert('Form failed validation');
      }
    },
  },
};
</script>
