/* ============================================================
   AutoMind AI — Complete Application Logic
   ============================================================ */

'use strict';

// ===== LAUNCH CONFIG =====
// Add your form service endpoint here when you connect Web3Forms/Formspree.
// Example: const NEWSLETTER_ENDPOINT = 'https://api.web3forms.com/submit';
const NEWSLETTER_ENDPOINT = '';
const CONTACT_EMAIL = 'hello@automindai.com';

// ===== DATA STORE =====

const ARTICLES = [
  {
    id: 1, category: 'ev', tag: 'Electric Vehicles', catClass: 'cat-ev',
    emoji: '⚡', color: '#10b981',
    date: 'May 26, 2026', readTime: '5 min read', featured: true,
    title: 'Tesla\'s Next-Gen Battery Tech Pushes EV Range Beyond 1,000 km',
    excerpt: 'Tesla has unveiled a breakthrough 4680+ cell architecture with silicon-dominant anodes that could fundamentally redefine long-distance electric travel. Here\'s what the data says.',
    content: `<p>Tesla's engineering team has achieved what many believed impossible just five years ago: a production-ready battery cell capable of delivering consistent 1,000+ km range in real-world conditions. The new 4680+ architecture combines a silicon-dominant anode with a proprietary electrolyte formula that dramatically reduces degradation at high charge rates.</p>
    <h3>What Makes the 4680+ Special?</h3>
    <p>The tabless design of the 4680 was already revolutionary, but the Plus variant introduces three new improvements: a lithium-silicon composite anode (replacing graphite), a solid-state-like polymer electrolyte layer, and a thermally conductive cell casing that maintains cell temperature within ±2°C even at 300 kW charge rates.</p>
    <h3>Real-World Implications</h3>
    <p>For consumers, this means a single charge could cover Delhi to Mumbai and back without stopping. For the industry, it signals a shift away from the "range anxiety" narrative that has slowed EV adoption among rural and semi-urban buyers in markets like India and Southeast Asia.</p>
    <h3>Production Timeline</h3>
    <p>Tesla's Gigafactory Texas is expected to begin volume production of 4680+ cells by Q3 2026, with the first vehicles equipped with the new cells rolling off the assembly line by year-end. Analysts at Morgan Stanley estimate a production capacity of 100 GWh annually by 2028.</p>
    <ul>
      <li>Silicon-dominant anode: 40% more energy density</li>
      <li>Charge rate: 300 kW peak, 10-80% in 14 minutes</li>
      <li>Cycle life: 1,500+ full charge cycles before 20% degradation</li>
      <li>Cost: Targeting $60/kWh at scale (industry average: $110/kWh)</li>
    </ul>`
  },
  {
    id: 2, category: 'tech', tag: 'Technology', catClass: 'cat-tech',
    emoji: '🔬', color: '#6366f1',
    date: 'May 25, 2026', readTime: '4 min read', featured: false,
    title: 'How AI is Replacing Traditional Engine Tuning — A Deep Dive',
    excerpt: 'Machine learning models trained on millions of driving scenarios can now optimize engine maps in real time, outperforming the best human calibration engineers.',
    content: `<p>Engine calibration — the art of fine-tuning fuel injection, ignition timing, and valve lift for optimal performance — has been the domain of highly specialized engineers for decades. Today, AI is dismantling that exclusivity.</p>
    <h3>The Old Way vs. The AI Way</h3>
    <p>Traditional calibration required hundreds of hours on a dynamometer, manually adjusting parameters across thousands of operating points. The new approach uses reinforcement learning agents that can explore the entire parameter space in simulation before ever touching physical hardware.</p>
    <h3>Mercedes-Benz Case Study</h3>
    <p>Mercedes-AMG deployed an AI calibration system for the new C63 S E Performance. The system reduced calibration time from 18 months to 6 weeks while achieving a 3.2% improvement in thermal efficiency over human-tuned maps. The result: 680 hp with Euro 7 compliance.</p>
    <ul>
      <li>Bosch's AI tuning platform: Used in 12 OEM programs in 2025</li>
      <li>Reduction in calibration time: Up to 70%</li>
      <li>Fuel efficiency gain: 2–5% vs manual tuning</li>
      <li>Emissions compliance: First-attempt Euro 7 pass rate increased from 34% to 91%</li>
    </ul>`
  },
  {
    id: 3, category: 'industry', tag: 'Industry', catClass: 'cat-industry',
    emoji: '📊', color: '#8b5cf6',
    date: 'May 25, 2026', readTime: '6 min read', featured: false,
    title: 'India\'s EV Market Just Hit ₹2 Lakh Crore — What\'s Fueling the Surge?',
    excerpt: 'From Tata Nexon EV to Ola\'s hyper-affordable scooters, India\'s electric vehicle ecosystem has crossed a critical inflection point. We break down the numbers.',
    content: `<p>India's electric vehicle market reached a historic ₹2 lakh crore valuation in early 2026, a milestone that analysts had projected for 2028. The acceleration has been driven by a combination of aggressive government subsidies, rapidly falling battery costs, and a new generation of India-first EV designs.</p>
    <h3>Segment-by-Segment Breakdown</h3>
    <p>Two-wheelers dominate with 68% market share, led by Ola Electric, Ather, and TVS. In four-wheelers, Tata Motors commands 58% of the EV passenger car segment. Commercial EVs — buses and three-wheelers — are the fastest-growing segment at 142% YoY growth.</p>
    <h3>The Battery Domestication Story</h3>
    <p>India's biggest vulnerability — 90% battery import dependence — is being addressed. Ola Cell Technologies began Phase 1 production of its Gigafactory in Tamil Nadu, targeting 20 GWh annually. Reliance Industries' partnership with CATL aims to bring 50 GWh of local capacity online by 2027.</p>
    <ul>
      <li>EV penetration in two-wheelers: 14% (2026) vs 4% (2023)</li>
      <li>Total EVs sold in FY2026: 4.2 million units</li>
      <li>Charging stations: 85,000 operational (up from 12,000 in 2023)</li>
      <li>PM E-Drive scheme disbursed: ₹18,000 crore in subsidies</li>
    </ul>`
  },
  {
    id: 4, category: 'review', tag: 'Reviews', catClass: 'cat-review',
    emoji: '⭐', color: '#f59e0b',
    date: 'May 24, 2026', readTime: '7 min read', featured: false,
    title: 'BMW M5 Hybrid 2026 Review: The 750 HP Daily Driver You Didn\'t Know You Needed',
    excerpt: 'BMW has built an M5 that does 0-100 km/h in 3.1 seconds, returns 18 km/l on the highway, and seats five adults in total luxury. We drove it for a week.',
    content: `<p>The new BMW M5 Hybrid is a car of spectacular contradictions. It produces 750 combined horsepower yet can cruise silently on electric power for 67 km. It weighs 2,230 kg yet corners with the precision of a sports car half its mass. And it costs ₹2.1 crore yet feels worth every rupee.</p>
    <h3>Performance That Defies Physics</h3>
    <p>The S68 4.4-liter twin-turbo V8 paired with two electric motors (one per axle) creates an all-wheel-drive system that BMW calls "M xDrive Hybrid." In Sport+ mode, the transition between ICE and electric is imperceptible. Throttle response is instantaneous from zero rpm.</p>
    <h3>Daily Usability</h3>
    <p>What surprised us most was the Comfort mode. With the air suspension softened and the powertrain in hybrid efficiency mode, the M5 transforms into a genuinely plush grand tourer. The rear seat legroom rivals an E-Class. The 15.3-inch curved display is the best BMW UI we've used.</p>
    <ul>
      <li>0-100 km/h: 3.1 seconds (measured)</li>
      <li>Electric range: 67 km WLTP, 51 km real-world city</li>
      <li>Boot space: 500L (batteries under floor)</li>
      <li>Our rating: 9.2/10</li>
    </ul>`
  },
  {
    id: 5, category: 'safety', tag: 'Safety', catClass: 'cat-safety',
    emoji: '🛡️', color: '#ec4899',
    date: 'May 23, 2026', readTime: '5 min read', featured: false,
    title: 'Euro NCAP 2026: Which Cars Got 5 Stars — and Which Ones Failed Spectacularly',
    excerpt: 'The latest round of Euro NCAP crash tests brought surprises: three budget models achieved 5-star ratings while two luxury crossovers were stripped to 2 stars.',
    content: `<p>Euro NCAP's 2026 test programme introduced two new scenarios: a high-speed cyclist emergency brake test at 60 km/h and a narrow pillar pole impact replicating a parking garage collision. The results reshuffled the safety rankings in ways no one predicted.</p>
    <h3>The Winners</h3>
    <p>Maruti Suzuki's new Swift scored a remarkable 5 stars — the first time a sub-₹10 lakh car has achieved this. The secret? A new ultra-high-strength steel cage and six airbags standard across all variants. Volvo EX30 scored 99/100 in adult occupant protection.</p>
    <h3>The Failures</h3>
    <p>Two premium brands faced public embarrassment. A popular German SUV scored only 2 stars after its autonomous emergency braking failed to detect cyclists in low-contrast conditions. The manufacturer has promised an over-the-air software update by July 2026.</p>
    <ul>
      <li>5-star vehicles tested in 2026: 28 (record high)</li>
      <li>New test: Night-time pedestrian AEB at 30 km/h</li>
      <li>Biggest improver: Tata Nexon (3→5 stars with new structural update)</li>
      <li>Worst performer: Unnamed luxury crossover, 2 stars adult occupant</li>
    </ul>`
  },
  {
    id: 6, category: 'ev', tag: 'Electric Vehicles', catClass: 'cat-ev',
    emoji: '🔋', color: '#10b981',
    date: 'May 22, 2026', readTime: '4 min read', featured: false,
    title: 'Solid-State Batteries: Toyota\'s 2027 Production Promise — Hype or Reality?',
    excerpt: 'Toyota has repeatedly promised solid-state EVs by the end of the decade. Now, with 2027 just around the corner, we examine the evidence.',
    content: `<p>Toyota's solid-state battery programme, code-named "Prime Earth Evolution," has been the industry's most-watched R&D project for a decade. The company has filed over 1,000 solid-state battery patents — more than any other automaker — and recently allowed journalists to ride in a prototype vehicle for the first time.</p>
    <h3>The Promise vs. The Reality</h3>
    <p>Toyota claims solid-state cells will offer: 10-minute charging from 10-80%, 1,200+ km range, operation from -30°C to 80°C, and a 50% reduction in manufacturing cost by 2030. The prototype ride was impressive — the car felt refined and the range display showed 1,100 km — but production-spec cells remain elusive.</p>
    <h3>What Could Go Wrong</h3>
    <p>The core challenge is manufacturing yield. Solid-state cells require incredibly precise pressure management across millions of cycles. Researchers at Panasonic estimate current yield rates are around 65% — far too low for profitable mass production. Toyota needs to reach 95%+ before 2027 commitments make financial sense.</p>`
  },
  {
    id: 7, category: 'tech', tag: 'Technology', catClass: 'cat-tech',
    emoji: '🤖', color: '#6366f1',
    date: 'May 21, 2026', readTime: '5 min read', featured: false,
    title: 'Waymo vs. Tesla FSD: The Autonomous Driving Battle Reaches a Turning Point',
    excerpt: 'Two very different philosophies are racing toward full autonomy. One uses HD maps and LiDAR; the other uses cameras and neural nets. Who\'s winning?',
    content: `<p>The autonomous driving race has entered its decisive phase. Waymo, with its sensor-rich approach, has now completed over 50 million rider-only miles without a serious fault. Tesla FSD v14, using only cameras and a custom neural network chip, has logged 8 billion user-assisted miles. Both camps claim their approach is superior.</p>
    <h3>The Numbers That Matter</h3>
    <p>Waymo's disengagement rate (the frequency with which a human backup driver must intervene) has dropped to 1 per 150,000 miles. Tesla FSD's user intervention rate is harder to measure because it operates with a driver present, but Tesla claims supervised FSD is now safer than the average human driver.</p>
    <ul>
      <li>Waymo active cities: 18 (US), 3 (international) in 2026</li>
      <li>Tesla FSD subscribers: 2.3 million globally</li>
      <li>Regulatory approval gap: Waymo Level 4, Tesla officially Level 2+</li>
      <li>Cost to ride Waymo: $1.80/mile average</li>
    </ul>`
  },
  {
    id: 8, category: 'industry', tag: 'Industry', catClass: 'cat-industry',
    emoji: '🏭', color: '#8b5cf6',
    date: 'May 20, 2026', readTime: '3 min read', featured: false,
    title: 'Volkswagen\'s €5 Billion Restructuring: The End of ICE-Only Plants in Germany',
    excerpt: 'VW has confirmed it will convert all seven German factories to EV-only or hybrid production by 2028, affecting 120,000 workers.',
    content: `<p>Volkswagen Group's board has approved the most ambitious industrial transformation in German automotive history: a €5 billion plan to convert every factory in Germany from internal combustion engine production to electric vehicle manufacturing by the end of 2028.</p>
    <h3>What Changes at Each Plant</h3>
    <p>The Wolfsburg plant — VW's largest, producing Golf and Tiguan — will be the flagship conversion. A new 200,000 sq meter battery module assembly facility will be built on-site. Workers are being retrained through a €1.2 billion skills programme negotiated with IG Metall.</p>
    <h3>Market Implications</h3>
    <p>The decision signals VW's total commitment to the EV transition, but also creates risk. If EV demand softens — as it briefly did in 2024-25 — the company has no ICE fallback in Germany. CEO Oliver Blume has said the group is "betting everything" on the electric future.</p>`
  }
];

const PROJECTS = [
  {
    id: 1, branch: 'ev', icon: '🔋', level: 'ug', levelClass: 'level-ug',
    title: 'Smart Battery Management System (BMS) for Lithium-Ion EV Packs',
    desc: 'Design and simulate a BMS with cell balancing, thermal management, and SOC estimation using Kalman filtering.',
    tags: ['MATLAB/Simulink', 'Embedded C', 'EV', 'Power Electronics']
  },
  {
    id: 2, branch: 'autonomous', icon: '🤖', level: 'pg', levelClass: 'level-pg',
    title: 'LiDAR-Camera Sensor Fusion for Pedestrian Detection at Intersections',
    desc: 'Develop a deep learning-based fusion algorithm that integrates point cloud and image data for real-time pedestrian detection with >97% accuracy.',
    tags: ['Python', 'ROS2', 'PointNet', 'YOLO', 'Autonomous Driving']
  },
  {
    id: 3, branch: 'engine', icon: '🔧', level: 'ug', levelClass: 'level-ug',
    title: 'Waste Heat Recovery System Using Organic Rankine Cycle for IC Engines',
    desc: 'Design a thermoelectric-based WHR system that captures exhaust heat and converts it to electricity, improving overall engine efficiency by 8-12%.',
    tags: ['Thermodynamics', 'ANSYS', 'IC Engine', 'Energy Recovery']
  },
  {
    id: 4, branch: 'ev', icon: '⚡', level: 'pg', levelClass: 'level-pg',
    title: 'Vehicle-to-Grid (V2G) Bidirectional Charging System with Smart Grid Integration',
    desc: 'Model a V2G system that allows EVs to supply power back to the grid during peak demand, with optimization algorithms for scheduling.',
    tags: ['Power Systems', 'IoT', 'V2G', 'Smart Grid', 'EV']
  },
  {
    id: 5, branch: 'safety', icon: '🛡️', level: 'ug', levelClass: 'level-ug',
    title: 'Drowsiness Detection System for Commercial Vehicles Using CNN',
    desc: 'Build a real-time driver monitoring system using facial landmark analysis and blink frequency detection to alert drivers and fleet managers.',
    tags: ['OpenCV', 'TensorFlow', 'Raspberry Pi', 'Computer Vision']
  },
  {
    id: 6, branch: 'autonomous', icon: '🚗', level: 'phd', levelClass: 'level-phd',
    title: 'Federated Learning Framework for Collaborative Autonomous Driving Models',
    desc: 'Propose and evaluate a privacy-preserving distributed learning architecture where multiple autonomous vehicles train a shared driving model without sharing raw data.',
    tags: ['Federated Learning', 'Python', 'PyTorch', 'Privacy', 'Research']
  },
  {
    id: 7, branch: 'engine', icon: '💨', level: 'pg', levelClass: 'level-pg',
    title: 'Hydrogen Fuel Cell Hybrid Powertrain Modeling and Performance Optimization',
    desc: 'Develop a combined hydrogen fuel cell and supercapacitor hybrid powertrain model and optimize energy management strategies using dynamic programming.',
    tags: ['MATLAB', 'Fuel Cell', 'Hydrogen', 'Hybrid Systems', 'Optimization']
  },
  {
    id: 8, branch: 'safety', icon: '📡', level: 'ug', levelClass: 'level-ug',
    title: 'Vehicle-to-Vehicle (V2V) Collision Avoidance System Using DSRC Protocol',
    desc: 'Implement a DSRC-based V2V communication module that broadcasts vehicle position, speed, and heading to nearby vehicles for predictive collision warnings.',
    tags: ['DSRC', 'Arduino', 'C++', 'V2X', 'Safety']
  },
  {
    id: 9, branch: 'ev', icon: '🌡️', level: 'ug', levelClass: 'level-ug',
    title: 'Thermal Management System Design for High-Performance EV Battery Packs',
    desc: 'Design and CFD-analyze a liquid-cooled thermal management system for a 100 kWh battery pack, maintaining cells within 25–35°C operating range.',
    tags: ['CFD', 'ANSYS Fluent', 'Thermal', 'EV', 'Battery']
  },
  {
    id: 10, branch: 'autonomous', icon: '🗺️', level: 'pg', levelClass: 'level-pg',
    title: 'High-Definition Map Generation for Autonomous Vehicles Using SLAM',
    desc: 'Develop a simultaneous localization and mapping (SLAM) pipeline for generating centimeter-accurate HD maps from sensor data captured by an autonomous test vehicle.',
    tags: ['SLAM', 'ROS', 'LiDAR', 'C++', 'Mapping']
  }
];

const QUIZ_DATA = {
  ev: [
    { q: "What does BEV stand for in the context of electric vehicles?", options: ["Battery Electric Vehicle", "Bi-Engine Vehicle", "Balanced Energy Vehicle", "Buffered Electric Version"], answer: 0 },
    { q: "Which company first commercialized the 4680 battery cell format?", options: ["Panasonic", "CATL", "Tesla", "Samsung SDI"], answer: 2 },
    { q: "What is the primary function of a Battery Management System (BMS)?", options: ["Increase vehicle speed", "Monitor and protect battery cells", "Reduce vehicle weight", "Improve aerodynamics"], answer: 1 },
    { q: "Regenerative braking in EVs converts kinetic energy into:", options: ["Heat energy", "Electrical energy stored in the battery", "Mechanical energy stored in a flywheel", "Potential energy"], answer: 1 },
    { q: "What does 'kWh' measure in the context of EV batteries?", options: ["Kilowatt-hour (energy capacity)", "Kilometers per hour", "Kilowatt per hundred", "Kilogram-weight hour"], answer: 0 },
    { q: "Which charging standard uses Combined Charging System (CCS)?", options: ["CHAdeMO", "Tesla Supercharger V1", "DC Fast Charging (Europe/US)", "Wireless inductive charging"], answer: 2 },
    { q: "What is the approximate energy density of current lithium-ion cells?", options: ["50–80 Wh/kg", "150–300 Wh/kg", "500–700 Wh/kg", "1000+ Wh/kg"], answer: 1 },
    { q: "V2G technology allows electric vehicles to:", options: ["Drive autonomously on highways", "Supply electricity back to the power grid", "Communicate with traffic signals", "Self-diagnose mechanical issues"], answer: 1 },
    { q: "What advantage does a Permanent Magnet Synchronous Motor (PMSM) have over an induction motor in EVs?", options: ["Lower cost", "Higher efficiency and power density", "Simpler manufacturing", "Better performance at very high temperatures"], answer: 1 },
    { q: "The term 'thermal runaway' in EV batteries refers to:", options: ["Battery overcharging", "Uncontrolled temperature rise leading to failure/fire", "Slow battery discharge", "Overheating of the electric motor"], answer: 1 }
  ],
  engine: [
    { q: "What does OHC stand for in engine terminology?", options: ["Over-Head Camshaft", "Outer Hydraulic Chamber", "Oil-Heated Combustion", "Over-Horse-Cycle"], answer: 0 },
    { q: "In a 4-stroke engine, the correct sequence of strokes is:", options: ["Power, Intake, Compression, Exhaust", "Intake, Compression, Power, Exhaust", "Compression, Intake, Power, Exhaust", "Intake, Power, Compression, Exhaust"], answer: 1 },
    { q: "What does the compression ratio of an engine indicate?", options: ["The ratio of fuel to air mixture", "The ratio of maximum to minimum cylinder volume", "The ratio of intake to exhaust pressure", "The ratio of power output to displacement"], answer: 1 },
    { q: "Turbocharging an engine improves performance by:", options: ["Reducing engine weight", "Forcing more air into the combustion chamber", "Increasing the number of cylinders", "Using higher octane fuel"], answer: 1 },
    { q: "Direct Injection (DI) engines inject fuel directly into the:", options: ["Intake manifold", "Fuel tank pre-heater", "Combustion chamber", "Exhaust manifold"], answer: 2 },
    { q: "What is the purpose of a catalytic converter?", options: ["Increase engine power", "Reduce harmful emissions in exhaust gas", "Filter engine oil", "Cool down the exhaust system"], answer: 1 },
    { q: "DOHC engines have:", options: ["One camshaft operating both intake and exhaust valves", "Two camshafts — one for intake, one for exhaust", "No camshafts (pushrod design)", "Three camshafts for variable timing"], answer: 1 },
    { q: "Which engine cycle achieves higher theoretical efficiency — Otto or Diesel?", options: ["Otto (gasoline)", "Diesel", "They are equal", "Depends on displacement"], answer: 1 },
    { q: "Variable Valve Timing (VVT) technology primarily optimizes:", options: ["Fuel tank capacity", "Engine performance and fuel efficiency across RPM range", "Transmission gear ratios", "Cooling system flow rate"], answer: 1 },
    { q: "Engine knock (pinging) is caused by:", options: ["Low oil pressure", "Premature ignition of the air-fuel mixture", "Exhaust backpressure", "Inadequate valve clearance"], answer: 1 }
  ],
  brands: [
    { q: "Which car company's motto is 'The Ultimate Driving Machine'?", options: ["Mercedes-Benz", "Audi", "BMW", "Porsche"], answer: 2 },
    { q: "Lamborghini is owned by which parent company?", options: ["Stellantis", "Volkswagen Group", "BMW Group", "Renault-Nissan-Mitsubishi"], answer: 1 },
    { q: "Which Indian automaker manufactures the Nexon EV?", options: ["Mahindra", "Hyundai India", "Tata Motors", "Maruti Suzuki"], answer: 2 },
    { q: "The Bugatti Chiron's engine configuration is:", options: ["V12 Quad-turbocharged", "W16 Quad-turbocharged", "V8 Twin-turbocharged", "Flat-6 Naturally Aspirated"], answer: 1 },
    { q: "Which company produces the electric vehicle brand 'Polestar'?", options: ["Ford", "BMW", "Volvo / Geely Group", "GM"], answer: 2 },
    { q: "The Jeep brand is owned by:", options: ["Ford Motor Company", "General Motors", "Stellantis", "Volkswagen Group"], answer: 2 },
    { q: "Which brand introduced the first mass-market hybrid car, the Prius?", options: ["Honda", "Toyota", "Ford", "Hyundai"], answer: 1 },
    { q: "Rolls-Royce automobiles are currently owned by:", options: ["Volkswagen Group", "Daimler AG", "BMW Group", "Tata Motors"], answer: 2 },
    { q: "Which company makes the 'EQS' electric sedan?", options: ["Audi", "Mercedes-Benz", "BMW", "Porsche"], answer: 1 },
    { q: "Maruti Suzuki is a joint venture primarily between Suzuki Motor Corporation and:", options: ["Tata Group", "Government of India", "Hyundai", "Toyota"], answer: 1 }
  ],
  safety: [
    { q: "What does ABS stand for in automotive safety?", options: ["Auto Braking System", "Anti-lock Braking System", "Automated Balance Sensor", "Active Brake Support"], answer: 1 },
    { q: "ESC (Electronic Stability Control) primarily helps to:", options: ["Improve fuel economy", "Prevent rollovers and skidding by applying selective braking", "Increase acceleration", "Monitor tyre pressure"], answer: 1 },
    { q: "How many stars is the maximum rating in Euro NCAP crash tests?", options: ["3 stars", "4 stars", "5 stars", "6 stars"], answer: 2 },
    { q: "Lane Departure Warning (LDW) systems use what primary sensor to detect lane markings?", options: ["Radar", "Camera", "LiDAR", "Ultrasonic sensor"], answer: 1 },
    { q: "Which safety feature inflates within milliseconds of detecting a collision?", options: ["Seatbelt pretensioner", "Airbag", "Crumple zone", "Roll cage"], answer: 1 },
    { q: "TPMS stands for:", options: ["Traction Power Management System", "Tyre Pressure Monitoring System", "Thermal Protection Mode Switch", "Total Performance Measurement Score"], answer: 1 },
    { q: "A crumple zone in a car is designed to:", options: ["Increase the car's top speed", "Protect the passenger cell by absorbing crash energy", "Improve fuel tank safety", "Reduce aerodynamic drag"], answer: 1 },
    { q: "Autonomous Emergency Braking (AEB) at what speed is tested in Euro NCAP 2026?", options: ["20 km/h", "40 km/h", "60 km/h", "80 km/h"], answer: 2 },
    { q: "The ISOFIX system in cars is used for:", options: ["Securing child safety seats", "GPS navigation anchoring", "Spare tyre mounting", "Battery connection standardization"], answer: 0 },
    { q: "Which of these is NOT a passive safety feature?", options: ["Airbags", "Seatbelts", "ABS brakes", "Crumple zones"], answer: 2 }
  ],
  future: [
    { q: "What SAE level of autonomy allows the car to drive itself in all conditions without human intervention?", options: ["Level 2", "Level 3", "Level 4", "Level 5"], answer: 3 },
    { q: "Vehicle-to-Everything (V2X) communication includes communication between:", options: ["Only vehicles", "Vehicles, infrastructure, pedestrians, and networks", "Only vehicles and traffic lights", "Only vehicles and GPS satellites"], answer: 1 },
    { q: "What is the primary advantage of a hydrogen fuel cell vehicle (FCEV) over a BEV?", options: ["Lower cost", "Faster refuelling and potentially longer range", "More charging stations available", "Simpler powertrain"], answer: 1 },
    { q: "Flying cars (eVTOL vehicles) typically use what propulsion technology?", options: ["Jet engines", "Distributed electric propulsion with multiple rotors", "Conventional helicopter blades", "Rocket propulsion"], answer: 1 },
    { q: "In autonomous vehicles, 'HD Maps' differ from regular GPS maps by:", options: ["Being cheaper to produce", "Providing centimetre-level accuracy with lane, sign, and road feature data", "Working offline only", "Using satellite imagery alone"], answer: 1 },
    { q: "What does 'Over-The-Air' (OTA) update mean for modern vehicles?", options: ["Updating software via Wi-Fi/cellular without visiting a dealership", "Repainting the vehicle exterior", "Updating engine oil remotely", "Replacing physical vehicle parts"], answer: 0 },
    { q: "Solid-state batteries are expected to improve on lithium-ion batteries primarily in terms of:", options: ["Lower energy density", "Safety, energy density, and charge speed", "Lower manufacturing complexity", "Reduced cell count"], answer: 1 },
    { q: "The concept of a 'digital twin' in automotive manufacturing refers to:", options: ["Building two identical cars for testing", "A virtual replica of a physical vehicle or factory for simulation", "Twin turbocharger setups", "Dual dashboard display systems"], answer: 1 },
    { q: "LiDAR sensors work by:", options: ["Measuring reflected light pulses to create 3D maps", "Detecting radio waves bounced off objects", "Analysing camera image pixels", "Using magnetic field variations"], answer: 0 },
    { q: "Which wireless EV charging standard is being developed for in-road dynamic charging?", options: ["Qi standard", "SAE J2954 (WPT)", "Bluetooth 5.0", "NFC-based inductive"], answer: 1 }
  ]
};

const THESIS_IDEAS = {
  battery: [
    { title: "AI-Driven State-of-Health (SOH) Prediction for Lithium-Ion Battery Packs", desc: "Apply LSTM neural networks trained on cycling data to predict remaining useful life and degradation patterns with <5% error margin.", tags: ["LSTM", "Battery", "Machine Learning", "EV"] },
    { title: "Adaptive Cell Balancing Algorithms for Multi-Cell EV Battery Packs", desc: "Compare passive vs. active balancing topologies and implement an optimal switching strategy to minimize energy loss during balancing.", tags: ["Power Electronics", "BMS", "Optimization", "EV"] },
    { title: "Electrochemical Impedance Spectroscopy for Non-Invasive Battery Diagnostics", desc: "Develop an embedded EIS system for in-situ battery health monitoring without interrupting vehicle operation.", tags: ["Electrochemistry", "Signal Processing", "Diagnostics"] }
  ],
  autonomous: [
    { title: "Multi-Sensor Fusion Architecture for Robust Object Detection in Adverse Weather", desc: "Develop a late-fusion architecture combining LiDAR, RADAR, and thermal camera data to maintain >95% detection accuracy in rain, fog, and snow.", tags: ["Sensor Fusion", "Deep Learning", "Autonomous", "RADAR"] },
    { title: "Explainable AI for Autonomous Vehicle Decision-Making in Ethical Dilemma Scenarios", desc: "Investigate how XAI techniques (LIME, GRAD-CAM) can be applied to AV decision modules to provide human-interpretable explanations.", tags: ["XAI", "Ethics", "Autonomous", "Deep Learning"] },
    { title: "Reinforcement Learning for Urban Traffic Navigation Without HD Maps", desc: "Train an RL agent to navigate complex urban intersections using only onboard sensor data, eliminating the HD map dependency.", tags: ["Reinforcement Learning", "Navigation", "Autonomous", "Python"] }
  ],
  hybrid: [
    { title: "Energy Management Strategy Optimization for Parallel Hybrid Vehicles Using Genetic Algorithms", desc: "Apply genetic algorithm-based optimization to develop a real-time energy management strategy that minimizes fuel consumption while meeting driver demand.", tags: ["Genetic Algorithm", "MATLAB", "Hybrid", "Optimization"] },
    { title: "Predictive Energy Management for Plug-In Hybrid Vehicles Using Route Information", desc: "Use GPS route preview and traffic data to pre-optimize the ICE/electric mode split, achieving 18% improvement over rule-based strategies.", tags: ["PHEV", "Predictive Control", "GPS", "Energy Management"] }
  ],
  aerodynamics: [
    { title: "Active Aerodynamic Body Panels for EV Range Extension at Highway Speeds", desc: "Design and CFD-validate morphing body panels that adapt in real time to minimize drag coefficient, targeting a 12% Cd reduction.", tags: ["CFD", "Aerodynamics", "EV", "ANSYS", "Morphing"] },
    { title: "Underbody Airflow Optimization for Electric Vehicles Using Topology Optimization", desc: "Apply topology optimization to the EV underbody to minimize drag and lift while respecting packaging constraints.", tags: ["CFD", "Topology Optimization", "Aerodynamics", "FEA"] }
  ],
  default: [
    { title: "Real-Time Pothole Detection and Road Quality Mapping Using Smartphone Accelerometers and ML", desc: "Develop a crowd-sourced pothole mapping system using phone sensors in connected vehicles, with ML classifiers achieving 91% detection accuracy.", tags: ["IoT", "Machine Learning", "Road Safety", "Android"] },
    { title: "Predictive Maintenance System for Fleet Vehicles Using CAN Bus Data and Anomaly Detection", desc: "Build an ML pipeline that monitors vehicle CAN bus signals to predict component failure 500+ km before breakdown, reducing unplanned downtime by 40%.", tags: ["CAN Bus", "Anomaly Detection", "Fleet Management", "IoT"] },
    { title: "Carbon Footprint Analysis and Lifecycle Assessment of EV vs. ICE Vehicles in Indian Context", desc: "Conduct a comprehensive LCA comparing total CO2 emissions from manufacturing to end-of-life for EVs and ICE vehicles under India's grid mix.", tags: ["LCA", "Sustainability", "EV", "Research", "Policy"] }
  ]
};

const BOT_RESPONSES = {
  "ev project": {
    text: `Great choice! Here are top EV final year projects for 2026:\n\n⚡ **1. Smart BMS with Cell Balancing** — Design a battery management system with thermal protection, SOC estimation using Kalman filter, and passive/active cell balancing.\n\n⚡ **2. V2G Bidirectional Charging System** — Model a Vehicle-to-Grid charger that sells electricity back to the grid during peak demand.\n\n⚡ **3. EV Range Prediction Using ML** — Use driving patterns, weather, and load data to predict real-world range with LSTM neural networks.\n\n⚡ **4. Thermal Management for EV Battery Packs** — CFD analysis of liquid-cooled battery packs using ANSYS Fluent.\n\nWhich one interests you most? I can give you a detailed synopsis! 📄`
  },
  "regenerative braking": {
    text: `🔋 **Regenerative Braking Explained:**\n\nWhen you press the brake pedal in an EV or hybrid, instead of just using friction brakes, the electric motor **reverses its role** and becomes a generator.\n\n**Here's the physics:**\n- The car's kinetic energy (½mv²) is converted to electrical energy\n- This electricity is fed back into the battery pack\n- The electromagnetic resistance of the generator also slows the car\n\n**Efficiency:** Modern EVs recover 60–80% of braking energy vs. 0% in ICE cars with friction brakes.\n\n**One-pedal driving** (like Tesla's strong regen mode) relies almost entirely on regenerative braking for normal deceleration — friction brakes only engage in emergencies.\n\nWant me to suggest a project idea based on regenerative braking optimization? 🚗`
  },
  "autonomous thesis": {
    text: `🤖 **Top Autonomous Vehicle Thesis Topics for 2026:**\n\n**For UG (B.Tech):**\n📌 LiDAR-based Obstacle Detection using ROS + Python\n📌 Lane Detection using Deep Learning (YOLO/EfficientDet)\n📌 V2V Collision Avoidance using DSRC Protocol\n\n**For PG (M.Tech):**\n📌 Sensor Fusion (LiDAR + Camera) for Pedestrian Detection\n📌 SLAM for HD Map Generation\n📌 Reinforcement Learning for Urban Navigation\n\n**For PhD:**\n📌 Federated Learning for Privacy-Preserving AV Models\n📌 Explainable AI for Ethical AV Decision-Making\n📌 Adversarial Robustness of Perception Systems\n\nI can generate a full thesis outline with objectives, methodology, and references for any of these! Which one? 📝`
  },
  "ev types": {
    text: `⚡ **EV Types Explained Simply:**\n\n🔋 **BEV — Battery Electric Vehicle**\n→ 100% electric. No engine. Just battery + motor.\n→ Examples: Tesla Model 3, Tata Nexon EV, Hyundai Ioniq 6\n\n🔌 **PHEV — Plug-in Hybrid Electric Vehicle**\n→ Both battery (can be charged externally) AND petrol engine\n→ Electric range: 40–80 km, then ICE takes over\n→ Examples: BMW 330e, Maruti Grand Vitara SHVS (mild HEV)\n\n⛽ **HEV — Hybrid Electric Vehicle**\n→ Petrol engine + small battery, but battery can't be plugged in\n→ Battery charges only through regenerative braking\n→ Examples: Toyota Camry Hybrid, Honda City Hybrid\n\n💧 **FCEV — Fuel Cell Electric Vehicle**\n→ Converts hydrogen to electricity via fuel cell\n→ Only emission: Water vapour\n→ Examples: Toyota Mirai, Hyundai Nexo\n\nWant me to explain the powertrain architecture of any of these in detail? 🔧`
  },
  default: {
    text: `Thanks for your question! 🤖 As **AutoBot**, I specialize in:\n\n🚗 Automotive technology (EV, ICE, hybrids, autonomous systems)\n🎓 Engineering project ideas (UG, PG, PhD level)\n📝 Thesis outlines and research topic suggestions\n📊 Industry trends and technology comparisons\n\nCould you rephrase or try one of the quick reply buttons below? I'll give you a detailed, informative answer! 😊`
  }
};

// ===== UTILITY FUNCTIONS =====

function $(id) { return document.getElementById(id); }
function $$(sel) { return document.querySelectorAll(sel); }

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function notifyUser(message) {
  if (typeof window.showToast === 'function') {
    window.showToast(message);
  }
}

function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target.toLocaleString(); clearInterval(timer); }
    else { el.textContent = Math.floor(start).toLocaleString(); }
  }, 16);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== NAVBAR =====

function initNavbar() {
  const navbar = $('navbar');
  const hamburger = $('hamburger');
  const navLinks = $('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNav();
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      scrollToSection(section);
      navLinks.classList.remove('open');
    });
  });
}

function updateActiveNav() {
  const sections = ['home', 'hub', 'quiz', 'lab', 'autobot'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
}

// ===== HERO =====

function initHero() {
  // Counter animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target));
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) observer.observe(statsEl);

  $('hero-explore-btn').addEventListener('click', (e) => { e.preventDefault(); scrollToSection('hub'); });
  $('hero-quiz-btn').addEventListener('click', (e) => { e.preventDefault(); scrollToSection('quiz'); });
}

// ===== SCROLL REVEAL =====

function initScrollReveal() {
  const revealEls = document.querySelectorAll('.section-header, .article-card, .project-card, .quiz-wrapper, .generator-card');
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}

// ===== ARTICLES =====

let currentFilter = 'all';
let articlesShown = 6;

function renderArticles() {
  const grid = $('articlesGrid');
  if (!grid) return;

  const filtered = currentFilter === 'all' ? ARTICLES : ARTICLES.filter(a => a.category === currentFilter);
  const toShow = filtered.slice(0, articlesShown);

  grid.innerHTML = toShow.map((a, i) => `
    <div class="article-card${a.featured && i === 0 && currentFilter === 'all' ? ' featured' : ''}" 
         data-id="${a.id}" onclick="openArticle(${a.id})" tabindex="0" role="button" aria-label="Read: ${escapeHtml(a.title)}">
      <div class="article-img" style="background: linear-gradient(135deg, ${a.color}22, ${a.color}11);">
        <div class="article-img-bg" style="background: radial-gradient(circle, ${a.color}33, transparent);"></div>
        <span style="position:relative;z-index:1;">${a.emoji}</span>
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span class="article-category ${a.catClass}">${a.tag}</span>
          <span class="article-date">${a.date}</span>
        </div>
        <h3 class="article-title">${escapeHtml(a.title)}</h3>
        <p class="article-excerpt">${escapeHtml(a.excerpt)}</p>
        <div class="article-footer">
          <span class="read-more-link">Read Article →</span>
          <span class="article-read-time">⏱ ${a.readTime}</span>
        </div>
      </div>
    </div>
  `).join('');

  $('loadMoreBtn').style.display = filtered.length <= articlesShown ? 'none' : 'inline-flex';
  initScrollReveal();
}

function openArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  $('modalContent').innerHTML = `
    <div class="modal-img">${article.emoji}</div>
    <div class="modal-tags">
      <span class="modal-tag">${article.tag}</span>
      <span class="modal-tag">${article.date}</span>
      <span class="modal-tag">⏱ ${article.readTime}</span>
    </div>
    <h2>${escapeHtml(article.title)}</h2>
    <div>${article.content}</div>
  `;
  $('articleModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function initArticles() {
  renderArticles();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      articlesShown = 6;
      renderArticles();
    });
  });

  $('loadMoreBtn').addEventListener('click', () => {
    articlesShown += 3;
    renderArticles();
  });

  $('modalClose').addEventListener('click', () => {
    $('articleModal').style.display = 'none';
    document.body.style.overflow = '';
  });

  $('articleModal').addEventListener('click', (e) => {
    if (e.target === $('articleModal')) {
      $('articleModal').style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

// ===== QUIZ =====

let currentTopic = 'ev';
let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let userAnswers = [];
let quizStarted = false;

function initQuiz() {
  document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTopic = btn.dataset.topic;
      resetQuiz();
    });
  });

  $('startQuizBtn').addEventListener('click', startQuiz);
  $('nextQuestionBtn').addEventListener('click', nextQuestion);
  $('retakeBtn').addEventListener('click', resetQuiz);
  $('shareScoreBtn').addEventListener('click', shareScore);
}

function startQuiz() {
  currentQuestions = shuffleArray([...QUIZ_DATA[currentTopic]]).slice(0, 10);
  currentQuestionIndex = 0;
  userAnswers = [];
  selectedAnswer = null;

  $('quizIntro').style.display = 'none';
  $('quizResult').style.display = 'none';
  $('quizActive').style.display = 'block';

  renderQuestion();
}

function renderQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  const letters = ['A', 'B', 'C', 'D'];

  $('questionCounter').textContent = `Question ${currentQuestionIndex + 1} of 10`;
  $('quizTopic').textContent = `Topic: ${getTopicName(currentTopic)}`;
  $('qNumber').textContent = `Q${currentQuestionIndex + 1}`;
  $('questionText').textContent = q.q;
  $('progressFill').style.width = `${((currentQuestionIndex) / 10) * 100}%`;
  $('nextQuestionBtn').disabled = true;
  selectedAnswer = null;

  $('optionsGrid').innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="selectAnswer(${i})" id="opt-${i}" aria-label="Option ${letters[i]}: ${escapeHtml(opt)}">
      <span class="option-letter">${letters[i]}</span>
      <span>${escapeHtml(opt)}</span>
    </button>
  `).join('');

  $('nextQuestionBtn').textContent = currentQuestionIndex === 9 ? 'See Results 🎯' : 'Next Question →';
}

function selectAnswer(index) {
  if (selectedAnswer !== null) return;
  selectedAnswer = index;
  $('nextQuestionBtn').disabled = false;

  const q = currentQuestions[currentQuestionIndex];
  const opts = document.querySelectorAll('.option-btn');

  opts.forEach(o => o.disabled = true);
  opts[index].classList.add(index === q.answer ? 'correct' : 'selected');
  if (index !== q.answer) opts[q.answer].classList.add('correct');
  if (index !== q.answer) opts[index].classList.add('wrong');

  userAnswers.push({ selected: index, correct: q.answer, isRight: index === q.answer });
}

function nextQuestion() {
  if (selectedAnswer === null) return;
  currentQuestionIndex++;
  if (currentQuestionIndex >= 10) showResults();
  else renderQuestion();
}

function showResults() {
  $('quizActive').style.display = 'none';
  $('quizResult').style.display = 'block';

  const score = userAnswers.filter(a => a.isRight).length;
  $('finalScore').textContent = score;
  $('progressFill').style.width = '100%';

  let emoji = '😔', title = 'Keep Practicing!', msg = 'Don\'t give up — try again to improve your score!';
  if (score >= 9) { emoji = '🏆'; title = 'Outstanding!'; msg = 'You\'re an automotive expert! Share your score!'; }
  else if (score >= 7) { emoji = '🎉'; title = 'Excellent!'; msg = 'Great knowledge! You really know your automobiles!'; }
  else if (score >= 5) { emoji = '👍'; title = 'Good Job!'; msg = 'Solid performance! A bit more reading and you\'ll ace it!'; }
  else if (score >= 3) { emoji = '📚'; title = 'Keep Learning!'; msg = 'Check out our articles to boost your knowledge!'; }

  $('resultEmoji').textContent = emoji;
  $('resultTitle').textContent = title;
  $('resultMessage').textContent = msg;

  $('resultBreakdown').innerHTML = userAnswers.map((a, i) =>
    `<div class="result-dot ${a.isRight ? 'correct' : 'wrong'}" title="Q${i+1}: ${a.isRight ? '✓' : '✗'}">${i+1}</div>`
  ).join('');

  // Update leaderboard
  updateLeaderboard(score);
}

function updateLeaderboard(score) {
  const names = ['You', 'SpeedDemon', 'TurboFan', 'EVEngineer', 'NitroNerd'];
  const lb = $('leaderboardList');
  const existing = Array.from(lb.querySelectorAll('.lb-item')).map((item, i) => ({
    name: item.querySelector('.lb-name').textContent,
    score: item.querySelector('.lb-score').textContent
  }));
  existing.unshift({ name: 'You ⭐', score: `${score}/10` });
  existing.sort((a, b) => parseInt(b.score) - parseInt(a.score));
  lb.innerHTML = existing.slice(0, 5).map((item, i) =>
    `<div class="lb-item">
      <span class="lb-rank">${i + 1}</span>
      <span class="lb-name">${escapeHtml(item.name)}</span>
      <span class="lb-score">${item.score}</span>
    </div>`
  ).join('');
}

function resetQuiz() {
  $('quizIntro').style.display = 'block';
  $('quizActive').style.display = 'none';
  $('quizResult').style.display = 'none';
  $('progressFill').style.width = '10%';
}

function shareScore() {
  const score = userAnswers.filter(a => a.isRight).length;
  const text = `I scored ${score}/10 on the AutoMind AI ${getTopicName(currentTopic)} quiz! 🚗⚡ Test your automobile knowledge at AutoMind AI!`;
  if (navigator.share) {
    navigator.share({ title: 'AutoMind AI Quiz', text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => alert('Score copied to clipboard! Share it anywhere 🎉'));
  }
}

function getTopicName(topic) {
  const names = { ev: 'Electric Vehicles', engine: 'Engine Tech', brands: 'Car Brands', safety: 'Road Safety', future: 'Future Mobility' };
  return names[topic] || topic;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== STUDENT LAB =====

let currentBranch = 'all';

function renderProjects() {
  const grid = $('projectsGrid');
  if (!grid) return;

  const filtered = currentBranch === 'all' ? PROJECTS : PROJECTS.filter(p => p.branch === currentBranch);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card" onclick="openProject(${p.id})" tabindex="0" role="button" aria-label="${escapeHtml(p.title)}">
      <div class="project-icon">${p.icon}</div>
      <div class="project-body">
        <div class="project-header">
          <span class="project-level ${p.levelClass}">${p.level.toUpperCase()}</span>
        </div>
        <div class="project-title">${escapeHtml(p.title)}</div>
        <div class="project-desc">${escapeHtml(p.desc)}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
      <div class="project-arrow">›</div>
    </div>
  `).join('');
}

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  $('projectModalContent').innerHTML = `
    <div class="modal-img">${p.icon}</div>
    <div class="modal-tags">
      <span class="modal-tag">${p.level.toUpperCase()} Level</span>
      ${p.tags.map(t => `<span class="modal-tag">${escapeHtml(t)}</span>`).join('')}
    </div>
    <h2>${escapeHtml(p.title)}</h2>
    <p>${escapeHtml(p.desc)}</p>
    <h3>Suggested Methodology</h3>
    <ul>
      <li>Literature review of existing solutions and state-of-the-art research</li>
      <li>Problem definition and system requirements specification</li>
      <li>Design and simulation using appropriate tools (${p.tags.slice(0,2).join(', ')})</li>
      <li>Implementation, testing, and validation against baseline metrics</li>
      <li>Results analysis and comparison with existing approaches</li>
      <li>Documentation: thesis/report + paper publication (optional)</li>
    </ul>
    <h3>Expected Outcomes</h3>
    <ul>
      <li>Working prototype or validated simulation model</li>
      <li>Performance metrics demonstrating improvement over baseline</li>
      <li>Technical report suitable for submission and publication</li>
    </ul>
    <button class="btn-download-outline" onclick="downloadOutline('${escapeHtml(p.title)}')">
      📄 Download Project Outline
    </button>
  `;
  $('projectModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function downloadOutline(title) {
  const content = `PROJECT OUTLINE — AutoMind AI\n${'='.repeat(50)}\n\nTitle: ${title}\n\nGenerated by AutoMind AI Student Lab\nDate: ${new Date().toLocaleDateString()}\n\nSECTIONS:\n1. Introduction & Motivation\n2. Problem Statement\n3. Objectives\n4. Literature Review\n5. Proposed Methodology\n6. Tools & Technologies\n7. Expected Results\n8. Timeline\n9. References\n\nVisit automind.ai for full thesis support.\n`;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'project_outline.txt'; a.click();
  URL.revokeObjectURL(url);
}

function initStudentLab() {
  renderProjects();

  document.querySelectorAll('.branch-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.branch-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBranch = btn.dataset.branch;
      renderProjects();
    });
  });

  $('generateBtn').addEventListener('click', generateThesisIdeas);
  $('thesisInput').addEventListener('keydown', e => { if (e.key === 'Enter') generateThesisIdeas(); });

  $('projectModalClose').addEventListener('click', () => {
    $('projectModal').style.display = 'none';
    document.body.style.overflow = '';
  });

  $('projectModal').addEventListener('click', (e) => {
    if (e.target === $('projectModal')) {
      $('projectModal').style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

function generateThesisIdeas() {
  const input = $('thesisInput').value.toLowerCase().trim();
  const btn = $('generateBtn');
  const btnText = $('generateBtnText');
  const results = $('generatorResults');

  btnText.textContent = '⏳ Generating...';
  btn.disabled = true;

  setTimeout(() => {
    let ideas = [];

    if (input.includes('battery') || input.includes('bms') || input.includes('cell')) {
      ideas = THESIS_IDEAS.battery;
    } else if (input.includes('autonomous') || input.includes('self-driving') || input.includes('lidar') || input.includes('sensor')) {
      ideas = THESIS_IDEAS.autonomous;
    } else if (input.includes('hybrid') || input.includes('phev') || input.includes('energy management')) {
      ideas = THESIS_IDEAS.hybrid;
    } else if (input.includes('aerodynamic') || input.includes('drag') || input.includes('cfd') || input.includes('air')) {
      ideas = THESIS_IDEAS.aerodynamics;
    } else {
      ideas = THESIS_IDEAS.default;
    }

    results.innerHTML = ideas.map(idea => `
      <div class="gen-result-item" onclick="useIdeaAsProject('${escapeHtml(idea.title)}')">
        <div class="gen-result-title">📌 ${escapeHtml(idea.title)}</div>
        <div class="gen-result-desc">${escapeHtml(idea.desc)}</div>
        <div class="gen-result-tags">${idea.tags.map(t => `<span class="gen-tag">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
    `).join('');
    results.style.display = 'flex';

    btnText.textContent = '✨ Generate Ideas';
    btn.disabled = false;
  }, 1200);
}

function useIdeaAsProject(title) {
  $('thesisInput').value = title;
  scrollToSection('autobot');
  setTimeout(() => {
    $('chatInput').value = `Can you give me a detailed thesis outline for: ${title}`;
    $('chatInput').focus();
  }, 600);
}

// ===== AUTOBOT =====

function initAutoBot() {
  $('chatSendBtn').addEventListener('click', sendMessage);
  $('chatInput').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });

  document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => {
      $('chatInput').value = btn.dataset.msg;
      sendMessage();
    });
  });
}

function sendMessage() {
  const input = $('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  input.value = '';

  const typingId = showTyping();

  setTimeout(() => {
    removeTyping(typingId);
    const response = getBotResponse(msg);
    appendMessage(response, 'bot');
    scrollChat();
  }, 1000 + Math.random() * 800);
}

function appendMessage(text, sender) {
  const msgs = $('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-message ${sender === 'bot' ? '' : 'user-message-wrapper'}`;

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedText = formatBotText(text);

  if (sender === 'bot') {
    div.innerHTML = `
      <div class="bot-avatar">🤖</div>
      <div class="message-bubble">${formattedText}</div>
      <div class="message-time">AutoBot • ${time}</div>
    `;
  } else {
    div.innerHTML = `
      <div class="message-bubble">${escapeHtml(text)}</div>
      <div class="message-time">You • ${time}</div>
    `;
  }

  msgs.appendChild(div);
  scrollChat();
}

function formatBotText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p style="margin-top:8px;">')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}

function showTyping() {
  const msgs = $('chatMessages');
  const id = 'typing-' + Date.now();
  msgs.innerHTML += `
    <div class="chat-message" id="${id}">
      <div class="bot-avatar">🤖</div>
      <div class="message-bubble">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    </div>
  `;
  scrollChat();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollChat() {
  const msgs = $('chatMessages');
  msgs.scrollTop = msgs.scrollHeight;
}

function getBotResponse(msg) {
  const lower = msg.toLowerCase();

  if (lower.includes('ev project') || lower.includes('electric vehicle project') || lower.includes('best ev') || lower.includes('final year') && lower.includes('ev')) {
    return BOT_RESPONSES['ev project'].text;
  }
  if (lower.includes('regenerative') || lower.includes('regen braking')) {
    return BOT_RESPONSES['regenerative braking'].text;
  }
  if (lower.includes('autonomous') && (lower.includes('thesis') || lower.includes('topic') || lower.includes('project'))) {
    return BOT_RESPONSES['autonomous thesis'].text;
  }
  if (lower.includes('bev') || lower.includes('phev') || lower.includes('hev') || lower.includes('types of ev') || lower.includes('difference between')) {
    return BOT_RESPONSES['ev types'].text;
  }
  if (lower.includes('thesis') || lower.includes('outline')) {
    return `📝 I'd love to help with your thesis!\n\nFor a detailed thesis outline, please tell me:\n1. **Your specific topic** (e.g., battery management, autonomous driving, hybrid powertrains)\n2. **Your level** (B.Tech, M.Tech, or PhD)\n3. **Your engineering branch** (Mechanical, Electrical, ECE, Computer Science, Automobile)\n\nOnce I know these details, I'll generate a complete outline with introduction, literature review guidance, methodology, and references! 🎓`;
  }
  if (lower.includes('project') || lower.includes('assignment')) {
    return `🔧 Looking for project ideas? Here are some hot topics in 2026:\n\n**⚡ EV Track:**\n- Smart Battery Management System\n- V2G Bidirectional Charging\n- EV Thermal Management\n\n**🤖 Autonomous Track:**\n- LiDAR Object Detection\n- Lane Keeping Assist System\n- V2V Collision Avoidance\n\n**🔬 Engine/Powertrain Track:**\n- Waste Heat Recovery (ORC)\n- Hydrogen Fuel Cell Hybrid\n- AI-Based Engine Calibration\n\nWant a full description and methodology for any of these? Just ask! 📋`;
  }
  if (lower.includes('ev') || lower.includes('electric')) {
    return `⚡ Great topic! Electric vehicles are transforming transportation globally.\n\n**Key EV concepts to know in 2026:**\n- **Battery Chemistry:** LFP vs NMC vs solid-state\n- **Power Electronics:** Inverters, DC-DC converters, onboard chargers\n- **Motor Types:** PMSM (most common), BLDC, induction\n- **Charging:** Level 1 (2.4kW), Level 2 (22kW), DC Fast (150-350kW)\n- **BMS:** SOC, SOH, cell balancing, thermal management\n\nWhat specific aspect of EVs are you studying? I can go much deeper! 🔋`;
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return `Hello! 👋 Welcome to **AutoMind AI**!\n\nI'm AutoBot — your AI assistant for everything automotive and engineering related.\n\nYou can ask me about:\n🚗 Car technology & EV systems\n🎓 Project & thesis ideas\n🔬 Engineering concepts explained\n📊 Industry trends & news\n\nWhat can I help you with today?`;
  }
  return `Thanks for your question! 🤖\n\nI specialise in automotive technology, engineering projects, and thesis guidance. Could you be more specific?\n\nFor example, try asking:\n- *"What are good EV project ideas for final year?"*\n- *"Explain regenerative braking"*\n- *"Suggest a thesis on autonomous vehicles"*\n\nI'm here to help! 😊`;
}

// ===== NEWSLETTER =====

function initNewsletter() {
  $('nlSubscribeBtn').addEventListener('click', async () => {
    const name = $('nlName').value.trim();
    const email = $('nlEmail').value.trim();
    const button = $('nlSubscribeBtn');

    if (!isValidEmail(email)) {
      $('nlEmail').style.borderColor = '#ef4444';
      setTimeout(() => $('nlEmail').style.borderColor = '', 2000);
      notifyUser('Please enter a valid email address.');
      return;
    }

    button.disabled = true;
    button.querySelector('span').textContent = 'Subscribing...';

    try {
      if (NEWSLETTER_ENDPOINT) {
        const response = await fetch(NEWSLETTER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            source: 'AutoMind AI website',
            submittedAt: new Date().toISOString()
          })
        });

        if (!response.ok) throw new Error('Newsletter service error');
      } else {
        const subscribers = JSON.parse(localStorage.getItem('automind_launch_subscribers') || '[]');
        const exists = subscribers.some(item => item.email.toLowerCase() === email.toLowerCase());
        if (!exists) {
          subscribers.push({ name, email, submittedAt: new Date().toISOString() });
          localStorage.setItem('automind_launch_subscribers', JSON.stringify(subscribers));
        }
      }

      $('nlForm').style.display = 'none';
      $('nlSuccess').style.display = 'block';
      notifyUser('Subscription saved.');
    } catch (error) {
      notifyUser('Subscription could not be saved. Please try again.');
    } finally {
      button.disabled = false;
      button.querySelector('span').textContent = 'Subscribe Free';
    }
  });
}

// ===== LAUNCH INFO MODALS =====

const INFO_PAGES = {
  about: {
    title: 'About AutoMind AI',
    body: `
      <p>AutoMind AI is an automobile intelligence platform for enthusiasts, engineering students, and future mobility learners.</p>
      <p>Version 1 focuses on curated automotive explainers, interactive quizzes, project ideas, and a guided AutoBot assistant. The platform is built as a fast static website so it can launch quickly on GitHub Pages.</p>
      <h3>What is live in Version 1?</h3>
      <ul>
        <li>Automobile insight articles with category filters</li>
        <li>Quiz Zone with instant scoring</li>
        <li>Student Lab project and thesis idea generator</li>
        <li>AutoBot guided automotive assistant</li>
        <li>Search, cookie controls, and mobile-friendly navigation</li>
      </ul>`
  },
  advertise: {
    title: 'Advertise With Us',
    body: `
      <p>AutoMind AI is built for automobile readers, EV learners, engineering students, and technology-focused audiences.</p>
      <p>For launch partnerships, sponsored placements, or education/industry collaborations, contact us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
      <h3>Available placements</h3>
      <ul>
        <li>Sponsored article placement</li>
        <li>Student Lab project sponsor</li>
        <li>Newsletter sponsorship</li>
        <li>Automotive education partnership</li>
      </ul>`
  },
  privacy: {
    title: 'Privacy Policy',
    body: `
      <p>AutoMind AI respects visitor privacy. This Version 1 website stores only limited browser data required for basic site features.</p>
      <h3>What we store</h3>
      <ul>
        <li>Cookie preference, saved in your browser using localStorage</li>
        <li>Quiz progress and temporary interface state while you use the page</li>
        <li>Newsletter signup details only when you submit the form</li>
      </ul>
      <p>When a newsletter provider is connected, submitted details will be sent to that provider for email delivery. Until then, signup data is stored locally in the browser for launch testing.</p>
      <p>For privacy questions, email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>`
  },
  terms: {
    title: 'Terms of Service',
    body: `
      <p>AutoMind AI provides educational automobile content, quizzes, and student project guidance for general information only.</p>
      <h3>Use of content</h3>
      <ul>
        <li>Use project and thesis ideas as starting points, then verify details with your institution or supervisor.</li>
        <li>Do not treat AutoBot responses as professional engineering, legal, financial, or safety certification advice.</li>
        <li>Automotive specifications and industry claims should be verified before publication or academic submission.</li>
      </ul>
      <p>By using this website, you agree to use the content responsibly and independently verify important information.</p>`
  },
  contact: {
    title: 'Contact AutoMind AI',
    body: `
      <p>Have feedback, a collaboration idea, or a correction for an article?</p>
      <p>Email us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
      <h3>Good reasons to contact us</h3>
      <ul>
        <li>Suggesting an automobile topic</li>
        <li>Reporting an incorrect article detail</li>
        <li>Requesting a student project guide</li>
        <li>Discussing sponsorship or partnership</li>
      </ul>`
  }
};

function openInfoPage(page) {
  const info = INFO_PAGES[page];
  if (!info) return;

  $('modalContent').innerHTML = `
    <div class="modal-img">⚡</div>
    <div class="modal-tags">
      <span class="modal-tag">AutoMind AI</span>
      <span class="modal-tag">Version 1</span>
    </div>
    <h2>${info.title}</h2>
    ${info.body}
  `;
  $('articleModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function initLaunchLinks() {
  const pageLinks = {
    'footer-about': 'about',
    'footer-advertise': 'advertise',
    'footer-contact': 'contact',
    'footer-privacy': 'privacy',
    'footer-terms': 'terms',
    'cookiePrivacyLink': 'privacy'
  };

  Object.entries(pageLinks).forEach(([id, page]) => {
    const link = $(id);
    if (!link) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      openInfoPage(page);
    });
  });

  const footerFilters = {
    'footer-ev-link': 'ev',
    'footer-tech-link': 'tech',
    'footer-reviews-link': 'review',
    'footer-industry-link': 'industry'
  };

  Object.entries(footerFilters).forEach(([id, filter]) => {
    const link = $(id);
    if (!link) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
      if (btn) btn.click();
      scrollToSection('hub');
    });
  });

  const socialLinks = {
    'social-twitter': 'https://x.com/',
    'social-youtube': 'https://www.youtube.com/',
    'social-linkedin': 'https://www.linkedin.com/',
    'social-instagram': 'https://www.instagram.com/'
  };

  Object.entries(socialLinks).forEach(([id, url]) => {
    const link = $(id);
    if (!link) return;
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
  });
}

// ===== FLOATING CTA =====

function initFloatingCta() {
  const cta = $('floatingCta');
  cta.addEventListener('click', () => scrollToSection('quiz'));

  window.addEventListener('scroll', () => {
    cta.style.display = window.scrollY > 400 ? 'block' : 'none';
  });
}

// ===== KEYBOARD ACCESSIBILITY =====

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    $('articleModal').style.display = 'none';
    $('projectModal').style.display = 'none';
    document.body.style.overflow = '';
  }
});

// ===== SMOOTH ANCHOR LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (id) { e.preventDefault(); scrollToSection(id); }
  });
});

// ===== INIT ALL =====

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHero();
  initArticles();
  initQuiz();
  initStudentLab();
  initAutoBot();
  initNewsletter();
  initFloatingCta();
  initLaunchLinks();
  initScrollReveal();

  // Expose global functions for inline onclick
  window.openArticle = openArticle;
  window.openProject = openProject;
  window.selectAnswer = selectAnswer;
  window.downloadOutline = downloadOutline;
  window.useIdeaAsProject = useIdeaAsProject;
  window.openInfoPage = openInfoPage;
});
