import ProjectData from '@/data/ProjectData.ts'

export default [
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
    `, "#1ca1e2", true),

    new ProjectData("job-connect-android", "Quick Cash", "img/projects/android-icon.png", `
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
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Map View Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Dashboard Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("dal-student-guide", "GuidetoDalonline", "img/projects/dal-guide-icon.png", `
    <div class="paragraph">
        <strong>UX Researcher & Frontend Developer</strong> | [Insert Dates]
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
    `, "#248232")
];