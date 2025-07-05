import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold">Dr. Lenin Raghuvanshi</h2>
          <p className="text-sm mt-1">
            Renowned Physician, Director of PVCHR (Vigilance Committee for Human Rights of the People), Varanasi
          </p>
        </div>
        <div className="text-sm">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:leninraghuvanshi@gmail.com" className="hover:underline">
              leninraghuvanshi@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:9935599333" className="hover:underline">
              9935599333
            </a>
          </p>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Dr. Lenin Raghuvanshi and PVCHR. All rights reserved.
        <br />
        यह वेबसाइट{" "}
        <a
          href="https://www.hamaramorcha.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gray-300"
        >
          www.hamaramorcha.com
        </a>{" "}
        ने विकसित की है।
      </div>
    </footer>
  );
}
