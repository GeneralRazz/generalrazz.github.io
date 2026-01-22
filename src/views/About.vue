<template>
  <div style="margin-bottom: 80px;">
    <h1>Hey There!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Zaki</strong>, a Dal Student in his last semester doing applied computer science and user experience design.<br/>
        I spend my working on Uni stuff and being the in-game leader of Dal's Counter-Strike 2 team.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">game projects</router-link>, on <router-link to="/other-projects">other uni stuff</router-link>, and did <router-link to="/resume">a bunch of other things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>looking land a job</strong> as a Gameplay Programmer, Game UX Designer/UI Programmer. You can reach me at <a href="mailto:mohammedzaksaj@gmail.com">mohammedzaksaj@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Zaki" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>