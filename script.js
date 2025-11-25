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
        highlights: [
            "Building 8 specialized agents (Planner, Search, Call, Negotiate, PriceTracker, SynthSummary, Arbiter, Checkout) that will automate shopping across Amazon, Best Buy, Facebook Marketplace, and more.",
            "Creating Agent Hub for real-time cross-agent communication and live visual feedback with browser screenshots and step-by-step progress tracking.",
            "Technical stack: React + Chakra UI, Node.js/Express, Puppeteer, Raindrop MCP, Twilio, ElevenLabs, OpenAI/Gemini."
        ]
    },
    {
        title: "TossWise",
        copy: "AI-powered smart trash bin that uses computer vision and natural language to classify waste in real time.",
        summary: "A hands-free system that identifies waste, guides disposal through voice feedback, and adapts to location-specific bin configurations. Combines YOLOv8 person detection, Google Gemini Vision for classification, ElevenLabs TTS for voice guidance, and Arduino hardware integration.",
        award: "👑 Winner of Best Use of Gemini API at Emory Hacks 2025.",
        repo: "https://github.com/VihaanIyer/TossWise-",
        devpost: "https://devpost.com/software/tosswise",
        highlights: [
            "I was working on the detection process and onboarding. Making yolov8 use a trained robolfow model to better pick up trash and help the llm. Also on the design adding live trash falling animation into the bin on the UI and adding contamination percentage. I also worked out the onboarding so system can adapt to any bin situation."
        ]
    },
    {
        title: "C.L.I.M.A",
        copy: "Precision agriculture platform that helps farmers make smarter decisions using NASA technology.",
        summary: "2nd place at HackATL 2025 (NASA Technology Transfer Program). Built in 48 hours with teammates Brody Weinfurtner, Jack Bashaw, and Leah Loukedis. Combines two NASA technologies: HSEG (Hierarchical Segmentation Engine) for pixel-level farmland segmentation into distinct soil and crop zones, and MERRA/AS & Climate Analytics as a Service for weather pattern forecasting. Provides hyper-local, data-driven insights so farmers can optimize irrigation, fertilizer, and planting strategies while preparing for climate challenges.",
        award: "🥈 2nd Place at HackATL 2025",
        repo: "https://www.figma.com/proto/IAjpRoCcleqqqPee0KpgSI/Nasa-Project?page-id=0%3A1&node-id=6-5&p=f&viewport=393%2C488%2C0.07&t=TV6b0ItWCHVEJ6fM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A44&show-proto-sidebar=1",
        repoLabel: "Figma Design",
        highlights: [
            "I worked on the MVP while the others worked out the business plan. I made the full app's design in Figma and I made a React web app to present the idea."
        ]
    },
    {
        title: "SkillShipping",
        copy: "Talent exchange marketplace matching athletes with emerging startups.",
        summary: "Rapid experimentation led to a matchmaking flow inspired by relay races.",
        repo: "https://github.com/MateDort",
        highlights: [
            "Tripled weekly matches using contextual video intros.",
            "Automated contract packets to ship in <5 minutes.",
            "Mentored two PM interns through launch."
        ]
    },
    {
        title: "NeuraNote",
        copy: "Thought-capture notebook with on-device vector embeddings.",
        summary: "Feels like Messages, thinks like a researcher—everything searchable by vibe.",
        repo: "https://github.com/MateDort",
        highlights: [
            "Crafted spatial ink gestures for instant tags.",
            "Fine-tuned small LLM to summarize hand-written notes.",
            "Won 'Most Delightful UX' at HackMIT."
        ]
    },
    {
        title: "Ring Doorman AI",
        copy: "Smart concierge that greets visitors with your tone and context.",
        summary: "Modeled etiquette from 50+ real interactions to keep intros warm, never robotic.",
        repo: "https://github.com/MateDort",
        highlights: [
            "Edge-deployed voice clones to keep data local.",
            "Adaptive scripts respect cultural nuances + pronouns.",
            "Integrated with Ring + HomeKit secure video."
        ]
    },
    {
        title: "EMESE AI assistant",
        copy: "Personal swim strategist predicting splits, nutrition, and taper windows.",
        summary: "Blends WHOOP data with pool logs to coach like the mentor I wanted growing up.",
        repo: "https://github.com/MateDort",
        highlights: [
            "Forecast errors under 1.5% for 200m freestyle.",
            "Dynamic readiness score now used by 6 national-level swimmers.",
            "Privacy-first pipeline running on athlete-owned data."
        ]
    }
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

    let activeIndex = 0;
    let ticking = false;
    let introTimer = null;

    const renderEntry = (entry) => {
        if (isWorkPage) {
            if (projectTitle) projectTitle.textContent = entry.title;
            if (projectAward) {
                if (entry.award) {
                    projectAward.textContent = entry.award;
                    projectAward.classList.add('is-visible');
                    // Add silver class for 2nd place badges
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
            if (projectHighlights) {
                projectHighlights.innerHTML = '';
                entry.highlights.forEach((point) => {
                    const li = document.createElement('li');
                    li.textContent = point;
                    projectHighlights.appendChild(li);
                });
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
