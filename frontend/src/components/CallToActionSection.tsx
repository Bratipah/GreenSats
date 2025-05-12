import React from 'react';
import { Container, Title, Text, Button, Card, Group, TextInput, Textarea } from '@mantine/core';
import { Send } from 'lucide-react';
import { m } from 'framer-motion';
export function CallToActionSection() {
  return <div className="py-20 bg-green-600" id="contact">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <m.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <Text className="text-green-100 font-medium mb-2">
              JOIN THE MOVEMENT
            </Text>
            <Title className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Build the Circular Economy Africa Deserves
            </Title>
            {/* <Text className="text-green-50 mb-8 text-lg">
              This isn't just another crypto project. This is a radical
              reimagining of how environmental action gets rewarded in emerging
              markets. The technology exists. The need is obvious. The time is
              now.
            </Text> */}
            <m.div whileHover={{
            scale: 1.05
          }} transition={{
            type: 'spring',
            stiffness: 300
          }}>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 mt-20">
                Download Pitch Deck
              </Button>
            </m.div>
          </m.div>
          <m.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <Card shadow="md" radius="md" p="xl" className="bg-white">
              <Title order={3} className="mb-4">
                Contact Us
              </Title>
              <Text className="text-gray-600 mb-6">
                Interested in partnering, investing, or learning more? Get in
                touch with our team.
              </Text>
              <form>
                <TextInput label="Name" placeholder="Your name" required className="mb-4" />
                <TextInput label="Email" placeholder="your@email.com" required className="mb-4" />
                <Textarea label="Message" placeholder="How would you like to get involved?" minRows={4} required className="mb-6" />
                <Group justify="flex-end">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700" leftSection={<Send size={16} />}>
                    Send Message
                  </Button>
                </Group>
              </form>
            </Card>
          </m.div>
        </div>
      </Container>
    </div>;
}