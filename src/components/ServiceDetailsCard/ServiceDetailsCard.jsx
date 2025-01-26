


import React from "react";
import "./ServiceDetailsCard.css";
import aiServiceImage from "../../assets/images/aiServiceImage.png";
import personalSoftwareServiceImage from "../../assets/images/personalSoftwareServiceImage.png";
import cyberSecurityServiceImage from "../../assets/images/cyberSecurityServiceImage.png";
import AppDevelopmentServiceImage from "../../assets/images/AppDevelopmentServiceImage.png";
import webAppServiceImage from "../../assets/images/webAppServiceImage.png";
import webDevelopmentServiceImage from "../../assets/images/webDevelopmentServiceImage.png";
import dataSercurityServiceImage from "../../assets/images/dataSercurityServiceImage.png";
import AiMlServiceImage from "../../assets/images/AiMlServiceImage.png";


const ServiceDetailsCard = () => {
  
  return (
    <>
      {/* AIXpertsites */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">1) AIXpertSites</span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            AIExpertSites services in IT refer to specialized platforms or
            services that provide expert knowledge, tools, and solutions in the
            realm of Artificial Intelligence (AI). These services typically offer
            consultancy to help businesses understand and implement AI
            technologies effectively. They also provide custom AI solutions such
            as machine learning models, natural language processing systems, or
            AI-driven analytics tailored to meet specific business needs.
            Additionally, AIExpertSites often grant access to AI tools, software,
            or platforms that enable companies to develop, deploy, and scale AI
            applications seamlessly. Alongside development services, they may also
            offer research resources, case studies, and educational materials to
            deepen understanding of AI. Ultimately, AIExpertSites services guide
            businesses in adopting AI, ensuring smooth integration with existing
            systems and aligning AI solutions with overall business goals, helping
            companies stay competitive in an AI-driven marketplace.
          </p>
          <div>
            <img src={aiServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom AIXpertSites Services :</h1>
          {/* tech 1 */}
          <div className="serviceTechDescription">
            <h1>Frontend Development :</h1>
            <ul>
              <li>
                HTML5/CSS3/JavaScript: For structuring and styling web pages.
              </li>
              <li>
                React.js/Angular/Vue.js: Modern JavaScript frameworks for dynamic,
                responsive user interfaces.
              </li>
              <li>
                Bootstrap/Tailwind CSS: Frameworks for responsive design and UI
                components.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>Backend Development :</h1>
            <ul>
              <li>
                Node.js/Express.js: Popular for scalable and efficient server-side operations.
              </li>
              <li>
                Django/Flask (Python): Python-based web frameworks for backend APIs.
              </li>
              <li>
                Ruby on Rails: A full-stack framework with simplicity & productivity in mind.
              </li>
              <li>
                PHP/Laravel: Server-side scripting languages and frameworks.            </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning :</h1>
            <ul>
              <li>
                TensorFlow/PyTorch: For training AI models.
              </li>
              <li>
                OpenAI APIs/Transformers: Pre-trained AI models for natural language processing (NLP), computer vision, etc.
              </li>
              <li>
                AWS/GCP AI Services: Cloud-based AI and ML solutions like AWS
              </li>
              <li>
                Sagemaker or Google AutoML.            </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>APIs and Integrations :</h1>
            <ul>
              <li>
                REST/GraphQL: For API development and communication between frontend and backend.
              </li>
              <li>
                Third-party APIs: Payment gateways, social media, and more.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 2) Personal Software for Business */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">2) Personal Software for Business
          </span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            Personal software for business in IT services refers to custom-built applications or software solutions tailored specifically to meet the unique needs of a business. Unlike off-the-shelf software, personal software is designed to align closely with a company’s operations, workflows, and goals, ensuring a perfect fit for their processes. This type of software can handle a wide range of functions, including customer relationship management (CRM), inventory control, project management, data analysis, and more. By providing a personalized approach, it allows businesses to improve efficiency, automate routine tasks, and scale operations more effectively. Moreover, personal software offers flexibility, allowing companies to integrate it with other tools or platforms. In the IT services industry, developing personal software for businesses is key to helping them gain a competitive edge by addressing their unique challenges with tailored technological solutions.
          </p>
          <div>
            <img src={personalSoftwareServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom Personal Software for business Services :</h1>
          {/* tech 1 */}
          <div className="serviceTechDescription">
            <h1>Frontend Development :</h1>
            <ul>
              <li>
                Frameworks like React, Angular, Vue.js ( frontend) help in building responsive, user-friendly web applications  for specific business processes.
              </li>
              <li>
                Common languages like Python, Java, JavaScript, C#, and Ruby are used to develop the  frontend of personal software. These languages provide the flexibility needed for customized solutions.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>Backend Development :</h1>
            <ul>
              <li>
                Frameworks like Node.js, Ruby on Rails (backend) help in building responsive, user-friendly web applications for specific business processes.            </li>
              <li>
                Common languages like Python, Java, JavaScript, C#, and Ruby are used to develop the  backend of personal software. These languages provide the flexibility needed for customized solutions.            </li>

            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning :</h1>
            <ul>
              <li>
                AI and ML technologies like TensorFlow, PyTorch, and Scikit-learn can be integrated into personal software to provide intelligent features like automation, predictive analytics, and decision-making support.            </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>APIs and Integrations :</h1>
            <ul>
              <li>
                Tools like RESTful APIs, GraphQL, and middleware solutions enable personal software to connect with other business systems (e.g., CRMs, ERPs) or third-party applications for seamless data exchange and integration.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 3) App Development */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">3) App Development
          </span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            App development in IT services refers to the process of creating software applications tailored to meet specific business needs or consumer demands. This involves designing, coding, testing, and deploying apps that can run on various platforms, such as mobile devices (iOS, Android), desktops, or web browsers. In IT services, app development typically focuses on delivering solutions that enhance business operations, improve customer engagement, and provide seamless access to products or services. Whether it's a mobile app for e-commerce, a web-based platform for customer relationship management, or a productivity tool for internal teams, app development plays a critical role in driving digital transformation. App development in IT services also includes ongoing support and updates to address user feedback, improve functionality, and adapt to changing business needs. By offering customized, efficient, and user-friendly apps, IT services help businesses enhance their digital presence and streamline operations.
          </p>
          <div>
            <img src={AppDevelopmentServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom App Development Services :</h1>
          {/* tech 1 */}
          <div className="serviceTechDescription">
            <h1>Frontend Development :</h1>
            <ul>
              <li>
                For app creation uses HTML, CSS, and JavaScript to structure, style, and add interactivity to applications. Modern JavaScript frameworks like React, Angular, and Vue.js streamline and React Native, Flutter, and Ionic are popular for cross-platform mobile development.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>Backend Development :</h1>
            <ul>
              <li>
                Relies on languages like Node.js (JavaScript), Python (Django, Flask), Ruby (Ruby on Rails), Java (Spring), and PHP (Laravel) for server-side logic, handling requests, and building APIs to communicate with the frontend.       </li>

            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning :</h1>
            <ul>
              <li>
                AI and ML in app development enhance user experiences by features like personalization, natural language processing for chatbots and voice assistants, and predictive analytics to forecast trends or detect anomalies.          </li>
              <li>AI/ML technologies like TensorFlow and PyTorch help developers integrate intelligent, data-driven features into apps.</li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>APIs and Integrations :</h1>
            <ul>
              <li>
                RESTful APIs and GraphQL are used to communicate between the app and external services or databases.
              </li>
              <li>Integration with third-party services like payment gateways (Stripe, PayPal), geolocation services (Google Maps API), or social media platforms (Facebook SDK) allows for richer functionality.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* 4) Web/App Upgradation */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">4) Web/App Upgradation</span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            Web/App upgradation in IT services refers to the process of improving or modernizing an existing website or application to enhance performance, functionality, security, and user experience. This often involves updating the underlying technology stack, optimizing the code, redesigning the user interface (UI), and adding new features to meet evolving business needs or market trends. Upgrading can also address compatibility issues with new operating systems, browsers, or devices, ensuring that the web or mobile app continues to function smoothly across platforms. Additionally, security patches and updates are critical to protect against vulnerabilities and cyber threats. In many cases, upgradation also involves migrating the app to more scalable infrastructure, such as cloud platforms, to support growing user demands. The goal is to keep the web or app relevant, efficient, and aligned with current technological standards while delivering a seamless experience to users.
          </p>
          <div>
            <img src={webAppServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom Web/App Upgradation Services :</h1>
          {/* tech 1 */}
          <div className="serviceTechDescription">
            <h1>Frontend Development :</h1>
            <ul>
              <li>
                Web apps are often upgraded using newer versions of frameworks like React, Angular, Vue.js (for frontend). For mobile apps, frameworks like React Native, Flutter, and Swift (iOS) or Kotlin (Android) are commonly used.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>Backend Development :</h1>
            <ul>
              <li>
                Web apps are often upgraded using newer versions of frameworks like Node.js, Django, Flask, or Spring Boot (for backend). For mobile apps, frameworks like React Native, Flutter, and Swift (iOS) or Kotlin (Android) are commonly used.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning :</h1>
            <ul>
              <li>
                AI Enhancements: Integrating AI tools like TensorFlow or scikit-learn during upgrades can enable predictive analytics, personalization, and automation in apps.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>APIs and Integrations :</h1>
            <ul>
              <li>
                API Upgrades: Moving from older APIs to modern RESTful or GraphQL APIs improves data communication between services. This allows seamless integration with third-party services and other apps.
              </li>
            </ul>
          </div>
        </div>
      </div>
      { /* 5) Web Development */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">5) Web Development</span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            Web development in IT services involves the creation and maintenance of websites and web applications that enable businesses to establish a strong online presence and deliver services effectively to their users. It encompasses a wide range of tasks, from building static websites to complex dynamic web applications with advanced features like e-commerce, content management systems (CMS), and data analytics. The process begins with front-end development, which focuses on the user interface (UI) and user experience (UX) using technologies like HTML, CSS, and JavaScript. Simultaneously, backend development handles server-side functionality, databases, and APIs, ensuring that the application is secure, scalable, and capable of meeting growing demands. Web development in IT services is essential for businesses to build customized, user-friendly websites and applications that meet their goals, engage customers, and adapt to the evolving digital landscape.
          </p>
          <div>
            <img src={webDevelopmentServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom Web Development Services :</h1>
          {/* tech 1 */}
          <div className="serviceTechDescription">
            <h1>Frontend Development :</h1>
            <ul>
              <li>
                HTML/CSS3/JavaScript: For structuring and styling web pages.
              </li>
              <li>
                React/Angular/Vue.js: Modern JavaScript frameworks for dynamic, responsive user interfaces.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>Backend Development :</h1>
            <ul>
              <li>
                Node.js/Express.js: Popular for scalable and efficient server-side operations.
              </li>
              <li>
                Django/Flask (Python): Python-based web frameworks for backend APIs.
              </li>
              <li>
                Ruby on Rails: A full-stack web framework with simplicity and productivity in mind.
              </li>
              <li>
                PHP/Laravel: Server-side scripting languages and frameworks.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning :</h1>
            <ul>
              <li>
                AI and Machine Learning in web development: Technologies like TensorFlow, PyTorch, and NLP libraries facilitate the integration of these intelligent features, making websites more responsive, secure, and user-centric.
              </li>
            </ul>
          </div>
          <hr />
          <div className="serviceTechDescription">
            <h1>APIs and Integrations :</h1>
            <ul>
              <li>
                RESTful APIs and GraphQL: Commonly used to enable communication between the frontend and backend services or integrate third-party services (e.g., payment gateways, geolocation services).
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 6) AI/ML Projects */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">6) AI/ML Projects</span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            AI/ML projects in IT services involve the development and deployment of intelligent systems that leverage data-driven algorithms to solve complex business challenges. These projects typically include tasks such as data collection, preprocessing, model development, and implementation. AI/ML solutions can range from predictive analytics, which helps businesses forecast trends and make informed decisions, to more sophisticated tasks like natural language processing (NLP), computer vision, and automation.
            <br />
            AI/ML projects may include building recommendation systems, fraud detection systems, or customer segmentation models. These projects also emphasize efficiency and scalability, often leveraging cloud platforms like AWS, Google Cloud, and Microsoft Azure to support AI/ML workloads. By enabling businesses to deliver more personalized, data-driven services, AI/ML projects drive competitive advantages in various industries.
          </p>
          <div>
            <img src={AiMlServiceImage} alt="AI/ML Projects" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom AI/ML Projects Services :</h1>
          {/* Programming Languages */}
          <div className="serviceTechDescription">
            <h1>Programming Languages :</h1>
            <ul>
              <li>
                Python: The most widely used language for AI/ML due to its extensive libraries and frameworks like TensorFlow, scikit-learn, and PyTorch.
              </li>
              <li>
                R: Popular for statistical computing and data analysis, used in ML projects requiring complex data analytics.
              </li>
              <li>
                Java and C++: Used for high-performance, large-scale machine learning applications.
              </li>
            </ul>
          </div>
          <hr />
          {/* Data Processing & Analysis Tools */}
          <div className="serviceTechDescription">
            <h1>Data Processing & Analysis Tools :</h1>
            <ul>
              <li>
                Pandas: A Python library for data manipulation and analysis, used in the data preprocessing stage of ML projects.
              </li>
              <li>
                NumPy: A library for numerical computations in Python, widely used in ML for array-based data processing and analysis.
              </li>
              <li>
                Apache Spark: A distributed data processing engine, used for big data processing in ML projects.
              </li>
            </ul>
          </div>
          <hr />
          {/* Machine Learning Frameworks */}
          <div className="serviceTechDescription">
            <h1>Machine Learning Frameworks :</h1>
            <ul>
              <li>
                TensorFlow: A popular open-source ML framework by Google, used for deep learning applications like neural networks.
              </li>
              <li>
                PyTorch: Another widely used deep learning framework, known for its flexibility and dynamic computational graphs.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 7) Data Security and Protection */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">7) Data Security and Protection</span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            Data security and protection in IT services are critical for safeguarding sensitive information from unauthorized access, breaches, and cyberattacks. As businesses increasingly rely on digital systems, ensuring the confidentiality, integrity, and availability of data has become a top priority. IT services employ advanced security measures to protect data at all stages, including encryption, firewalls, intrusion detection systems, and multi-factor authentication. Data protection also involves compliance with legal standards and regulations such as GDPR (General Data Protection Regulation), HIPAA (Health Insurance Portability and Accountability Act), and CCPA (California Consumer Privacy Act) to ensure that sensitive personal information is handled responsibly.
          </p>
          <div>
            <img src={dataSercurityServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom Data Security and Protection Services:</h1>
          {/* Cloud Security Technologies  */}
          <div className="serviceTechDescription">
            <h1>Cloud Security Technologies:</h1>
            <ul>
              <li>
                <strong>Cloud Access Security Brokers (CASB):</strong> Tools like Microsoft Cloud App Security and Netskope enforce security policies between on-premises systems and cloud service providers.
              </li>
              <li>
                <strong>Encryption and Cloud Storage Services:</strong> Services like Amazon S3, Google Cloud Storage, and Azure Blob Storage offer encryption both in transit and at rest to secure data stored in the cloud.
              </li>
            </ul>
          </div>
          <hr />
          {/* AI and Machine Learning */}
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning:</h1>
            <ul>
              <li>
                <strong>AI/ML-Based Threat Detection:</strong> Tools like Darktrace and Cylance use AI/ML to detect anomalies and potential threats based on behavioral analysis and predictive analytics, providing proactive security measures.
              </li>
            </ul>
          </div>
        </div>
      </div>
      { /* 8) Cyber Security */}
      <div className="serviceDetailsCardContainer">
        <h1>
          <span className="serviceHeadingTitle">8) Cyber Security</span>
        </h1>
        <div className="ServiceCardDescriptionContainer">
          <p>
            Cybersecurity in IT services refers to the practices, technologies, and processes designed to protect computer systems, networks, and data from cyber threats and attacks. As organizations increasingly rely on digital infrastructure, cybersecurity has become paramount for safeguarding sensitive information and maintaining business continuity. IT services employ a multi-layered approach to cybersecurity, including risk assessment, threat detection, incident response, and compliance with regulatory standards. Key components of cybersecurity include firewalls, intrusion detection systems, encryption, and endpoint protection to safeguard against unauthorized access and data breaches. By integrating comprehensive cybersecurity strategies, IT services help organizations mitigate risks, protect valuable data, and ensure the resilience of their digital operations in an increasingly complex threat landscape.
          </p>
          <div>
            <img src={cyberSecurityServiceImage} alt="" />
          </div>
        </div>
        <div className="serviceTechDescriptionContainer">
          <h1>Our Custom Cyber Security Services:</h1>
          {/* Intrusion Detection and Prevention Systems */}
          <div className="serviceTechDescription">
            <h1>Intrusion Detection and Prevention Systems (IDPS):</h1>
            <ul>
              <li>
                <strong>Intrusion Detection Systems (IDS):</strong> Monitor network traffic for suspicious activity and send alerts when potential threats are detected.
              </li>
              <li>
                <strong>Intrusion Prevention Systems (IPS):</strong> Actively block or prevent identified threats in real-time, often integrated with firewalls.
              </li>
            </ul>
          </div>
          <hr />
          {/* Endpoint Security Solutions */}
          <div className="serviceTechDescription">
            <h1>Endpoint Security Solutions:</h1>
            <ul>
              <li>
                <strong>Antivirus and Anti-Malware:</strong> Software that detects, prevents, and removes malware from endpoints, including computers, mobile devices, and servers.
              </li>
              <li>
                <strong>Endpoint Detection and Response (EDR):</strong> Solutions that provide real-time monitoring, detection, and response capabilities for endpoint threats.
              </li>
            </ul>
          </div>
          <hr />
          {/* AI and Machine Learning */}
          <div className="serviceTechDescription">
            <h1>AI and Machine Learning:</h1>
            <ul>
              <li>
                <strong>AI/ML Technologies:</strong> Tools that utilize machine learning algorithms to enhance threat detection, automate security processes, and analyze vast amounts of security data for actionable insights.
              </li>
            </ul>
          </div>
        </div>
      </div>






    </>
  );
};

export default ServiceDetailsCard;
