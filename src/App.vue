<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script setup></script>

<style>
/* 必要に応じてスタイルを記述 */
</style>
