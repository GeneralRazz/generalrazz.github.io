<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Mohammed Zaki</strong>, a UX certified Computer Science graduate from Dalhousie University with hands-on experience in full-stack and mobile application development.
      <br />Skilled in Java, C#, JavaScript, React, and React Native, with a strong foundation in data structures, UI/UX, and software development lifecycle.
      <br />I have demonstrated ability to lead and deliver impactful projects including accessibility-focused solutions and interactive applications.
      <br />
      <br />I am currently seeking opportunities to apply my  skills and leadership experience in a professional software/UI development environment. If you have an opportunity, feel free to
      <router-link to="/contact">contact me</router-link>.
      <br />
      

      <div style="margin-top:20px; margin-bottom:20px;">
       <a class="download-link" href="/Mohammed_Zaki_Resume.pdf" download="Mohammed_Zaki_Resume.pdf" target="_blank">
  <i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/avatar-og.jpg" alt="Photo of Zaki" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Education</h2>

      <h3>Dalhousie University – 2022–2026</h3>
      <h4>Bachelor of Applied Computer Science</h4>
      <h4>Certificate in User Experience Design and Evaluation</h4>
      <div>CGPA: 3.35 | Relevant Coursework: Human-Computer Interaction, UI Design, Mobile Computing, Game Development &amp; Usable Security.</div>

      <h3>The Cambridge High School – Graduated 2022</h3>
      <h4>High School Diploma | Abu Dhabi, UAE</h4>
      <h2>Work Experience</h2>

      <h3>IT Analyst Intern - Air Arabia</h3>
      <h4>May 2025 – Aug 2025 | Sharjah, UAE</h4>
      <div>
        <ul>
          <li>Provided technical support to staff across departments, improving issue resolution efficiency and user satisfaction.</li>
          <li>Delivered hands-on demonstrations and simplified technical concepts for non-technical users.</li>
          <li>Collaborated within an agile team to troubleshoot system issues and meet operational targets.</li>
        </ul>
      </div>
      <div class="tech-stack">Technical Support, Software Demos, Agile, Cross-departmental Collaboration</div>

      <h3>Sales Representative - Neo Financial</h3>
      <h4>Feb 2026 – Apr 2026 | Halifax, Canada</h4>
      <div>
        <ul>
          <li>Consistently met and exceeded weekly sales targets for financial products.</li>
          <li>Used real-time performance tracking tools to optimize sales approach.</li>
          <li>Strengthened communication and customer engagement skills in a fast-paced environment.</li>
        </ul>
      </div>
      <div class="tech-stack">Sales Strategy, Performance Tracking, Customer Engagement</div>

      <h3>Social Media Intern - AMC Academy</h3>
      <h4>Dec 2024 – Mar 2025 | Halifax, Canada</h4>
      <div>
        <ul>
          <li>Increased engagement by creating targeted, trend-driven content based on user interaction insights.</li>
          <li>Improved brand visibility through audience-focused content strategies.</li>
          <li>Developed strong digital communication and content planning skills.</li>
        </ul>
      </div>
      <div class="tech-stack">Social Media, Content Creation, Brand Awareness</div>

      <h3>Summer Intern - Abu Dhabi Islamic Bank</h3>
      <h4>Jul 2023 – Aug 2023 | Abu Dhabi, UAE</h4>
      <div>
        <ul>
          <li>Supported risk management processes and documentation.</li>
          <li>Gained exposure to compliance frameworks and data security practices.</li>
          <li>Assisted in evaluating operational risks and internal procedures.</li>
        </ul>
      </div>
      <div class="tech-stack">Risk Management, Compliance, Data Security</div>

      <h2>Volunteer Experience</h2>

      <h3>Social Media Representative - Dalhousie Esports Society</h3>
      <h4>May 2024 – Present</h4>
      <div>Conducted interviews with team members, players, or guests for Instagram to engage the community and highlight key personalities.<br>
      Created and posted engaging content for Twitter, including updates, match results, announcements, and promotional material.<br>
      Promoted society events, such as tournaments, tryouts, and community meetups, on social media platforms.</div>
      <div class="tech-stack">Social Media, Content Creation, Community Engagement</div>

      <h3>Counter-Strike Player - Dalhousie Esports Society</h3>
      <h4>Jan 2023 – Present</h4>
      <div>
        2025–2026: Dal Tigers (IGL)<br>
        2024–2025: Dal Tigers<br>
        2023–2024: Dal Gold<br>
        2022–2023: Dal Black (Sub)
      </div>
      <div class="tech-stack">Leadership, Team Management, Strategy</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="Java / C#" :rate="4" />
        <SkillRate name="JavaScript / React" :rate="4" />
        <SkillRate name="React Native" :rate="4" />
        <SkillRate name="HTML / CSS" :rate="5" />
        <SkillRate name="Android Studio" :rate="4" />
        <SkillRate name="Unity / Blender" :rate="3" />
        <SkillRate name="Python" :rate="3" />
        <SkillRate name="Unit Testing" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Design & UX</h3>
        <SkillRate name="UI/UX Design" :rate="4" />
        <SkillRate name="Wireframing" :rate="4" />
        <SkillRate name="Figma / Canva" :rate="4" />
        <SkillRate name="Usability Testing" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Professional</h3>
        <SkillRate name="Customer Service" :rate="5" />
        <SkillRate name="Team Leadership" :rate="4" />
        <SkillRate name="Problem Solving" :rate="5" />
        <SkillRate name="Communication" :rate="5" />
        <SkillRate name="Agile / SDLC" :rate="4" />
      </div>

      <div style="clear:both" />


  

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Esports</h3>
        <div>I served as a player and IGL on Dalhousie's Counter-Strike team, prioritizing teamwork and strategy.</div>

        <h3>I 🧡 Collaboration</h3>
        <div>I thrive in agile team environments and have a proven ability to coordinate across teams to deliver impactful products.</div>

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