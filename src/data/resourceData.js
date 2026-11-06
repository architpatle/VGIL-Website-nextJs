import imgNews from '../assets/Resource-img/News.png';
import imgBlog from '../assets/Resource-img/Blog.png';
import imgPress from '../assets/Resource-img/press.png';
import imgMedia from '../assets/Resource-img/media.png';
import imgVideo from '../assets/Resource-img/video.png';
import heroImg from '../assets/home/hero-bg-img.jpg'

export const RESOURCE_DATA = [
  {
    slug: 'news',
    title: 'News',
    icon: 'paper-plane',
    logo: imgNews,
    heroImage: '/assets/images/resources/news_resource.png',
    bgImage: '/assets/images/resources/news_bg.jpg',
    desc: 'Stay updated with the latest insights, events, and milestones from Virtual Galaxy.',
    gridItems: [
      {
        link: 'https://www.facebook.com/share/p/1CYm23cUnE/',
        title: 'Virtual Galaxy Infotech Secures $1.1 Million Global Contract',
        type: 'photo',
        image: '/assets/news/fb1.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1EKWRWMY27/',
        title: "Shivkrupa Sahakari Pathpedhi Limited goes digital with VGIL's advanced CBS E-Banker",
        type: 'photo',
        image: '/assets/news/fb2.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1G3cMLNYzL/',
        title: 'Virtual Galaxy Infotech Secures Landmark International Mandate with Botswana Development Corporation',
        type: 'photo',
        image: '/assets/news/fb3.png'
      },
      {
        link: 'https://www.facebook.com/share/p/18euGLYTA8/',
        title: "Honored to host Canadian Consulate dignitaries at Virtual Galaxy Infotech's MIHAN SEZ Development Centre!",
        type: 'photo',
        image: '/assets/news/fb4.png'
      },
      {
        link: 'https://www.facebook.com/share/p/18g8W9MjGP/',
        title: 'Honored to attend the Defence Expo in the Philippines and engage in collaborations between India and the Philippines',
        type: 'photo',
        image: '/assets/news/fb5.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1ENUXtyiZ1/',
        title: 'India–Kenya 3rd DefExpo | Nairobi, Kenya. Interacting with Hon. Soipan Tuya, Defence Minister of Kenya',
        type: 'photo',
        image: '/assets/news/fb6.png'
      },
      {
        link: 'https://www.facebook.com/watch/?v=999139971989370',
        title: 'Virtual Galaxy Infotech’s ₹93.29 Cr IPO attracted an astounding ₹14,440 Cr in bids',
        type: 'video',
        image: '/assets/news/fb7.png'
      },
      {
        link: 'https://www.facebook.com/share/p/18axFmzTNX/',
        title: 'A proud moment for Virtual Galaxy Infotech Ltd. – officially listed on NSE India!',
        type: 'photo',
        image: '/assets/news/fb8.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1XL7HrEVfp/',
        title: 'All Indian Urban Coop Banking Summit! A powerful gathering of visionaries, leaders, and changemakers',
        type: 'photo',
        image: '/assets/news/fb9.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1BjyahHDMH/',
        title: 'Virtual Galaxy is honored to be recognized as the Leading IT Solutions Provider of the Year by the prestigious Sardar Patel Unity Awards',
        type: 'photo',
        image: '/assets/news/fb10.png'
      },
      {
        link: 'https://www.facebook.com/share/p/18WMGgstqA/',
        title: 'ZENITH 2025 – Investor & Analyst Meet by Virtual Galaxy Infotech Ltd. is set to redefine the future of digital finance',
        type: 'photo',
        image: '/assets/news/fb11.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1BV34fxvMU/',
        title: 'Virtual Galaxy Infotech Ltd. featured in CIOLook India! Recognizing Mr. Avinash Shende and Mr. Sachin Pande as Top Iconic Business Leaders to Watch in 2024',
        type: 'photo',
        image: '/assets/news/fb12.png'
      },
      {
        link: 'https://www.facebook.com/share/p/1BC4Ma7YSm/',
        title: 'Virtual Galaxy Infotech Ltd. (VGIL) featured in Business India - The Magazine of the Corporate World!',
        type: 'photo',
        image: '/assets/news/fb13.png'
      }
    ]
  },
  {
    slug: 'blog',
    title: 'Blog',
    icon: 'book-open-solid',
    logo: imgBlog,
    heroImage: '/assets/images/resources/blog_resource.png',
    desc: 'Deep dives into technology, banking solutions, and enterprise innovation.',
    gridItems: [
      {
        slug: 'erp-what-is',
        link: '/blog/erp-what-is',
        title: 'What is Enterprise Resource Planning and its Importance?',
        type: 'blog',
        image: '/assets/images/blog/blog1.png',
        desc: 'It has been measured that businesses and industries are turning more and more towards installing an ERP system. It is proving a beneficial decision for any organization as it becomes easier to manage the various aspects of the working field with ease.',
        content: `ERP system is an integrated system that manages various aspects of business, saves cost and time. It allows any type of business to keep track of different sections such as human resources, production and stock keeping, financial management, supply chain management, etc.\n\nIt is a central hub for an end to end workflow and data. It collects an organization's shared data from multiple sources and eliminates data duplication. In today's advanced technology, such systems are considered essential for managing businesses of all sizes and in all industries.`
      },
      {
        slug: 'erp-advantages',
        link: '/blog/erp-advantages',
        title: 'Top 5 Advantages of Implementing an ERP System',
        type: 'blog',
        image: '/assets/images/blog/blog2.png',
        desc: 'Implementing an ERP system offers numerous benefits that can transform how your business operates, from improved efficiency to better data-driven insights.',
        content: `1. Improved Efficiency: Streamline operations and automate repetitive tasks.\n2. Real-time Data: Access accurate information across all departments instantaneously.\n3. Better Collaboration: Break down silos and improve communication between teams.\n4. Scalability: Easily adapt the system as your business grows.\n5. Cost Savings: Reduce operational costs through better resource management.`
      },
      {
        slug: 'vpn-what-is',
        link: '/blog/vpn-what-is',
        title: 'What is a Virtual Private Network?',
        type: 'blog',
        image: '/assets/images/blog/blog3.png',
        desc: 'In an era of increasing digital threats, understanding how a VPN protects your corporate data is more critical than ever.',
        content: `A Virtual Private Network (VPN) creates a secure, encrypted connection between your device and the internet. For businesses, this means employees can securely access corporate servers from any location without risking data leaks or unauthorized access. It acts as a secure tunnel for your digital communications.`
      },
      {
        slug: 'cbs-for-banks',
        link: '/blog/cbs-for-banks',
        title: 'What Is Core Banking Solution For Banks?',
        type: 'blog',
        image: '/assets/images/blog/blog4.png',
        desc: 'Core Banking Solutions (CBS) are the heart of modern financial institutions, enabling seamless transactions and centralized management.',
        content: `CBS allows banks to centralize their operations, providing a single view of the customer across all branches. This leads to faster transaction processing, improved customer service, and better compliance with financial regulations. It is the technological backbone that powers modern day banking.`
      },
      {
        slug: 'ai-banking-reshape',
        link: '/blog/ai-banking-reshape',
        title: 'How AI-Based Banking is Reshaping the Core Banking Landscape',
        type: 'blog',
        image: '/assets/images/blog/blog5.png',
        desc: 'Artificial Intelligence is no longer just a buzzword; it is actively transforming how banks interact with customers and manage risk.',
        content: `From AI-powered chatbots to advanced fraud detection algorithms, AI is making banking more personalized and secure. It helps institutions analyze vast amounts of data to predict market trends and offer tailored financial products to their customers, reshaping the entire landscape of financial services.`
      },
      {
        slug: 'banking-security-platform',
        link: '/blog/banking-security-platform',
        title: 'Strengthening Banking Security with a Centralized Cybersecurity Management Platform',
        type: 'blog',
        image: '/assets/images/blog/blog6.png',
        desc: 'A centralized approach to cybersecurity is the only way to stay ahead of sophisticated modern financial threats.',
        content: `Centralized cybersecurity platforms provide a unified view of all potential threats across the banking network. By integrating various security protocols into a single management interface, banks can respond faster to incidents and ensure that every layer of their digital infrastructure is protected against evolving cyber threats.`
      }
    ]
  },
  {
    slug: 'press',
    title: 'Press Coverage',
    icon: 'comment-quote',
    logo: imgPress,
    heroImage: '/assets/images/resources/press_resource.png',
    desc: 'Explore our press releases, media coverage, and official statements.',
    categories: [
      {
        name: 'IPO Listing Coverage',
        items: [
          { title: 'Virtual Galaxy Infotech lists on NSE at 26% premium', link: 'https://timesofindia.indiatimes.com/city/nagpur/virtual-galaxy-infotech-lists-on-nse-at-26-premium/articleshow/121276106.cms' },
          { title: 'Virtual Galaxy Infotech IPO: Strong GMP signals a stellar listing today', link: 'https://economictimes.indiatimes.com/markets/ipos/fpos/virtual-galaxy-infotech-ipo-strong-gmp-signals-a-stellar-listing-today/articleshow/121257533.cms' },
          { title: 'Virtual Galaxy Infotech stock makes stellar debut on NSE Emerge, lists at 26.76% premium', link: 'https://www.apnnews.com/virtual-galaxy-infotech-stock-makes-stellar-debut-on-nse-emerge-lists-at-26-76-premium/' },
          { title: 'Virtual Galaxy Infotech debuts on NSE SME at Rs 180, surges 26% above issue price', link: 'https://www.republicworld.com/business/virtual-galaxy-infotech-debuts-on-nse-sme-at-rs-180-surges-26-above-issue-price' },
          { title: 'VGIL stock makes stellar debut on NSE Emerge', link: 'https://www.thehitavada.com/Encyc/2025/5/20/VGIL-stock-makes-stellar-debut-on-NSE-Emerge.html' },
          { title: 'Virtual Galaxy Infotech makes successful debut on NSE', link: 'https://www.ehitavada.com/article.php?mid=NCpage_2025-05-20_5b914bd71b3f1cd4c1122337a49073b8682be35508ce8&JSON' }
        ]
      },
      {
        name: 'Cybersecurity Launch',
        items: [
          { title: 'IPO-bound Virtual Galaxy Infotech launches Cyber Sentinel in cybersecurity push', link: 'https://mediabulletins.com/business/ipo-bound-virtual-galaxy-infotech-launches-cyber-sentinel-in-cybersecurity-push/' },
          { title: 'Virtual Galaxy Infotech enters cybersecurity space with Cyber Sentinel ahead of IPO', link: 'https://hellokotpad.com/business/virtual-galaxy-infotech-enters-cybersecurity-space-with-cyber-sentinel-ahead-of-ipo/' },
          { title: 'Virtual Galaxy Infotech expands horizons with cybersecurity debut and Cyber Sentinel rollout', link: 'https://contentmediasolution.com/business/virtual-galaxy-infotech-expands-horizons-with-cybersecurity-debut-and-cyber-sentinel-rollout/' },
          { title: 'IPO-bound Virtual Galaxy Infotech announces strategic expansion into cybersecurity, unveils Cyber Sentinel', link: 'https://businessnewsthisweek.com/business/ipo-bound-virtual-galaxy-infotech-announces-strategic-expansion-into-cybersecurity-unveils-cyber-sentinel/' },
          { title: 'Virtual Galaxy Infotech enters cybersecurity space with Cyber Sentinel ahead of IPO', link: 'https://businessnewsweek.in/business/virtual-galaxy-infotech-enters-cybersecurity-space-with-cyber-sentinel-ahead-of-ipo/' }
        ]
      },
      {
        name: 'Video Coverage',
        items: [
          { title: 'Virtual Galaxy Infotech IPO Analysis & Review', link: 'https://www.youtube.com/watch?v=R36-byUD6g0&feature=youtu.be' },
          { title: 'VGIL NSE Listing Ceremony Highlights', link: 'https://youtu.be/a8gRM6tZ2Vc?si=9dfvyc0CcBcHq8Ke' },
          { title: 'Investment & Growth Strategy - Virtual Galaxy Infotech', link: 'https://youtu.be/Ik_in1SUk88?si=Uk0fZ4icrnDtTYOk' }
        ]
      },
      {
        name: 'IPO and Market Expansion',
        items: [
          { title: 'In-principle approval from NSE Emerge for IPO on behalf of Virtual Galaxy Infotech', link: 'https://www.nagpurtoday.in/in-principle-approval-from-nse-emerge-for-ipo-on-behalf-of-virtual-galaxy-infotech-ready-to-expand-worldwide-operations/' },
          { title: 'IPO-bound Virtual Galaxy Infotech to penetrate African market, set to be listed on NSE Emerge', link: 'https://www.apnnews.com/ipo-bound-virtual-galaxy-infotech-to-penetrate-african-market-set-to-be-listed-on-nse-emerge/' },
          { title: 'Virtual Galaxy Infotech Market Expansion Update', link: 'https://www.equitybulls.com/category.php?id=355260&t=dISIK6JJrZJC7lfrT1fGng&s=09' },
          { title: 'IPO-bound Virtual Galaxy Infotech enters Africa', link: 'https://ipocentral.in/ipo-bound-virtual-galaxy-infotech-enters-africa/' },
          { title: 'Virtual Galaxy Infotech IPO Date, Review, Price & Allotment Details', link: 'https://ipowatch.in/virtual-galaxy-infotech-ipo-date-review-price-allotment-details/' }
        ]
      },
      {
        name: 'Awards and Recognition',
        items: [
          { title: 'Top 10 Transformational Personalities Revolutionizing India', link: 'https://www.uniindia.com/top-10-transformational-personalities-revolutionizing-india/prnewswire/news/3399208.html' },
          { title: 'Transformational Leaders in Indian Technology Sector', link: 'https://www.prnewswire.com/in/news-releases/top-10-transformational-personalities-revolutionizing-india-302384290.html' },
          { title: 'Recognizing Excellence in Digital Transformation', link: 'https://www.devdiscourse.com/article/entertainment/3276661-top-10-transformational-personalities-revolutionizing-india' },
          { title: 'Virtual Galaxy Infotech - India Today PR Coverage', link: 'https://www.indiatoday.in/pr-newswire?rkey=20250225EN26598&filter=4315' },
          { title: 'Business Today: Corporate Milestones & Recognition', link: 'https://www.businesstoday.in/prnewswire?rkey=20250225EN26598&filter=2418' }
        ]
      }
    ],
    gridItems: [] // Keeping empty as we use categories for 'press'
  },
  {
    slug: 'media',
    title: 'Media',
    icon: 'video-solid',
    logo: imgMedia,
    heroImage: '/assets/images/resources/media_resource.png',
    desc: 'Access our media kits, brand assets, and coverage across various platforms.',
    gridItems: []
  },
  {
    slug: 'video',
    title: 'Video Coverage',
    icon: 'play-solid',
    logo: imgVideo,
    heroImage: '/assets/images/resources/video_resource.png',
    desc: 'Watch our corporate presentations, listing ceremony highlights, and media interviews.',
    gridItems: [
      { title: 'Virtual Galaxy Infotech IPO Analysis', link: 'https://www.youtube.com/watch?v=R36-byUD6g0&feature=youtu.be', type: 'video' },
      { title: 'VGIL NSE Listing Ceremony', link: 'https://youtu.be/a8gRM6tZ2Vc?si=9dfvyc0CcBcHq8Ke', type: 'video' },
      { title: 'Investment & Growth Strategy', link: 'https://youtu.be/Ik_in1SUk88?si=Uk0fZ4icrnDtTYOk', type: 'video' }
    ]
  }
];
