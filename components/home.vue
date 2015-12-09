<template>

  <div class="container">
    <div class="jumbotron">
      <h2>Vue Cal，助你善度光陰。</h2>
      <p>一個使用了 <a href="http://vuejs.org/">Vue</a>、<a href="https://webpack.github.io/">Webpack</a> 與 Express 的日曆應用。</p>
    </div>

    <div class="col-sm-7">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>新添事件</h3>
        </div>
        <div class="panel-body">
          <div>
            <input class="form-control" placeholder="事件名稱" v-model="event.title">
            <textarea class="form-control" placeholder="事件細節" v-model="event.detail"></textarea>
            <input type="date" class="form-control" placeholder="事件排期" v-model="event.date">
            <button class="btn btn-primary btn-block" v-on:click="addEvent">發佈</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-5">
      <div class="list-group">
        <a href="/events/{{event.id}}" class="list-group-item" v-for="event in events">
          <h4 class="list-group-item-heading"><i class="glyphicon glyphicon-bullhorn"></i> {{ event.title }}</h4>
          <h5><i class="glyphicon glyphicon-calendar" v-if="event.date"></i> {{ event.date }}</h5>
          <p class="list-group-item-text" v-if="event.detail">{{ event.detail }}</p>
          <button class="btn btn-xs btn-danger" v-on:click="deleteEvent($index)">移除事件</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
var Vue = require('vue');

Vue.options.replace = false;
Vue.config.warnExpressionErrors = false;

Vue.use(require('vue-resource'));

module.exports = {

  data () {
    return {
      event: {
        title: '',
        detail: '',
        date: ''
      },
      events: []
    }
  },

  route: {
    activate () {
      this.fetchEvents();
    }
  },

  // ready () {
  //   console.log(this.$parent);
  //   this.fetchEvents();
  //   console.log(this.events);
  // },

  methods: {

    fetchEvents () {
      var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {
          this.$set('events', events);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    addEvent () {
      if (this.event.title.trim()) {
        // this.events.push(this.event);
        // this.event = { title: '', detail: '', date: '' };
        this.$http.post('/api/events', this.event)
          .success(function (res) {
            this.events.push(this.event);
            console.log('Event added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteEvent (index) {
      if (confirm('確定要移除此項事件？')) {
        // this.events.splice(index, 1);
        this.$http.delete('api/events/' + event.id)
          .success(function (res) {
            console.log(res);
            this.events.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
};

</script>