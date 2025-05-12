import React from 'react';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import { m } from 'framer-motion';
export function HeroSection() {
  return <div className="bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <m.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }}>
            <m.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="inline-block bg-green-100 border border-green-200 rounded-full px-4 py-1 mb-4">
              <Text className="text-green-700 font-medium">
                Bitcoin-Powered Impact
              </Text>
            </m.div>
            <m.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }}>
              <Title className="text-4xl md:text-5xl font-bold mb-6">
                Africa's First Self-Sustaining{' '}
                <span className="text-green-600">Circular Economy</span>
              </Title>
            </m.div>
            <m.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.5
          }}>
              <Text className="text-gray-700 text-lg mb-8 leading-relaxed">
                Every green action - recycling, solar energy sharing, and tree
                planting - earns instant Bitcoin rewards through the Lightning
                Network. This isn't another NGO project. This is a revolutionary
                economic system that pays people to save their own environment.
              </Text>
            </m.div>
            <m.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.5
          }}>
              <Group>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 transform transition-transform hover:scale-105" rightSection={<ArrowRight size={16} />}>
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 transition-all hover:border-green-700">
                  Join as Partner
                </Button>
              </Group>
            </m.div>
          </m.div>
          <m.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="relative h-[400px] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform">
            <img src="https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="African solar installation" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <Text className="text-white font-medium text-lg">
                Empowering communities through sustainable technology
              </Text>
            </div>
          </m.div>
        </div>
      </Container>
    </div>;
}