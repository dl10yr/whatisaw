<template>
  <div class="view-wrapper-content">
    <svg ref="svgCard" viewBox="0 0 200 100" class="svgarea">
      <rect x="0" y="0" width="200" height="100" fill="#fff" stroke="#000000" stroke-width="10" />
      <text font-family="sans-serif" font-weight="bold" dominant-baseline="middle">
        <tspan font-size="10px" x="15" y="15">{{text1}}</tspan>
        <tspan font-size="8px" x="15" y="28">で、</tspan>
        <tspan font-size="10px" x="15" y="43">{{text3}}</tspan>
        <tspan font-size="10px" x="15" y="58">{{text4}}</tspan>
        <tspan font-size="10px" x="15" y="73">{{text5}}</tspan>
        <tspan font-size="8px" x="15" y="88">を見た。</tspan>
      </text>
      <image
        xmlns="http://www.w3.org/2000/svg"
        id="image0"
        width="50"
        height="50"
        x="155"
        y="45"
        href="data:image/png;base64,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 bWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=="
      />
    </svg>
    <form action @submit.prevent="create" class="form-horizonal form-inline">
      <label style=" margin:10px 10px 30px 10px">投稿者:</label>
      <input
        v-model="user_name"
        type="text"
        style="width: 70%; margin:10px 10px 30px 10px"
        class="form-control"
        maxlength="15"
        minlength="1"
        required
      />
      <input
        v-model="text1"
        type="text"
        style="width:100%; margin-bottom:10px"
        placeholder="どこ？（17字以内）"
        class="form-control"
        maxlength="17"
        minlength="1"
        required
      />
      <h6 style="text-align:left;">で、</h6>
      <textarea
        v-model="text2"
        type="text"
        style="width:100%; margin-bottom:10px"
        placeholder="何？（100字以内）"
        class="form-control"
        maxlength="100"
        minlength="1"
        required
        rows="4"
      />
      <h6 style="text-align:left;">を</h6>
      <div class="submit-button">
        <button class="btn btn-dark" type="submit">見た。</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

const db = firebase.firestore();
// svgをpngに変換
const svg2imageData = (svgElement, successCallback, errorCallback) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  const image = new Image();
  const svgData = new XMLSerializer().serializeToString(svgElement);
  image.src =
    "data:image/svg+xml;charset=utf-8;base64," +
    btoa(unescape(encodeURIComponent(svgData)));
  image.onload = () => {
    context.drawImage(image, 0, 0, 1200, 630);
    successCallback(canvas.toDataURL());
  };
  image.onerror = e => {
    errorCallback(e);
  };
};

function getUniqueStr(myStrong) {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    // console.log("success");
  });

export default {
  components: {},
  data() {
    return {
      text1: "",
      text2: "",
      user_name: "名無しさん"
    };
  },
  computed: {
    text3: function() {
      return this.text2.substring(0, 15);
    },
    text4: function() {
      if (this.text2.length <= 15) {
        return "";
      }
      if (this.text2.length >= 16) {
        return this.text2.substring(15, 30);
      }
    },
    text5: function() {
      if (this.text2.length <= 30) {
        return "";
      }
      if (this.text2.length >= 31 && this.text2.length <= 43) {
        return this.text2.substring(30, 43);
      }
      if (this.text2.length >= 44) {
        return this.text2.substring(30, 43) + "...";
      }
    }
  },
  methods: {
    async create() {
      // refでsvgCardをsvgに設定しているのでthis.$refs.svgCardで要素を取れます
      svg2imageData(this.$refs.svgCard, async data => {
        const sRef = firebase.storage().ref();
        var uuid = getUniqueStr();
        const fileRef = sRef.child(`${uuid}.png`);

        // Firebase Cloud Storageにアップロード
        await fileRef.putString(data, "data_url");
        const url = await fileRef.getDownloadURL();
        // console.log(url);

        db.collection("cards").add({
          where: this.text1,
          what: this.text2,
          imageurl: url,
          created_at: new Date(),
          user_uid: this.$store.getters.user.uid,
          user_name: this.user_name,
          post_id: uuid
        });
        this.text1 = "";
        this.text2 = "";
        this.$router.push({ path: `/post/${uuid}` });
      });
    }
  }
};
</script>


<style>
.view-wrapper-content {
  box-sizing: border-box;
  padding-top: 20px;
  background: #ffffff;
  margin: 0 auto;
  max-width: 400px;
}
form {
  margin: 15px;
}
.svgarea {
  margin: 15px;
}
.submit-button {
  margin: 10px auto;
  width: 100%;
}
.btn-dark {
  width: 100%;
}
svg {
  transform-box: fill-box;
}
</style>



