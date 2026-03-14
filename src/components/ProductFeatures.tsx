import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Feature } from "@/config/products";

interface ProductFeaturesProps {
  features: Feature[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          製品の特長
        </h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
