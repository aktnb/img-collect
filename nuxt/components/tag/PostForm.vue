<script setup lang="ts">
const name = ref('');
const description = ref('');
const errorMessage = ref<string|null>(null);
async function handlePost() {
  const result = await fetch('/api/tags', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      description: description.value
    }),
  });

  if (!result.ok) {
    const body = await result.json();
    errorMessage.value = body['message'];
    return;
  }

  location.reload();
}
</script>

<template>
<form @submit.prevent="handlePost">
  <div>
    <label for="tagname">名前</label>
    <input id="tagname" type="text" v-model="name" class="border" required minlength="1"/>
  </div>
  <div>
    <label for="tagdescription">説明</label>
    <textarea id="tagdescription" v-model="description" maxlength="255" class="border"></textarea>
  </div>
  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>
  <div>
    <button type="submit" class="bg-sky-300">登録</button>
  </div>
</form>
</template>
