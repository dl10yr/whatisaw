<template>
  <ul class="list">
    <li v-for="post in posts" :key="post.uid">
      <div class="li-body">
        <div class="li-item">
          <div class="item-content">
            <h6>
              {{post.where}}で、
              <br />
              {{ post.what }}
              <br />を見た。
            </h6>
          </div>
          <small>{{ post.user_name }}&nbsp;&nbsp;&nbsp;</small>
          <small>{{ post.created_at | moment }}</small>
        </div>
      </div>
    </li>
  </ul>
</template>

<script type="text/babel">
import firebase from "firebase";
import moment from "moment";
export default {
  data() {
    return {
      posts: [],
      loading: true,
      iconLink: "",
      start_date: null,
      end_date: null,
      counter: 0
    };
  },
  created() {
    firebase
      .firestore()
      .collection("cards")
      .orderBy("created_at", "desc")
      .limit(5)
      .get()
      .then(querySnapshot => {
        this.loading = false;
        this.counter = 0;
        querySnapshot.forEach(doc => {
          let data = {
            what: doc.data().what,
            where: doc.data().where,
            user_name: doc.data().user_name,
            created_at: moment(doc.data().created_at.toDate())
          };
          this.posts.push(data);
          if (this.counter == 0) {
            this.start_date = doc.data().created_at;
          }
          this.counter = this.counter + 1;
          this.end_date = doc.data().created_at;
        });
      });
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    loginUser() {
      return this.$store.getters.user;
    }
  },
  methods: {
    loadmore() {
      firebase
        .firestore()
        .collection("tifics")
        .where("created_at", "<", this.end_date)
        .orderBy("created_at", "desc")
        .limit(7)
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            let data = {
              content: doc.data().content,
              icon: doc.data().icon,
              name: doc.data().name,
              created_at: moment(doc.data().created_at.toDate())
            };
            this.posts.push(data);
            this.end_date = doc.data().created_at;
          });
        });
    },
    refresh(loaded) {
      firebase
        .firestore()
        .collection("tifics")
        .where("created_at", ">", this.start_date)
        .orderBy("created_at", "asc")
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            let data = {
              content: doc.data().content,
              icon: doc.data().icon,
              name: doc.data().name,
              created_at: moment(doc.data().created_at.toDate())
            };
            this.posts.unshift(data);
            this.start_date = doc.data().created_at;
          });
        });
      loaded("done");
    },
    stateChange(state) {
      if (state === "pull" || state === "trigger") {
        this.iconLink = "#icon-arrow-bottom";
      } else if (state === "loading") {
        this.iconLink = "#icon-loading";
      } else if (state === "loaded-done") {
        this.iconLink = "#icon-finish";
      }
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped rel="stylesheet/less" lang="less">
ul {
  list-style: none;
  padding: 0px 10px 0px 10px;
  width: 300px;
}
li {
  background: #f5f5f5;
  margin: 10px 10px 10px 10px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.list {
  margin: 0 auto;
}
.li-body {
  padding: 10px;
}
h6 {
  line-height: 1.5em;
  word-break: break-all;
}
.li-item {
  display: inline-block;
  vertical-align: top;
  max-width: 95%;
}
.li-content {
  max-width: 50%;
}
</style>