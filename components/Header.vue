<template>
  <div class="bg-white divide-y-[0.124em] shadow-sm dark:divide-gray-600">
    <nav class="dark:border-gray-200 dark:bg-gray-700">
      <div
        class="
          flex flex-wrap
          justify-between
          items-center
          mx-auto
          max-w-screen-xl
          p-4
        "
      >
        <NuxtLink to="/" class="flex items-center">
          <!--Logo-->
          <div class="logoSlide">
            <span
              style="
                font-size: 26px;
                font-weight: bold;
                font-family: 'Urbanist', sans-serif;
              "
              class="dark:text-white text-gray-700"
            >
              FairShopping</span
            >
            <span
              style="
                color: rgb(75, 152, 108);
                font-size: 26px;
                font-weight: bold;
                font-family: 'Urbanist', sans-serif;
              "
              >.io</span
            >
          </div>
        </NuxtLink>
        <div class="flex items-center">
          <a
            class="
              hs-dark-mode-active:hidden
              block
              group
              flex
              items-center
              text-gray-600
              hover:text-blue-600
              font-medium
              dark:text-gray-400 dark:hover:text-gray-500
            "
            @click="setColor('dark')"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
              />
            </svg>
          </a>
          <a
            class="
              hs-dark-mode-active:block
              hidden
              group
              flex
              items-center
              text-gray-600
              hover:text-blue-600
              font-medium
              dark:text-gray-400 dark:hover:text-gray-500
            "
            @click="setColor('light')"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
    <nav
      v-if="hideRouter.includes(useRoute().name) == false"
      class="
        bg-white
        dark:bg-gray-800
        shadow-sm
        border-b-2 border-slate-300 border-opacity-20
      "
    >
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="items-center flex">
          <div class="hs-dropdown">
            <button
              id="hs-dropdown-default"
              class="
                text-slate-950
                bg-gray-100
                focus:ring-1
                hover:ring-1
                ring-gray-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                inline-flex
                items-center
              "
              type="button"
            >
              Categories
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownDivider"
              class="
                hs-dropdown-menu
                transition-[opacity,margin]
                duration-[0.1ms]
                hs-dropdown-open:opacity-100
                opacity-0
                z-20
                hidden
                bg-white
                divide-y divide-gray-100
                rounded-md
                shadow-md
                dark:bg-gray-700 dark:divide-gray-600
              "
              aria-labelledby="hs-dropdown-default"
            >
              <div class="py-1">
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm
                    font-medium
                    dark:hover:bg-gray-800
                    hover:bg-gray-100
                    text-black
                    dark:text-gray-400
                  "
                  >Show All</a
                >
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <a
                    href="team.href"
                    class="
                      dark:hover:bg-gray-800
                      hover:bg-gray-100
                      text-black
                      dark:text-gray-400
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-amber-500
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Electronics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="team.href"
                    class="
                      dark:hover:bg-gray-800
                      hover:bg-gray-100
                      text-black
                      dark:text-gray-400
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-violet-600
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Video Games</span>
                  </a>
                </li>
                <li>
                  <a
                    href="team.href"
                    class="
                      dark:hover:bg-gray-800
                      hover:bg-gray-100
                      text-black
                      dark:text-gray-400
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-cyan-600
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Entertainment</span>
                  </a>
                </li>
                <li>
                  <a
                    href="team.href"
                    class="
                      dark:hover:bg-gray-800
                      hover:bg-gray-100
                      text-black
                      dark:text-gray-400
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-rose-300
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Smart Home</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full">
            <form class="float-right min-w-[23vmax]">
              <label
                for="default-search"
                class="
                  mb-3
                  text-sm
                  font-medium
                  text-gray-900
                  sr-only
                  dark:text-white
                "
                >Search</label
              >
              <div class="relative">
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pl-3
                    pointer-events-none
                  "
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="
                    block
                    h-[2.9em]
                    w-full
                    p-4
                    pl-10
                    text-sm text-gray-900
                    border border-gray-300
                    rounded-lg
                    bg-gray-50
                    focus:ring-blue-500 focus:border-blue-500
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="Search for Products"
                  required
                />
                <button
                  type="submit"
                  class="
                    absolute
                    top-0
                    right-0
                    p-[0.68em]
                    text-sm
                    font-medium
                    text-white
                    bg-blue-700
                    rounded-r-lg
                    border border-blue-700
                    hover:bg-blue-800
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:bg-blue-600
                    dark:hover:bg-blue-700
                    dark:focus:ring-blue-800
                  "
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style type="css">
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap');
.logoSlide {
  animation: slideInLogo 1s ease 0s 1 normal none;
}

@keyframes slideInLogo {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
body * {
  @apply transition-colors duration-200;
}
</style>
<script setup>
const colorMode = useColorMode();
function setColor(item) {
  if (item == 'dark') {
    colorMode.preference = 'dark';
    //console.log(colorMode.preference);
  }
  if (item == 'light') {
    colorMode.preference = 'light';
    //console.log(colorMode.preference);
  }
}
//we are hiding the category submenu on these routes
const hideRouter = ['terms-of-service', 'privacy-policy', 'p-:id'];
</script>
