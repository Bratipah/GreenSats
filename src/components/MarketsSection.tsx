import React from 'react';
import { Container, Title, Text, Grid, Card, Badge } from '@mantine/core';
export function MarketsSection() {
  return <div className="py-20 bg-white" id="markets">
      <Container size="lg">
        <div className="text-center mb-16">
          <Text className="text-green-600 font-medium mb-2">
            TARGET MARKETS
          </Text>
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Who We Serve
          </Title>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            GreenSats connects primary users who perform environmental actions
            with secondary buyers who benefit from these actions, creating a
            sustainable ecosystem.
          </Text>
        </div>
        <Grid gutter="xl">
          <Grid.Col span={{
          base: 12,
          md: 6
        }}>
            <Card shadow="sm" p="xl" radius="md" className="h-full">
              <Title order={3} className="mb-4 flex items-center">
                <Badge color="green" size="lg" className="mr-3">
                  Primary Users
                </Badge>
              </Title>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-green-500"></div>
                  <Text>
                    <strong>Waste pickers</strong> in urban slums who collect
                    recyclables
                  </Text>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-green-500"></div>
                  <Text>
                    <strong>Off-grid solar households</strong> with excess
                    energy capacity
                  </Text>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-green-500"></div>
                  <Text>
                    <strong>Subsistence farmers</strong> who can plant and
                    maintain trees
                  </Text>
                </li>
              </ul>
              <div className="mt-8">
                <Title order={4} className="mb-3">
                  Launch Countries
                </Title>
                <div className="flex flex-wrap gap-2">
                  <Badge color="green" variant="outline">
                    Kenya
                  </Badge>
                  <Badge color="green" variant="outline">
                    Rwanda
                  </Badge>
                  <Badge color="green" variant="outline">
                    Nigeria
                  </Badge>
                  <Badge color="gray" variant="outline">
                    Ghana (Phase 2)
                  </Badge>
                  <Badge color="gray" variant="outline">
                    Uganda (Phase 2)
                  </Badge>
                  <Badge color="gray" variant="outline">
                    South Africa (Phase 2)
                  </Badge>
                </div>
              </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={{
          base: 12,
          md: 6
        }}>
            <Card shadow="sm" p="xl" radius="md" className="h-full">
              <Title order={3} className="mb-4 flex items-center">
                <Badge color="blue" size="lg" className="mr-3">
                  Secondary Buyers
                </Badge>
              </Title>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                  <Text>
                    <strong>Bitcoin miners</strong> seeking clean energy sources
                    for operations
                  </Text>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                  <Text>
                    <strong>Corporations</strong> purchasing verified carbon
                    offsets
                  </Text>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                  <Text>
                    <strong>Recycling companies</strong> seeking clean supply
                    chains without middlemen
                  </Text>
                </li>
              </ul>
              <div className="mt-8">
                <Title order={4} className="mb-3">
                  Revenue Model
                </Title>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    <Text>5% transaction fee on recycling payments</Text>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    <Text>1% energy marketplace fee</Text>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    <Text>
                      SaaS for carbon credit verification ($500/month)
                    </Text>
                  </li>
                </ul>
              </div>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>;
}