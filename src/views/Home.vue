<template>
  <div class="view-area">
    <div class="create-button">
      <a href="/create" class="btn btn-dark">投稿する</a>
    </div>
    <ul class="list">
      <li v-for="post in posts" :key="post.uid">
        <div class="li-body">
          <RouterLink :to="`/post/${post.post_id}`" class="navbar-icon">
            <img :src="post.imageurl" />
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
import firebase from "firebase";
import moment from "moment";

export default {
  data() {
    return {
      posts: [],
      loading: true,
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
            created_at: moment(doc.data().created_at.toDate()),
            imageurl: doc.data().imageurl,
            post_id: doc.data().post_id
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
        .collection("cards")
        .where("created_at", "<", this.end_date)
        .orderBy("created_at", "desc")
        .limit(5)
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            let data = {
              what: doc.data().what,
              where: doc.data().where,
              user_name: doc.data().user_name,
              created_at: moment(doc.data().created_at.toDate()),
              imageurl: doc.data().imageurl
            };
            this.posts.push(data);
            this.end_date = doc.data().created_at;
          });
        });
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0px 10px 0px 10px;
  width: 100%;
  max-width: 400px;
}
img {
  width: 100%;
}
li {
  margin: 0px 10px 20px 10px;
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
.btn-dark {
  width: 100%;
  margin: 10px 0px 10px 0px;
}
button {
  width: 100%;
}
.view-area {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
.create-button {
  max-width: 380px;
  margin: 0px 10px 30px 10px;
}
</style>


