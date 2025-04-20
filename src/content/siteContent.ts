
export const websiteTheme = {
  light: {
    primary: {
      main: '#6366f1', // indigo-500
      light: '#818cf8', // indigo-400
      dark: '#4f46e5', // indigo-600
    },
    secondary: {
      main: '#8b5cf6', // violet-500
      light: '#a78bfa', // violet-400
      dark: '#7c3aed', // violet-600
    },
    accent: {
      main: '#ec4899', // pink-500
      light: '#f472b6', // pink-400
      dark: '#db2777', // pink-600
    },
    background: {
      paper: '#ffffff',
      default: '#f9fafb',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
    },
  },
  dark: {
    primary: {
      main: '#818cf8', // indigo-400
      light: '#a5b4fc', // indigo-300
      dark: '#6366f1', // indigo-500
    },
    secondary: {
      main: '#a78bfa', // violet-400
      light: '#c4b5fd', // violet-300
      dark: '#8b5cf6', // violet-500
    },
    accent: {
      main: '#f472b6', // pink-400
      light: '#f9a8d4', // pink-300
      dark: '#ec4899', // pink-500
    },
    background: {
      paper: '#1f2937',
      default: '#111827',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
    },
  },
};

export const siteContent = {
  siteInfo: {
    name: "WaveScroll",
    tagline: "Modern web experiences that engage and convert",
    description: "Creating stunning, high-performance websites with modern web technologies and animated interfaces.",
    logo: "/logo.svg",
    email: "contact@wavescroll.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "100 Tech Avenue",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "USA"
    },
    social: {
      twitter: "https://twitter.com/wavescroll",
      facebook: "https://facebook.com/wavescroll",
      instagram: "https://instagram.com/wavescroll",
      linkedin: "https://linkedin.com/company/wavescroll",
      github: "https://github.com/wavescroll"
    }
  },
  
  navigation: {
    main: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Articles', path: '/articles' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
    footer: [
      { name: 'Terms', path: '/terms' },
      { name: 'Privacy', path: '/privacy' },
      { name: 'Cookies', path: '/cookies' },
    ]
  },
  
  hero: {
    headline: "Build Beautiful Digital Experiences",
    subheadline: "Create stunning, high-performance websites with modern web technologies and animated interfaces",
    ctaText: "Explore Features",
    secondaryCta: "Learn More",
    backgroundImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    backgroundVideo: "https://example.com/video.mp4",
    features: [
      "Responsive Design", 
      "Modern Technologies", 
      "Stunning Animations"
    ]
  },
  
  features: [
    {
      icon: "Laptop",
      title: "Responsive Design",
      description: "Perfectly adapts to any screen size, ensuring an optimal viewing experience on all devices.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      color: "indigo"
    },
    {
      icon: "Code",
      title: "Modern Technologies",
      description: "Built with the latest web technologies like React, Tailwind CSS, and Framer Motion.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      color: "purple"
    },
    {
      icon: "Palette",
      title: "Stunning UI",
      description: "Beautiful, customizable interface components with smooth animations and transitions.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      color: "pink"
    },
    {
      icon: "CheckCircle",
      title: "SEO Optimized",
      description: "Built with best practices to help your website rank higher in search results.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      color: "blue"
    }
  ],
  
  showcase: {
    title: "Transform Your Web Presence",
    description: "Our modern template provides everything you need to create a professional, engaging website that converts visitors into customers.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    stats: [
      { label: "Happy Clients", value: "500+" },
      { label: "Projects Completed", value: "1,000+" },
      { label: "Awards Won", value: "25+" },
      { label: "Team Members", value: "50+" }
    ],
    features: [
      {
        title: "Responsive Design",
        description: "Websites that look great on any device - desktop, tablet, or mobile."
      },
      {
        title: "Performance Optimized",
        description: "Fast-loading pages that keep users engaged and improve SEO ranking."
      },
      {
        title: "Accessible Design",
        description: "Inclusive experiences that work for all users regardless of abilities."
      }
    ]
  },
  
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "UX Designer at Designcraft",
      quote: "The animations and transitions in this template are exceptional. It's refreshing to see such attention to detail in both design and functionality.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    },
    {
      name: "Mark Wilson",
      role: "Founder, TechStart",
      quote: "This template saved our team weeks of development time. The code is clean, well-structured, and incredibly easy to customize.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Marketing Director",
      quote: "After switching to this template, our conversion rate increased by 30%. The user experience is smooth and engaging, exactly what we needed.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      rating: 4
    },
    {
      name: "James Rodriguez",
      role: "CTO, InnoTech",
      quote: "The dark mode implementation and animations are top-notch. Our development team was impressed with the clean code structure.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      rating: 5
    }
  ],
  
  team: [
    {
      name: "David Miller",
      role: "Lead Developer",
      bio: "With over 10 years of experience in web development, David specializes in React and modern JavaScript frameworks.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      social: {
        twitter: "https://twitter.com/davidmiller",
        linkedin: "https://linkedin.com/in/davidmiller",
        github: "https://github.com/davidmiller"
      }
    },
    {
      name: "Sophie Chen",
      role: "UI/UX Designer",
      bio: "Sophie brings creative solutions to complex design challenges, focusing on user-centered design principles.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      social: {
        twitter: "https://twitter.com/sophiechen",
        linkedin: "https://linkedin.com/in/sophiechen",
        dribbble: "https://dribbble.com/sophiechen"
      }
    },
    {
      name: "James Taylor",
      role: "Frontend Developer",
      bio: "James is passionate about creating smooth, interactive user experiences with attention to performance and accessibility.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      social: {
        twitter: "https://twitter.com/jamestaylor",
        linkedin: "https://linkedin.com/in/jamestaylor",
        github: "https://github.com/jamestaylor"
      }
    },
    {
      name: "Olivia Kim",
      role: "Content Strategist",
      bio: "Olivia helps brands tell their stories effectively through compelling content and strategic messaging.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      social: {
        twitter: "https://twitter.com/oliviakim",
        linkedin: "https://linkedin.com/in/oliviakim",
        medium: "https://medium.com/@oliviakim"
      }
    }
  ],

  services: [
    {
      title: "Web Design",
      description: "We create beautiful, functional websites that engage your audience and convert visitors into customers.",
      icon: "Palette",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      features: [
        "Responsive Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design"
      ]
    },
    {
      title: "Web Development",
      description: "Our developers build high-performance websites and web applications using modern technologies.",
      icon: "Code",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      features: [
        "Frontend Development",
        "Backend Development",
        "CMS Integration",
        "E-commerce Solutions",
        "Progressive Web Apps"
      ]
    },
    {
      title: "Digital Marketing",
      description: "We help you reach your target audience and grow your business online with strategic digital marketing.",
      icon: "Search",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      features: [
        "Search Engine Optimization",
        "Content Marketing",
        "Social Media Management",
        "Email Marketing",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Brand Identity",
      description: "We develop cohesive brand identities that help your business stand out from the competition.",
      icon: "Layout",
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Messaging",
        "Brand Strategy"
      ]
    }
  ],
  
  articles: [
    {
      id: "1",
      title: "10 Web Design Trends to Watch in 2023",
      excerpt: "Stay ahead of the curve with these emerging web design trends that are shaping the digital landscape in 2023.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl.",
      author: {
        name: "Sophie Chen",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
      },
      date: "2023-03-15",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      category: "Design",
      tags: ["web design", "trends", "UI/UX"],
      readTime: "5 min"
    },
    {
      id: "2",
      title: "The Future of JavaScript: What's Next?",
      excerpt: "Explore the upcoming features and developments in the JavaScript ecosystem that developers should keep an eye on.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl.",
      author: {
        name: "David Miller",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
      },
      date: "2023-02-28",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
      category: "Development",
      tags: ["javascript", "web development", "programming"],
      readTime: "8 min"
    },
    {
      id: "3",
      title: "Improving Website Accessibility: A Complete Guide",
      excerpt: "Learn how to make your website accessible to all users, including those with disabilities.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl.",
      author: {
        name: "James Taylor",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      date: "2023-02-15",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66",
      category: "Accessibility",
      tags: ["accessibility", "web standards", "inclusive design"],
      readTime: "10 min"
    },
    {
      id: "4",
      title: "Optimizing Website Performance for Better User Experience",
      excerpt: "Discover strategies to improve your website's loading speed and overall performance.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl.",
      author: {
        name: "David Miller",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
      },
      date: "2023-01-20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Performance",
      tags: ["optimization", "speed", "user experience"],
      readTime: "7 min"
    },
    {
      id: "5",
      title: "Creating Effective Content Strategy for Your Website",
      excerpt: "Learn how to develop a content strategy that engages your audience and supports your business goals.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl.",
      author: {
        name: "Olivia Kim",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      date: "2023-01-05",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      category: "Content",
      tags: ["content strategy", "marketing", "copywriting"],
      readTime: "6 min"
    },
    {
      id: "6",
      title: "The Rise of AI in Web Development",
      excerpt: "Explore how artificial intelligence is transforming the web development landscape.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl sit amet nisl.",
      author: {
        name: "Sophie Chen",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
      },
      date: "2022-12-10",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      category: "Technology",
      tags: ["AI", "automation", "future tech"],
      readTime: "9 min"
    }
  ],
  
  contact: {
    title: "Get in Touch",
    subtitle: "Have a question or want to work together? We'd love to hear from you.",
    email: "contact@wavescroll.com",
    phone: "+1 (555) 123-4567",
    address: "100 Tech Avenue, San Francisco, CA 94107",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0894983650735!2d-122.40055548411242!3d37.78317997975805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd1fba5c37a768d!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1649811684272!5m2!1sen!2sus"
  },
  
  footer: {
    socialLinks: [
      { name: "Twitter", url: "https://twitter.com/wavescroll", icon: "Twitter" },
      { name: "GitHub", url: "https://github.com/wavescroll", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com/company/wavescroll", icon: "Linkedin" }
    ],
    copyright: `© ${new Date().getFullYear()} WaveScroll. All rights reserved.`
  }
};
