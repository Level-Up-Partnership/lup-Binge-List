<template>
  <div>
    <users-filter @users-filter-change="setUserFilter" />
    <browse-user :users="listOfUsers" />
    <div class="position-absolute bottom--50 start-50 translate-middle-x">
      <footer>
        <pagination v-model="page" :records="total" :per-page="perPage" @paginate="onPageChanged($event)" />
      </footer>
    </div>
  </div>
</template>
<script>
import BrowseUser from '../components/BrowseUser.vue';
import UsersFilter from '../components/UsersFilter.vue';
// Data Service has all the front end endpoint.
import DataService from '../../service/dataService';
export default {
  data() {
    return {
      query: {
        id_user: '',
        email: '',
        google_id: '',
        username: '',
        role_id: '',
        time_zone: '',
        offset: 0,
        limit: 4,
      },
      listOfUsers: [],
      page: 1,
      perPage: 4,
      total: 0,
      isNotFound: false,
    };
  },
  components: { UsersFilter, BrowseUser },
  watch: {
    query: {
      deep: true,
      async handler() {
        await this.getUsers();
      },
    },
  },
  async mounted() {
    this.getUsers();
  },
  methods: {
    // Get all users by filter.
    async getUsers() {
      this.listOfUsers = await DataService.getUserByFilter(this.query);
      // Set pagination depending on length of return.
      if (this.listOfUsers.length > 0) {
        if (this.listOfUsers.length < this.perPage && this.query.offset == 0) {
          this.total = this.listOfUsers.length;
        } else {
          this.total = this.listOfUsers[0].total;
        }
        this.isNotFound = false;
      } else {
        this.total = 0;
        this.isNotFound = true;
      }
    },
    setUserFilter(newQuery) {
      this.query = { ...this.query, ...newQuery };
    },
    onPageChanged(selectedPage) {
      this.page = selectedPage;
      this.query.offset = this.query.limit * (selectedPage - 1);
    },
  },
};
</script>
