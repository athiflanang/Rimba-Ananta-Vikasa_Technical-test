<script setup>
function openModal() {
  document.getElementById("createProduct").showModal();
}
</script>

<template>
  <div>
    <button class="btn btn-outline btn-accent" @click="openModal">
      Add Product
    </button>
    <dialog id="createProduct" class="modal">
      <div class="modal-box bg-white">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div
          class="grid grid-cols-1 justify-center items-center mx-20 text-black"
        >
          <h3 class="font-bold text-lg mb-2">Product Name</h3>
          <input
            type="text"
            placeholder="Insert product name here"
            className="input input-bordered input-accent w-full max-w-xs bg-white mb-2"
          />
          <h3 class="font-bold text-lg mb-2">Date Added</h3>
          <input
            type="text"
            placeholder="Insert date here"
            className="input input-bordered input-accent w-full max-w-xs bg-white mb-2"
          />
          <h3 class="font-bold text-lg mb-2">Product Code</h3>
          <input
            type="text"
            placeholder="Insert product code here"
            className="input input-bordered input-accent w-full max-w-xs bg-white mb-2"
          />
          <h3 class="font-bold text-lg mb-2">Price</h3>
          <input
            type="number"
            placeholder="Insert price here"
            className="input input-bordered input-accent w-full max-w-xs bg-white mb-2"
          />
          <h3 class="font-bold text-lg mb-2">Quantity</h3>
          <input
            type="number"
            placeholder="Insert quantity here"
            className="input input-bordered input-accent w-full max-w-xs bg-white mb-4"
          />
          <button class="btn btn-accent justify-items-center items-center flex">
            Add Product
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped></style>
