<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-slate-100">
    <Navbar />
    <div class="flex items-center justify-center mt-10 mb-10">
      <h1 class="text-black font-bold text-3xl">Transaction</h1>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div
        class="bg-white rounded-xl shadow-xl mx-10 w-200px h-300px px-56 py-20 flex justify-center items-center"
      >
        <table class="table w-full text-black">
          <thead>
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
      </div>
      <div
        class="bg-white rounded-xl shadow-xl mx-10 w-200px h-300px px-56 py-20 flex justify-center items-center"
      >
        <table class="table w-full text-black">
          <thead>
            <tr>
              <th>No</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>190000</td>
            </tr>
            <tr>
              <th>2</th>
              <td>240000</td>
            </tr>
            <tr>
              <th>3</th>
              <td>170000</td>
            </tr>
            <tr>
              <th>Total Price</th>
              <td>170000</td>
            </tr>
          </tbody>
        </table>
        <div class="mx-10 items-center justify-center flex">
          <button class="btn btn-accent">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
