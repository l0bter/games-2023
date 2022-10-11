<script>
    import "../app.css";
    import { base } from '$app/paths';
</script>


<header class="bg-gray-800">
  <a href={base}>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
              <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                  <h1 class="text-gray-300 px-3 py-2 text-lg font-bold">CAHS CS</h1>
              </div>
            </div>
        </div>
      </div>
    </div>
  </a>
</header>


<slot />