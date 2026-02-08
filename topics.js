// ===================================
// Topic Data with Enhanced Content
// ===================================
const topics = {
    'system-design': {
        title: '📐 System Design Basics',
        content: `
            <h2>System Design: Building Great Software</h2>
            <p>System Design is the process of planning how a software system is built to work correctly, scale to many users, stay fast and reliable, and be easy to maintain and improve.</p>
            
            <h3>Core Problems Solved by System Design:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Scalability:</strong> Handle increasing number of users without system collapse</li>
                <li><strong>Performance:</strong> Ensure fast response times even under load</li>
                <li><strong>Reliability:</strong> System stays up and doesn't lose data</li>
                <li><strong>Maintainability:</strong> Easy to add features and fix bugs</li>
                <li><strong>Security:</strong> Protect user data and system from attacks</li>
            </ul>
            
            <h3>Types of System Design:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>High-Level Design:</strong> Components like cache, API, database, load balancers, and their interactions</li>
                <li><strong>Low-Level Design:</strong> Class diagrams, activity diagrams, database schema, and edge cases</li>
            </ul>
            
            <h3>Key Insight:</h3>
            <p>Mastering system design means understanding both big-picture architecture and low-level implementation details to build systems that work, scale, and last.</p>
        `,
        icon: '📐'
    },
    scalability: {
        title: '🚀 Scalability',
        content: `
            <h2>Scalability: Building for Growth</h2>
            <p>Scalability is the cornerstone of modern system design. It's the ability of a system to handle increased workload by adding resources without compromising performance.</p>
            
            <h3>Key Strategies:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Horizontal Scaling (Scale Out):</strong> Add more servers to distribute the load</li>
                <li><strong>Vertical Scaling (Scale Up):</strong> Increase resources of existing servers</li>
                <li><strong>Auto-Scaling:</strong> Dynamically adjust resources based on demand</li>
                <li><strong>Load Distribution:</strong> Intelligently route traffic across infrastructure</li>
            </ul>
            
            <h3>Real-World Examples:</h3>
            <p>Companies like Netflix handle billions of requests daily using horizontal scaling with thousands of microservices. Amazon uses auto-scaling to handle Black Friday traffic spikes.</p>
        `,
        icon: '🚀'
    },
    'latency-throughput': {
        title: '⚡ Latency vs Throughput',
        content: `
            <h2>Latency vs Throughput: Understanding Performance Metrics</h2>
            <p>Latency and throughput are two critical metrics for measuring system performance. Latency is about speed (how fast), while throughput is about capacity (how much).</p>
            
            <h3>Latency:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Definition:</strong> Time taken to process a single request</li>
                <li><strong>Measured in:</strong> Milliseconds (ms), seconds (s)</li>
                <li><strong>Example:</strong> Page loads in 200ms = good latency</li>
                <li><strong>Focus:</strong> User experience, perceived speed</li>
            </ul>
            
            <h3>Throughput:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Definition:</strong> Number of requests system can handle per unit time</li>
                <li><strong>Measured in:</strong> Requests per second (RPS), transactions per second</li>
                <li><strong>Example:</strong> Can handle 1,000 RPS = high throughput</li>
                <li><strong>Focus:</strong> System capacity, scalability</li>
            </ul>
            
            <h3>Key Insight:</h3>
            <p>A good system needs both: fast individual responses AND the ability to handle many requests. You must balance both metrics to deliver great performance and reliability.</p>
        `,
        icon: '⚡'
    },
    traffic: {
        title: '📊 Traffic',
        content: `
            <h2>Traffic: Understanding Request Volume</h2>
            <p>Traffic refers to the number of requests sent by users to your application over time. System design is mainly about handling traffic efficiently.</p>
            
            <h3>Key Concepts:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Read vs Write Traffic:</strong> Read traffic (browsing) is typically 10-100x higher than write traffic (purchases, updates)</li>
                <li><strong>Traffic Patterns:</strong> Steady, spike, global, or peak-hour patterns require different architectural approaches</li>
                <li><strong>Capacity Planning:</strong> Design for 3-5x expected traffic to handle growth and unexpected spikes</li>
                <li><strong>Traffic Control:</strong> Use load balancers, caching, CDN, and rate limiting to manage traffic</li>
            </ul>
            
            <h3>Real-World Example:</h3>
            <p>A ticket booking site crashes when sales open due to spike traffic. A streaming platform serves millions of users globally requiring distributed architecture and CDN.</p>
        `,
        icon: '📊'
    },
    'load-balancing': {
        title: '⚖️ Load Balancing',
        content: `
            <h2>Load Balancing: Distributing Traffic Intelligently</h2>
            <p>Load balancing ensures no single server bears too much demand, optimizing resource use and maximizing throughput.</p>
            
            <h3>Load Balancing Algorithms:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Round Robin:</strong> Distributes requests sequentially across servers</li>
                <li><strong>Least Connections:</strong> Routes to server with fewest active connections</li>
                <li><strong>IP Hash:</strong> Routes based on client IP for session persistence</li>
                <li><strong>Weighted Round Robin:</strong> Distributes based on server capacity</li>
            </ul>
            
            <h3>Popular Tools:</h3>
            <p>NGINX, HAProxy, AWS ELB, Google Cloud Load Balancer are industry-standard solutions for traffic distribution.</p>
        `,
        icon: '⚖️'
    },
    caching: {
        title: '💾 Caching',
        content: `
            <h2>Caching: Speed Through Strategic Storage</h2>
            <p>Caching stores frequently accessed data in fast-access memory, dramatically reducing latency and database load.</p>
            
            <h3>Caching Layers</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Browser Cache:</strong> Client-side storage for static assets</li>
                <li><strong>CDN Cache:</strong> Geographically distributed edge servers</li>
                <li><strong>Application Cache:</strong> In-memory stores like Redis, Memcached</li>
                <li><strong>Database Cache:</strong> Query result caching</li>
            </ul>
            
            <h3>Cache Invalidation Strategies</h3>
            <p>TTL (Time To Live), Write-through, Write-behind, and Cache-aside patterns help maintain data consistency while maximizing performance.</p>
        `,
        icon: '💾'
    },
    'rate-limiting': {
        title: '🚦 Rate Limiting',
        content: `
            <h2>Rate Limiting: Controlling Request Flow</h2>
            <p>Rate limiting controls how many requests a user can send to a system within a given time window, protecting from overload and abuse.</p>
            
            <h3>Key Concepts:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Request Throttling:</strong> Limit requests per time window (e.g., 100 requests/minute)</li>
                <li><strong>Distributed Rate Limiting:</strong> Using Redis or centralized state for multi-server setups</li>
                <li><strong>Different Strategies:</strong> Token bucket, sliding window, leaky bucket algorithms</li>
                <li><strong>Attack Prevention:</strong> Protects against brute-force, DDoS, and abuse attempts</li>
            </ul>
            
            <h3>Real-World Applications:</h3>
            <p>E-commerce limits checkout attempts, chat apps prevent spam, payment systems have strict limits on transaction attempts. APIs like GitHub enforce rate limits to ensure fair usage.</p>
        `,
        icon: '🚦'
    },
    databases: {
        title: '🗄️ Databases',
        content: `
            <h2>Databases: The Foundation of Data Management</h2>
            <p>Choosing the right database architecture is critical for system performance, consistency, and scalability.</p>
            
            <h3>Database Types:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>SQL (Relational):</strong> PostgreSQL, MySQL - ACID compliance, structured data</li>
                <li><strong>NoSQL (Document):</strong> MongoDB, CouchDB - Flexible schemas, horizontal scaling</li>
                <li><strong>Key-Value:</strong> Redis, DynamoDB - High-speed lookups</li>
                <li><strong>Graph:</strong> Neo4j, Amazon Neptune - Relationship-heavy data</li>
            </ul>
            
            <h3>Scaling Techniques:</h3>
            <p>Sharding, replication, partitioning, and indexing strategies enable databases to handle massive scale while maintaining performance.</p>
        `,
        icon: '🗄️'
    },
    'data-sharding': {
        title: '🔀 Data Sharding',
        content: `
            <h2>Database Sharding: Scaling Data Horizontally</h2>
            <p>Database sharding is the process of splitting a large database into smaller pieces (shards) and storing them on multiple servers to handle massive scale.</p>
            
            <h3>What is Sharding?</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Definition:</strong> Partitioning data across multiple database servers</li>
                <li><strong>Each shard:</strong> Holds a subset of the data (different rows, same schema)</li>
                <li><strong>Shard key:</strong> Determines which data goes to which shard (e.g., user_id, region_id)</li>
                <li><strong>Goal:</strong> Distribute load and scale horizontally without limits</li>
            </ul>
            
            <h3>When to Use Sharding:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li>Very large datasets (millions/billions of records)</li>
                <li>High write traffic that single database can't handle</li>
                <li>Multiple users and need geographic distribution</li>
                <li><strong>NOT</strong> early-stage apps — use only when necessary</li>
            </ul>
            
            <h3>Types of Sharding:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Horizontal Sharding (Common):</strong> Split by rows — each shard has different rows, same columns</li>
                <li><strong>Vertical Sharding:</strong> Split by columns — each shard has different columns (good for heavy fields)</li>
            </ul>
        `,
        icon: '🔀'
    },
    'cap-theorem': {
        title: '⚖️ CAP Theorem',
        content: `
            <h2>CAP Theorem: The Fundamental Trade-off in Distributed Systems</h2>
            <p>CAP Theorem states that in a distributed system, you can guarantee only two out of three properties: Consistency, Availability, and Partition Tolerance.</p>
            
            <h3>The Three Properties:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>C — Consistency:</strong> All users see the same data at the same time</li>
                <li><strong>A — Availability:</strong> System always responds to requests (success or failure)</li>
                <li><strong>P — Partition Tolerance:</strong> System continues working even if network failures occur</li>
            </ul>
            
            <h3>System Choices:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>CP (Consistency + Partition):</strong> Give correct data or error. Example: Banking systems</li>
                <li><strong>AP (Availability + Partition):</strong> Always respond, may have temporary inconsistency. Example: WhatsApp, Social media</li>
                <li><strong>CA:</strong> Not practical in distributed systems — assumes no network failure</li>
            </ul>
            
            <h3>Key Insight:</h3>
            <p style="color: var(--color-text-secondary); margin-left: 2rem;">Partition Tolerance is mandatory in real distributed systems, so choose between CP and AP based on your business needs.</p>
        `,
        icon: '⚖️'
    },
    'acid-vs-base': {
        title: '🔄 ACID vs BASE',
        content: `
            <h2>ACID vs BASE: Two Philosophies of Data Handling</h2>
            <p>ACID and BASE represent two different approaches to handling data in databases: correctness-first (ACID) vs availability-first (BASE).</p>
            
            <h3>What is a Transaction?</h3>
            <p style="color: var(--color-text-secondary); margin-left: 2rem;">A transaction is a group of database operations treated as one unit — either all succeed (COMMIT) or all fail (ROLLBACK).</p>
            
            <h3>ACID Properties (Traditional Databases):</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>A — Atomicity:</strong> All or nothing — entire transaction succeeds or fails</li>
                <li><strong>C — Consistency:</strong> Data always moves from one valid state to another</li>
                <li><strong>I — Isolation:</strong> Concurrent transactions don't affect each other</li>
                <li><strong>D — Durability:</strong> Once committed, data is permanently saved</li>
            </ul>
            
            <h3>BASE Properties (Distributed Systems):</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Basically Available:</strong> System always responds</li>
                <li><strong>Soft State:</strong> Data may change temporarily</li>
                <li><strong>Eventual Consistency:</strong> Data becomes consistent later</li>
            </ul>
            
            <h3>Key Trade-off:</h3>
            <p style="color: var(--color-text-secondary); margin-left: 2rem;"><strong>ACID:</strong> Correctness first (Banking, Payments) | <strong>BASE:</strong> Availability & Scale first (Social Media, Messaging)</p>
        `,
        icon: '🔄'
    },
    microservices: {
        title: '🔧 Microservices',
        content: `
            <h2>Microservices: Modular Architecture for Scale</h2>
            <p>Microservices decompose monolithic applications into small, independent services that can be developed, deployed, and scaled independently.</p>
            
            <h3>Key Benefits:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Independent Deployment:</strong> Update services without affecting others</li>
                <li><strong>Technology Diversity:</strong> Use best tools for each service</li>
                <li><strong>Fault Isolation:</strong> Failures don't cascade across system</li>
                <li><strong>Team Autonomy:</strong> Small teams own specific services</li>
            </ul>
            
            <h3>Challenges:</h3>
            <p>Service orchestration, distributed transactions, network latency, and monitoring complexity require robust infrastructure and DevOps practices.</p>
        `,
        icon: '🔧'
    },
    'api-design': {
        title: '🔌 API Design',
        content: `
            <h2>API Design: Building Developer-Friendly Interfaces</h2>
            <p>Well-designed APIs are the contract between services, enabling seamless integration and developer productivity.</p>
            
            <h3>Design Principles:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>RESTful Design:</strong> Resource-oriented, HTTP methods, stateless</li>
                <li><strong>GraphQL:</strong> Query exactly what you need, single endpoint</li>
                <li><strong>Versioning:</strong> Maintain backward compatibility</li>
                <li><strong>Rate Limiting:</strong> Protect against abuse</li>
            </ul>
            
            <h3>Best Practices:</h3>
            <p>Clear documentation, consistent naming conventions, proper error handling, authentication/authorization, and comprehensive testing ensure API success.</p>
        `,
        icon: '🔌'
    },
    'message-queues': {
        title: '📬 Message Queues',
        content: `
            <h2>Message Queues: Asynchronous Communication</h2>
            <p>Message queues enable asynchronous communication between services, improving system resilience and scalability.</p>
            
            <h3>Popular Solutions:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>RabbitMQ:</strong> Reliable message broker with flexible routing</li>
                <li><strong>Apache Kafka:</strong> High-throughput distributed streaming</li>
                <li><strong>AWS SQS:</strong> Fully managed message queuing service</li>
                <li><strong>Redis Pub/Sub:</strong> Lightweight publish-subscribe messaging</li>
            </ul>
        `,
        icon: '📬'
    },
    cdn: {
        title: '🌐 CDN & Edge Computing',
        content: `
            <h2>CDN & Edge Computing: Global Performance</h2>
            <p>Content Delivery Networks distribute content across geographically dispersed servers, reducing latency for global users.</p>
            
            <h3>Key Benefits:</h3>
            <ul style="color: var(--color-text-secondary); line-height: 1.8; margin-left: 2rem;">
                <li><strong>Reduced Latency:</strong> Serve content from nearest edge location</li>
                <li><strong>Bandwidth Optimization:</strong> Offload traffic from origin servers</li>
                <li><strong>DDoS Protection:</strong> Distribute and absorb malicious traffic</li>
                <li><strong>Edge Computing:</strong> Process data closer to users</li>
            </ul>
        `,
        icon: '🌐'
    }
};

// ===================================
// Load Topic Function with Animations
// ===================================
function loadTopic(topicKey) {
    const contentArea = document.getElementById('topic-content');
    const topic = topics[topicKey];

    if (topic) {
        // Fade out current content
        gsap.to(contentArea, {
            duration: 0.3,
            opacity: 0,
            y: -20,
            onComplete: () => {
                // Update content
                contentArea.innerHTML = `
                    <div class="container">
                        ${topic.content}
                    </div>
                `;

                // Fade in new content
                gsap.to(contentArea, {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out'
                });

                // Scroll to content
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: contentArea,
                    ease: 'power3.inOut'
                });
            }
        });

        // Show notification
        showToast(`Loaded: ${topic.title}`, 'success');

        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    }
}

// ===================================
// Random Welcome Messages
// ===================================
const welcomeMessages = [
    'Dive into system design excellence! 🚀',
    'Premium insights await your exploration! ✨',
    'Master scalable systems today! 💡',
    'Build the future of technology! 🔧',
    'Learn from the best practices! 🎯'
];

// ===================================
// Auto-load First Topic on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Load default topic after a short delay
    setTimeout(() => {
        loadTopic('scalability');
    }, 500);

    // Show random welcome message
    setTimeout(() => {
        const randomMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        showToast(randomMsg, 'info');
    }, 2000);
});