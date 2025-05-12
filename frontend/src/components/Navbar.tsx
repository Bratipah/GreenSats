import React from 'react';
import { Container, Button } from '@mantine/core';
import { Bitcoin } from 'lucide-react';
export function Navbar() {
  return <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <Container size="xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bitcoin className="text-yellow-500" size={28} />
            <span className="font-bold text-xl">GreenSats</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#programs" className="text-gray-700 hover:text-green-600 transition-colors">
              Programs
            </a>
            <a href="#technology" className="text-gray-700 hover:text-green-600 transition-colors">
              Technology
            </a>
            <a href="#markets" className="text-gray-700 hover:text-green-600 transition-colors">
              Markets
            </a>
            <a href="#roadmap" className="text-gray-700 hover:text-green-600 transition-colors">
              Roadmap
            </a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700" component="a" href="#contact">
            Join the Movement
          </Button>
        </div>
      </Container>
    </nav>;
}