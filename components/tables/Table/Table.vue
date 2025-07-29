<template>
  <div
    data-component="Table"
    data-slot="root"
    class="w-full h-full block overflow-x-scroll whitespace-nowrap"
  >
    <table class="w-full table-auto divide-y divide-gray-200">
      <thead class="border-b border-solid border-black/20">
        <slot name="head" />
      </thead>
      <tbody class="divide-y divide-gray-200">
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>
