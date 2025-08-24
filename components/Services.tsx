import React from 'react';
import SectionTitle from '../components/SectionTitle';
import type { Service } from '../types';
import { CodeSlashIcon, HardwareChipIcon, CodeIcon } from '../components/Icons';

// Re-create icons mapping as they cannot be serialized in the content object.
const iconMap: { [key: string]: React.ReactNode } = {
  frontend: React.createElement(CodeSlashIcon),
  ai: React.createElement(HardwareChipIcon),
  cloud: React.createElement(CodeIcon)
};

interface ServiceListItem extends Omit<Service, 'icon'> {
  iconKey: string;
}

interface ServiceContent {
  title: string;
  subtitle: string;
  list: ServiceListItem[];
}

interface ServicesProps {
  content: ServiceContent;
}

const ServiceCard: React.FC<{ service: ServiceListItem }> = ({ service }) => (
  <div className="bg-gray-800 rounded-lg p-8 text-center cursor-pointer group hover:bg-cyan-500 transition-all duration-300 ease-in-out">
    <div className="transform group-hover:scale-105 transition-transform duration-300">
      <div className="text-cyan-400 group-hover:text-white transition-colors duration-300 text-6xl mx-auto mb-4">
        {iconMap[service.iconKey]}
      </div>
      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-400 group-hover:text-white transition-colors duration-300">{service.description}</p>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.title} subtitle={content.subtitle} dark />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.list.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;