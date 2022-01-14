<template>
  <b-container fluid>
    <div id="app">
      <b-row>
        <b-col>
          <header>
            <h2>Vue Bootstrap test</h2>
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/task">Tasks</router-link>
            </div>
          </header>
          <router-view />
        </b-col>
      </b-row>
    </div>
  </b-container >
</template>

<style scoped>
header{
  background-color: #2dabff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  background-color: #f1f1f1;
}
</style>
