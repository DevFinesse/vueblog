<template>
  <div class="home">
    <ul>
      <li v-for="posts in post" :key="posts.id">
        {{ posts.title }}
        <router-link v-bind:to="{name: 'viewPost' , params : {p_id: posts.id} }"
          >view</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
  // @ is an alias to /src
  import db from "../../components/firebaseInit";

  export default {
    name: "home",
    data() {
      return {
        post: []
      };
    },
    created() {
      db.collection("post")
        .orderBy("p_id")
        .get()
        .then(result => {
          result.forEach(doc => {
            this.post.push({
              id: doc.id,
              p_id: doc.data().p_id,
              title: doc.data().title,
              body: doc.data().body,
              created_at: doc.data().createdAt
            });
          });
        });
    },
    methods: {},
    components: {}
  };
</script>
