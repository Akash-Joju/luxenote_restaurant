import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide text-blue-900">Burpies</h2>
          <p className="text-sm text-blue-900 mt-1">
            Food Cafe in Varandarapilly
          </p>
        </div>

        {/* Social */}
        <div className="flex space-x-6 items-center">
          <Link
            href="https://instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5 text-pink-500 group-hover:text-pink-400 transition" />
            <span className="text-sm text-blue-900 group-hover:text-white">@Burpies</span>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800 mt-8 pt-6 text-center">
        <p className="text-xs text-gray-500 tracking-wide">
          © 2025 Burpies. Crafted with love and precision.
        </p>
      </div>
    </footer>
  );
}
