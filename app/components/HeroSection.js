"use client";

import { useEffect, useState } from "react";

const images = Array.from({ length: 10 }, (_, i) => `/${i + 1}.jpeg`);

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-zinc-900 text-white">
      {/* Image Slider */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Two Column Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Lenin Raghuvanshi and the Philosophy of Nav-Dalitism: Reimagining Social Justice in India</h2>
          <p className="text-lg leading-relaxed opacity-90">
            In the heart of Varanasi—India's spiritual capital—resides a visionary whose ideas have steadily shaken the very foundations of India's entrenched caste system. Lenin Raghuvanshi, a social reformer and the founder of the non-profit organization Jan Mitra Nyas, is widely credited with conceptualizing and advocating Nav-Dalitism—a transformative socio-political philosophy aimed at achieving justice, dignity, and equality for all marginalized communities in India.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2">The Genesis of Nav-Dalitism</h3>
            <p className="opacity-85 leading-relaxed">
              Nav-Dalitism, or New Dalitism, is not merely a continuation of the Dalit movement that emerged from the teachings of B.R. Ambedkar. It is an evolved ideology that acknowledges the changing realities of modern India—where inequality is no longer confined only to traditional lower castes but is seen across all social and caste divisions. The core of this philosophy rests on dismantling the oppressive structures of Brahmanical patriarchy and caste-based privilege that continue to haunt Indian society even in the 21st century.
            </p>
            <p className="opacity-85 leading-relaxed">
              Years ago, Lenin Raghuvanshi organized a landmark convention where thinkers, intellectuals, activists, and political minds from across the country gathered to discuss this new vision. This wasn't just another academic debate—it was the beginning of a radical ideological movement. Through this platform, Raghuvanshi boldly proposed that social justice movements must go beyond the narrow scope of caste-based identity and embrace the broader struggle against all forms of socio-economic exclusion.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2">Understanding the Core of Nav-Dalitism</h3>
            <p className="opacity-85 leading-relaxed">
              Nav-Dalitism calls for the unity of all oppressed people—irrespective of their caste, gender, religion, or region. While traditional Dalit discourse largely focused on the upliftment of Scheduled Castes and Scheduled Tribes, Raghuvanshi's theory acknowledged that the post-liberalization Indian society has created a new class of marginalized individuals—including landless farmers, urban laborers, and displaced indigenous people—across all communities.
            </p>
            <p className="opacity-85 leading-relaxed">
              In this context, Raghuvanshi's framework of Nav-Dalitism emerged as a necessity. It is not only a political movement but also a cultural and ethical revolution that challenges deeply held notions of hierarchy and privilege. His call to dismantle the age-old Varna system is rooted in compassion, equality, and shared human dignity.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2">A New Coalition of the Oppressed</h3>
            <p className="opacity-85 leading-relaxed">
              One of the most powerful elements of Nav-Dalitism is its call for building new solidarities. It urges the oppressed people among Brahmins, Thakurs, Banias, and other so-called upper castes—those who suffer from poverty, landlessness, or lack of opportunity—to join hands with Dalits, Adivasis, women, and other marginalized groups.
            </p>
            <p className="opacity-85 leading-relaxed">
              According to Raghuvanshi, the traditional caste labels and the privileges they carry have become hollow in today's capitalist economy. Caste no longer guarantees prosperity, nor does it protect people from systemic exploitation. In fact, economic liberalization has created new kinds of inequalities where millions of people across castes are suffering due to unemployment, land acquisition, rising costs of healthcare and education, and climate change.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-zinc-700 pb-2">Jan Mitra Nyas and the Ground Movement</h3>
            <p className="opacity-85 leading-relaxed">
              The ideological blueprint of Nav-Dalitism is not confined to books and speeches. Lenin Raghuvanshi's organization Jan Mitra Nyas has been a living laboratory for his philosophy. For decades, it has worked at the grassroots level in Uttar Pradesh and other parts of India to empower marginalized communities. From promoting child rights and education to challenging caste discrimination in rural villages, the organization's work reflects the ethical and practical dimensions of Nav-Dalitism.
            </p>
            <p className="opacity-85 leading-relaxed">
              Jan Mitra Nyas promotes participatory democracy and grassroots governance. It has helped create peace villages where caste barriers are actively broken and communities are encouraged to live in mutual respect and equality. The emphasis on community-led development reflects Raghuvanshi's belief in self-liberation rather than top-down charity or tokenistic state interventions.
            </p>
          </div>

          <div className="p-4 bg-zinc-800 rounded-lg border-l-4 border-amber-500">
            <blockquote className="italic opacity-90">
              "Nav-Dalitism does not aim to reverse power structures but to abolish them. It does not seek revenge but reconciliation. The vision is to build a society where the 'last person in the queue' lives with equal dignity, opportunity, and rights as any other citizen."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}