<template>
  <div class="sidebar">
    <div class="title">
      API Admin
    </div>
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        ><img class="icon" src="@/assets/icon/dashboard.png" />
        <div class="link-container">
          dashboard
        </div>
      </router-link>
      <router-link
        to="/profile"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        ><img class="icon" src="@/assets/icon/menu.png" />
        <div class="link-container">
          Profile
        </div>
      </router-link>
      <router-link
        to="/settings"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        ><img class="icon" src="@/assets/icon/settings.png" />
        <div class="link-container">
          Settings
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: white;
  font-size: 24px;
  margin-top: 20px;
  font-weight: 600;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
}

.menu-items > * {
}

.icon {
  width: 28px;
  vertical-align: middle;
}
.link-container {
  display: inline;
  vertical-align: middle;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
}
.side-btn:hover {
  background-color: rgb(22, 22, 27);
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-weight: 600;
  /* margin-left: 10px;
  border-radius: 30px 0 0 30px; */
}

.side-btn.active::before {
  top: -30px;
}

.side-btn.active::after {
  bottom: -30px;
}

/* .side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}

.side-btn.active .link-container::before {
  top: -60px;
}

.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}

.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
} */
</style>
