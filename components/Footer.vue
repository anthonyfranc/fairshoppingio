<template>
  <div class="top-shadow">
    <footer class="bg-white dark:bg-gray-950">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
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
          </div>
          <div class="grid grid-cols-3 gap-12 xs:gap-6 xs:grid-cols-2">
            <div>
              <h2
                class="
                  mb-6
                  text-sm
                  font-semibold
                  text-gray-900
                  uppercase
                  dark:text-white
                "
              >
                company
              </h2>
              <ul class="text-gray-600 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline"
                    >About</a
                  >
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline"
                    >Contact Us</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="
                  mb-6
                  text-sm
                  font-semibold
                  text-gray-900
                  uppercase
                  dark:text-white
                "
              >
                resources
              </h2>
              <ul class="text-gray-600 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a class="">API </a>
                  <span
                    class="
                      bg-blue-100
                      text-blue-800 text-xs
                      font-semibold
                      mr-2
                      ml-2
                      px-2.5
                      py-0.5
                      rounded
                      dark:bg-blue-200 dark:text-blue-800
                      md:inline
                    "
                    >Coming Soon</span
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="
                  mb-6
                  text-sm
                  font-semibold
                  text-gray-900
                  uppercase
                  dark:text-white
                "
              >
                Legal
              </h2>
              <ul class="text-gray-600 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <NuxtLink to="/privacy-policy" class="hover:underline"
                    >Privacy Policy</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/terms-of-service" class="hover:underline"
                    >Terms of Service</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5"
        />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© 2023
            <a href="/" class="hover:underline">FairShopping.io</a>
            All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-3.5 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="
                text-gray-500
                hover:text-[#1877F2]
                dark:hover:text-[##1877F2]
              "
            >
              <svg
                class="h-[18px]"
                viewBox="0 1 16 14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="CurrentColor"
                    d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                  ></path>
                </g>
              </svg>
              <span class="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              class="
                text-gray-500
                hover:text-[#00AAEC]
                dark:hover:text-[#00AAEC]
              "
            >
              <svg
                class="h-[18px]"
                viewBox="0 -6 48 45"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-300.000000, -164.000000)"
                    fill="currentColor"
                  >
                    <path
                      d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                      id="Twitter"
                    ></path>
                  </g>
                </g>
              </svg>
              <span class="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              class="
                text-gray-500
                hover:text-[#5865F2]
                dark:hover:text-[#5865F2]
              "
            >
              <svg class="h-[18px]" viewBox="0 -30 256 226" aria-hidden="true">
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>
              <span class="sr-only">Discord</span>
            </a>
            <a
              href="#"
              class="
                text-gray-500
                hover:text-[#FF4500]
                dark:hover:text-[#FF4500]
              "
            >
              <svg
                class="h-[19px]"
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <circle
                      fill="CurrentColor"
                      cx="128"
                      cy="128"
                      r="128"
                    ></circle>
                    <path
                      d="M213.149867,129.220267 C213.149867,118.843733 204.758756,110.603378 194.532978,110.603378 C189.498311,110.603378 184.918756,112.585956 181.562311,115.791644 C168.745244,106.635378 151.195022,100.6848 131.662222,99.9224889 L140.206933,59.9409778 L167.980089,65.8915556 C168.287289,72.9116444 174.084267,78.5578667 181.257956,78.5578667 C188.5824,78.5578667 194.532978,72.6072889 194.532978,65.28 C194.532978,57.9555556 188.5824,52.0049778 181.257956,52.0049778 C176.069689,52.0049778 171.490133,55.0570667 169.353956,59.4830222 L138.377956,52.9208889 C137.462044,52.7672889 136.546133,52.9208889 135.934578,53.3788444 C135.172267,53.8368 134.714311,54.5991111 134.563556,55.5150222 L125.100089,100.073244 C105.262933,100.6848 87.4083556,106.635378 74.4376889,115.945244 C71.0812444,112.739556 66.5016889,110.756978 61.4670222,110.756978 C51.0904889,110.756978 42.8501333,119.148089 42.8501333,129.373867 C42.8501333,137.002667 47.4268444,143.4112 53.8382222,146.312533 C53.5310222,148.141511 53.3802667,149.973333 53.3802667,151.958756 C53.3802667,180.644978 86.7996444,203.995022 128.001422,203.995022 C169.2032,203.995022 202.622578,180.798578 202.622578,151.958756 C202.622578,150.126933 202.468978,148.141511 202.164622,146.312533 C208.573156,143.4112 213.149867,136.849067 213.149867,129.220267 Z M85.2721778,142.495289 C85.2721778,135.170844 91.2227556,129.220267 98.5500444,129.220267 C105.874489,129.220267 111.825067,135.170844 111.825067,142.495289 C111.825067,149.819733 105.874489,155.773156 98.5500444,155.773156 C91.2227556,155.923911 85.2721778,149.819733 85.2721778,142.495289 Z M159.588978,177.746489 C150.432711,186.902756 133.036089,187.514311 128.001422,187.514311 C122.813156,187.514311 105.416533,186.749156 96.4110222,177.746489 C95.04,176.372622 95.04,174.236444 96.4110222,172.862578 C97.7848889,171.491556 99.9210667,171.491556 101.294933,172.862578 C107.094756,178.6624 119.303111,180.644978 128.001422,180.644978 C136.699733,180.644978 149.058844,178.6624 154.705067,172.862578 C156.078933,171.491556 158.215111,171.491556 159.588978,172.862578 C160.809244,174.236444 160.809244,176.372622 159.588978,177.746489 Z M157.1456,155.923911 C149.821156,155.923911 143.870578,149.973333 143.870578,142.648889 C143.870578,135.324444 149.821156,129.373867 157.1456,129.373867 C164.472889,129.373867 170.423467,135.324444 170.423467,142.648889 C170.423467,149.819733 164.472889,155.923911 157.1456,155.923911 Z"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </g>
              </svg>
              <span class="sr-only">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style type="css">
.top-shadow {
  -webkit-box-shadow: 0 -1px 2px -1px rgb(0 0 0 / 0.25);
  -moz-box-shadow: 0 -1px 2px -1px rgb(0 0 0 / 0.25);
  box-shadow: 0 -1px 2px -1px rgb(0 0 0 / 0.28);
  /*box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);*/
  margin-top: 1em;
}
</style>
