<template>
  <div class="bg-white divide-y-[0.124em] shadow dark:divide-gray-600">
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
              class="dark:text-white text-gray-600"
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
        <div class="flex items-center"></div>
      </div>
    </nav>
    <nav class="bg-slate-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="items-center flex">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              inline-flex
              items-center
              bg-blue-600
              hover:bg-blue-700
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
              z-20
              hidden
              bg-white
              divide-y divide-gray-100
              rounded-lg
              shadow
              dark:bg-gray-700 dark:divide-gray-600
            "
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
                  hover:bg-gray-800
                  text-white text-gray-400
                  hover:text-white hover:bg-gray-800
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
                    hover:bg-gray-800
                    text-white text-gray-400
                    hover:text-white hover:bg-gray-800
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
                    hover:bg-gray-800
                    text-white text-gray-400
                    hover:text-white hover:bg-gray-800
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
                    hover:bg-gray-800
                    text-white text-gray-400
                    hover:text-white hover:bg-gray-800
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
                    hover:bg-gray-800
                    text-white text-gray-400
                    hover:text-white hover:bg-gray-800
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
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap');
</style>
