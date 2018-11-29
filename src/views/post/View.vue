<template>
  <div class="viewPost">
    <div>
      {{ title }} <br />
      <hr />
      {{ body }} <br />
      {{ createdAt }}
    </div>

    <div>
      <router-link v-bind:to="{name:'editPost', params:{p_id: id}}"
        >Edit</router-link
      >

      <button @click="deletePost">Delete</button>
    </div>
  </div>
</template>

<script>
  import db from "../../components/firebaseInit";

  export default {
    name: "viewPost",
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
      deletePost() {
        if (confirm("Are You Sure?")) {
          var ID = this.$route.params.p_id;
          db.collection("post")
            .doc(ID)
            .delete()
            .then(() => {
              this.$router.push("/");
            });
        }
      }
    }
  };
</script>
