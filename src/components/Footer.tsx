import React from 'react';
import { Container, Text, Group, Anchor } from '@mantine/core';
import { Bitcoin, Twitter, Linkedin, Github } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-gray-300 py-12">
      <Container size="lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Bitcoin className="text-yellow-500" size={28} />
            <span className="font-bold text-xl text-white">GreenSats</span>
          </div>
          <div className="flex space-x-6">
            <Anchor href="#" className="text-gray-300 hover:text-green-400">
              <Twitter size={20} />
            </Anchor>
            <Anchor href="#" className="text-gray-300 hover:text-green-400">
              <Linkedin size={20} />
            </Anchor>
            <Anchor href="#" className="text-gray-300 hover:text-green-400">
              <Github size={20} />
            </Anchor>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Text className="font-medium text-white mb-4">About</Text>
              <Group gap={8} className="flex flex-col items-start">
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Our Mission
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Team
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Careers
                </Anchor>
              </Group>
            </div>
            <div>
              <Text className="font-medium text-white mb-4">Programs</Text>
              <Group gap={8} className="flex flex-col items-start">
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Recycle-to-Earn
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Solar-to-Earn
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Plant-to-Earn
                </Anchor>
              </Group>
            </div>
            <div>
              <Text className="font-medium text-white mb-4">Resources</Text>
              <Group gap={8} className="flex flex-col items-start">
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Documentation
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  API
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Blog
                </Anchor>
              </Group>
            </div>
            <div>
              <Text className="font-medium text-white mb-4">Legal</Text>
              <Group gap={8} className="flex flex-col items-start">
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Privacy Policy
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Terms of Service
                </Anchor>
                <Anchor href="#" className="text-gray-400 hover:text-green-400">
                  Cookie Policy
                </Anchor>
              </Group>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <Text size="sm" className="mb-3 md:mb-0">
              © {new Date().getFullYear()} GreenSats. All rights reserved.
            </Text>
            <Text size="sm">Built with ⚡ on Bitcoin</Text>
          </div>
        </div>
      </Container>
    </footer>;
}