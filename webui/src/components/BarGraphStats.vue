<template>
  <div class="d-flex justify-content-center">
    <vue3-chart-js v-bind="{ ...barChart }" height="400" width="700" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

<script>
import { mapActions } from 'vuex';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  name: 'bar graph stats',
  props: {
    dataCounts: {
      type: Object,
      required: true,
      default: () => {},
    },
    tableHeaders: {
      type: Array,
      require: true,
      default: () => [],
    },
    tableType: {
      type: String,
      require: true,
      default: 'genre',
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    xLabel: {
      type: String,
      required: true,
      default: '',
    },
    yLabel: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      barChart: {
        type: 'bar',
        options: {
          min: 0,
          max: 100,
          responsive: false,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                callback: function (value) {
                  return `${value}`;
                },
              },
            },
          },
        },
        data: {
          labels: [],
          datasets: [
            {
              label: '',
              data: [],
              backgroundColor: [
                '#1abc9c',
                '#f1c40f',
                '#2980b9',
                '#34495e',
                '#94AED0',
                '#863ADD',
                '#3E572F',
                '#C89E98',
                '#052D59',
                '#7F5C5D',
                '#D58D16',
                '#655777',
              ],
            },
          ],
        },
      },
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
      isAdmin: false,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  components: {
    Vue3ChartJs,
  },
  created() {
    this.barChart.data.labels = this.tableHeaders;
    // this.barChart.data.datasets[0].label = this.tableHeaders;

    // TO DO: set x and y labels.

    for (const [key, value] of Object.entries(this.dataCounts)) {
      // useless if condition but needed to use key so that eslint doesn't complain
      if (key) {
        this.barChart.data.datasets[0].data.push(value);
      }
    }
    // y height be the max value that isn't total.
    let dataCountArray = Object.values(this.dataCounts);
    dataCountArray = dataCountArray.slice(0, dataCountArray.length - 1);
    const max = Math.max(...dataCountArray);
    this.barChart.options.scales.y.max = max;
  },
  mounted() {
    this.$store.subscribe((setUser, user) => {
      this.user = user;
    });

    const localToken = localStorage.getItem('userToken');
    if (!localToken) {
      this.$router.push('/');
    }
    if (this.user.roleId == 1) {
      this.isAdmin = true;
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
