import React from 'react';
import { Container, Title, Text, Paper, ThemeIcon } from '@mantine/core';
import { Zap, Layers, Server, MessageSquare, AtSign } from 'lucide-react';
import { m } from 'framer-motion';
export function ToolsSection() {
  const tools = [{
    name: 'Lightning API',
    description: 'WebSocket-based payment processing',
    icon: <Zap size={24} />,
    color: 'yellow'
  }, {
    name: 'RGB SDK',
    description: 'Client-side asset issuance toolkit',
    icon: <Layers size={24} />,
    color: 'indigo'
  }, {
    name: 'Custody Engine',
    description: 'Multi-signature vault system',
    icon: <Server size={24} />,
    color: 'blue'
  }, {
    name: 'API Gateway',
    description: 'RESTful interface for mobile integration',
    icon: <MessageSquare size={24} />,
    color: 'teal'
  }, {
    name: 'Identity Service',
    description: 'Decentralized auth protocol',
    icon: <AtSign size={24} />,
    color: 'orange'
  }];
  return <div className="py-20 bg-gray-50" id="technology">
      <Container size="lg">
        <m.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <Text className="text-green-600 font-medium mb-2">TOOLS</Text>
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Built With Modern Tools
          </Title>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            Our stack leverages proven open-source tools and protocols to ensure
            security, reliability, and seamless integration.
          </Text>
        </m.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => <m.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }}>
              <Paper shadow="xs" radius="md" p="md" className="flex items-start gap-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <ThemeIcon variant="light" size="xl" radius="xl" color={tool.color} className="transition-transform duration-300 group-hover:scale-110">
                  {tool.icon}
                </ThemeIcon>
                <div>
                  <Text className="font-medium text-lg mb-1">{tool.name}</Text>
                  <Text className="text-gray-600">{tool.description}</Text>
                </div>
              </Paper>
            </m.div>)}
        </div>
      </Container>
    </div>;
}