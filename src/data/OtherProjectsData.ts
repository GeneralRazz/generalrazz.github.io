import ProjectData from '@/data/ProjectData.ts'

export default [
     new ProjectData("collect", "Collect", "/img/Collect/icon.png", `
        <div class="paragraph">
            <strong>Full Stack Developer & Designer</strong>
            <br/>Collect is a social mobile app that enables users to discover and share projects through rich media content. Built with a focus on smooth user experience and scalable cloud infrastructure.
        </div>
    
        <div class="paragraph">
            Key Contributions:
            <ul>
            <li><strong>Design:</strong> Created wireframes and interactive design prototypes to define the app's visual language and user flows.</li>
            <li><strong>Mobile Development:</strong> Developed a full-featured social app with media sharing, user profiles, and interactive feeds.</li>
            <li><strong>UI/UX:</strong> Designed a responsive interface with smooth animations to enhance overall user experience.</li>
            <li><strong>Cloud Infrastructure:</strong> Integrated Firebase for real-time database and authentication, and Cloudflare R2 for scalable media storage.</li>
            <li><strong>Reliability:</strong> Improved system stability by diagnosing and resolving media synchronization issues across devices.</li>
            </ul>
        </div>
    
        <div class="paragraph">
            <div class="notice">
                Built with React Native, Firebase, and Cloudflare R2. Focused on Mobile Development, UI/UX Design, and Cloud Architecture.
            </div>
        </div>

        <div class="paragraph center">
        <video class="pc-screenshot" autoplay loop muted playsinline>
        <source src="/img/Collect/Collectscreen.mp4" type="video/mp4" />
    </video>

    </div>
         <div class="paragraph center">
    <img class="pc-screenshot" src="/img/Collect/icon.PNG" alt="Signin" />
    <img class="pc-screenshot" src="/img/Collect/1.PNG" alt="Dashboard" />
    <img class="pc-screenshot" src="/img/Collect/2.PNG" alt="About Us" />
    <img class="pc-screenshot" src="/img/Collect/3.PNG" alt="Profile" />
    <img class="pc-screenshot" src="/img/Collect/4.PNG" alt="Feed" />
    
    </div>
        `, "#3FA770", true),
    new ProjectData("eye-tracking-extension", "Eye-Tracking Web Accessibility Extension", "img/projects/eye-tracking-icon.png", 
    `
    <div class="paragraph">
     <strong>Senior Developer</strong> | Jan 2025 - Apr 2025
     <br/>A Google Chrome extension designed to enable hands-free website navigation for users with limited mobility. Built on WebGazer.js, it translates real-time ocular data into system-level mouse interactions.
    </div>

    <div class="paragraph">
        Key Contributions:
        <ul>
        <li><strong>Architecture & DevOps:</strong> Established the project repository and a robust Git branching strategy for stable feature integration.</li>
        <li><strong>API Integration:</strong> Technical lead for integrating WebGazer.js to capture and process real-time gaze data within the browser.</li>
        <li><strong>Full-Stack Mouse Control:</strong> Developed a Python-based server that translates browser gaze coordinates into system-level movements.</li>
        <li><strong>Precision Engineering:</strong> Implemented a data persistence layer to maintain user calibration settings across multiple sessions.</li>
        <li><strong>Optimization:</strong> Improved cursor accuracy and normalized responsiveness by refining event-handling logic and custom delay adjustments.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Built with JavaScript, HTML, Python, and WebGazer.js. Focused on UX and Accessibility.
        </div>
    </div>
    `, "#1ca1e2"),

    new ProjectData("job-connect-android", "Quick Cash", "img/QuickCash/icon.png", `
    <div class="paragraph">
        <strong>Android Developer</strong> | Jan 2025 - Mar 2025
        <br/>A dual-sided Android application for the gig economy, connecting employers with local job seekers for quick, task-based work.
    </div>

    <div class="paragraph">
        Key Contributions:
        <ul>
        <li><strong>Google Maps Integration:</strong> Integrated Google Maps API to allow users to view job locations via interactive map markers with detailed job snippets.</li>
        <li><strong>Authentication & Security:</strong> Implemented Firebase-backed secure login, user registration (Role-based), and a complete "Forgot Password" recovery workflow.</li>
        <li><strong>Notification System:</strong> Developed automated push notifications to alert employees when new jobs matching their preferred list are posted.</li>
        <li><strong>Application Workflow:</strong> Built a comprehensive job application system, allowing users to view detailed requirements and attach resumes directly.</li>
        <li><strong>Dashboard & UI:</strong> Designed a role-based dashboard with standardized navigation and a "Preferred Employee/Job" list for persistent user preferences.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Built with Android Studio, Firebase, Google Maps API, and Payment APIs.
        </div>
    </div>

   <div class="paragraph center">
    
    <img class="pc-screenshot" src="/img/QuickCash/3.png" alt="Dashboard" />
    <img class="pc-screenshot" src="/img/QuickCash/2.png" alt="Job Details" />
    <img class="pc-screenshot" src="/img/QuickCash/1.png" alt="User List" />
    
    </div>
    `, "#383838", true),
    new ProjectData("dal-student-guide", "GuidetoDalonline", "img/Guide/GuideIcon.png", `
    <div class="paragraph">
        <strong>UX Researcher & Frontend Developer</strong>
        <br/>Collaborated in an Agile team to design and develop a comprehensive web-based guide tailored for incoming Dalhousie University students.
    </div>

    <div class="paragraph">
        Key Contributions:
        <ul>
        <li><strong>User Requirement Analysis:</strong> Conducted initial research to identify the pain points of new students, translating these needs into functional website requirements.</li>
        <li><strong>Agile Methodology:</strong> Participated in structured sprints, including planning, backlog prioritization, and iterative development cycles. </li>
        <li><strong>Frontend Development:</strong> Built responsive and accessible web layouts using clean HTML5 and CSS3, ensuring a seamless experience across different devices.</li>
        <li><strong>Collaborative Design:</strong> Worked closely with team members to ensure design consistency and information architecture aligned with Dalhousie’s branding and student needs.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Built with HTML5, CSS3, and Git. Focused on Agile Project Management and UX Research.
        </div>
    </div>

     <div class="paragraph center">
       <video class="pc-screenshot" style="width: 100%; max-width: 100%;" autoplay loop muted playsinline>
    <source src="/img/Guide/guide.mkv" type="video/x-matroska" />
</video>
    </div>
    `, "#248232")
];