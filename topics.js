// ===================================
// Topic Data with Enhanced Content
// ===================================
const topics = {
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