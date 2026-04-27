<template>
  <div style="margin-bottom: 80px;">
    <h1>Hey There!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Zaki</strong>, an Applied Computer Science graduate from Dalhousie University specializing in User Experience Design.<br/>
        I balance my time between advanced academic projects and serving as the In-Game Leader for Dalhousie’s Counter-Strike 2 varsity team
      </div>

      <div style="margin-top: 20px;">I've been part of numerous <router-link to="/game-projects">game projects</router-link>, contributed to <router-link to="/other-projects">other projects</router-link>, and did <router-link to="/resume">a bunch of other things</router-link> as well.</div>

      <div style="margin-top: 40px;">I am currently <strong>seeking opportunities</strong> as a Gameplay Programmer, Game UX Designer/UI Programmer. You can reach me at <a href="mailto:mohammedzaksaj@gmail.com">mohammedzaksaj@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/2-circle.png" alt="Avatar of Zaki" style="width: 350px; height: 350px;" /> 
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