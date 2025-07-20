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
    <div className="w-full bg-white text-blue-600"> {/* यहाँ बदलाव किया गया है */}
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
          <h2 className="text-3xl font-bold tracking-tight">The Neo-Dalit Movement: Lenin Raghuvanshi and the Philosophy of Nav-Dalitism — Reimagining Social Justice in India</h2>
          <p className="text-lg leading-relaxed opacity-90">
            In the spiritual heart of Varanasi resides a visionary whose ideas have steadily challenged the deeply entrenched caste system of India. Dr. Lenin Raghuvanshi—renowned human rights defender, social reformer, and founder of Jan Mitra Nyas—is widely recognized for conceptualizing and championing Nav-Dalitism, a transformative socio-political philosophy rooted in the pursuit of justice, dignity, and equality for all marginalized communities.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-blue-300 pb-2">The Genesis of Nav-Dalitism</h3> {/* यहाँ बॉर्डर कलर बदला है */}
            <p className="opacity-85 leading-relaxed">
              Nav-Dalitism, or New Dalitism, is not merely an extension of the Dalit movement born from the teachings of Dr. B.R. Ambedkar. It is a radical evolution—an ideology that responds to the shifting realities of contemporary India, where systemic inequality is no longer confined to the so-called "lower castes" but spans class, caste, region, and religion. At its core, Nav-Dalitism seeks to dismantle the deeply embedded structures of Brahmanical patriarchy and the ancient caste system that continues to shape Indian society today.
            </p>
            <p className="opacity-85 leading-relaxed">
              Years ago, Lenin Raghuvanshi convened a historic convention that brought together intellectuals, activists, and political thinkers from across India. This was not just an academic exercise—it marked the emergence of a bold ideological movement. Through this forum, Raghuvanshi introduced a compelling argument: that social justice must transcend narrow caste identities and engage in a broader struggle against all forms of socio-economic exclusion and structural violence.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-blue-300 pb-2">Understanding the Core of Nav-Dalitism</h3> {/* यहाँ बॉर्डर कलर बदला है */}
            <p className="opacity-85 leading-relaxed">
              Nav-Dalitism advocates for solidarity among all oppressed people—regardless of caste, class, gender, religion, or region. While traditional Dalit discourse focused primarily on the empowerment of Scheduled Castes and Scheduled Tribes, Raghuvanshi’s vision recognizes the new forms of marginalization in post-liberalization India: landless farmers, urban workers, displaced indigenous communities, and other economically disenfranchised groups across all backgrounds.
            </p>
            <p className="opacity-85 leading-relaxed">
              In this light, Nav-Dalitism is not just a political movement—it is a cultural, moral, and ethical revolution. It challenges long-standing hierarchies and systems of dominance, while promoting a compassionate, inclusive, and egalitarian vision for society. At the heart of Raghuvanshi’s philosophy is the call to dismantle the ancient caste system—not through hatred, but through shared humanity, collective dignity, and social healing.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-blue-300 pb-2">A New Coalition of the Oppressed</h3> {/* यहाँ बॉर्डर कलर बदला है */}
            <p className="opacity-85 leading-relaxed">
              One of the most powerful aspects of the Neo-Dalit Movement is its call to build new solidarities across caste and class lines. It urges the oppressed sections within traditionally privileged communities—such as Brahmins, Thakurs, Banias, and other so-called upper castes—who suffer from poverty, landlessness, unemployment, or lack of opportunity, to unite with Dalits, Adivasis, women, and other historically marginalized groups in a shared struggle for justice.
            </p>
            <p className="opacity-85 leading-relaxed">
              According to Dr. Lenin Raghuvanshi, the old caste identities and the privileges once associated with them have become increasingly hollow in today’s capitalist economy. Caste no longer guarantees economic security, nor does it shield anyone from systemic exploitation. In fact, economic liberalization has introduced new forms of inequality—manifested in widespread unemployment, forced land acquisition, escalating healthcare and education costs, and the devastating impact of climate change. These realities cut across caste lines, making a unified coalition of the oppressed not only possible but necessary.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-blue-300 pb-2">Jan Mitra Nyas and the Ground Movement</h3> {/* यहाँ बॉर्डर कलर बदला है */}
            <p className="opacity-85 leading-relaxed">
              The vision of the Neo-Dalit process is not confined to theoretical discourse or public speeches. It is being actively implemented on the ground through Jan Mitra Nyas, the organization founded by Lenin Raghuvanshi. For decades, the organization has worked in the heartlands of Uttar Pradesh and beyond, mobilizing communities to reclaim their rights, dignity, and voice.
            </p>
            <p className="opacity-85 leading-relaxed">
              From advancing child rights and education to fighting caste-based violence and discrimination, Jan Mitra Nyas embodies the ethical and practical foundation of the Neo-Dalit process. The organization champions participatory democracy and grassroots governance, helping create “peace villages” where caste barriers are deliberately broken and social harmony is fostered through mutual respect and cooperation.
            </p>
            <p className="opacity-85 leading-relaxed">
              This emphasis on community-led development reflects Raghuvanshi’s firm belief in self-liberation—not in top-down charity, nor in symbolic state interventions. His approach empowers communities to become active agents of change, rather than passive recipients of aid.
            </p>
          </div>

          <div className="p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600"> {/* यहाँ बैकग्राउंड और बॉर्डर कलर बदला है */}
            <blockquote className="italic text-blue-800"> {/* यहाँ टेक्स्ट कलर गहरा किया है ताकि वह दिखे */}
              “The Neo-Dalit Movement does not aim to reverse power structures but to abolish them. It is not a movement of revenge but of reconciliation. The vision is to create a society where the ‘last person in the queue’ lives with the same dignity, opportunity, and rights as any other citizen.” — Dr. Lenin Raghuvanshi
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}