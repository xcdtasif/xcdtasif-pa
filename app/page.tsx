"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";
import { DownloadIcon } from "lucide-animated";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

/* LinkedIn SVG fallback — @icons-pack/react-simple-icons v13 dropped LinkedIn */
function SiLinkedin({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center pt-16">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Avatar */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-border">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
                <h1 className="font-heading text-[length:var(--fs-h1)] text-foreground leading-tight text-balance">
                  {profile.name}
                </h1>

                <p className="font-sans text-[length:var(--fs-h2)] text-foreground/80 font-medium mt-2">
                  {profile.designation}
                </p>

                <p className="font-sans text-[length:var(--fs-body)] text-muted leading-relaxed max-w-prose mt-4">
                  {profile.tagline}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  {profile.resumeUrl ? (
                    <a
                      href={profile.resumeUrl}
                      download
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-medium uppercase tracking-wider hover:bg-[#8a3522] transition-colors"
                    >
                      <DownloadIcon size={16} />
                      Resume
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium uppercase tracking-wider bg-foreground/5 text-muted cursor-not-allowed">
                      <DownloadIcon size={16} />
                      Resume
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <a
                      href={profile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-foreground/50 hover:text-foreground transition-colors"
                    >
                      <SiGithub size={22} />
                    </a>
                    <a
                      href={profile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-foreground/50 hover:text-foreground transition-colors"
                    >
                      <SiLinkedin size={22} />
                    </a>
                    <a
                      href={profile.social.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="text-foreground/50 hover:text-foreground transition-colors"
                    >
                      <SiX size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder sections for scroll-based nav demo */}
        {["about", "skills", "education", "experience", "projects", "contact"].map((id) => (
          <section key={id} id={id} className="py-32 border-t border-border">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-[length:var(--fs-h2)] capitalize">{id}</h2>
              <p className="font-sans text-muted mt-4">Section coming soon.</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}