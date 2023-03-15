<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="text-center lg:text-left">
        <!--Sort and Filter--><!--End of Sort and Filter-->
      </div>
      <div class="grid grid-cols-1 gap-4 mt-8 sm:mt-12 lg:grid-cols-4 sm:gap-6">
        <div
          class="
            relative
            overflow-hidden
            transition-all
            duration-300
            bg-white
            border border-gray-100
            rounded-lg
            group
          "
          v-for="ProductData in data"
        >
          <div class="overflow-hidden aspect-w-4 aspect-h-3">
            <img
              class="
                object-cover
                w-full
                h-full
                transition-all
                duration-300
                group-hover:scale-125
              "
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/5/product-2.png"
              alt=""
            />
          </div>
          <div class="px-3 py-4 sm:px-4 sm:py-5">
            <p class="text-xs font-bold text-gray-400 sm:text-sm">
              {{ ProductData.Category }}
            </p>
            <h3
              class="
                mt-3
                text-xs
                font-bold
                text-gray-900
                sm:text-sm
                md:text-base
              "
            >
              <a href="#" title="">
                {{ ProductData.Name }}
                <span class="absolute inset-0" aria-hidden="true"></span>
              </a>
            </h3>
            <div class="mt-2">
              <div class="flex items-center space-x-px">
                <!--Ratings-->
                <client-only>
                  <star-rating
                    v-model:rating="ProductData.current_rating"
                    :round-start-rating="false"
                    :star-size="15"
                    :show-rating="false"
                  ></star-rating>
                </client-only>
              </div>
              <p class="mt-0.5 text-xs sm:text-sm font-medium text-gray-400">
                <!--Reviews-->
                {{ ProductData.current_reviews }} Reviews
              </p>
            </div>
            <p class="mt-3 text-xs font-bold text-gray-900 sm:text-sm">
              ${{ ProductData.current_price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Skeleton } from 'vue-loading-skeleton';
const supabase = useSupabaseClient();

const { data, error } = await supabase.from('productinfov5').select(`*`);
</script>
