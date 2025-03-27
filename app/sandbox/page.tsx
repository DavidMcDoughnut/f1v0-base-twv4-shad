import React from "react";
import Button from "../components/Button";
import { ArrowRightIcon, PlusIcon, CheckIcon } from "../components/Icons";

export default function SandboxPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">Tailwind V4 Sandbox</h1>
        <p className="text-black/70 dark:text-white/70 mb-8">
          A space to experiment with Tailwind CSS v4 components
        </p>
        
        {/* Button Component Examples */}
        <div className="border border-black/10 dark:border-white/10 rounded-xl p-8 w-full h-auto shadow-sm">
          <h2 className="text-xl font-medium mb-6">Button Component</h2>
          
          {/* Button Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>
          
          {/* Button Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          
          {/* Buttons with Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button icon={<PlusIcon />}>With Icon</Button>
              <Button icon={<ArrowRightIcon />} iconPosition="right">
                Icon Right
              </Button>
              <Button variant="outline" icon={<CheckIcon />}>
                Outline with Icon
              </Button>
            </div>
          </div>
          
          {/* Button States */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </div>
          
          {/* Combined Examples */}
          <div>
            <h3 className="text-lg font-medium mb-4">Combined Examples</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRightIcon />} 
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                icon={<PlusIcon />}
              >
                Add Item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 