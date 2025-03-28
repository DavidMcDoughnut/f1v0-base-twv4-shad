import React from "react";
import { Button } from "@/components/ui/button";

export default function SandboxPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Component Sandbox</h1>
        <p className="text-muted-foreground mb-10">
          A space to experiment with Tailwind CSS v4 and shadcn/ui components
        </p>
        
        {/* Button Component Examples */}
        <div className="border border-yellow-200 rounded-xl p-8 mb-10 w-full h-auto shadow-sm">
          <h2 className="text-xl font-medium mb-6">Button Component</h2>
          
          {/* Button Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
          
          {/* Button Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </div>
          </div>
          
          {/* Button States */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button className="w-full">Full Width Button</Button>
            </div>
          </div>
          
          {/* Combined Examples */}
          <div>
            <h3 className="text-lg font-medium mb-4">Combined Examples</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default" 
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="sm"
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