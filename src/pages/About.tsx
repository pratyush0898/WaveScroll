
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-purple-800 text-white py-20 relative overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/80">
              We are a team of passionate designers and developers creating modern web experiences.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Mission Section */}
      <section ref={containerRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row gap-12 items-center"
            style={{ y, opacity }}
          >
            <div className="md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-100 rounded-lg z-0" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Our Team" 
                className="rounded-lg shadow-2xl relative z-10" 
              />
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe in creating web experiences that are not just visually stunning, but also highly functional and accessible. Our mission is to bridge the gap between aesthetics and usability, delivering websites and applications that delight users and achieve business goals.
                </p>
                <p className="text-lg text-gray-600">
                  With a focus on modern technologies and best practices, we strive to push the boundaries of what's possible on the web while ensuring optimal performance and reliability.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work and shape our approach to every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
                icon: "🚀"
              },
              {
                title: "Quality",
                description: "We never compromise on quality, ensuring every project meets the highest standards.",
                icon: "✨"
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, fostering partnerships built on trust and communication.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The talented individuals behind our success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Sarah Williams",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              },
              {
                name: "Mike Chen",
                role: "Senior Developer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              },
              {
                name: "Jessica Parker",
                role: "UX Specialist",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
