import imgAppDev from '../assets/Service-img/Application-Development.svg';
import imgIT from '../assets/Service-img/ITInfrastructureDevelopment.svg';
import imgVGST from '../assets/Service-img/VGST.svg';
import imgMobile from '../assets/Service-img/MobileComputing.svg';
import imgDR from '../assets/Service-img/DR&DC.svg';
import imgDigital from '../assets/Service-img/DigitalSolutions.svg';
import imgAI from '../assets/Service-img/AI&ML.svg';

export const SERVICES_DATA = [
  {
    slug: 'application-development',
    title: 'Application Development',
    subtitle: 'Custom Software Solutions for Modern Enterprises',
    description: 'We build robust, scalable, and user-centric applications tailored to your specific business needs, ensuring high performance and seamless integration.',
    icon: 'desktop-solid',
    logo: imgAppDev,
    heroImage: '/assets/images/services/app_development.png',
    features: [
      { title: 'Custom Web Apps', description: 'Tailored web solutions using modern frameworks.' },
      { title: 'Enterprise Software', description: 'Scalable systems for complex business processes.' },
      { title: 'API Integration', description: 'Connecting your apps with third-party services.' }
    ],
    metrics: [
      { value: '500+', label: 'Apps Delivered' },
      { value: '99.9%', label: 'SLA Reliability' },
      { value: '24/7', label: 'Support & Maintenance' }
    ],
    longDescription: 'Our application development services cover the entire lifecycle, from ideation and design to development, testing, and deployment. We leverage the latest technologies to build applications that are not only functional but also intuitive and engaging. Whether you need a simple web portal or a complex enterprise system, our team has the expertise to deliver high-quality results.',
    keyDeliverables: [
      'User-centric UI/UX design',
      'Scalable backend architecture',
      'Secure and high-performance code',
      'Comprehensive documentation'
    ],
    includes: [
      'Requirements Analysis',
      'Agile Development',
      'Quality Assurance',
      'Post-launch Support'
    ]
  },
  {
    slug: 'it-infrastructure-development',
    title: 'IT Infrastructure Development',
    subtitle: 'Building the Foundation for Digital Success',
    description: 'Design and implement robust IT infrastructures that provide a secure and scalable foundation for your digital operations.',
    icon: 'building',
    logo: imgIT,
    heroImage: '/assets/images/services/it_infrastructure.png',
    features: [
      { title: 'Network Design', description: 'Optimized network architectures for maximum speed.' },
      { title: 'Server Solutions', description: 'Reliable and scalable server infrastructure.' },
      { title: 'Cloud Integration', description: 'Seamless migration and management of cloud services.' }
    ],
    metrics: [
      { value: '1000+', label: 'Nodes Managed' },
      { value: '99.99%', label: 'Uptime' },
      { value: 'Zero', label: 'Security Breaches' }
    ],
    longDescription: 'A strong IT infrastructure is the backbone of any modern business. We provide end-to-end infrastructure development services, including network design, server implementation, cloud integration, and security management. Our goal is to create an environment that is not only reliable and secure but also flexible enough to adapt to your changing business needs.',
    keyDeliverables: [
      'Scalable network architecture',
      'Secure server environments',
      'Cloud-ready infrastructure',
      'Robust security protocols'
    ],
    includes: [
      'Site Assessment',
      'Hardware Procurement',
      'Network Configuration',
      'Security Audits'
    ]
  },
  {
    slug: 'vgst',
    title: 'VGST',
    subtitle: 'Virtual Galaxy Smart Technology',
    description: 'Advanced smart technology solutions for connected ecosystems, smart cities, and IoT-driven innovation.',
    icon: 'clipboard-check-solid',
    logo: imgVGST,
    heroImage: '/assets/images/services/smart_city_iot.png',
    features: [
      { title: 'Smart City Solutions', description: 'Intelligent systems for urban management.' },
      { title: 'IoT Integration', description: 'Connecting devices for data-driven insights.' },
      { title: 'Connected Ecosystems', description: 'Unified platforms for seamless interaction.' }
    ],
    metrics: [
      { value: '50+', label: 'Smart Projects' },
      { value: '1M+', label: 'Connected Devices' },
      { value: '30%', label: 'Efficiency Gain' }
    ],
    longDescription: 'VGST (Virtual Galaxy Smart Technology) represents our commitment to the future of connected living. We develop and implement smart solutions that leverage IoT, AI, and big data to improve efficiency, sustainability, and quality of life. From smart lighting and waste management to intelligent transportation and public safety, our VGST solutions are at the forefront of urban innovation.',
    keyDeliverables: [
      'IoT platform development',
      'Smart sensor integration',
      'Real-time data dashboards',
      'Predictive analytics tools'
    ],
    includes: [
      'System Architecture',
      'Hardware Integration',
      'Data Analytics',
      'Managed Services'
    ]
  },
  {
    slug: 'mobile-computing',
    title: 'Mobile Computing',
    subtitle: 'Seamless Experiences on Every Device',
    description: 'Develop high-performance mobile applications and solutions that provide a superior user experience across iOS and Android.',
    icon: 'mobile-alt-solid',
    logo: imgMobile,
    heroImage: '/assets/images/services/mobile_computing.png',
    features: [
      { title: 'Native App Dev', description: 'High-performance apps for iOS and Android.' },
      { title: 'Cross-Platform', description: 'Efficient solutions for multiple platforms.' },
      { title: 'Mobile UX/UI', description: 'Intuitive designs for smaller screens.' }
    ],
    metrics: [
      { value: '200+', label: 'Mobile Apps' },
      { value: '4.8/5', label: 'Avg Store Rating' },
      { value: '10M+', label: 'App Installs' }
    ],
    longDescription: 'In today\'s mobile-first world, having a strong mobile presence is essential. Our mobile computing services help you reach your customers wherever they are. We specialize in creating high-quality native and cross-platform apps that are fast, secure, and easy to use. Whether you\'re looking to build a consumer app or an enterprise mobile tool, we have the skills to make it a success.',
    keyDeliverables: [
      'iOS & Android applications',
      'Optimized mobile interfaces',
      'Secure data synchronization',
      'App Store submission'
    ],
    includes: [
      'User Research',
      'Prototyping',
      'App Development',
      'App Maintenance'
    ]
  },
  {
    slug: 'dc-dr',
    title: 'DC & DR',
    subtitle: 'Disaster Recovery & Data Center Solutions',
    description: 'Ensure business continuity and secure data management with our comprehensive DR and DC services.',
    icon: 'tachometer-alt-solid',
    logo: imgDR,
    heroImage: '/assets/images/services/disaster_recovery.png',
    features: [
      { title: 'Data Center Mgmt', description: 'Secure and efficient data storage solutions.' },
      { title: 'Disaster Recovery', description: 'Robust plans for business continuity.' },
      { title: 'Cloud Backup', description: 'Automatic and secure off-site data backups.' }
    ],
    metrics: [
      { value: 'PB+', label: 'Data Managed' },
      { value: '0', label: 'Data Loss Incidents' },
      { value: '<4h', label: 'Recovery Time Obj.' }
    ],
    longDescription: 'Protecting your data and ensuring business continuity are critical in the digital age. Our Disaster Recovery and Data Center services provide you with the peace of mind that your operations will remain functional even in the face of unexpected events. We design and manage state-of-the-art data centers and implement robust recovery protocols to minimize downtime and prevent data loss.',
    keyDeliverables: [
      'Comprehensive DR plans',
      'Secure data center hosting',
      'Redundant storage systems',
      'Continuous monitoring'
    ],
    includes: [
      'Risk Assessment',
      'Strategy Design',
      'Implementation',
      'Regular Testing'
    ]
  },
  {
    slug: 'digital-solutions',
    title: 'Digital Solutions', 
    subtitle: 'Strategic Tools for Digital Transformation',
    description: 'Optimize your business operations and enhance customer engagement with our suite of strategic digital solutions.',
    icon: 'bullseye-solid',
    logo: imgDigital,
    heroImage: '/assets/images/services/digital_solutions.png',
    features: [
      { title: 'Digital Strategy', description: 'Comprehensive roadmaps for digital success.' },
      { title: 'CRM/ERP', description: 'Customized management systems for better efficiency.' },
      { title: 'E-commerce', description: 'Robust platforms for online sales and growth.' }
    ],
    metrics: [
      { value: '300+', label: 'Digital Projects' },
      { value: '40%', label: 'Revenue Growth' },
      { value: '25%', label: 'Cost Reduction' }
    ],
    longDescription: 'Our digital solutions are designed to help you thrive in the digital economy. We work with you to develop and implement strategies that improve efficiency, enhance customer experience, and drive growth. From e-commerce platforms and CRM systems to custom business automation tools, we provide the digital tools you need to succeed.',
    keyDeliverables: [
      'Digital transformation roadmap',
      'Custom CRM/ERP solutions',
      'Integrated e-commerce sites',
      'Business automation tools'
    ],
    includes: [
      'Discovery Workshops',
      'Platform Selection',
      'Custom Development',
      'Training & Support'
    ]
  },
  {
    slug: 'ai-ml',
    title: 'AI & ML',
    subtitle: 'Harnessing the Power of Intelligence',
    description: 'Drive innovation and gain predictive insights with our advanced Artificial Intelligence and Machine Learning solutions.',
    icon: 'robot-solid',
    logo: imgAI,
    heroImage: '/assets/images/services/ai_machine_learning.png',
    features: [
      { title: 'Predictive Analytics', description: 'Forecasting trends and behaviors with data.' },
      { title: 'NLP Solutions', description: 'Intelligent processing of human language.' },
      { title: 'Computer Vision', description: 'Visual data interpretation and analysis.' }
    ],
    metrics: [
      { value: '100+', label: 'AI Models' },
      { value: '90%', label: 'Prediction Accuracy' },
      { value: '50%', label: 'Automated Tasks' }
    ],
    longDescription: 'Artificial Intelligence and Machine Learning are transforming how businesses operate. Our AI & ML services help you unlock the value in your data and build intelligent systems that learn and adapt. Whether you\'re looking to automate complex processes, predict customer behavior, or gain new insights from visual data, our team of experts can help you achieve your goals.',
    keyDeliverables: [
      'Custom AI/ML models',
      'Data analysis reports',
      'Automated workflow tools',
      'Intelligent chatbots'
    ],
    includes: [
      'Data Preparation',
      'Model Training',
      'Deployment',
      'Performance Tuning'
    ]
  }
];
