import React from 'react';
import { Container, Title, Text, Card, ThemeIcon } from '@mantine/core';
import { Recycle, SunMedium, TreePine } from 'lucide-react';
export function ProgramsSection() {
  const programs = [{
    title: 'Recycle-to-Earn',
    icon: <Recycle size={24} />,
    color: 'blue',
    description: 'Users drop plastic/e-waste at smart kiosks and receive instant Lightning payments to their wallets. Recyclers buy materials with Bitcoin, cutting out middlemen.',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }, {
    title: 'Solar-to-Earn',
    icon: <SunMedium size={24} />,
    color: 'yellow',
    description: 'Homes with solar sell excess energy via Lightning. Bitcoin miners and neighbors become buyers. Smart meters enable automatic micropayments.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  }, {
    title: 'Plant-to-Earn',
    icon: <TreePine size={24} />,
    color: 'green',
    description: 'Farmers plant and maintain trees. Geotagged proof triggers Bitcoin payouts. Corporations sponsor trees as carbon offsets.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }];
  return <div className="py-20 bg-white" id="programs">
      <Container size="lg">
        <div className="text-center mb-16">
          <Text className="text-green-600 font-medium mb-2">OUR PROGRAMS</Text>
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            A Closed-Loop Economy for Environmental Action
          </Title>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            GreenSats creates a circular economy where environmental actions
            generate real value, powered by Bitcoin's Lightning Network for
            instant micropayments.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => <Card key={index} shadow="sm" padding="xl" radius="md" className="flex flex-col">
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${program.color}-100`}>
                  <ThemeIcon variant="light" size="xl" radius="xl" color={program.color}>
                    {program.icon}
                  </ThemeIcon>
                </div>
              </div>
              <Title order={3} className="mb-3">
                {program.title}
              </Title>
              <Text className="text-gray-600 mb-4 flex-grow">
                {program.description}
              </Text>
              <div className="h-48 rounded-lg overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
              </div>
            </Card>)}
        </div>
      </Container>
    </div>;
}