import React from 'react';
import { Container, Title, Text, Timeline, Card } from '@mantine/core';
import { m } from 'framer-motion';
export function RoadmapSection() {
  return <div className="py-20 bg-gray-50" id="roadmap">
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
          <Text className="text-green-600 font-medium mb-2">
            EXECUTION ROADMAP
          </Text>
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Our Path to Impact
          </Title>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            GreenSats has a clear 12-month roadmap to build, test, and scale our
            circular economy platform across Africa.
          </Text>
        </m.div>
        <m.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }}>
          <Card shadow="sm" padding="xl" radius="md" className="mb-10">
            <Timeline active={1} bulletSize={24} lineWidth={2}>
              <Timeline.Item title="Sprint 1: MVP Launch" className="pb-6">
                <Text color="dimmed" size="sm">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Deploy recycling smart contracts</li>
                    <li>Integration with 5 collection points</li>
                    <li>Mobile wallet beta testing</li>
                  </ul>
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Sprint 2: Network Growth" className="pb-6">
                <Text color="dimmed" size="sm">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Smart meter API implementation</li>
                    <li>Mining partner integration</li>
                    <li>P2P marketplace testing</li>
                  </ul>
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Sprint 3: Asset Layer" className="pb-6">
                <Text color="dimmed" size="sm">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>RGB asset issuance system</li>
                    <li>Credit verification API</li>
                    <li>Corporate portal launch</li>
                  </ul>
                </Text>
              </Timeline.Item>
              <Timeline.Item title="Sprint 4: Scale">
                <Text color="dimmed" size="sm">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Multi-region deployment</li>
                    <li>Performance optimization</li>
                    <li>Full API documentation</li>
                  </ul>
                </Text>
              </Timeline.Item>
            </Timeline>
          </Card>
        </m.div>
        <m.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3,
        duration: 0.5
      }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <Title order={3} className="mb-4">
            Why This Works
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                  1
                </div>
                <Text weight={500}>Real Incentives</Text>
              </div>
              <Text color="dimmed" size="sm" className="ml-8">
                People act when paid instantly in hard money
              </Text>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                  2
                </div>
                <Text weight={500}>Bitcoin-native</Text>
              </div>
              <Text color="dimmed" size="sm" className="ml-8">
                No fiat bottlenecks or banking exclusion
              </Text>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                  3
                </div>
                <Text weight={500}>Triple Impact</Text>
              </div>
              <Text color="dimmed" size="sm" className="ml-8">
                Environment, economy, and empowerment
              </Text>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                  4
                </div>
                <Text weight={500}>Sustainable Model</Text>
              </div>
              <Text color="dimmed" size="sm" className="ml-8">
                Fees fund growth, not donations
              </Text>
            </div>
          </div>
        </m.div>
      </Container>
    </div>;
}