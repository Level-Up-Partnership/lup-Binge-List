<template>
  <div class="social">
    <h1>Social</h1>
    <account-nav :id="user.id" />
    <div v-if="isSameUser">
      <label>Request</label>
      <div class="card border border-dark shadow-0">
        <div class="card-body" v-if="listFriendRequests.length > 0">
          <friend-request
            :paramUserId="user.id"
            :friendRequests="listFriendRequests"
            @accept-friend-request="loadData"
          />
        </div>
        <div class="card-body" v-else>
          <h2 style="color: red">No friend requests</h2>
        </div>
      </div>
    </div>
    <div>
      <label>Friends</label>
      <div class="card border border-dark shadow-0">
        <div class="card-body" v-if="listFriends.length > 0">
          <friends-list
            :paramUserId="user.id"
            :friends="listFriends"
            :sameUser="isSameUser"
            @deleted-user-relation="loadData"
          />
        </div>
        <div v-else class="card-body">
          <h2 style="color: red">No friends</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountNav from '../components/AccountNav.vue';
import FriendRequest from '../components/FriendRequest.vue';
import FriendsList from '../components/FriendsList.vue';
import DataService from '../../service/dataService';

export default {
  components: { AccountNav, FriendRequest, FriendsList },
  data() {
    return {
      user: {
        id: this.$route.params.id,
      },
      listFriendRequests: [],
      listFriends: [],
      loggedInUser: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      isSameUser: false,
    };
  },
  name: 'Social',
  computed: {},
  async created() {
    // Set id from url params.
    this.user.id = this.$route.params.id;
    this.isSameUser = this.user.id == this.loggedInUser.id;

    await this.loadData();
  },
  async mounted() {
    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    // Check that the user the url is looking for is the same person logged in.
    this.isSameUser = this.user.id == this.loggedInUser.id;
    await this.loadData();
  },
  methods: {
    async loadData() {
      await this.getMyFriendRequests();
      await this.getMyFriends();
    },
    async getMyFriendRequests() {
      const data = {
        id: this.user.id,
        type: 'request',
      };
      const response = await DataService.getRelationsByUserId(data);
      this.listFriendRequests = response;
    },
    async getMyFriends() {
      const data = {
        id: this.user.id,
        type: 'friends',
      };
      const response = await DataService.getRelationsByUserId(data);
      this.listFriends = response;
    },
  },
};
</script>
