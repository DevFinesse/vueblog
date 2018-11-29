<template>
  <div class="editPost">
    <form @submit.prevent="updatePost">
      <input type="text" v-model="title" /><br />
      <textarea name="" id="" cols="30" rows="10" v-model="body"></textarea>
      <button type="submit">update</button>
    </form>
  </div>
</template>

<script>
  import db from "../../components/firebaseInit";
  export default {
    name: "editPost",
    data() {
      return {
        p_id: null,
        title: null,
        body: null,
        createdAt: null,
        id: null
      };
    },
    beforeRouteEnter(to, from, next) {
      db.collection("post")
        .doc(to.params.p_id)
        .get()
        .then(function(doc) {
          next(vm => {
            vm.p_id = doc.data().p_id;
            vm.title = doc.data().title;
            vm.body = doc.data().body;
            vm.createdAt = doc.data().createdAt;
            vm.id = doc.id;
          });
        });
    },
    watch: {
      $route: "fetchData"
    },
    methods: {
      fetchData() {
        db.collection("post")
          .doc(this.$root.params.p_id)
          .get()
          .then(function(doc) {
            this.p_id = doc.data().p_id;
            this.title = doc.data().title;
            this.body = doc.data().body;
            this.createdAt = doc.data().createdAt;
            this.id = doc.id;
          });
      },
      updatePost() {
        var ID = this.$route.params.p_id;
        db.collection("post")
          .doc(ID)
          .update({
            title: this.title,
            body: this.body
          })
          .then(() => {
            this.$router.push({ name: "viewPost", params: ID });
          });
      }
    }
  };
</script>
