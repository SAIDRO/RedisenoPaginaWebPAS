import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Heart, Award } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 22680,
    label: 'Militantes Activos',
    suffix: '+',
  },
  {
    icon: Calendar,
    value: 145,
    label: 'Iniciativas Propuestas',
    suffix: '',
  },
  {
    icon: Heart,
    value: 13999,
    label: 'Ciudadanos Atendidos',
    suffix: '+',
  },
  {
    icon: Award,
    value: 1632,
    label: 'Gestiones Exitosas',
    suffix: '',
  },
];

function Counter({ end, duration = 2000, suffix }: { end: number; duration?: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const endTime = startTime + duration;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const currentCount = Math.floor(progress * end);
            
            setCount(currentCount);

            if (now < endTime) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#e91e8c] via-[#ff1493] to-[#e91e8c] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estamos Trabajando
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Nuestro compromiso en números
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Icon size={40} className="text-white" />
                </div>

                {/* Number */}
                <Counter end={stat.value} suffix={stat.suffix} />

                {/* Label */}
                <p className="text-lg md:text-xl text-white/90 font-semibold mt-3">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white text-xl mb-6">
            ¿Quieres ser parte de estos logros?
          </p>
          <button className="bg-white text-[#e91e8c] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">
            Únete al Partido
          </button>
        </div>
      </div>
    </section>
  );
}
