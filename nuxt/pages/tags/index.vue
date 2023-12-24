<script setup lang="ts">
const { data: tags } = await useFetch('/api/tags');
</script>
<template>
<div>
  <TagPostForm />
  <div>
    <table class="border border-collapse">
      <thead>
        <tr>
          <th class="border">Name</th>
          <th class="border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tag in tags">
          <td class="border">{{ tag.name }}</td>
          <td class="border">{{ tag.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
