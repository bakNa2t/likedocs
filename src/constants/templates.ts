export const templates = [
  {
    id: "blank",
    label: "Blank document",
    imageUrl: "templates/blank-document.svg",
    initialContent: "",
  },
  {
    id: "blank-letter",
    label: "Letter",
    imageUrl: "templates/blank-letter.svg",
    initialContent: `
      <p>Subject: [Email Subject]</p>

      <p>Dear [Recipient],</p>

      <p>I hope this email finds you well.</p>

      <p>Best regards,<br>
      [Your Name]
      </p>
    `,
  },
  {
    id: "blank-cover-letter",
    label: "Cover letter",
    imageUrl: "templates/blank-cover-letter.svg",
    initialContent: `
      <p>[Your Name]<br>
      [Your Address]<br>
      [City, State, ZIP]<br>

      <p>[Date]</p>

      <p>[Recipient's Name]<br>
      [Company Name]<br>
      [Company Address]<br>

      <p>Dear [Recipient's Name],</p>

      <p>I am writing to express my interest in the [Position] at [Company Name].</p>

      <p>Sincerely,<br>
      [Your Name]
      </p>
    `,
  },
  {
    id: "blank-resume",
    label: "Resume",
    imageUrl: "templates/blank-resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>

      <h2>Professional Summary</h2>
      <p>
          Brief overview of your professional background and key strengths.
      </p>

      <h2>Work Experience</h2>
      <p>
          [Company Name] - [Position]<br>
          [Data Range] 
      </p>

      <h2>Education</h2>
      <p> [Degree] - [Institution]<br>
      [Graduation Year] </p>

      <h2>Skills</h2>
      <p>List of relevant skills and competencies.</p>
    `,
  },
  {
    id: "blank-bisuiness-letter",
    label: "Business letter",
    imageUrl: "templates/blank-business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>
      <p>This is a business letter template.</p>
    `,
  },
  {
    id: "blank-project-proposal",
    label: "Project proposal",
    imageUrl: "templates/blank-project-proposal.svg",
    initialContent: `
      <h1>Software Propsal</h1>
      <h2>Executive Summary</h2>
      <p>
          Brief overview of the project propsal.
      </p>

      <h2>Project Goals</h2>
      <p>
          Key objectives and expected outcomes.
      </p>

      <h2>Implementation Plan</h2>
      <p> Strategy and methodology for project execution. </p>

      <h2>Resources Required</h2>
      <p>Team, equipment, and budget requirements.</p>
    `,
  },
  {
    id: "blank-software-proposal",
    label: "Software development proposal",
    imageUrl: "templates/blank-software-proposal.svg",
    initialContent: `
      <h1>Software Development Propsal</h1>
      <h2>Project Overview</h2>
      <p>
          Brief description of the proposed seftware development project.
      </p>

      <h2>Scope of Work</h2>
      <p>
          Detailed breakdown of project deliverables and requirements.
      </p>

      <h2>Timeline</h2>
      <p> Project milestones and delivery schedule. </p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
];
