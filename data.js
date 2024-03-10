const dummyData = [
  {
      company_name: "Google",
      industry: "Technology",
      location: "Mountain View, California, USA",
      description: "Google is a multinational technology company specializing in Internet-related services and products, including search engines, cloud computing, software, and hardware.",
      company_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/1200px-Google_logo_%282010-2013%29.svg.png?20210912062906',
    jobs: [
      {
          job_title: "Software Engineer",
          job_type: "Full-time",
          employment: "Internship",
          duration:"3 months",
          experience_required: "0-1 years",
          skills_required: "Java, Python, JavaScript",
          vacancies: 5,
          location: "Mountain View, California, USA",
          salary: "₹12,000 - ₹15,000 per month",
          description: "As a Software Engineer at Google, you will be responsible for designing, developing, and maintaining software solutions for various Google products and services."
        },
        {
          job_title: "Data Scientist",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "5+ years",
          skills_required: "Python, Machine Learning, Data Mining",
          vacancies: 3,
          location: "Remote",
          salary: "₹130,000 - ₹160,000 per year",
          description: "As a Data Scientist at Google, you will analyze large datasets to extract insights and drive decision-making across various Google projects."
        }
    ]
  },
  {
      company_name: "Apple Inc.",
      industry: "Technology",
      location: "Cupertino, California, USA",
      description: "Apple Inc. is a multinational technology company known for designing, manufacturing, and selling consumer electronics, software, and services, including iPhones, iPads, Mac computers, and more.",
      company_logo: "https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_720_1280/0/1685279753620?e=1715212800&v=beta&t=8ziuNk2XVjNTIQ2IjTHwHS2q_nn0vBuq8QW4cGbcZoM",
    jobs: [
      {
          job_title: "iOS Developer",
          job_type: "Part-time",
          employment: "Internship",
          duration:"6 months",
          experience_required: "0 years",
          skills_required: "Swift, Objective-C, iOS SDK",
          vacancies: 2,
          location: "Cupertino, California, USA",
          salary: "₹1,100 - ₹1,400 per mounth",
          description: "As an iOS Developer at Apple Inc., you will develop and maintain mobile applications for Apple's iOS platform, ensuring high performance and responsiveness."
        },
        {
          job_title: "Hardware Engineer",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "4+ years",
          skills_required: "Electrical Engineering, PCB Design, Embedded Systems",
          vacancies: 1,
          location: "Cupertino, California, USA",
          salary: "₹120,000 - ₹150,000 per year",
          description: "As a Hardware Engineer at Apple Inc., you will design and develop hardware components for Apple's range of devices, including Macs, iPhones, and iPads."
        }
    ]
  },
  {
      company_name: "Microsoft Corporation",
      industry: "Technology",
      location: "Redmond, Washington, USA",
      description: "Microsoft Corporation is a leading technology company that develops, licenses, and supports a wide range of software products, services, and devices.",
      company_logo: "https://seeklogo.com/images/M/microsoft-logo-8EE94BD68A-seeklogo.com.png",
    jobs: [
      {
          job_title: "Software Development Engineer",
          job_type: "Full-time",
          employment: "Internship",
          duration:"1 months",
          experience_required: "0-1 years",
          skills_required: "Java, Python, Amazon Web Services (AWS)",
          vacancies: 7,
          location: "Seattle, Washington, USA",
          salary: "₹13,000 - ₹16,000 per month",
          description: "As a Software Development Engineer at Amazon, you will design and develop scalable software solutions for Amazon's e-commerce platform and AWS cloud services."
        },
        {
          job_title: "Data Engineer",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "5+ years",
          skills_required: "SQL, Python, Big Data technologies",
          vacancies: 4,
          location: "Remote",
          salary: "₹140,000 - ₹170,000 per year",
          description: "As a Data Engineer at Amazon, you will build and maintain scalable data pipelines, processing large volumes of data to support analytics and machine learning initiatives."
        }
    ]
  },
  {
      company_name: "Amazon.com Inc.",
      industry: "E-commerce, Technology",
      location: "Seattle, Washington, USA",
      description: "Amazon.com Inc. is a multinational technology and e-commerce company known for its online marketplace, cloud computing services (Amazon Web Services), digital streaming, and artificial intelligence.",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
    jobs: [
      {
          job_title: "Software Engineer",
          job_type: "Part-time",
          employment: "Internship",
          duration:"3 months",
          experience_required: "0-1 years",
          skills_required: "C#, .NET, Azure",
          vacancies: 6,
          location: "Redmond, Washington, USA",
          salary: "₹2,000 - ₹5,000 per month",
          description: "As a Software Engineer at Microsoft, you will design, develop, and deploy software solutions using Microsoft's technologies, such as .NET and Azure cloud platform."
        },
        {
          job_title: "Product Manager",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "5+ years",
          skills_required: "Product Management, Agile Methodologies, Leadership",
          vacancies: 3,
          location: "Redmond, Washington, USA",
          salary: "₹150,000 - ₹180,000 per year",
          description: "As a Product Manager at Microsoft, you will define and drive the product strategy, roadmap, and feature prioritization for Microsoft's products and services."
        }
    ]
  },
  {
      company_name: "Facebook",
      industry: "Technology, Social Media",
      location: "Menlo Park, California, USA",
      description: "Facebook is a social media and technology company that operates the largest social networking platform in the world, connecting billions of people globally.",
      company_logo: "https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo-500x281.png",
    jobs: [
      {
          job_title: "Software Engineer",
          job_type: "Full-time",
          employment: "Internship",
          duration:"6 months",
          experience_required: "0 years",
          skills_required: "JavaScript, React, Node.js",
          vacancies: 6,
          location: "Menlo Park, California, USA",
          salary: "₹4,000 - ₹7,000 per month",
          description: "As a Software Engineer at Facebook, you will work on developing and maintaining features for Facebook's social networking platform, focusing on scalability, performance, and user experience."
        },
        {
          job_title: "Data Analyst",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "2+ years",
          skills_required: "SQL, Data Visualization, Statistical Analysis",
          vacancies: 4,
          location: "Menlo Park, California, USA",
          salary: "₹120,000 - ₹150,000 per year",
          description: "As a Data Analyst at Facebook, you will analyze large datasets to identify trends, insights, and opportunities, supporting decision-making across various Facebook products and initiatives."
        }
    ]
  },
  {
      company_name: "Tesla, Inc.",
      industry: "Automotive, Energy, Technology",
      location: "Palo Alto, California, USA",
      description: "Tesla, Inc. is an electric vehicle and clean energy company known for its electric cars, solar energy products, and energy storage solutions.",
      company_logo: "https://freelogopng.com/images/all_img/1686390747tesla-logo-transparent.png",
      jobs: [
      {
          job_title: "Software Engineer - Autopilot",
          job_type: "Full-time and Part-time",
          employment: "Internship",
          duration:"1 months",
          experience_required: "0 years",
          skills_required: "C++, Robotics, Machine Learning",
          vacancies: 3,
          location: "Palo Alto, California, USA",
          salary: "₹5,000 - ₹10,000 per month",
          description: "As a Software Engineer on the Autopilot team at Tesla, you will develop and enhance autonomous driving features for Tesla vehicles, using cutting-edge technologies in robotics and machine learning."
        },
        {
          job_title: "Energy Storage Engineer",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "3+ years",
          skills_required: "Electrical Engineering, Battery Technology, Renewable Energy",
          vacancies: 2,
          location: "Fremont, California, USA",
          salary: "₹130,000 - ₹160,000 per year",
          description: "As an Energy Storage Engineer at Tesla, you will design and optimize energy storage solutions, including batteries and power electronics, to support Tesla's clean energy initiatives."
        }
    ]
  },
  {
      company_name: "Alibaba Group Holding Limited",
      industry: "E-commerce, Technology",
      location: "Hangzhou, China",
      description: "Alibaba Group Holding Limited is a multinational conglomerate specializing in e-commerce, retail, internet, and technology-based services, including online marketplaces, cloud computing, and digital payment systems.",
      company_logo: "https://preview.thenewsmarket.com/Previews/alib/StillAssets/1920x1440/239768.jpg",
    jobs: [
      {
          job_title: "Full-stack Developer",
          job_type: "Part-time",
          employment: "Internship",
          duration:"3 months",
          experience_required: "0-1 years",
          skills_required: "Java, Spring Boot, React",
          vacancies: 8,
          location: "Hangzhou, China",
          salary: "₹5,000 - ₹10,000 per month",
          description: "As a Full-stack Developer at Alibaba, you will be responsible for developing and maintaining end-to-end web applications for Alibaba's e-commerce platforms, ensuring high performance and scalability."
        },
        {
          job_title: "Data Scientist",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "5+ years",
          skills_required: "Python, Machine Learning, Big Data",
          vacancies: 6,
          location: "Hangzhou, China",
          salary: "₹160,000 - ₹200,000 per year",
          description: "As a Data Scientist at Alibaba, you will analyze large datasets to extract insights and develop machine learning models to improve business operations and customer experiences across Alibaba's platforms."
        }
    ]
  },
  {
      company_name: "Tencent Holdings Limited",
      industry: "Technology, Entertainment",
      location: "Shenzhen, China",
      description: "Tencent Holdings Limited is a Chinese multinational conglomerate known for its various internet-related services and products, including social networking, gaming, e-commerce, and artificial intelligence.",
      company_logo: "https://landscape.linuxfoundation.org/logos/tencent-holdings-limited.svg",
    jobs: [
      {
          job_title: "Software Engineer - Gaming",
          job_type: "Full-time",
          employment: "Internship",
          duration:"6 months",
          experience_required: "0 years",
          skills_required: "C++, Unity, Game Development",
          vacancies: 5,
          location: "Shenzhen, China",
          salary: "₹10,000 - ₹15,000 per month",
          description: "As a Software Engineer in the Gaming division at Tencent, you will develop and maintain game-related software and systems, contributing to the success of Tencent's gaming platforms and titles."
        },
        {
          job_title: "AI Research Scientist",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "5+ years",
          skills_required: "Machine Learning, Deep Learning, Natural Language Processing",
          vacancies: 3,
          location: "Shenzhen, China",
          salary: "₹180,000 - ₹220,000 per year",
          description: "As an AI Research Scientist at Tencent, you will conduct research and develop algorithms and models to advance the state-of-the-art in artificial intelligence, with applications across various Tencent products and services."
        }
    ]
  },
  {
      company_name: "Samsung Electronics Co., Ltd.",
      industry: "Technology, Consumer Electronics",
      location: "Suwon, South Korea",
      description: "Samsung Electronics Co., Ltd. is a global technology company specializing in consumer electronics, semiconductors, mobile devices, and home appliances.",
      company_logo: "https://www.iotone.com/files/vendor/samsung-semiconductor,-inc.--ssi-_6.jpg",
    jobs: [
      {
          job_title: "Android Developer",
          job_type: "Full-time and Part-time",
          employment: "Internship",
          duration:"1 months",
          experience_required: "0-1 years",
          skills_required: "Java, Android SDK, Kotlin",
          vacancies: 4,
          location: "Suwon, South Korea",
          salary: "₹5,000 - ₹8,000 per month",
          description: "As an Android Developer at Samsung, you will design and develop applications for Samsung's Android-based devices, ensuring compatibility, performance, and user experience."
        },
        {
          job_title: "Hardware Engineer",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "4+ years",
          skills_required: "Electrical Engineering, PCB Design, Embedded Systems",
          vacancies: 2,
          location: "Suwon, South Korea",
          salary: "₹60,000,000 - ₹90,000,000 per year",
          description: "As a Hardware Engineer at Samsung, you will design and develop hardware components for Samsung's range of consumer electronics products, including smartphones, TVs, and home appliances."
        }
    ]
  },
  {
      company_name: "Netflix, Inc.",
      industry: "Entertainment, Streaming",
      location: "Los Gatos, California, USA",
      description: "Netflix, Inc. is a leading entertainment company known for its subscription-based streaming service offering a wide range of movies, TV shows, and original content.",
      company_logo: "https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png",
    jobs: [
      {
          job_title: "Content Developer",
          job_type: "Full-time",
          employment: "Internship",
          duration:"3 months",
          experience_required: "0 years",
          skills_required: "Content Creation, Scriptwriting, Video Editing",
          vacancies: 3,
          location: "Los Gatos, California, USA",
          salary: "₹12,000 - ₹15,000 per month",
          description: "As a Content Developer at Netflix, you will create and develop engaging and compelling content for Netflix's streaming platform, contributing to the success and growth of Netflix's content library."
        },
        {
          job_title: "Data Engineer",
          job_type: "Full-time",
          employment: "Job",
          experience_required: "5+ years",
          skills_required: "SQL, Python, Big Data technologies",
          vacancies: 2,
          location: "Los Gatos, California, USA",
          salary: "₹140,000 - ₹170,000 per year",
          description: "As a Data Engineer at Netflix, you will build and maintain scalable data pipelines, processing large volumes of data to support analytics, personalization, and recommendation systems for Netflix's streaming service."
        }
    ]
  },
  
{
  company_name: "Infosys",
  industry: "Information Technology, Consulting",
  location: "Bangalore, India",
  description: "Infosys is a global leader in consulting, technology, and outsourcing solutions. It provides IT services and business solutions to clients across various industries.",
  company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png",
  jobs: [
    {
      job_title: "Java Developer",
      job_type: "Part-time",
      employment: "Internship",
      duration:"6 months",
      experience_required: "0-1 years",
      skills_required: "Java, Spring, Hibernate",
      vacancies: 10,
      location: "Bangalore, India",
      salary: "₹6,000 - ₹10,000 per month",
      description: "As a Java Developer at Infosys, you will be involved in the design, development, and implementation of Java-based applications, ensuring high quality and performance."
    },
    {
      job_title: "Data Scientist",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "3+ years",
      skills_required: "Python, Machine Learning, Data Analysis",
      vacancies: 8,
      location: "Bangalore, India",
      salary: "₹8,00,000 - ₹12,00,000 per year",
      description: "As a Data Scientist at Infosys, you will analyze large datasets, develop predictive models, and generate actionable insights to drive business decision-making and innovation."
    }
  ]
},
{
  company_name: "Kia",
  industry: "Software Development, IT Services",
  location: "Dhaka, Bangladesh",
  description: "Kia is a leading software development company in Bangladesh, specializing in IT services, software solutions, and consulting.",
  company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.png/1200px-Kia-logo.png?20200918211923",
  jobs: [
    {
      job_title: "Full-stack Developer",
      job_type: "Full-time",
      employment: "Internship",
      duration:"1 months",
      experience_required: "0 years",
      skills_required: "JavaScript, React, Node.js",
      vacancies: 5,
      location: "Dhaka, Bangladesh",
      salary: "₹6,000 - ₹9,000 per month",
      description: "As a Full-stack Developer at Kia, you will be responsible for developing and maintaining web applications using modern JavaScript frameworks like React and Node.js, ensuring high quality and performance."
    },
    {
      job_title: "UI/UX Designer",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "2+ years",
      skills_required: "UI/UX Design, Adobe Creative Suite, Prototyping Tools",
      vacancies: 3,
      location: "Dhaka, Bangladesh",
      salary: "₹5,00,000 - ₹8,00,000 per year",
      description: "As a UI/UX Designer at Kia, you will create intuitive and engaging user interfaces and experiences for web and mobile applications, collaborating closely with cross-functional teams to deliver exceptional designs."
    }
  ]
},
{
  company_name: "Tata Group",
  industry: "Conglomerate",
  location: "Mumbai, India",
  description: "Tata Group is an Indian multinational conglomerate with businesses in various sectors, including steel, automobiles, information technology, and more.",
  company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/677px-Tata_logo.svg.png",
  jobs: [
    {
      job_title: "Software Engineer",
      job_type: "Part-time",
      employment: "Internship",
      duration:"3 months",
      experience_required: "0-1 years",
      skills_required: "Java, Spring Boot, Angular",
      vacancies: 6,
      location: "Mumbai, India",
      salary: "₹10,000 - ₹15,000 per month",
      description: "As a Software Engineer at Tata Group, you will develop and maintain software solutions using Java, Spring Boot, and Angular frameworks, contributing to Tata Group's digital transformation initiatives."
    },
    {
      job_title: "Mechanical Engineer",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "4+ years",
      skills_required: "Mechanical Engineering, CAD/CAM, Manufacturing Processes",
      vacancies: 4,
      location: "Jamshedpur, India",
      salary: "₹8,00,000 - ₹12,00,000 per year",
      description: "As a Mechanical Engineer at Tata Group, you will be involved in designing and improving mechanical components and systems for Tata Group's diverse range of products and industries."
    }
  ]
},
{
  company_name: "Mahindra Group",
  industry: "Conglomerate",
  location: "Mumbai, India",
  description: "Mahindra Group is a multinational conglomerate with businesses spanning various industries, including automotive, aerospace, agribusiness, and more.",
  company_logo: "https://logowik.com/content/uploads/images/mahindra-suv1293.jpg",
  jobs: [
    {
      job_title: "Electrical Engineer",
      job_type: "Full-time",
      employment: "Internship",
      duration:"6 months",
      experience_required: "0 years",
      skills_required: "Electrical Engineering, Power Systems, Renewable Energy",
      vacancies: 5,
      location: "Mumbai, India",
      salary: "₹8,000 - ₹12,000 per month",
      description: "As an Electrical Engineer at Mahindra Group, you will design and implement electrical systems for various applications, with a focus on efficiency, reliability, and sustainability."
    },
    {
      job_title: "Business Analyst",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "2+ years",
      skills_required: "Business Analysis, Data Analysis, Market Research",
      vacancies: 3,
      location: "Mumbai, India",
      salary: "₹7,00,000 - ₹10,00,000 per year",
      description: "As a Business Analyst at Mahindra Group, you will analyze market trends, gather insights, and provide strategic recommendations to support decision-making and business growth across Mahindra Group's diverse portfolio."
    }
  ]
},
{
  company_name: "ITC Limited",
  industry: "Conglomerate",
  location: "Kolkata, India",
  description: "ITC Limited is an Indian multinational conglomerate with businesses in various sectors, including fast-moving consumer goods (FMCG), hotels, paperboards, packaging, and agribusiness.",
  company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png",
  jobs: [
    {
      job_title: "Sales Executive",
      job_type: "Part-time",
      employment: "Internship",
      duration:"1 months",
      experience_required: "0-1 years",
      skills_required: "Sales, Relationship Management, FMCG",
      vacancies: 8,
      location: "Kolkata, India",
      salary: "₹6,000 - ₹9,000 per month",
      description: "As a Sales Executive at ITC Limited, you will be responsible for driving sales and managing client relationships for ITC's range of FMCG products, contributing to business growth and customer satisfaction."
    },
    {
      job_title: "Supply Chain Analyst",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "3+ years",
      skills_required: "Supply Chain Management, Logistics, Data Analysis",
      vacancies: 5,
      location: "Gurgaon, India",
      salary: "₹8,00,000 - ₹12,00,000 per year",
      description: "As a Supply Chain Analyst at ITC Limited, you will analyze supply chain data, optimize logistics processes, and support inventory management to ensure efficient and cost-effective operations for ITC's business units."
    }
  ]
},
{
  company_name: "Nestlé S.A.",
  industry: "Food & Beverage",
  location: "Vevey, Switzerland",
  description: "Nestlé S.A. is a Swiss multinational food and beverage company known for its wide range of products, including baby food, bottled water, dairy products, breakfast cereals, and more.",
  company_logo: "https://logos-world.net/wp-content/uploads/2020/09/Nestle-Logo-700x394.png",
  jobs: [
    {
      job_title: "Marketing Manager",
      job_type: "Full-time",
      employment: "Internship",
      duration:"3 months",
      experience_required: "0 years",
      skills_required: "Marketing Strategy, Brand Management, Product Launches",
      vacancies: 3,
      location: "Vevey, Switzerland",
      salary: "₹1,000 - ₹5,000 per month",
      description: "As a Marketing Manager at Nestlé, you will develop and execute marketing strategies, manage brand portfolios, and drive product launches and campaigns to achieve business objectives and market share growth."
    },
    {
      job_title: "Quality Assurance Specialist",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "3+ years",
      skills_required: "Quality Assurance, Food Safety, Regulatory Compliance",
      vacancies: 2,
      location: "Lausanne, Switzerland",
      salary: "₹90,000 - ₹120,000 per year",
      description: "As a Quality Assurance Specialist at Nestlé, you will ensure product quality and safety compliance, conduct audits and inspections, and implement quality improvement initiatives across Nestlé's manufacturing facilities."
    }
  ]
},
{
  company_name: "AHA",
  industry: "Entertainment, Streaming",
  location: "Hyderabad, India",
  description: "AHA is a leading streaming platform in India offering a wide range of Telugu-language movies, web series, and original content.",
  company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/600px-Aha_OTT_Logo.svg.png", // Add the file name of the company logo
  jobs: [
    {
      job_title: "Content Writer",
      job_type: "Full-time and Part-time",
      employment: "Internship",
      duration:"6 months",
      experience_required: "0-1 years",
      skills_required: "Content Writing, Creative Writing, Telugu Language Proficiency",
      vacancies: 5,
      location: "Hyderabad, India",
      salary: "₹4,000 - ₹6,000 per month",
      description: "As a Content Writer at AHA, you will create engaging and compelling written content for AHA's streaming platform, including movie descriptions, show synopses, and promotional material."
    },
    {
      job_title: "UI/UX Designer",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "3+ years",
      skills_required: "UI/UX Design, Adobe Creative Suite, Prototyping Tools",
      vacancies: 3,
      location: "Hyderabad, India",
      salary: "₹6,00,000 - ₹9,00,000 per year",
      description: "As a UI/UX Designer at AHA, you will design intuitive and visually appealing user interfaces and experiences for AHA's streaming platform, focusing on enhancing user engagement and satisfaction."
    }
  ]
},
{
  company_name: "PhonePe",
  industry: "Financial Technology, Payments",
  location: "Bengaluru, India",
  description: "PhonePe is a leading digital payments platform in India offering a wide range of financial services, including payments, money transfers, bill payments, and more.",
  company_logo: "https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg", // Add the file name of the company logo
  jobs: [
    {
      job_title: "Software Engineer - Backend",
      job_type: "Part-time",
      employment: "Internship",
      duration:"1 months",
      experience_required: "0 years",
      skills_required: "Java, Spring Boot, Microservices",
      vacancies: 8,
      location: "Bengaluru, India",
      salary: "₹1,000 - ₹5,000 per month",
      description: "As a Software Engineer - Backend at PhonePe, you will design, develop, and maintain scalable and high-performance backend systems to support PhonePe's digital payment and financial services."
    },
    {
      job_title: "Data Analyst",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "2+ years",
      skills_required: "Data Analysis, SQL, Python",
      vacancies: 5,
      location: "Bengaluru, India",
      salary: "₹8,00,000 - ₹12,00,000 per year",
      description: "As a Data Analyst at PhonePe, you will analyze large datasets, generate actionable insights, and provide data-driven recommendations to enhance product features and optimize business processes."
    }
  ]
},
{
  company_name: "LG Corporation",
  industry: "Technology, Electronics",
  location: "Seoul, South Korea",
  description: "LG Corporation is a multinational conglomerate known for its wide range of electronics products, including smartphones, televisions, home appliances, and more.",
  company_logo: "https://cdn.freebiesupply.com/images/large/2x/lg-logo-black-and-white.png", // Add the file name of the company logo
  jobs: [
    {
      job_title: "Software Engineer - Mobile",
      job_type: "Full-time",
      employment: "Internship",
      duration:"3 months",
      experience_required: "0-1 years",
      skills_required: "Android Development, Kotlin, React Native",
      vacancies: 6,
      location: "Seoul, South Korea",
      salary: "₹5,000 - ₹8,000 per month",
      description: "As a Software Engineer - Mobile at LG Corporation, you will develop and maintain mobile applications for LG's range of smartphones and smart devices, ensuring high performance and user experience."
    },
    {
      job_title: "Hardware Design Engineer",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "4+ years",
      skills_required: "Electrical Engineering, PCB Design, Embedded Systems",
      vacancies: 4,
      location: "Seoul, South Korea",
      salary: "₹6,000 - ₹9,000 per month",
      description: "As a Hardware Design Engineer at LG Corporation, you will design and develop hardware components and systems for LG's consumer electronics products, including televisions, home appliances, and more."
    }
  ]
},
{
  company_name: "Philips",
  industry: "Healthcare, Consumer Electronics",
  location: "Amsterdam, Netherlands",
  description: "Philips is a multinational conglomerate focused on healthcare, lighting, and consumer lifestyle products.",
  company_logo: "https://seeklogo.com/images/P/philips-logo-571FCFDBCD-seeklogo.com.png", // Add the file name of the company logo
  jobs: [
    {
      job_title: "Medical Device Engineer",
      job_type: "Part-time",
      employment: "Internship",
      duration:"6 months",
      experience_required: "0 years",
      skills_required: "Medical Device Design, Biomedical Engineering, Regulatory Compliance",
      vacancies: 5,
      location: "Amsterdam, Netherlands",
      salary: "₹5,000 - ₹8,000 per month",
      description: "As a Medical Device Engineer at Philips, you will design and develop medical devices and equipment, ensuring compliance with regulatory standards and enhancing patient care and safety."
    },
    {
      job_title: "Product Manager - Consumer Electronics",
      job_type: "Full-time",
      employment: "Job",
      experience_required: "5+ years",
      skills_required: "Product Management, Consumer Electronics, Market Analysis",
      vacancies: 3,
      location: "Amsterdam, Netherlands",
      salary: "₹70,000 - ₹100,000 per year",
      description: "As a Product Manager at Philips, you will drive the development and marketing of consumer electronics products, conducting market analysis, defining product strategies, and managing product lifecycles."
    }
  ]
}

  
];

export default dummyData;

