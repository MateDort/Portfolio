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
        title: "Buy Anything",
        copy: "One-tap marketplace that bundles every campus need into a single, trusted concierge.",
        summary: "Designed the entire service blueprint from scouting to hand-off for a SMS-first experience.",
        highlights: [
            "Crafted atomic design system for ops tooling in under two weeks.",
            "Reduced fulfillment time by 38% through predictive batching UX.",
            "Launched with 150+ active student shoppers."
        ]
    },
    {
        title: "TossWise",
        copy: "Computer-vision assistant that nudges you toward the right recycle bin.",
        summary: "Machine learning + playful microcopy to turn waste sorting into muscle memory.",
        highlights: [
            "Led user studies with 6 campuses to map confusion moments.",
            "Embedded YOLOv5 inference on-device with <120ms response.",
            "Built kiosk UI with haptics and voice guidance."
        ]
    },
    {
        title: "C.L.I.M.A",
        copy: "Crisis logistics intelligence for municipal responders.",
        summary: "Unified radar feeds, SMS alerts, and staffing plans into one calm dashboard.",
        highlights: [
            "Architected modular map layers with deck.gl + Mapbox.",
            "Invented priority chips that cut triage chaos during drills.",
            "ISO 27001-aligned data handling playbook."
        ]
    },
    {
        title: "SkillShipping",
        copy: "Talent exchange marketplace matching athletes with emerging startups.",
        summary: "Rapid experimentation led to a matchmaking flow inspired by relay races.",
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
    const items = [];

    dataset.forEach((entry, index) => {
        const li = document.createElement('li');
        li.className = 'timeline-item';
        li.dataset.index = String(index);
        li.textContent = isWorkPage ? entry.title : entry.year;
        wheel.appendChild(li);
        items.push(li);

        li.addEventListener('click', () => focusIndex(index, true));
    });

    const heroLine = document.getElementById('hero-line');
    const ageValue = document.getElementById('age-value');
    const projectTitle = document.getElementById('project-title');
    const projectCopy = document.getElementById('project-copy');
    const projectSummary = document.getElementById('project-summary');
    const projectHighlights = document.getElementById('project-highlights');

let activeIndex = 0;
let ticking = false;
let introTimer = null;

    const renderEntry = (entry) => {
        if (isWorkPage) {
            if (projectTitle) projectTitle.textContent = entry.title;
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
        } else {
            if (heroLine) heroLine.textContent = entry.copy;
            if (ageValue) ageValue.textContent = entry.year - YEAR_ZERO;
        }
    };

const setActiveIndex = (index) => {
    if (index === activeIndex || index < 0 || index >= items.length) return;
        items[activeIndex].classList.remove('is-active');
        activeIndex = index;
        items[activeIndex].classList.add('is-active');
        renderEntry(dataset[activeIndex]);
    };

const focusIndex = (index, smooth = false, force = false) => {
    if (!force && index === activeIndex) {
        return;
    }
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

if (isWorkPage) {
    focusIndex(0);
} else {
    runHomeIntro();
}
});
