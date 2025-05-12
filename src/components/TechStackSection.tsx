import React from 'react';
import { Container, Title, Text, Paper, ThemeIcon } from '@mantine/core';
import { Zap, Layers, Server, MessageSquare, AtSign } from 'lucide-react';
export function TechStackSection() {
  const technologies = [{
    name: 'Lightning Network',
    description: 'For instant, low-cost micropayments',
    icon: <Zap size={24} />,
    color: 'yellow'
  }, {
    name: 'RGB Protocol',
    description: 'For tokenized carbon credits and impact tracking',
    icon: <Layers size={24} />,
    color: 'indigo'
  }, {
    name: 'Fedimint',
    description: 'Community custody for unbanked users',
    icon: <Server size={24} />,
    color: 'blue'
  }, {
    name: 'USSD/SMS Gateways',
    description: 'For feature phone accessibility',
    icon: <MessageSquare size={24} />,
    color: 'teal'
  }, {
    name: 'Lightning Addresses',
    description: 'Simple payment identifiers',
    icon: <AtSign size={24} />,
    color: 'orange'
  }];
  return <div className="py-20 bg-gray-50" id="technology">
      <Container size="lg">
        <div className="text-center mb-16">
          <Text className="text-green-600 font-medium mb-2">TECHNOLOGY</Text>
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Bitcoin Technology Stack
          </Title>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge Bitcoin technologies to create a seamless,
            low-cost, and accessible platform for environmental impact.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => <Paper key={index} shadow="xs" radius="md" p="md" className="flex items-start gap-4 hover:shadow-md transition-shadow">
              <ThemeIcon variant="light" size="xl" radius="xl" color={tech.color}>
                {tech.icon}
              </ThemeIcon>
              <div>
                <Text className="font-medium text-lg mb-1">{tech.name}</Text>
                <Text className="text-gray-600">{tech.description}</Text>
              </div>
            </Paper>)}
        </div>
      </Container>
    </div>;
}