<template>
  <section
    class="d-flex flex-column flex-md-row align-items-center c-error-wrap"
  >
    <figure class="c-error-icon me-4">🙈</figure>
    <div class="text-center text-md-start">
      <h2 class="text-danger">OMG!</h2>
      <h3 class="fs-1 text-primary-emphasis">Что-то пошло не так</h3>
      <p>
        Очень информативное сообщение об ошибке. Чтобы сразу стало понятно и
        ясно что надо будет сделать чтобы стало хорошо.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.c-error-icon {
  font-size: 10rem;
  margin-top: -1rem;
}

.c-error-wrap h2 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 4rem;
}
.c-error-wrap h3 {
  /* font-size: 3rem; */
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
}
.c-error-wrap p {
  max-width: 24rem;
  text-wrap: balance;
  padding-left: 0.25rem;
}
</style>
