<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('burgerMenuClick')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{this.date | date('date-time')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="user_dropdown">
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link tag="a" to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>

            <li class="divider" tabindex="-1"></li>

            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  data: () => ({
    date: new Date(),
    clearBeforeDestroy: {
      timeInterval: null,
      userDropdown: null
    },
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    }
  },
  mounted() {
    
    this.clearBeforeDestroy.userDropdown = window.M.Dropdown.init(this.$refs.user_dropdown);

    this.clearBeforeDestroy.timeInterval = setInterval( () => {
        this.date = new Date();
    }, 1000);
  },
  beforeDestroy(){
    clearInterval(this.clearBeforeDestroy.timeInterval);

    if(this.clearBeforeDestroy.userDropdown && this.clearBeforeDestroy.userDropdown.destroy) {
      this.clearBeforeDestroy.userDropdown.destroy();
    }
    console.log("before Destroy");
  }
  
}
</script>