// ---------------------------------------------------------------------------
// SITE CONFIGURATION — edit this file to update your profile, links and resume.
// All values below come from the resume (Wakchaure Onkar Kishor).
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Onkar Wakchaure',
  fullName: 'Onkar Kishor Wakchaure',
  initials: 'OW',
  // Profile photo: put your real photo at public/images/onkar-profile.jpg.
  // Until that file exists, a neutral initials placeholder is shown instead.
  photo: {
    src: '/images/onkar-profile.jpg',
    fallback: '/images/profile-placeholder.svg',
    alt: 'Onkar Wakchaure — Data Science and Analytics portfolio',
  },
  headline: 'Data Science | Data Analytics | Machine Learning',
  role: 'Data Science Intern',
  location: 'Akole, Maharashtra, India',
  email: 'onkarwakchaure17@gmail.com',
  // Intentionally not shown on the site. Add a number here only if you want it displayed.
  phone: '',
  tagline: 'Turning raw data into clear, actionable insights.',
  availability: 'Open to entry-level Data Analyst, Data Science and ML Intern roles',
  intro:
    'Data Science fresher with hands-on internship experience in Python, SQL and Power BI. I clean data, explore it, and build dashboards that help teams make data-driven decisions.',
  about: [
    'I recently completed my Bachelor of Computer Applications (BCA) at SPPU University and am currently working as a Data Science Intern at DASA TECHNOWORLD PVT LTD.',
    'My day-to-day work covers data cleaning, exploratory data analysis and Power BI dashboards. I enjoy turning raw data into clear insights and presenting them to non-technical stakeholders.',
    'I have a strong foundation in statistics and machine learning, and I am eager to apply my analytical skills to help organizations turn raw data into actionable business insights.',
  ],
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'SPPU University',
    date: 'Mar 2026',
  },
};

// Profile links (taken from the resume). Must start with https://
export const social = {
  github: 'https://github.com/Onkar9823',
  linkedin: 'https://www.linkedin.com/in/onkar-wakchaure',
};

// Resume download. Put your PDF in the `public/resume/` folder.
// The path is relative to the website root: public/resume/X.pdf  ->  /resume/X.pdf
export const resume = {
  path: '/resume/Onkar_Wakchaure_Resume.pdf',
  downloadName: 'Onkar_Wakchaure_Resume.pdf',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
