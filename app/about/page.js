// app/about/page.js
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Dr. Lenin Raghuvanshi</h1>
      
      <div className="space-y-6 text-justify">
        <p>
          Dr. Lenin Raghuvanshi is a globally respected human rights defender, social reformer, and the founder of the People's Vigilance Committee on Human Rights (PVCHR), based in Varanasi, India. Through decades of committed grassroots activism, Dr. Raghuvanshi has earned national and international recognition for his relentless efforts to uplift marginalized communities, especially Dalits, Adivasis, women, and children.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Achievements and Recognition</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>2001 Ashoka Fellow for innovative people-centered approach to social justice</li>
            <li>2006 State Director of EU-funded National Project on Prevention of Torture</li>
            <li>Co-developed India's Testimonial Therapy Model with Dr. Inger Agger</li>
            <li>2007 Gwangju Human Rights Award (jointly with Irom Sharmila)</li>
            <li>2008 ACHA Star Peace Award by Association for Communal Harmony in Asia (USA)</li>
            <li>2010 International Human Rights Award from Weimar, Germany</li>
            <li>2015 Invited to Global Tolerance Forum in Drammen, Norway</li>
            <li>2016 M.A. Thomas National Human Rights Award</li>
            <li>2016 Wockhardt Foundation's Child Rights Activist of the Year</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contributions</h2>
          <p>
            Dr. Raghuvanshi's vision of a just, inclusive, and plural society continues to shape discourse and action at the grassroots and global levels. His pioneering concepts such as Jan Mitra Gaon (People-Friendly Villages), the Neo-Dalit Movement, and People's SAARC have created new pathways for dignity, peace, and participatory democracy in South Asia.
          </p>
        </div>

        <div className="pt-4">
          <a 
            href="https://en.wikipedia.org/wiki/Lenin_Raghuvanshi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Learn more on Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
}