const YEAR_ZERO = 2003;

const yearEntries = [
    { year: 2025, copy: "Does this exist yet? Let's build it!" },
    { year: 2024, copy: "Swimming is not everything anymore." },
    { year: 2023, copy: "Almost national champion." },
    { year: 2022, copy: "Soon I am moving to America!" },
    { year: 2021, copy: "School is back on." },
    { year: 2020, copy: "Just because I am home I still have to practice." },
    { year: 2019, copy: "Covid what?" },
    { year: 2018, copy: "Finally going to high school!" },
    { year: 2017, copy: "3rd at nationals? Woow!" },
    { year: 2016, copy: "I want to move abroad." },
    { year: 2015, copy: "Practicing twice a day." },
    { year: 2014, copy: "Last year in the same classroom." },
    { year: 2013, copy: "Swimming is the most important thing." },
    { year: 2012, copy: "Every girl loves me." },
    { year: 2011, copy: "School is not so bad." },
    { year: 2010, copy: "Let's start middle school." },
    { year: 2009, copy: "Last year in kindergarten." },
    { year: 2008, copy: "Playing soccer and swimming." },
    { year: 2007, copy: "Spending all day playing in kindergarten." },
    { year: 2006, copy: "Starting swimming." },
    { year: 2005, copy: "Learning to walk." },
    { year: 2004, copy: "Sleeping all day—what a nice time." },
    { year: 2003, copy: "I was born." }
];

const projectEntries = [
    {
        title: "BargainHouse",
        copy: "Multi-agent shopping system that finds, verifies, and negotiates deals across new and used marketplaces.",
        summary: "Submitting to The AI Championship hackathon. Building 8 specialized agents that will search 7+ platforms, call stores to verify prices, negotiate with sellers, and rank options. Features live browser automation, Agent Hub for cross-agent communication, and integrations with Twilio, and LLM APIs.",
        repo: "https://github.com/MateDort/BargainHouse",
        inProgress: "In Progress",
        ux: {
            userFlows: [
                "User submits shopping request → Planner agent breaks down into tasks",
                "Search agents query multiple platforms → Results aggregated in Agent Hub",
                "Call agent verifies availability → Negotiate agent handles price discussions",
                "User reviews ranked options → Checkout agent completes purchase"
            ],
            designDecisions: [
                "Agent Hub dashboard provides real-time visual feedback with browser screenshots",
                "Progress tracking shows step-by-step agent actions for transparency",
                "Chakra UI components ensure consistent, accessible interface"
            ],
            highlights: [
                "Designed intuitive Agent Hub for cross-agent communication visualization",
                "Created live progress tracking UI with browser automation screenshots",
                "Built responsive interface for monitoring multi-agent workflows"
            ]
        },
        developer: {
            architecture: [
                "8 specialized agents: Planner, Search, Call, Negotiate, PriceTracker, SynthSummary, Arbiter, Checkout",
                "Agent Hub for real-time cross-agent communication",
                "Browser automation with Puppeteer for platform interactions"
            ],
            techStack: [
                "Frontend: React + Chakra UI",
                "Backend: Node.js/Express",
                "Automation: Puppeteer, Raindrop MCP",
                "APIs: Twilio, ElevenLabs, OpenAI/Gemini"
            ],
            highlights: [
                "Building 8 specialized agents that automate shopping across Amazon, Best Buy, Facebook Marketplace, and more",
                "Creating Agent Hub for real-time cross-agent communication and live visual feedback",
                "Technical stack: React + Chakra UI, Node.js/Express, Puppeteer, Raindrop MCP, Twilio, ElevenLabs, OpenAI/Gemini"
            ]
        }
    },
    {
        title: "TossWise",
        copy: "AI-powered smart trash bin that uses computer vision and natural language to classify waste in real time.",
        summary: "A hands-free system that identifies waste, guides disposal through voice feedback, and adapts to location-specific bin configurations. Combines YOLOv8 person detection, Google Gemini Vision for classification, ElevenLabs TTS for voice guidance, and Arduino hardware integration.",
        award: "👑 Winner of Best Use of Gemini API at Emory Hacks 2025.",
        repo: "https://github.com/VihaanIyer/TossWise-",
        devpost: "https://devpost.com/software/tosswise",
        ux: {
            userFlows: [
                "User approaches bin → YOLOv8 detects person presence",
                "User holds waste item → Gemini Vision classifies waste type",
                "System provides voice guidance → User disposes in correct bin",
                "UI shows live trash falling animation → Contamination percentage displayed"
            ],
            designDecisions: [
                "Live trash falling animation provides visual feedback during disposal",
                "Contamination percentage helps users understand sorting accuracy",
                "Adaptive onboarding flow allows system to work with any bin configuration"
            ],
            highlights: [
                "Designed live trash falling animation into the bin on the UI",
                "Added contamination percentage display for user feedback",
                "Created adaptive onboarding system that adapts to any bin situation"
            ]
        },
        developer: {
            architecture: [
                "YOLOv8 person detection with trained Roboflow model",
                "Google Gemini Vision API for waste classification",
                "ElevenLabs TTS for voice guidance",
                "Arduino hardware integration for bin control"
            ],
            techStack: [
                "Computer Vision: YOLOv8, Roboflow",
                "AI: Google Gemini Vision API",
                "Voice: ElevenLabs TTS",
                "Hardware: Arduino"
            ],
            highlights: [
                "Improved detection process using trained Roboflow model to better pick up trash and help the LLM",
                "Integrated YOLOv8 with Roboflow for enhanced object detection",
                "Built adaptive onboarding system that can adapt to any bin configuration"
            ]
        }
    },
    {
        title: "C.L.I.M.A",
        copy: "Precision agriculture platform that helps farmers make smarter decisions using NASA technology.",
        summary: "2nd place at HackATL 2025 (NASA Technology Transfer Program). Built in 48 hours with teammates Brody Weinfurtner, Jack Bashaw, and Leah Loukedis. Combines two NASA technologies: HSEG (Hierarchical Segmentation Engine) for pixel-level farmland segmentation into distinct soil and crop zones, and MERRA/AS & Climate Analytics as a Service for weather pattern forecasting. Provides hyper-local, data-driven insights so farmers can optimize irrigation, fertilizer, and planting strategies while preparing for climate challenges.",
        award: "🥈 2nd Place at HackATL 2025",
        repo: "https://www.figma.com/proto/IAjpRoCcleqqqPee0KpgSI/Nasa-Project?page-id=0%3A1&node-id=6-5&p=f&viewport=393%2C488%2C0.07&t=TV6b0ItWCHVEJ6fM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A44&show-proto-sidebar=1",
        repoLabel: "Figma Design",
        ux: {
            userFlows: [
                "Farmer selects farmland area → HSEG segments into soil and crop zones",
                "System analyzes weather patterns → MERRA/AS provides climate forecasts",
                "Farmer receives hyper-local insights → Optimizes irrigation and fertilizer",
                "Dashboard shows zone-specific recommendations → Farmer makes data-driven decisions"
            ],
            designDecisions: [
                "Full app design created in Figma with focus on data visualization",
                "Dashboard layout prioritizes actionable insights over raw data",
                "Zone-based interface matches how farmers think about their land"
            ],
            highlights: [
                "Designed full app's interface in Figma for precision agriculture use case",
                "Created intuitive dashboard for visualizing NASA satellite data",
                "Built user flows that translate complex NASA tech into farmer-friendly insights"
            ]
        },
        developer: {
            architecture: [
                "NASA HSEG for pixel-level farmland segmentation",
                "NASA MERRA/AS & Climate Analytics as a Service for weather forecasting",
                "React web app for presenting insights and recommendations"
            ],
            techStack: [
                "Frontend: React",
                "NASA APIs: HSEG, MERRA/AS",
                "Data Processing: Climate analytics integration"
            ],
            highlights: [
                "Built MVP React web app to present the idea and demonstrate NASA tech integration",
                "Integrated two NASA technologies (HSEG and MERRA/AS) into cohesive platform",
                "Created data pipeline for processing satellite imagery and climate data"
            ]
        }
    },
    // {
    //     title: "SkillShipping",
    //     copy: "Talent exchange marketplace matching athletes with emerging startups.",
    //     summary: "Rapid experimentation led to a matchmaking flow inspired by relay races.",
    //     repo: "https://github.com/MateDort/SkillShipping",
    //     ux: {
    //         userFlows: [
    //             "Athlete creates profile with video intro → Startup browses talent pool",
    //             "Matchmaking algorithm suggests matches → Both parties review profiles",
    //             "Contextual video intros provide authentic connection → Automated contracts generated",
    //             "Match confirmed → Contract packets ship in <5 minutes"
    //         ],
    //         designDecisions: [
    //             "Matchmaking flow inspired by relay races creates engaging user experience",
    //             "Contextual video intros replace static profiles for better connection",
    //             "Streamlined contract flow reduces friction in the matching process"
    //         ],
    //         highlights: [
    //             "Designed matchmaking flow inspired by relay races",
    //             "Tripled weekly matches using contextual video intros",
    //             "Created streamlined contract generation process"
    //         ]
    //     },
    //     developer: {
    //         architecture: [
    //             "Matchmaking algorithm for athlete-startup pairing",
    //             "Video upload and processing system",
    //             "Automated contract generation and delivery"
    //         ],
    //         techStack: [
    //             "Video Processing: Contextual video intro system",
    //             "Automation: Contract packet generation",
    //             "Matching: Algorithm-based pairing system"
    //         ],
    //         highlights: [
    //             "Automated contract packets to ship in <5 minutes",
    //             "Built video processing pipeline for contextual intros",
    //             "Developed matchmaking algorithm that tripled weekly matches"
    //         ]
    //     }
    // },
    // {
    //     title: "NeuraNote",
    //     copy: "Thought-capture notebook with on-device vector embeddings.",
    //     summary: "Feels like Messages, thinks like a researcher—everything searchable by vibe.",
    //     repo: "https://github.com/MateDort/SmartNotes",
    //     ux: {
    //         userFlows: [
    //             "User writes note by hand → Spatial ink gestures create instant tags",
    //             "LLM summarizes note content → Vector embeddings stored on-device",
    //             "User searches by vibe → Semantic search finds related notes",
    //             "Messages-like interface → Researcher-level organization"
    //         ],
    //         designDecisions: [
    //             "Messages-like interface makes note-taking feel natural and familiar",
    //             "Spatial ink gestures provide instant tagging without interrupting flow",
    //             "Vibe-based search replaces traditional keyword matching"
    //         ],
    //         highlights: [
    //             "Crafted spatial ink gestures for instant tags",
    //             "Designed Messages-like interface for intuitive note-taking",
    //             "Won 'Most Delightful UX' at HackMIT"
    //         ]
    //     },
    //     developer: {
    //         architecture: [
    //             "On-device vector embeddings for privacy-first search",
    //             "Spatial ink gesture recognition system",
    //             "Fine-tuned small LLM for note summarization"
    //         ],
    //         techStack: [
    //             "ML: Fine-tuned small LLM",
    //             "Embeddings: On-device vector storage",
    //             "Gesture Recognition: Spatial ink processing"
    //         ],
    //         highlights: [
    //             "Fine-tuned small LLM to summarize hand-written notes",
    //             "Built on-device vector embedding system for privacy-first search",
    //             "Implemented spatial ink gesture recognition for instant tagging"
    //         ]
    //     }
    // },
    // {
    //     title: "Ring Doorman AI",
    //     copy: "Smart concierge that greets visitors with your tone and context.",
    //     summary: "Modeled etiquette from 50+ real interactions to keep intros warm, never robotic.",
    //     repo: "https://github.com/MateDort",
    //     ux: {
    //         userFlows: [
    //             "Visitor approaches door → Ring camera detects presence",
    //             "AI analyzes visitor context → Generates personalized greeting",
    //             "Voice clone delivers greeting in your tone → Visitor feels welcomed",
    //             "Cultural nuances and pronouns respected → Inclusive experience"
    //         ],
    //         designDecisions: [
    //             "Modeled etiquette from 50+ real interactions for natural feel",
    //             "Personalized greetings maintain warm, human tone",
    //             "Cultural awareness ensures inclusive visitor experience"
    //         ],
    //         highlights: [
    //             "Designed greeting system that feels warm, never robotic",
    //             "Created adaptive scripts that respect cultural nuances and pronouns",
    //             "Built interface for managing voice clones and greeting preferences"
    //         ]
    //     },
    //     developer: {
    //         architecture: [
    //             "Edge-deployed voice cloning for local data processing",
    //             "Adaptive script generation with cultural awareness",
    //             "Ring and HomeKit secure video integration"
    //         ],
    //         techStack: [
    //             "Voice: Edge-deployed voice clones",
    //             "Integration: Ring API, HomeKit secure video",
    //             "AI: Context-aware greeting generation"
    //         ],
    //         highlights: [
    //             "Edge-deployed voice clones to keep data local",
    //             "Integrated with Ring + HomeKit secure video",
    //             "Built adaptive script system that respects cultural nuances and pronouns"
    //         ]
    //     }
    // },
    // {
    //     title: "EMESE AI assistant",
    //     copy: "Personal swim strategist predicting splits, nutrition, and taper windows.",
    //     summary: "Blends WHOOP data with pool logs to coach like the mentor I wanted growing up.",
    //     repo: "https://github.com/MateDort",
    //     ux: {
    //         userFlows: [
    //             "Swimmer syncs WHOOP data → System analyzes readiness",
    //             "Pool logs input → AI predicts splits and performance",
    //             "Dynamic readiness score displayed → Swimmer adjusts training",
    //             "Nutrition and taper recommendations → Personalized coaching insights"
    //         ],
    //         designDecisions: [
    //             "Privacy-first interface puts athlete in control of their data",
    //             "Readiness score visualization helps swimmers understand their body",
    //             "Coaching insights presented like a mentor, not a machine"
    //         ],
    //         highlights: [
    //             "Designed intuitive interface for swim performance tracking",
    //             "Created dynamic readiness score visualization",
    //             "Built coaching interface that feels like a mentor"
    //         ]
    //     },
    //     developer: {
    //         architecture: [
    //             "WHOOP API integration for biometric data",
    //             "Pool log processing and analysis",
    //             "Privacy-first pipeline with athlete-owned data"
    //         ],
    //         techStack: [
    //             "APIs: WHOOP integration",
    //             "ML: Split prediction models",
    //             "Data: Privacy-first athlete-owned storage"
    //         ],
    //         highlights: [
    //             "Forecast errors under 1.5% for 200m freestyle",
    //             "Dynamic readiness score now used by 6 national-level swimmers",
    //             "Privacy-first pipeline running on athlete-owned data"
    //         ]
    //     }
    // }
];

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const wheel = document.getElementById('year-wheel');
    if (!wheel) return;

    const isWorkPage = body.classList.contains('page--work');
    const dataset = isWorkPage ? projectEntries : yearEntries;
    const dropdown = document.getElementById('timeline-select');
    const items = [];

    dataset.forEach((entry, index) => {
        const li = document.createElement('li');
        li.className = 'timeline-item';
        li.dataset.index = String(index);
        li.textContent = isWorkPage ? entry.title : entry.year;
        wheel.appendChild(li);
        items.push(li);

        if (dropdown) {
            const option = document.createElement('option');
            option.value = String(index);
            option.textContent = isWorkPage ? entry.title : entry.year;
            dropdown.appendChild(option);
        }

        li.addEventListener('click', () => focusIndex(index, true));
    });

    const heroLine = document.getElementById('hero-line');
    const ageValue = document.getElementById('age-value');
    const projectTitle = document.getElementById('project-title');
    const projectAward = document.getElementById('project-award');
    const projectCopy = document.getElementById('project-copy');
    const projectSummary = document.getElementById('project-summary');
    const projectHighlights = document.getElementById('project-highlights');
    const repoLink = document.getElementById('repo-link');
    const devpostLink = document.getElementById('devpost-link');
    const viewToggle = document.getElementById('view-toggle');
    const uxSection = document.getElementById('case-study-ux');
    const devSection = document.getElementById('case-study-developer');
    const projectMedia = document.getElementById('project-media');

    let activeIndex = 0;
    let ticking = false;
    let introTimer = null;
    let currentView = 'ux';

    const renderEntry = (entry) => {
        if (isWorkPage) {
            // Basic project info
            if (projectTitle) projectTitle.textContent = entry.title;
            if (projectAward) {
                if (entry.award) {
                    projectAward.textContent = entry.award;
                    projectAward.classList.add('is-visible');
                    if (entry.award.includes('2nd Place') || entry.award.includes('🥈')) {
                        projectAward.classList.add('project-award--silver');
                    } else {
                        projectAward.classList.remove('project-award--silver');
                    }
                } else if (entry.inProgress) {
                    projectAward.textContent = entry.inProgress;
                    projectAward.classList.add('is-visible');
                    projectAward.classList.remove('project-award--silver');
                } else {
                    projectAward.classList.remove('is-visible');
                    projectAward.classList.remove('project-award--silver');
                }
            }
            if (projectCopy) projectCopy.textContent = entry.copy;
            if (projectSummary) projectSummary.textContent = entry.summary;

            // Render UX view
            if (entry.ux) {
                const userFlowsUx = document.getElementById('user-flows-ux');
                if (userFlowsUx && entry.ux.userFlows) {
                    userFlowsUx.innerHTML = '';
                    entry.ux.userFlows.forEach((flow) => {
                        const li = document.createElement('li');
                        li.className = 'flow-item';
                        li.textContent = flow;
                        userFlowsUx.appendChild(li);
                    });
                }

                const designDecisionsUx = document.getElementById('design-decisions-ux');
                if (designDecisionsUx && entry.ux.designDecisions) {
                    designDecisionsUx.innerHTML = '';
                    entry.ux.designDecisions.forEach((decision) => {
                        const li = document.createElement('li');
                        li.textContent = decision;
                        designDecisionsUx.appendChild(li);
                    });
                }

                const highlightsUx = document.getElementById('highlights-ux');
                if (highlightsUx && entry.ux.highlights) {
                    highlightsUx.innerHTML = '';
                    entry.ux.highlights.forEach((point) => {
                        const li = document.createElement('li');
                        li.textContent = point;
                        highlightsUx.appendChild(li);
                    });
                }
            }

            // Render Developer view
            if (entry.developer) {
                const architectureDev = document.getElementById('architecture-dev');
                if (architectureDev && entry.developer.architecture) {
                    architectureDev.innerHTML = '';
                    entry.developer.architecture.forEach((arch) => {
                        const li = document.createElement('li');
                        li.textContent = arch;
                        architectureDev.appendChild(li);
                    });
                }

                const techStackDev = document.getElementById('tech-stack-dev');
                if (techStackDev && entry.developer.techStack) {
                    techStackDev.innerHTML = '';
                    entry.developer.techStack.forEach((tech) => {
                        const li = document.createElement('li');
                        li.textContent = tech;
                        techStackDev.appendChild(li);
                    });
                }

                const highlightsDev = document.getElementById('highlights-dev');
                if (highlightsDev && entry.developer.highlights) {
                    highlightsDev.innerHTML = '';
                    entry.developer.highlights.forEach((point) => {
                        const li = document.createElement('li');
                        li.textContent = point;
                        highlightsDev.appendChild(li);
                    });
                }
            }

            // Render media (video)
            if (projectMedia) {
                projectMedia.innerHTML = '';
                if (entry.video) {
                    const video = document.createElement('video');
                    video.src = entry.video;
                    video.controls = true;
                    video.className = 'project-video';
                    video.style.width = '100%';
                    video.style.maxWidth = '800px';
                    video.style.borderRadius = '12px';
                    video.style.marginTop = '2rem';
                    projectMedia.appendChild(video);
                }
            }

            // Links
            if (repoLink && entry.repo) {
                repoLink.href = entry.repo;
                if (entry.repoLabel) {
                    repoLink.textContent = entry.repoLabel;
                } else {
                    repoLink.textContent = "Repo";
                }
            }
            if (devpostLink) {
                if (entry.devpost) {
                    devpostLink.href = entry.devpost;
                    devpostLink.style.display = 'block';
                } else {
                    devpostLink.style.display = 'none';
                }
            }
        } else {
            if (heroLine) heroLine.textContent = entry.copy;
            if (ageValue) ageValue.textContent = entry.year - YEAR_ZERO;
        }
    };

    // Toggle view handler
    if (viewToggle && isWorkPage) {
        const toggleButtons = viewToggle.querySelectorAll('.toggle-btn');
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                currentView = view;
                
                toggleButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                if (view === 'ux') {
                    uxSection.style.display = 'block';
                    devSection.style.display = 'none';
                } else {
                    uxSection.style.display = 'none';
                    devSection.style.display = 'block';
                }
            });
        });
    }

    const updateDropdown = () => {
        if (dropdown) {
            dropdown.value = String(activeIndex);
        }
    };

    const setActiveIndex = (index) => {
        if (index === activeIndex || index < 0 || index >= items.length) return;
        items[activeIndex].classList.remove('is-active');
        activeIndex = index;
        items[activeIndex].classList.add('is-active');
        renderEntry(dataset[activeIndex]);
        updateDropdown();
    };

    const focusIndex = (index, smooth = false, force = false) => {
        if (!force && index === activeIndex) return;
        const target = items[index];
        if (!target) return;
        const targetOffset = target.offsetTop + target.offsetHeight / 2;
        const centerOffset = wheel.clientHeight / 2;
        const top = targetOffset - centerOffset;
        wheel.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
        setActiveIndex(index);
    };

    const syncActive = () => {
        const center = wheel.scrollTop + wheel.clientHeight / 2;
        let closest = activeIndex;
        let minDistance = Infinity;
        items.forEach((item, index) => {
            const itemCenter = item.offsetTop + item.offsetHeight / 2;
            const distance = Math.abs(center - itemCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closest = index;
            }
        });
        if (closest !== activeIndex) {
            setActiveIndex(closest);
        }
    };

    if (dropdown) {
        dropdown.addEventListener('change', (event) => {
            const nextIndex = Number(event.target.value);
            focusIndex(nextIndex, true, true);
        });
    }

    wheel.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                syncActive();
                ticking = false;
            });
            ticking = true;
        }
    });

    const runHomeIntro = () => {
        if (isWorkPage) return;
        const startIndex = dataset.length - 1;
        focusIndex(startIndex, false, true);
        let current = startIndex;

        const step = () => {
            current -= 1;
            if (current < 0) {
                focusIndex(0, true, true);
                introTimer = null;
                return;
            }
            focusIndex(current, true, true);
            introTimer = window.setTimeout(step, 160);
        };

        introTimer = window.setTimeout(step, 400);
    };

    // Prime UI
    activeIndex = isWorkPage ? 0 : dataset.length - 1;
    items[activeIndex].classList.add('is-active');
    renderEntry(dataset[activeIndex]);
    updateDropdown();

if (isWorkPage) {
    focusIndex(0);
} else {
    runHomeIntro();
}

// Menu dropdown is now handled by CSS hover
});
