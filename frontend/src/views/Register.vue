<script setup></script>

<template>
  <div class="w-full min-h-screen bg-slate-100">
    <div
      class="flex flex-1 flex-col justify-center items-center px-6 py-4 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
        >
          Register your new account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                autocomplete="email"
                required=""
                class="input input-bordered w-full border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="name"
                class="block text-sm/6 font-medium text-gray-900"
                >Name</label
              >
            </div>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required=""
                class="input input-bordered w-full border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required=""
                class="input input-bordered w-full border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="phoneNumber"
                class="block text-sm/6 font-medium text-gray-900"
                >Phone Number</label
              >
            </div>
            <div class="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="1234567890"
                required=""
                class="input input-bordered w-full border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              className="btn btn-outline btn-accent justify-center flex w-full"
            >
              Register
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-500">
          Have an account?
          {{ " " }}
          <a
            href="#"
            class="font-semibold text-teal-400 hover:text-teal-600 transition duration-300 ease-in-out"
            >Sign in here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
