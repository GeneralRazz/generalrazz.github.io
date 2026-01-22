import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("ggj-launcher", "Global Game Jam Launcher", "img/projects/ggj-icon.png", 
    `
    <div class="paragraph">
     <strong>Development Director</strong> | Oct 2025 - Dec 2025
     <br/>Developed for the Dalhousie University Goldberg building, this project creates an interactive experience on a large touchscreen to showcase games created during the Global Game Jam.
    </div>

    <div class="paragraph">
        Key Contributions:
        <ul>
        <li>Managed the full development roadmap, sprint task allocation, and backlog grooming.</li>
        <li>Facilitated regular client meetings to align development goals with stakeholder expectations.</li>
        <li>Ensured code quality by managing merge requests and fixing high-priority bugs in Unity.</li>
        <li>Mentored team members on technical roadblocks to improve overall team velocity.</li>
        <li>Delivered a finalized product with comprehensive technical documentation and environment setups.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Built with Unity. Focused on Project Management, Team Leadership, and Client Relations.
        </div>
    </div>
    `, "#23bd69", true),

    new ProjectData("reflection", "REFLECTION", "img/projects/reflection-icon.png", `
    <div class="paragraph">
        <strong>Technical Artist & Audio Engineer</strong> | Oct 2025 - Dec 2025
        <br/>REFLECTION is a first-person horror puzzle game where players navigate between two overlapping realities. Developed in six weeks for CSCI 4168 at Dalhousie University.
    </div>

    <div class="paragraph">
        Key Contributions:
        <ul>
        <li><strong>3D Modeling:</strong> Performed custom Blender work to edit models, customize textures, and create a unique enemy model.</li>
        <li><strong>AI Audio:</strong> Implemented a custom DialogueSystem using ElevenLabs AI with emotional prompting and radio filters for immersive narrative.</li>
        <li><strong>Systems Development:</strong> Developed UI scripts and dialogue triggers synchronized with player objectives and positioning.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Built with Unity and Blender. Focused on Audio Post-Production and Technical Art.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="REFLECTION Gameplay" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="REFLECTION Environment" />
    </div>
    `, "#5a78af"),

    new ProjectData("dpl-studios", "DPL Studios", "img/projects/dpl-icon.png", `
    <div class="paragraph">
        <strong>Junior Developer</strong> | Jan 2024 - Apr 2024
        <br/>Contributed to game logic, web presence, and UI/UX optimization for specialized educational modules.
    </div>

    <div class="paragraph">
        Key Contributions:
        <ul>
        <li><strong>Game Logic:</strong> Developed a modular scoring system with point-reduction penalties for incorrect answers.</li>
        <li><strong>Web Development:</strong> Designed and deployed the official project website with a responsive header/footer architecture.</li>
        <li><strong>UI/UX:</strong> Standardized color palettes for the "Café Module" and designed granular end-game scoring screens.</li>
        <li><strong>Physics:</strong> Tuned car collider components to prevent mesh overlapping and resolved critical player-stat bugs.</li>
        <li><strong>State Management:</strong> Implemented logic to reset module-specific points for accurate localized scoring.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Built with Unity, React.js, and Git.
        </div>
    </div>
    `, "#383838")
];