AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
var link = document.createElement('a');
link = link.href;
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
    link : 'https://www.w3schools.com/html/'
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
    link : 'https://www.w3schools.com/css/'
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
    link : 'https://www.w3schools.com/js/'
  },
  {
    langImage: "assets/images/techstack-page/php.png",
    langName: "PHP",
    langDesc: "<li>PHP, a melody of code, where dynamic web dreams unfold.</li><li>Server-side scripting, it's adept at handling.</li><li>A language of versatility, powering websites with agility.</li><li>From simple scripts to complex frameworks, it never ceases to embark.</li><li>With a vast community and libraries galore, PHP's charm continues to soar.</li><li>Interacting with databases, it brings life to web interfaces.</li><li>In the realm of scripting, PHP keeps persisting.</li>",
    link : 'https://www.w3schools.com/php/'
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySQL",
    langDesc: "<li>MySQL, a symphony of data, where databases reside.</li><li>An orchestra of tables and queries, it orchestrates with pride.</li><li>Relational in nature, it links data with precision.</li><li>From simple queries to complex joins, it handles data with poise.</li><li>Efficient and reliable, its performance is undeniable.</li><li>From small-scale projects to enterprise solutions, it offers data's evolution.</li><li>In the realm of databases, MySQL excels and surpasses.</li>",
    link : 'https://www.w3schools.com/sql/'
  },
  {
    langImage: "assets/images/techstack-page/angular.png",
    langName: "Angular",
    langDesc: "<li>Angular, a dance of components, where web applications emerge.</li><li>A framework robust, it conquers with a surge.</li><li>With TypeScript at its core, it ensures stability galore.</li><li>From templates to services, it shapes web experiences.</li><li>Reactive and modular, its structure is spectacular.</li><li>Binding data and handling events, Angular's elegance transcends.</li><li>In the realm of frontend, Angular takes command.</li>",
    link : 'https://www.w3schools.com/angular/'
  },    
  {
    langImage: "assets/images/techstack-page/aws.png",
    langName: "AWS",
    langDesc: "<li>Behold the majesty of AWS, a cloud of wonders vast</li><li>Where data soars like birds in flight, securely stored and fast</li><li>From S3 to EC2, its services manifold</li><li>Empowering businesses with power untold</li><li>With Lambda's functions, code dances in the skies</li><li>And DynamoDB's streams, a river of data lies</li><li>Scaling and deploying with Elastic Beanstalk's grace</li><li>AWS, a sanctuary where dreams find their place</li>",
    link : 'https://www.w3schools.com/aws/'
  },
  {
    langImage: "assets/images/techstack-page/microsoft-azure.png",
    langName: "Microsoft Azure",
    langDesc: "<li>Microsoft Azure, a celestial azure sky, where the cloud reigns high.</li><li>A realm of digital dreams, where businesses gleam.</li><li>With vast computing power, it empowers every hour.</li><li>From virtual machines to storage divine, it offers services sublime.</li><li>Data analytics and AI, they soar on Azure's sky.</li><li>Scalable and secure, its solutions endure.</li><li>In the realm of cloud, Azure stands proud.</li>",
    link : 'https://www.w3schools.com/azure/'
  },
  {
    langImage: "assets/images/techstack-page/google-cloud.png",
    langName: "Google Cloud",
    langDesc: "<li>Google Cloud, a nimbus of possibilities, where innovation flows.</li><li>In a world of digital ambition, it fuels the mission.</li><li>With virtual machines and storage galore, it opens the door.</li><li>Data lakes and AI, they paint the sky.</li><li>Scalable and robust, its power is a must.</li><li>From BigQuery to Kubernetes, it offers solutions in myriad hues.</li><li>In the realm of cloud, Google shines bold.</li>",
    link : 'https://www.w3schools.com/cloud/'
  },  
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
    link : 'https://www.w3schools.com/nodejs/'
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
    link : 'https://www.w3schools.com/python/'
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
    link : 'https://www.w3schools.com/cpp/'
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
    link : 'https://www.w3schools.com/git/'
  },
  {
    langImage: "assets/images/techstack-page/jupyter.png",
    langName: "Jupyter",
    langDesc: "<li>Jupyter is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.</li>",
    link : 'https://www.w3schools.com/jupyter/'
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
    link : 'https://www.w3schools.com/bootstrap/'
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
    link : 'https://www.w3schools.com/react/'
  },
  {
    langImage: "assets/images/techstack-page/kali.png",
    langName: "Kali Linux",
    langDesc: "<li>Kali Linux is a Debian-based Linux distribution specifically designed for digital forensics, penetration testing, and ethical hacking.</li>",
    link : 'https://www.kali.org/'
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>",
    link:"https://www.w3schools.com/c/"
  },
 
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
<div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
    <div class="tech_card" >
            <div class="card_img">
            <a href="${stack.link}"><img src ="${stack.langImage}" class="featured_image"></a>
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};

// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);

