document.addEventListener('DOMContentLoaded', () => {
    // --- EDIT UPDATES HERE ---
    
    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Animate hamburger icon (turning into X)
            // You can add a class like 'open' to menuToggle and style spans in CSS
             menuToggle.classList.toggle('open');
        });

        // Close menu when a link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    const updatesData = [
        // 1. Medical & Health Sciences (Light Blue/Cyan Gradients)
        {
            category: "Medical & Health Sciences",
            topic: "Deprescribing",
            slrTitle: 'Manuscript Title: Towards safer medication use in older adults: Investigating barriers and facilitators of deprescribing',
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff", // Will be overridden by image if present
            image: "deprescribing.jpg",
            icon: "fa-pills",
            link: "https://bpspubs.onlinelibrary.wiley.com/doi/10.1002/bcp.70319"
        },
        {
            category: "Medical & Health Sciences",
            topic: "on Polypharmacy and Deprescribing",
            slrTitle: 'Manuscript Title: Exploring the Knowledge and Attitudes of Physicians on Polypharmacy and Deprescribing in Clinical Practice: a Cross-Sectional Study',
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "polypharmacy.jpg",
            icon: "fa-prescription-bottle-medical",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12347019/"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Sickle Cell Disease",
            slrTitle: 'Manuscript Title: IL-1β (+3954C>T) Polymorphism in Sickle Cell Disease: A Call for Larger-Scale Studies',
            author: "Dr. Varun Chaithanya Gurram",
            status: "Completed",
            color: "#ffffff",
            image: "sickle_cell.jpg",
            icon: "fa-microscope",
            link: "https://www.jchr.org/index.php/JCHR/article/view/6541"
        },
        {
            category: "Medical & Health Sciences",
            topic: "COVID-19",
            slrTitle: 'Manuscript Title: Transformative role of artificial intelligence (AI) in pandemic preparedness and mitigation: the COVID-19 experience',
            author: "Sai Kiran Gangadari",
            status: "Completed",
            color: "#ffffff",
            image: "covid_ai.jpg",
            icon: "fa-virus-covid",
            link: "https://link.springer.com/article/10.1007/s44163-024-00122-z"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Precision Medicine for Aging",
            slrTitle: '"Efficacy of AI-driven personalized treatment plans for neurodegenerative diseases: A systematic review of clinical outcomes (2021–2026)."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
            icon: "fa-user-doctor"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Eco-Anxiety & Public Health",
            slrTitle: '"The global prevalence of climate-related mental health disorders in youth: Mapping evidence and intervention strategies."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
            icon: "fa-earth-americas",
            link: "#"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Digital Health Equity",
            slrTitle: '"Barriers to telemedicine adoption in low-resource settings: A systematic analysis of infrastructure vs. cultural literacy."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)",
            icon: "fa-mobile-screen-button",
            link: "#"
        },

        // 2. Agriculture & Food Science (Greens/Earth Tones)
        {
            category: "Agriculture & Food Science",
            topic: "Climate-Resilient Crops",
            slrTitle: '"Effectiveness of CRISPR/Cas9 in developing heat-tolerant cereal varieties: A systematic review of field trial successes."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
            icon: "fa-wheat-awn",
            link: "#"
        },
        {
            category: "Agriculture & Food Science",
            topic: "Precision Agriculture (IoT)",
            slrTitle: '"The impact of IoT-driven \'Real-Time\' soil monitoring on water conservation in arid regions: A global synthesis."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)",
            icon: "fa-satellite-dish",
            link: "#"
        },
        {
            category: "Agriculture & Food Science",
            topic: "Circular Food Systems",
            slrTitle: '"Systematic analysis of consumer acceptance vs. nutritional safety of lab-grown meat and insect-based proteins."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
            icon: "fa-recycle",
            link: "#"
        },
        {
            category: "Agriculture & Food Science",
            topic: "Post-Harvest Loss",
            slrTitle: '"The role of AI and blockchain in reducing food waste within global perishable supply chains."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
            icon: "fa-boxes-packing",
            link: "#"
        },

        // 3. Social Sciences (Warm Tones)
        {
            category: "Social Sciences",
            topic: "The Gig Economy 2.0",
            slrTitle: '"Social security and mental well-being in the platform-based workforce: A systematic review of global labor policy impacts."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%)",
            icon: "fa-people-carry-box",
            link: "#"
        },
        {
            category: "Social Sciences",
            topic: "Misinformation & Democracy",
            slrTitle: '"The role of generative AI in shaping electoral narratives: A systematic review of digital literacy interventions."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
            icon: "fa-users-viewfinder",
            link: "#"
        },
        {
            category: "Social Sciences",
            topic: "Inclusive Education",
            slrTitle: '"Impact of VR-based immersive learning on neurodivergent students: A systematic analysis of pedagogical outcomes."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)",
            icon: "fa-hands-holding-child",
            link: "#"
        },

        // 4. General Science & Environment (Purples/Teals)
        {
            category: "General Science & Environment",
            topic: "Green Hydrogen",
            slrTitle: '"Barriers to scaling green hydrogen for heavy industry: A systematic review of technical vs. economic feasibility."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
            icon: "fa-industry",
            link: "#"
        },
        {
            category: "General Science & Environment",
            topic: "Microplastics in Ecosystems",
            slrTitle: '"The efficacy of bio-remediation techniques in removing microplastics from marine environments: A systematic evidence map."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
            icon: "fa-water",
            link: "#"
        },
        {
            category: "General Science & Environment",
            topic: "Energy Storage",
            slrTitle: '"Beyond Lithium-ion: A systematic review of the scalability and environmental impact of Sodium-ion battery technologies."',
            status: "Upcoming",
            color: "linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)",
            icon: "fa-battery-full",
            link: "#"
        }
    ];
    // -------------------------

    // Render Marquee Items
    const marqueeTrack = document.getElementById('marquee-track');
    
    if (marqueeTrack) {
        const createCardHTML = (item) => {
            const tag = item.link ? 'a' : 'div';
            const hrefAttr = item.link ? `href="${item.link}" target="_blank"` : '';
            const hasImageClass = item.image ? 'has-image' : '';
            const bgStyle = item.image 
                ? `background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${item.image}') center/cover no-repeat;` 
                : `background: ${item.color};`;
            
            return `
            <${tag} ${hrefAttr} class="update-card ${hasImageClass}" style="${bgStyle} border-left: none; cursor: ${item.link ? 'pointer' : 'default'}">
                <div class="card-bg-icon"><i class="fa-solid ${item.icon}"></i></div>
                <div class="card-header">
                    <span class="card-category">${item.category}</span>
                    <span class="card-status ${item.status.toLowerCase().replace(' ', '-')}">${item.status}</span>
                </div>
                <h4 class="card-topic">${item.topic}</h4>
                <p class="card-slr-title">${item.slrTitle}</p>
                ${item.author ? `<p class="card-author">${item.author}</p>` : ''}
            </${tag}>
            `;
        };

        // Generate HTML for one set of items
        const itemsHTML = updatesData.map(createCardHTML).join('');

        // Duplicate for seamless scrolling (Repeat 2 times is usually enough, 3 for safety on huge screens)
        marqueeTrack.innerHTML = itemsHTML + itemsHTML + itemsHTML;
    }

    const cards = document.querySelectorAll('.service-card');
    const detailsContainer = document.getElementById('service-details-container');
    const contentWrapper = document.getElementById('service-content');

    // Data for each service
    const servicesData = {
        1: {
            title: "Scientific & Academic Writing",
            description: "Expert assistance in crafting high-impact scientific manuscripts, grant proposals, and academic documents tailored to your specific research goals.",
            list: [
                "Manuscript preparation and editing",
                "Grant proposal development",
                "Conference abstract and poster creation",
                "Regulatory document writing",
                "Thesis and dissertation support"
            ]
        },
        2: {
            title: "Editorial & Publication Support",
            description: "Comprehensive support throughout the publication process, ensuring your research meets the highest standards of peer-reviewed journals.",
            list: [
                "Journal selection and submission strategy",
                "Peer review response management",
                "Copyediting and proofreading",
                "Figure and table formatting",
                "Plagiarism checks and ethical compliance"
            ]
        },
        3: {
            title: "Study Design & Methodology",
            description: "Robust methodological planning to ensure the validity, reliability, and reproducibility of your clinical and observational studies.",
            list: [
                "Study protocol development",
                "Sample size calculation and power analysis",
                "Randomization and blinding strategies",
                "Survey and questionnaire design",
                "Bias minimization techniques"
            ]
        },
        4: {
            title: "Statistical Analysis & Data Analytics",
            description: "Advanced statistical solutions transforming complex data into actionable insights using state-of-the-art analytical tools.",
            list: [
                "Statistical analysis plan (SAP) creation",
                "Descriptive and inferential statistics",
                "Survival analysis and regression modeling",
                "Bioinformatics and genomic data analysis",
                "Interactive data visualization dashboards"
            ]
        },
        5: {
            title: "Research Mentoring & Training",
            description: "Empowering researchers and healthcare professionals with the skills and knowledge needed to excel in their scientific endeavors.",
            list: [
                "One-on-one research coaching",
                "Workshops on medical writing and statistics",
                "GCP and research ethics training",
                "Career development counseling",
                "Grant writing masterclasses"
            ]
        }
    };

    let activeCardId = null;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-service');

            // If clicking the already active card, close it
            if (activeCardId === serviceId) {
                closeDetails();
                return;
            }

            // Deactivate previous card
            cards.forEach(c => c.classList.remove('active'));
            
            // Activate clicked card
            card.classList.add('active');
            activeCardId = serviceId;

            // Update and show details
            updateDetails(serviceId);
        });
    });

    function updateDetails(id) {
        const data = servicesData[id];
        if (!data) return;

        // Generate list HTML
        const listItems = data.list.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('');

        // Create content HTML
        const html = `
            <div class="details-inner">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <ul class="feature-list">
                    ${listItems}
                </ul>
                <a href="/contact-us" class="btn-enquire">Enquire Now</a>
            </div>
        `;

        // Fade out, switch content, fade in
        contentWrapper.style.opacity = '0';
        
        setTimeout(() => {
            contentWrapper.innerHTML = html;
            detailsContainer.classList.add('open');
            contentWrapper.style.opacity = '1';
            
            // Scroll to details if on mobile or if it's far down
            detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }

    function closeDetails() {
        cards.forEach(c => c.classList.remove('active'));
        detailsContainer.classList.remove('open');
        activeCardId = null;
        
        setTimeout(() => {
            contentWrapper.innerHTML = '<div class="placeholder-text">Select a service above to view details.</div>';
        }, 300);
    }

    // Modal Logic
    const modal = document.getElementById('enquire-modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const enquiryForm = document.getElementById('enquiry-form');

    // Function to open modal
    function openModal(e) {
        if(e) e.preventDefault(); // Prevent default link behavior
        enquiryForm.reset(); // Clear previous form data
        modal.classList.add('open');
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('open');
    }

    // Handle Form Submission (Mailto)
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get values
        const name = enquiryForm.querySelector('input[placeholder="Full Name"]').value;
        const email = enquiryForm.querySelector('input[placeholder="Email Address"]').value; // Not used in mailto destination, but good to have
        const phone = enquiryForm.querySelector('input[placeholder="Phone"]').value;
        const subject = enquiryForm.querySelector('input[placeholder="Subject"]').value;
        const message = enquiryForm.querySelector('textarea').value;

        // Construct Email Body
        const bodyContent = `Name: ${name}\r\nPhone: ${phone}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;
        
        // Construct Mailto Link
        const mailtoLink = `mailto:healthvalueanalytics@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

        // Open Email Client
        window.location.href = mailtoLink;

        // Optional: Close modal after a delay or immediately
        setTimeout(closeModal, 1000);
    });

    // Event Delegation for "Enquire Now" buttons (since they are created dynamically)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-enquire') || e.target.closest('.btn-enquire')) {
            openModal(e);
        }
    });

    // Close button click
    modalCloseBtn.addEventListener('click', closeModal);

    // Close on clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Generic function to attach listeners to multiple links
    function attachToggleListeners(selector, toggleFunction) {
        const links = document.querySelectorAll(selector);
        links.forEach(link => {
            link.addEventListener('click', toggleFunction);
        });
    }

    // Toggle "About Us" visibility
    const aboutUsSection = document.getElementById('about-us');
    
    // Toggle "Services" visibility
    const servicesSection = document.getElementById('our-services');

    // Toggle "Subject Coverage" visibility
    const subjectSection = document.getElementById('subject-coverage');


    if (aboutUsSection) {
        function toggleAboutUs(e) {
            if(e) e.preventDefault();
            
            // Close other sections if open
            if (servicesSection && servicesSection.classList.contains('open')) {
                servicesSection.classList.remove('open');
            }
            if (subjectSection && subjectSection.classList.contains('open')) {
                subjectSection.classList.remove('open');
            }

            aboutUsSection.classList.toggle('open');
            
            if (aboutUsSection.classList.contains('open')) {
                 aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        attachToggleListeners('a[href="#about-us"]', toggleAboutUs);
    }

    if (servicesSection) {
        function toggleServices(e) {
            if(e) e.preventDefault();

            // Close other sections if open
            if (aboutUsSection && aboutUsSection.classList.contains('open')) {
                aboutUsSection.classList.remove('open');
            }
            if (subjectSection && subjectSection.classList.contains('open')) {
                subjectSection.classList.remove('open');
            }

            servicesSection.classList.toggle('open');
            
            if (servicesSection.classList.contains('open')) {
                 servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        attachToggleListeners('a[href="#our-services"]', toggleServices);
    }

    if (subjectSection) {
        function toggleSubject(e) {
            if(e) e.preventDefault();

            // Close other sections if open
            if (aboutUsSection && aboutUsSection.classList.contains('open')) {
                aboutUsSection.classList.remove('open');
            }
            if (servicesSection && servicesSection.classList.contains('open')) {
                servicesSection.classList.remove('open');
            }

            subjectSection.classList.toggle('open');
            
            if (subjectSection.classList.contains('open')) {
                 subjectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        attachToggleListeners('a[href="#subject-coverage"]', toggleSubject);
    }

    // Check URL hash on load and open corresponding section
    const hash = window.location.hash;
    if (hash) {
        if (hash === '#about-us' && typeof toggleAboutUs === 'function') {
            toggleAboutUs();
        } else if (hash === '#our-services' && typeof toggleServices === 'function') {
            toggleServices();
        } else if (hash === '#subject-coverage' && typeof toggleSubject === 'function') {
            toggleSubject();
        }
    }

});
