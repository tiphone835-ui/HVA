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
        {
            type: "paper", // or "news"
            title: "AI in Pharmacovigilance",
            desc: "Exploring predictive models for adverse event reporting.",
            date: "Feb 15, 2026"
        },
        {
            type: "news",
            title: "Dr. A. Sharma",
            desc: "Keynote speaker at Global Health Analytics Summit.",
            date: "Jan 28, 2026"
        },
        {
            type: "paper",
            title: "Real-World Evidence",
            desc: "Methodologies for non-interventional study designs.",
            date: "Mar 02, 2026"
        },
        {
            type: "news",
            title: "New Partnership",
            desc: "Collaborating with leading Clinical Research Orgs.",
            date: "Jan 20, 2026"
        },
        {
            type: "paper",
            title: "Biostatistics Trends",
            desc: "Adaptive trial designs in oncology research.",
            date: "Feb 22, 2026"
        }
    ];
    // -------------------------

    // Render Marquee Items
    const marqueeTrack = document.getElementById('marquee-track');
    
    if (marqueeTrack) {
        const createCardHTML = (item) => `
            <a href="#" class="update-card">
                <span class="update-type ${item.type}">${item.type === 'paper' ? 'Upcoming Paper' : (item.title === 'New Partnership' ? 'Team Update' : 'Author News')}</span>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <span class="update-date">${item.date}</span>
            </a>
        `;

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
        const bodyContent = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        
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
