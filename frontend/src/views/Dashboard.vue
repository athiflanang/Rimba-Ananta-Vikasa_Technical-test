<script setup>
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-slate-100">
    <Navbar />
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div
        class="bg-white rounded-xl shadow-xl py-52 px-96 mt-10 w-64 h-64 flex items-center justify-center"
      >
        <table class="table w-full text-black">
          <thead class="text text-black">
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox checkbox-accent" />
                </label>
              </th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox checkbox-accent" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">The Last Kingdom</div>
                  </div>
                </div>
              </td>
              <td>BK001</td>
              <td>190000</td>
              <td><button class="btn btn-error">delete</button></td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox checkbox-accent" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Future Horizons</div>
                  </div>
                </div>
              </td>
              <td>BK002</td>
              <td>240000</td>
              <td><button class="btn btn-error">delete</button></td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox checkbox-accent" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Mystery of the Lost City</div>
                  </div>
                </div>
              </td>
              <td>BK003</td>
              <td>170000</td>
              <td><button class="btn btn-error">delete</button></td>
            </tr>
          </tbody>
        </table>
        <div class="mx-10 items-center justify-center flex">
          <button class="btn btn-accent">To Transaction</button>
        </div>
      </div>
      <div
        class="grid grid-cols-3 mt-5 justify-center items-center gap-6 mb-10"
      >
        <div
          class="col-span-3 flex justify-end mt-5 text-xl font-semibold text-teal-400 hover:text-teal-600 transition duration-300 ease-in-out"
        >
          View All
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
