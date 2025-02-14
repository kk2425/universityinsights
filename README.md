Project Title: Study MBBS Abroad - Landing Page
Project Overview:
This project is a responsive landing page for "Study MBBS Abroad" built using HTML, CSS (Tailwind), and JavaScript. The page includes country listings, program details, a lead generation form, and integrations for performance tracking (Google Analytics & Facebook Pixel).

Features:
Responsive Design: Mobile-first approach for all devices.
Lead Generation Form: Validates user inputs before submission.
Country Listings: Displays top countries for MBBS programs.
SEO Optimized: Meta tags and content are optimized for search engines.
Tracking Integrations: Includes Google Analytics & Facebook Pixel for user tracking and conversions.

View Live Demo: You can view the live deployment of this project here: 

Section Overview:
Hero Section: The hero section contains an engaging banner with a CTA ("Apply Now for MBBS Abroad"). It is designed to capture the user's attention instantly with a large heading and a compelling image.

Why Study MBBS Abroad: This section highlights the benefits of studying MBBS in foreign countries. It uses bullet points to make the content more digestible.

Top Countries: Displays the top countries where students can pursue MBBS, including Russia, Uzbekistan, Kazakhstan, Philippines, Georgia, Kyrgyzstan, and Egypt. Each country card has an image with a short description.

Admission Process & Eligibility: A visual step-by-step guide for students to follow the application process. It includes eligibility criteria and the necessary steps to apply.

Lead Generation Form: The contact form gathers basic information (name, email, phone number, country preference). Validation ensures the fields are filled before submission.

Google Analytics & Facebook Pixel Integration: Google Analytics and Facebook Pixel are integrated to track page visits and conversions. These scripts help monitor the performance of the landing page and provide insights into user behavior.

Google Analytics & Facebook Pixel Setup:
Google Analytics: Google Analytics is integrated using the following script:

html
Copy
Edit
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
Facebook Pixel: Facebook Pixel is added using this snippet to track user actions:

html
Copy
Edit
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'FB_PIXEL_ID');
  fbq('track', 'PageView');
</script>
9. Brief Report
Design Choices (UI/UX):
The landing page follows a minimalistic design with a clean and organized layout. Key design principles:

Color Scheme: The primary color scheme uses shades of blue to convey trust, professionalism, and calmness. It aligns well with the logo of University Insights.

Typography: The font choices are simple and legible, with bold headings to grab attention and smaller, easy-to-read body text. I used different font weights to create a hierarchy of importance.

Layout: The layout is divided into sections for easy navigation. Each section has enough padding and margin to avoid crowding the content. A grid layout is used for the country listings, making it visually appealing and easy to scan.

Responsiveness: The page is designed to be fully responsive, adjusting layout and elements to fit well on different screen sizes (mobile, tablet, desktop). Flexbox and grid techniques are used to create fluid layouts.

SEO Optimization:
The page has meta tags for better search engine visibility, including a descriptive title and keywords that target users interested in studying MBBS abroad.
Proper use of heading tags (h1, h2, etc.) ensures that search engines can understand the structure and relevance of the content.
Alt attributes for all images further enhance the accessibility and SEO.
Lead Generation Form:
The lead generation form has three main fields: name, email, and phone, with validation in place to ensure no field is left empty and the email format is correct.
The form has clear labels, intuitive input fields, and placeholder text for ease of use.
On submission, the form can be extended to either store data in a database or send an email, depending on the backend implementation.
Tools Used:
Tailwind CSS: Tailwind CSS was used for styling, which helped maintain a consistent design language across the page with utility classes. It also made the page easily customizable and responsive.

Google Analytics: Integrated Google Analytics to track user activity, such as page views, time spent on the site, and more. This helps measure the landing page's effectiveness and user engagement.

Facebook Pixel: Used to monitor user actions, such as filling out the lead form, which helps in retargeting users on social media platforms.

Deployment: The project was deployed using Netlify, ensuring that it is accessible for review and testing.

