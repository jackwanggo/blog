---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

---   
<script setup>
import { data as posts } from './posts.data.mjs'
import { withBase } from 'vitepress'
</script>
<div class="post-list">
  <div v-for="post in posts" :key="post.url" class="post">
    <a :href="withBase(post.url)">
      <h2>{{ post.title }}</h2>
      <span v-if="post.date" class="date">{{ post.date }}</span>
      <div class="summary">{{ post.description }}</div>
    </a>
  </div>
</div>


<style scoped>
.post {
  display: block;
  padding: 20px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  color: inherit;
  text-decoration: none;
}

.post h2 {
  margin: 0 0 8px;
}

.post p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
}

.date {
  font-size: 14px;
  color: var(--vp-c-text-3);
}
</style>