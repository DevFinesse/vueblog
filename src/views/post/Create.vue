<template>
  <div class="createPost">
    <form @submit.prevent="createP">
      <input type="text" v-model="title" required /><br />
      <input type="text" v-model="body" required /><br />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
  import db from "../../components/firebaseInit";

  export default {
    name: "createPost",
    data() {
      return {
        title: null,
        body: null
      };
    },
    methods: {
      createP() {
        db.collection("post")
          .add({
            p_id: 12,
            title: this.title,
            body: this.body,
            c_id: 12,
            user_id: 12,
            createdAt: "12:12:12",
            updatedAt: "12:12:12"
          })
          .then(docRef => this.$router.push("/"))
          .catch(error => console.log(error));
      }
    }
  };
</script>
