<template>
  <nav>
    <button class="search-btn"></button>
    <input class="search-box" type="text" />
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  align-items: center;
}

.search-btn {
  width: 30px;
  height: 30px;
  border: 4px solid #4e7dff;
  border-radius: 25px;
  background-color: transparent;
  margin-right: 10px;
  margin-left: 20px;
}

.search-box {
  width: 15%;
  border: none;
  border-radius: 7px;
  background-color: #ebebeb;
  padding: 7px 5px;
}
</style>
