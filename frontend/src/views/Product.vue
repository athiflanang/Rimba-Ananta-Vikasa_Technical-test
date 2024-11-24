<script setup>
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import CreateProductModal from "@/components/CreateProductModal.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-slate-100">
    <Navbar />
    <div class="flex flex-col items-center justify-center mt-10">
      <p class="text-4xl font-bold text-black">Product List</p>
      <CreateProductModal class="mt-4" />
    </div>
    <div class="grid grid-cols-3 items-center justify-items-center gap-5 py-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<style scoped></style>
