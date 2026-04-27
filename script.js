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
            category: "Medical & Health Sciences",
            topic: "Falls in Geriatric Cancer Patients",
            slrTitle: 'Falls among geriatric cancer patients: a systematic review and meta-analysis of prevalence and risk across cancer types',
            journal: "BMC Geriatrics",
            author: "Doddolla Lingamaiah",
            status: "Completed",
            color: "#ffffff",
            image: "geriatric_cancer.jpg",
            icon: "fa-person-cane",
            link: "https://link.springer.com/article/10.1186/s12877-025-05722-1"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Deprescribing",
            slrTitle: 'Towards safer medication use in older adults: Investigating barriers and facilitators of deprescribing',
            journal: "British Journal of Clinical Pharmacology",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "deprescribing.jpg",
            icon: "fa-pills",
            link: "https://bpspubs.onlinelibrary.wiley.com/doi/10.1002/bcp.70319"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Polypharmacy and Deprescribing",
            slrTitle: 'Exploring the Knowledge and Attitudes of Physicians on Polypharmacy and Deprescribing in Clinical Practice: a Cross-Sectional Study',
            journal: "Mædica - a Journal of Clinical Medicine",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "polypharmacy.jpg",
            icon: "fa-prescription-bottle-medical",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12347019/"
        },
        {
            category: "Medical & Health Sciences",
            topic: "COVID-19",
            slrTitle: 'Transformative role of artificial intelligence (AI) in pandemic preparedness and mitigation: the COVID-19 experience',
            journal: "Discover Artificial Intelligence",
            author: "Sai Kiran G",
            status: "Completed",
            color: "#ffffff",
            image: "covid_ai.jpg",
            icon: "fa-virus-covid",
            link: "https://link.springer.com/article/10.1007/s44163-025-00625-x"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Sickle Cell Disease",
            slrTitle: 'IL-1β (+3954C>T) Polymorphism in Sickle Cell Disease: A Call for Larger-Scale Studies',
            journal: "Journal of Chemical Health Risks",
            author: "Dr. Varun Chaithanya Gurram",
            status: "Completed",
            color: "#ffffff",
            image: "sickle_cell.jpg",
            icon: "fa-microscope",
            link: "https://www.jchr.org/index.php/JCHR/article/view/6541"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Chronic Hepatitis C",
            slrTitle: 'rs2230201 polymorphism may dictate complement C3 levels and response to treatment in chronic hepatitis C patients',
            journal: "Journal of Viral Hepatitis",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "hepatitis_c.jpeg",
            icon: "fa-virus",
            link: "https://onlinelibrary.wiley.com/doi/10.1111/jvh.12280?msockid=07af26db8e8a6aa6299330fd8fe86b4f"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Chronic Hepatitis C",
            slrTitle: 'Role of complement component C4 in treatment response and disease progression in chronic hepatitis C patients',
            journal: "Journal of Viral Hepatitis",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "hepatitis_virus.jpeg",
            icon: "fa-virus",
            link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/jvh.12383"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Chronic Hepatitis C",
            slrTitle: 'Down regulation of TRIF, TLR3, and MAVS in HCV infected liver correlates with the outcome of infection',
            journal: "Journal of Medical Virology",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "hcv_liver.jpeg",
            icon: "fa-virus",
            link: "https://onlinelibrary.wiley.com/journal/10969071"
        },
        {
            category: "Medical & Health Sciences",
            topic: "Hepatitis B",
            slrTitle: 'IL-18 polymorphisms in hepatitis B virus related liver disease',
            journal: "Cytokine",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "hepatitis_b.jpeg",
            icon: "fa-virus",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S1043466615000745"
        },
        {
            category: "Medical & Health Sciences",
            topic: "HBsAg Titres and HBV DNA",
            slrTitle: 'Clinical Significance of Quantitative HBsAg Titres and its Correlation With HBV DNA Levels in the Natural History of Hepatitis B Virus Infection',
            journal: "Journal of Clinical and Experimental Hepatology (JCEH)",
            author: "Dr. Vijaya Kumar Karra",
            status: "Completed",
            color: "#ffffff",
            image: "hbsag_test.jpeg",
            icon: "fa-vial",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0973688316303036"
        },
    ];
    // -------------------------

    // Render Marquee Items
    const marqueeTrack = document.getElementById('marquee-track');
    
    if (marqueeTrack) {
        const createCardHTML = (item) => {
            const tag = item.link ? 'a' : 'div';
            const hrefAttr = item.link ? `href="${item.link}" target="_blank"` : '';
            const hasImageClass = item.image ? 'has-image split-layout' : '';
            const bgStyle = item.image 
                ? '' // Background will be handled by the image side div
                : `background: ${item.color};`;
            
            if (item.image) {
                return `
                <${tag} ${hrefAttr} class="update-card ${hasImageClass}" style="border-left: none; cursor: ${item.link ? 'pointer' : 'default'}">
                    <div class="card-image-side" style="background-image: url('${item.image}')"></div>
                    <div class="card-text-side">
                        <div class="card-header">
                            <span class="card-category">${item.category}</span>
                            <span class="card-status ${item.status.toLowerCase().replace(' ', '-')}">${item.status}</span>
                        </div>
                        <h4 class="card-topic">${item.topic}</h4>
                        <p class="card-slr-title">${item.slrTitle}</p>
                        ${item.author ? `<p class="card-author">${item.author}</p>` : ''}
                        ${item.journal ? `<p class="card-journal"><i class="fa-regular fa-newspaper"></i> ${item.journal}</p>` : ''}
                        ${item.status === 'Completed' && item.link ? `
                        <div class="card-action">
                            <span>Read Full Article</span>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>` : ''}
                    </div>
                </${tag}>
                `;
            }

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
                ${item.journal ? `<p class="card-journal"><i class="fa-regular fa-newspaper"></i> ${item.journal}</p>` : ''}
                ${item.status === 'Completed' && item.link ? `
                <div class="card-action">
                    <span>Read Full Article</span>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>` : ''}
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
        },
        6: {
            title: "eCRFs, Apps & Data Collection Forms",
            description: "End-to-end design and development of electronic data capture tools — from simple data collection forms to fully customised eCRFs and lightweight clinical apps.",
            list: [
                "Custom eCRF design and build",
                "Simple web & mobile apps for clinical data capture",
                "Patient-facing and investigator-facing data collection forms",
                "REDCap, KoBoToolbox & custom platform setup",
                "Offline-capable forms for low-connectivity settings"
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
            
            // Close other sections
            if (servicesSection && servicesSection.classList.contains('open')) {
                servicesSection.classList.remove('open');
                document.querySelectorAll('a[href="#our-services"]').forEach(l => l.classList.remove('nav-active'));
            }
            if (subjectSection && subjectSection.classList.contains('open')) {
                subjectSection.classList.remove('open');
                document.querySelectorAll('a[href="#subject-coverage"]').forEach(l => l.classList.remove('nav-active'));
            }

            aboutUsSection.classList.toggle('open');
            const isOpen = aboutUsSection.classList.contains('open');
            document.querySelectorAll('a[href="#about-us"]').forEach(l => l.classList.toggle('nav-active', isOpen));
            
            if (isOpen) {
                aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        attachToggleListeners('a[href="#about-us"]', toggleAboutUs);
        // Close button inside the section
        const closeAbout = aboutUsSection.querySelector('.section-close-btn');
        if (closeAbout) closeAbout.addEventListener('click', toggleAboutUs);
    }

    if (servicesSection) {
        function toggleServices(e) {
            if(e) e.preventDefault();

            // Close other sections
            if (aboutUsSection && aboutUsSection.classList.contains('open')) {
                aboutUsSection.classList.remove('open');
                document.querySelectorAll('a[href="#about-us"]').forEach(l => l.classList.remove('nav-active'));
            }
            if (subjectSection && subjectSection.classList.contains('open')) {
                subjectSection.classList.remove('open');
                document.querySelectorAll('a[href="#subject-coverage"]').forEach(l => l.classList.remove('nav-active'));
            }

            servicesSection.classList.toggle('open');
            const isOpen = servicesSection.classList.contains('open');
            document.querySelectorAll('a[href="#our-services"]').forEach(l => l.classList.toggle('nav-active', isOpen));
            
            if (isOpen) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        attachToggleListeners('a[href="#our-services"]', toggleServices);
        const closeServices = servicesSection.querySelector('.section-close-btn');
        if (closeServices) closeServices.addEventListener('click', toggleServices);
    }

    if (subjectSection) {
        function toggleSubject(e) {
            if(e) e.preventDefault();

            // Close other sections
            if (aboutUsSection && aboutUsSection.classList.contains('open')) {
                aboutUsSection.classList.remove('open');
                document.querySelectorAll('a[href="#about-us"]').forEach(l => l.classList.remove('nav-active'));
            }
            if (servicesSection && servicesSection.classList.contains('open')) {
                servicesSection.classList.remove('open');
                document.querySelectorAll('a[href="#our-services"]').forEach(l => l.classList.remove('nav-active'));
            }

            subjectSection.classList.toggle('open');
            const isOpen = subjectSection.classList.contains('open');
            document.querySelectorAll('a[href="#subject-coverage"]').forEach(l => l.classList.toggle('nav-active', isOpen));
            
            if (isOpen) {
                subjectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        attachToggleListeners('a[href="#subject-coverage"]', toggleSubject);
        const closeSubject = subjectSection.querySelector('.section-close-btn');
        if (closeSubject) closeSubject.addEventListener('click', toggleSubject);
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
