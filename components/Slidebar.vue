<script setup lang="ts">
const bestzige = useBestZige();

const setPage = (page: string) => {
  bestzige.value.page = page;
};
</script>

<template>
  <div
    class="offcanvas offcanvas-start w-25"
    tabindex="-1"
    id="offcanvas"
    data-bs-keyboard="false"
    data-bs-backdrop="false"
  >
    <div class="offcanvas-header bg-dark">
      <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body px-0">
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
        id="menu"
      >
        <li
          v-for="(page, idx) of bestzige.pages"
          :key="idx"
          class="nav-item w-100"
        >
          <a
            :class="`nav-link ${bestzige.page === page.path ? 'active' : ''}`"
            data-bs-dismiss="offcanvas"
            @click="setPage(page.path)"
            >{{ page.title }}</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col p-4">
        <img
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          role="button"
          width="50"
          height="50"
          src="/logo.png"
          class="rounded mx-auto d-block float-end toggle-button"
          alt="Logo Toggle"
        />
      </div>
    </div>
  </div>
</template>
