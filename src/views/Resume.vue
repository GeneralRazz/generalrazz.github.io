<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Mohammed Zaki</strong>, a motivated and adaptable Bachelor of Applied Computer Science student at Dalhousie University. 
      <br />With a solid foundation in Java, C#, and JavaScript, I specialize in web and mobile development using tools like React and Android Studio.
      <br />I have demonstrated strong problem-solving and teamwork skills, notably serving as a Senior Developer on an accessibility-focused project.
      <br />I bring a blend of technical expertise in SDLC and UI/UX with a proven track record in customer-facing roles.
      <br />
      <br />I am currently seeking opportunities to apply my technical skills and leadership experience in a professional software development environment. If you have an opportunity, feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides coding, I am passionate about UI/UX design, games, and collaborative problem-solving.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="#" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/avatar-og.png" alt="Photo of Zaki" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>IT Analyst Intern - Air Arabia</h3>
      <h4>May 2025 – Aug 2025</h4>
      <div>Provided attentive, personalized technical support and delivered clear software demonstrations to staff across multiple departments.</div>
      <div class="tech-stack">Technical Support, Software Demos, Cross-departmental Collaboration</div>

      <h3>Marketing Representative - Wizeprep</h3>
      <h4>Oct 2024 – Mar 2025</h4>
      <div>Achieved sales targets by 15% through direct engagement and strengthened student trust by addressing inquiries in-person.</div>
      <div class="tech-stack">Sales Strategy, Brand Awareness, Relationship Building</div>

      <h3>Summer Associate - Buy Fresh Hypermarket</h3>
      <h4>May – August 2024</h4>
      <div>Improved data accuracy by updating 200+ invoices and ensured high-demand items were consistently available through efficient inventory coordination.</div>
      <div class="tech-stack">Inventory Management, Data Accuracy, Customer Service</div>

      <h2>Volunteer Experience</h2>

      <h3>Social Media Representitive - Dalhousie Esports Society</h3>
      <h4>May 2024 – Present</h4>
      <div>Conducted interviews with team members, players, or guests for Instagram to engage the community and highlight key personalities.<br>
      Created and posted engaging content for Twitter, including updates, match results, announcements, and promotional material.
      Promoted society events, such as tournaments, tryouts, and community meetups, on social media platforms.</div>
      <div class="tech-stack">Social Media, Content Creation, Community Engagement</div>

      <h3>Counter-Strike Player - Dalhousie Esports Society</h3>
      <h4>Jan 2023 – Present</h4>
      <div>2025-2026: Dal Tigers(IGL)<br>
            2024-2025: Dal Tigers<br>
            2023-2024: Dal Gold<br>
            2022-2023: Dal Black (Sub)
            </div>
      <div class="tech-stack">Leadership, Team Management, Strategy</div>
      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="Java / C#" :rate="4" />
        <SkillRate name="JavaScript / React" :rate="4" />
        <SkillRate name="HTML / CSS" :rate="5" />
        <SkillRate name="Android Studio" :rate="4" />
        <SkillRate name="Unit Testing" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Professional</h3>
        <SkillRate name="Customer Service" :rate="5" />
        <SkillRate name="Team Leadership" :rate="4" />
        <SkillRate name="Problem Solving" :rate="5" />
        <SkillRate name="Communication" :rate="5" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Dalhousie University - 2022-2026</h3>
      <h4>Bachelor of Applied Computer Science</h4>
      <h4>Certificate in User Experience Design and Evaluation</h4>
      <div>CGPA: 3.35 | Expertise in Project Management, UI/UX, and Game Development.</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent with strong written and verbal communication developed through help desk and customer engagement.</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Esports</h3>
        <div>I served as a player and manager on Dalhousie's Counter-Strike team, prioritizing teamwork and strategy.</div>

        <h3>I 🧡 Collaboration</h3>
        <div>I thrive in agile team environments and have a proven ability to coordinate with team members to achieve inventory and service goals.</div>

        <h3>I 💛 Innovation</h3>
        <div>I am constantly learning new frameworks like React Native and Expo to build modern, component-based mobile applications.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>