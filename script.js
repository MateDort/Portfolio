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
        title: "TapMate AI",
        copy: "AI-powered smart glasses and companion app that bring ambient intelligence to everyday life.",
        summary: "Case study in progress. TapMate AI combines wearable technology with advanced AI to create a seamless, hands-free assistant experience. Features real-time visual processing, natural language interaction, and contextual awareness.",
        inProgress: "Case Study In Progress",
        repo: "https://github.com/MateDort",
        ux: {
            userFlows: [
                "Coming soon..."
            ],
            designDecisions: [
                "Case study documentation in progress"
            ],
            highlights: [
                "Full case study coming soon"
            ]
        },
        developer: {
            architecture: [
                "Details coming soon"
            ],
            techStack: [
                "Documentation in progress"
            ],
            highlights: [
                "Technical details coming soon"
            ]
        }
    },
    {
        title: "NagyAI - GrannyAI",
        copy: "AI companion designed to provide elderly users with engaging conversation, assistance, and companionship.",
        summary: "Case study in progress. GrannyAI focuses on creating meaningful interactions for elderly users through natural conversation, memory assistance, and daily support features. Designed with accessibility and warmth at its core.",
        inProgress: "Case Study In Progress",
        repo: "https://github.com/MateDort",
        ux: {
            userFlows: [
                "Coming soon..."
            ],
            designDecisions: [
                "Case study documentation in progress"
            ],
            highlights: [
                "Full case study coming soon"
            ]
        },
        developer: {
            architecture: [
                "Details coming soon"
            ],
            techStack: [
                "Documentation in progress"
            ],
            highlights: [
                "Technical details coming soon"
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
    {
        title: "NeuraNote",
        copy: "Cross-platform mobile app that uses AI to transform audio recordings into structured notes, quizzes, and study materials.",
        summary: "Built with React Native and Expo, NeuraNote combines real-time transcription, GPT-4, and offline AI to support learning workflows. Features live transcription, AI note generation, interactive quizzes, multi-language support, and offline functionality with local AI fallback.",
        figma: "https://www.figma.com/proto/7HUMwCiDgio43IpiVxwQG0/SmartNote?node-id=0-1&t=mvhS5JKxbmjUedAf-1",
        figmaLabel: "Figma",
        repo: "https://github.com/MateDort/SmartNotes",
        ux: {
            userFlows: [
                "First-time user: Login/Signup → Onboarding with technique selection → Personalized greeting on Home",
                "Recording: Home → Start Recording → Live Transcription → AI Chat (optional) → Stop → Processing with mini-game → Notes Screen",
                "Study: Home → Select Note → Notes Screen → [Notes | Must Know | Quiz | AI Chat | Transcript] tabs"
            ],
            designDecisions: [
                "Minimal cognitive load: clear actions, immediate feedback with typewriter greeting effect",
                "Progressive disclosure: tab-based navigation (5 tabs) shows what's needed when needed",
                "Delightful waiting: T-Rex mini-game during processing reduces perceived wait time",
                "Color system: Sky Blue (#9DBCD4) for trust, Beige (#F8F5F0) background reduces eye strain, Graphite (#2C2C2C) text for readability"
            ],
            highlights: [
                "Designed responsive system supporting 5 screen size categories (Very Small to Large Tablet)",
                "Created T-Rex mini-game during processing to reduce perceived wait time and increase engagement",
                "Built tab-based navigation with smooth transitions for intuitive feature discovery"
            ]
        },
        developer: {
            architecture: [
                "Hybrid transcription: Device transcript for speed, Whisper API for accuracy (< 14 min recordings)",
                "Hybrid AI system: GPT-4 + Serper API (online), Ollama/Llama 3.2 (offline) with seamless fallback",
                "SQLite database with user-scoped data: users, notes, quiz_results, chat_messages, game_scores tables",
                "React Native 0.81.5 + Expo SDK 54 with TypeScript, React Navigation 7.x, i18next for internationalization"
            ],
            techStack: [
                "Frontend: React Native, TypeScript 5.9.2, Expo SDK 54",
                "Database: SQLite (expo-sqlite) with migration system",
                "AI Services: OpenAI GPT-4, Whisper API, Ollama (offline fallback)",
                "Audio: Expo AV, Expo Audio for recording and playback",
                "Navigation: React Navigation 7.x, State: React Hooks + Context API"
            ],
            highlights: [
                "Implemented hybrid transcription strategy: device transcript for instant feedback, Whisper for accuracy, automatic fallback for long recordings",
                "Built graceful error handling with retry logic, exponential backoff, and offline support via Ollama",
                "Created responsive design system with dynamic font scaling and flexible layouts for 5 screen size categories"
            ]
        }
    },
    {
        title: "SkillShipping",
        copy: "Adaptive learning mobile app that uses AI to create personalized, dynamic learning experiences that adapt in real-time to each learner's unique profile.",
        summary: "Built with React Native and Expo, SkillShipping transforms traditional static courses into intelligent, evolving learning journeys. Features include adaptive content generation, comprehensive file processing for project grading with GPT Vision, real-time learning analytics, and a Learning DNA system that creates unique learning identities.",
        repo: "https://github.com/MateDort/SkillShipping",
        ux: {
            userFlows: [
                "Onboarding: Welcome → Skill Input → Level Selection → Duration Preference → Goal Setting → Content Type Preferences → Course Generation (30-60s)",
                "Learning Loop: Course Screen → 'Up Next' Ribbon → Lecture Screen (Reading/Quiz/Project) → Completion & Feedback → Next Content Generation (Adaptive) → Loop continues",
                "Project Grading: Project Screen → Upload Files (PDF/DOCX/Images) → File Preview → Grade Project → Processing → Results (Pass/Fail, Score, Feedback) → Re-grade if needed"
            ],
            designDecisions: [
                "Invisible intelligence: Adaptive system works behind scenes—users experience content that 'just feels right' without seeing complex algorithms",
                "Progressive disclosure: Single-page onboarding with visual progress, advanced features (Learning DNA, 3D Map) unlock after engagement",
                "Enhanced reading format: Short paragraphs, strategic whitespace, ASCII diagrams, micro-hooks, conversational tone—feels like discovery, not homework",
                "Real project grading: Native file pickers, GPT Vision for images, detailed feedback showing what GPT 'saw', re-grade option reduces anxiety"
            ],
            highlights: [
                "Designed adaptive learning system with invisible intelligence—users feel personalized content without seeing the algorithm",
                "Created enhanced reading format with rhythm, pacing, ASCII diagrams, and micro-hooks that increased content engagement",
                "Built intelligent project grading with multi-format support (PDF, DOCX, images), GPT Vision integration, and robust score extraction"
            ]
        },
        developer: {
            architecture: [
                "Adaptive Content Generation: ComprehensiveLearningTracker analyzes learning data, identifies gaps, builds personalized GPT prompts, validates content alignment",
                "Multi-layer file reading: Layer 1 (direct text), Layer 2 (PDFLib for binary PDFs), Layer 3 (smart filename analysis) with graceful fallbacks",
                "GPT Vision integration: Base64 image encoding, multi-image support, detailed visual content analysis for project grading",
                "SQLite database: learning_sessions, ai_interactions, quiz_attempts, project_submissions, user_progress tables with user-scoped data"
            ],
            techStack: [
                "Frontend: React Native 0.81.4, Expo ~54.0.12, TypeScript 5.9.2",
                "AI Services: OpenAI GPT-4, GPT-4o (Vision), Whisper API",
                "File Processing: expo-document-picker, expo-image-picker, expo-file-system/legacy, react-native-pdf-lib",
                "Database: Expo SQLite 16.0.8 with migration system",
                "State: React Hooks (useState, useRef, useEffect), Context API"
            ],
            highlights: [
                "Implemented hybrid adaptive system: real-time learning analysis tracks every interaction, gap-focused content addresses weaknesses, goal-oriented alignment",
                "Built multi-layer file reading with fallbacks: ~90% success rate, handles PDFs (binary/text), DOCX, images with base64 encoding for GPT Vision",
                "Created robust score extraction system: multi-pattern regex parsing from free-form GPT responses, 80% pass/fail threshold, comprehensive error handling"
            ]
        }
    },
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
    const figmaLink = document.getElementById('figma-link');
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
                    projectAward.classList.remove('project-award--in-progress');
                    if (entry.award.includes('2nd Place') || entry.award.includes('🥈')) {
                        projectAward.classList.add('project-award--silver');
                    } else {
                        projectAward.classList.remove('project-award--silver');
                    }
                } else if (entry.inProgress) {
                    projectAward.textContent = entry.inProgress;
                    projectAward.classList.add('is-visible');
                    projectAward.classList.add('project-award--in-progress');
                    projectAward.classList.remove('project-award--silver');
                } else {
                    projectAward.classList.remove('is-visible');
                    projectAward.classList.remove('project-award--silver');
                    projectAward.classList.remove('project-award--in-progress');
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
            if (figmaLink) {
                if (entry.figma) {
                    figmaLink.href = entry.figma;
                    if (entry.figmaLabel) {
                        figmaLink.textContent = entry.figmaLabel;
                    } else {
                        figmaLink.textContent = "Figma";
                    }
                    figmaLink.style.display = 'block';
                } else {
                    figmaLink.style.display = 'none';
                }
            }
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
