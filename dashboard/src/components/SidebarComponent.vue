<template>
  <aside>
    <nav>
      <!-- Your menu items go here -->
      <ul>
        <li>Dashboard</li>
        <li>User Profile</li>
        <li>Settings</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent'
};
</script>

<style scoped>
aside {
  width: 250px;
  background: #333;
  color: white;
  height: 100vh;
}

nav ul {
  padding: 0;
  list-style-type: none;
}

nav li {
  padding: 15px 20px;
}
</style>
