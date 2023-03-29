<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-700"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-700"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          id="storeClose"
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden" v-for="ProductData in data">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="
              pointer-events-none
              fixed
              inset-y-0
              right-0
              flex
              max-w-full
              pl-10
            "
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-xl">
                <div
                  id="storeMenu"
                  class="
                    flex
                    h-full
                    flex-col
                    overflow-y-scroll
                    bg-white
                    shadow-xl
                  "
                >
                  <div class="bg-gray-50 px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                      <DialogTitle
                        class="text-base font-semibold leading-6 text-gray-900"
                        >{{ ProductData.product_name }}</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="text-gray-400 hover:text-gray-500"
                          @click="closeStore(), (open = false)"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p class="text-sm text-gray-500">
                        Get started by filling in the information below to
                        create your new project.
                      </p>
                    </div>
                  </div>
                  <div class="relative flex-1 py-6 px-4 sm:px-6">
                    <!-- Your content -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import $ from 'jquery';
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const open = ref(true);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
    required: true,
  },
  storeID: {
    type: Number,
  },
});

const emit = defineEmits(['close']);

const emitClose = () => {
  return emit('close');
};

function closeStore() {
  //Close Sidemenu CSS
  let open = false;
  $('#storeMenu').addClass(
    'transform transition ease-in-out duration-500 translate-x-0 translate-x-full'
  );
  //use Javascript to emulate ease-out
  $('#storeClose').fadeTo(100, 0);
  setTimeout(function () {
    return emit('close');
  }, 500);
}

const supabase = useSupabaseClient();
const { data } = await supabase
  .from('productinfo_testv11')
  .select('*')
  .eq('id', props.storeID);
</script>
