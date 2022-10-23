<template>
  <Slidebar />

  <LazyClassComponent v-if="bestzige.page === 'classcomponent'" />
  <LazyConcept v-if="bestzige.page === 'concept'" />
  <LazyDataTypes v-if="bestzige.page === 'datatypes'" />
  <LazyHome v-if="bestzige.page === 'home'" />
  <LazyIntroduction v-if="bestzige.page === 'introduction'" />
  <LazyMathOperators v-if="bestzige.page === 'mathoperators'" />
  <LazySyntax v-if="bestzige.page === 'syntax'" />
  <LazyVariable v-if="bestzige.page === 'variable'" />

  <Footer />
</template>

<script setup lang="ts">
const bestzige = useBestZige();
</script>
