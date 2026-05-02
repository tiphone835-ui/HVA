import re

# Read template
with open('ecourse-heor.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace title
html = html.replace('<title>Health Economics and Outcomes Research (HEOR) – HealthValue Analytics</title>', '<title>Pharmacovigilance (PV) – HealthValue Analytics</title>')

# Replace hero background
html = html.replace("url('heor_card.jpg')", "url('pv_card.jpg')")

# Replace Hero H1
html = re.sub(r'<h1>.*?</h1>', r'<h1><i class="fa-solid fa-pills" style="font-size:2rem;vertical-align:middle;margin-right:10px;"></i>Pharmacovigilance (PV)</h1>', html, count=1)

# Replace breadcrumb
html = html.replace('> HEOR\n', '> Pharmacovigilance\n')

# Replace Alert
html = re.sub(r'<div class="course-alert">.*?</div>', r'''<div class="course-alert">
            <h3><i class="fa-solid fa-bullhorn"></i> Admissions Open for March 2026 Batch</h3>
            <p><strong>Course Commencement:</strong> 25th March 2026</p>
        </div>''', html, flags=re.DOTALL)

# Main content
main_content = """<div class="course-main">
                <div class="course-content-block">
                    <h2 class="course-section-title">Background</h2>
                    <p>Pharmacovigilance (PV) is a critical discipline in healthcare and pharmaceutical sciences dedicated to the detection, assessment, understanding, and prevention of adverse effects or any other drug-related problems. With the increasing complexity of global drug development, post-marketing surveillance, regulatory requirements, and patient safety expectations, pharmacovigilance has become an essential pillar of modern healthcare systems and pharmaceutical industries.</p>
                    <p>Healthcare professionals, pharmacists, clinicians, life science graduates, regulatory specialists, and researchers are increasingly required to possess specialized knowledge in drug safety monitoring, adverse event reporting, signal detection, risk management, and regulatory compliance. However, structured and accessible professional training in pharmacovigilance remains limited, particularly for individuals seeking career advancement through flexible online learning.</p>
                    <p>The eCourse in Pharmacovigilance is designed to address this gap by providing comprehensive, multidisciplinary training in pharmacovigilance principles, regulatory frameworks, drug safety operations, and industry practices. Delivered over a duration of three months through an online platform, this course combines self-paced study, expert-led sessions, practical case evaluations, and career-focused skill development to prepare participants for professional roles in the pharmaceutical, biotechnology, clinical research, and healthcare sectors.</p>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Aim</h2>
                    <p>The aim of this course is to provide participants with foundational and applied knowledge in pharmacovigilance to strengthen their competencies in drug safety monitoring, regulatory compliance, risk assessment, and global pharmacovigilance practices.</p>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Learning Objectives</h2>
                    <p>By the end of the course, the participant should be able to:</p>
                    <ul class="course-list">
                        <li>Understand the principles, scope, and importance of pharmacovigilance</li>
                        <li>Identify, assess, and report adverse drug reactions (ADRs)</li>
                        <li>Understand global pharmacovigilance systems and reporting frameworks</li>
                        <li>Interpret pharmacovigilance regulations from major agencies including WHO, FDA, EMA, and CDSCO</li>
                        <li>Perform case processing and Individual Case Safety Report (ICSR) evaluations</li>
                        <li>Understand signal detection, signal management, and benefit-risk assessment</li>
                        <li>Develop risk management plans and pharmacovigilance system master files</li>
                        <li>Understand aggregate safety reporting including PSUR, PBRER, and DSUR</li>
                        <li>Apply pharmacovigilance principles in pharmaceutical industries, CROs, and regulatory settings</li>
                        <li>Develop professional competencies for careers in drug safety and regulatory affairs</li>
                    </ul>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Course Design and Duration</h2>
                    <p>The course is designed as a three-month eCourse delivered through a web-based learning management system. It is structured to offer:</p>
                    <ul class="course-list">
                        <li>Self-paced modular learning</li>
                        <li>Live virtual lectures</li>
                        <li>Recorded sessions</li>
                        <li>Practical case studies</li>
                        <li>Regulatory document reviews</li>
                        <li>Assessments and quizzes</li>
                        <li>Hands-on pharmacovigilance exercises</li>
                        <li>Downloadable study materials</li>
                    </ul>
                    <p>This blended learning model ensures flexibility for working professionals, students, and researchers while maintaining strong academic and practical rigor.</p>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Eligibility Criteria</h2>
                    <p>The course is open to the following candidates:</p>
                    <ul class="course-list">
                        <li>BPharm / MPharm / PharmD graduates</li>
                        <li>Medical graduates and clinicians</li>
                        <li>Nursing professionals</li>
                        <li>Biotechnology and life sciences graduates</li>
                        <li>Clinical research associates</li>
                        <li>Regulatory affairs professionals</li>
                        <li>Pharmaceutical industry professionals</li>
                        <li>Public health professionals</li>
                        <li>Researchers and academicians</li>
                        <li>Postgraduate students</li>
                        <li>Professionals seeking career transition into pharmacovigilance</li>
                    </ul>
                    <p>Eligible applicants may be screened based on online application and statement of purpose where applicable.</p>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Teaching Methodology</h2>
                    <p>The course will be delivered through a blended online teaching-learning approach utilizing:</p>
                    <ul class="course-list">
                        <li>Interactive online learning modules</li>
                        <li>Expert-led virtual classes</li>
                        <li>Case processing workshops</li>
                        <li>Adverse event reporting exercises</li>
                        <li>Signal detection simulations</li>
                        <li>Regulatory framework discussions</li>
                        <li>Recommended readings from guidelines and literature</li>
                        <li>Discussion forums</li>
                        <li>Capstone pharmacovigilance project</li>
                    </ul>
                    <p>Participants will be able to access all sessions remotely through personal computers or laptops.</p>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Evaluation and Award of Certificate</h2>
                    <p>Participants will be evaluated through:</p>
                    <ul class="course-list">
                        <li>Module-wise assessments</li>
                        <li>Weekly quizzes</li>
                        <li>Practical pharmacovigilance assignments</li>
                        <li>Case narrative development</li>
                        <li>Final online examination</li>
                        <li>Capstone project</li>
                    </ul>
                    <p>Participants who successfully complete all course requirements will receive an online Certificate in Pharmacovigilance and Drug Safety.</p>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Course Fee</h2>
                    <ul class="course-list">
                        <li><strong>For Indian Nationals:</strong> INR 20,000</li>
                        <li><strong>For South Asian Candidates:</strong> USD 220</li>
                        <li><strong>For International Candidates:</strong> USD 320</li>
                    </ul>
                    <p>The course fee is inclusive of:</p>
                    <ul class="course-list">
                        <li>Full course access</li>
                        <li>Live and recorded sessions</li>
                        <li>Study materials</li>
                        <li>Assessments</li>
                        <li>Final examination</li>
                        <li>Certification</li>
                        <li>Practical project mentorship</li>
                    </ul>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Course Modules</h2>
                    <p>The course follows a comprehensive module-based learning design over three months.</p>
                    
                    <div class="modules-list">
                        <div class="module-item">
                            <div class="module-header">
                                <div class="module-number">1</div>
                                <div class="module-title">Foundations of Pharmacovigilance</div>
                            </div>
                            <ul class="module-sublist">
                                <li>Introduction to pharmacovigilance</li>
                                <li>History and evolution of drug safety</li>
                                <li>Adverse drug reactions and classifications</li>
                                <li>Medication errors and safety concerns</li>
                                <li>Global pharmacovigilance systems</li>
                            </ul>
                        </div>
                        
                        <div class="module-item">
                            <div class="module-header">
                                <div class="module-number">2</div>
                                <div class="module-title">Drug Safety Operations and Reporting</div>
                            </div>
                            <ul class="module-sublist">
                                <li>Individual Case Safety Reports (ICSRs)</li>
                                <li>Case processing workflow</li>
                                <li>MedDRA coding basics</li>
                                <li>Seriousness, causality, and expectedness assessment</li>
                                <li>Signal detection and management</li>
                                <li>Literature surveillance</li>
                            </ul>
                        </div>

                        <div class="module-item">
                            <div class="module-header">
                                <div class="module-number">3</div>
                                <div class="module-title">Regulatory Pharmacovigilance</div>
                            </div>
                            <ul class="module-sublist">
                                <li>WHO pharmacovigilance guidelines</li>
                                <li>FDA, EMA, MHRA, CDSCO regulations</li>
                                <li>Risk Management Plans (RMP)</li>
                                <li>Periodic Safety Update Reports (PSUR)</li>
                                <li>PBRER and DSUR</li>
                                <li>Inspection readiness and compliance</li>
                            </ul>
                        </div>

                        <div class="module-item">
                            <div class="module-header">
                                <div class="module-number">4</div>
                                <div class="module-title">Career Development and Industry Applications</div>
                            </div>
                            <ul class="module-sublist">
                                <li>Pharmacovigilance career pathways</li>
                                <li>Resume and interview preparation</li>
                                <li>Safety database overview (Argus, ArisG)</li>
                                <li>Medical writing in pharmacovigilance</li>
                                <li>Freelancing and consulting opportunities</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Career Opportunities After Completion</h2>
                    <p>Graduates of this course may pursue roles such as:</p>
                    <ul class="course-list">
                        <li>Drug Safety Associate</li>
                        <li>Pharmacovigilance Officer</li>
                        <li>Safety Data Analyst</li>
                        <li>Regulatory Affairs Associate</li>
                        <li>Medical Reviewer</li>
                        <li>Signal Detection Specialist</li>
                        <li>Clinical Safety Scientist</li>
                        <li>Aggregate Report Writer</li>
                        <li>Risk Management Specialist</li>
                    </ul>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Hiring Sectors</h2>
                    <ul class="course-list">
                        <li>Pharmaceutical companies</li>
                        <li>Biotechnology firms</li>
                        <li>Clinical research organizations (CROs)</li>
                        <li>Regulatory agencies</li>
                        <li>Hospitals and healthcare systems</li>
                        <li>Medical writing organizations</li>
                        <li>Contract safety service providers</li>
                    </ul>
                </div>

                <div class="course-content-block">
                    <h2 class="course-section-title">Why Choose This Course?</h2>
                    <ul class="course-list">
                        <li>Industry-oriented curriculum</li>
                        <li>Flexible 3-month duration</li>
                        <li>Regulatory and practical focus</li>
                        <li>Career enhancement opportunities</li>
                        <li>Hands-on case processing exposure</li>
                        <li>Global pharmacovigilance relevance</li>
                        <li>Professional certification</li>
                        <li>Suitable for beginners and experienced professionals</li>
                    </ul>
                </div>
            </div>"""

html = re.sub(r'<div class="course-main">.*?</div>\s*<!-- RIGHT: Sidebar -->', main_content + '\n\n            <!-- RIGHT: Sidebar -->', html, flags=re.DOTALL)

# Sidebar fees update
html = html.replace('<li><strong>International:</strong> <span>330 USD</span></li>', '<li><strong>International:</strong> <span>320 USD</span></li>')
html = html.replace('<li><strong>Next Batch:</strong> <span>June 2026</span></li>', '<li><strong>Next Batch:</strong> <span>March 2026</span></li>')

# Update modal texts
html = html.replace('HEOR', 'Pharmacovigilance')

with open('ecourse-pv.html', 'w', encoding='utf-8') as f:
    f.write(html)
