import { Briefcase, GraduationCap, Info, Mail, User, Wrench } from "lucide-react"
import ProfileSection from "@/components/profile-section"
import ContactSection from "@/components/contact-section"
import SkillsSection from "@/components/skills-section"
import WorkExperienceSection from "@/components/work-experience-section"
import EducationSection from "@/components/education-section"
import GeneralInfoSection from "@/components/general-info-section"
import PersonalInfoSection from "@/components/personal-info-section"
import Navigation from "@/components/navigation"

export default function Home() {
  const sections = [
    { id: "profile", label: "Профиль", icon: <User className="h-4 w-4" /> },
    { id: "experience", label: "Опыт работы", icon: <Briefcase className="h-4 w-4" /> },
    { id: "skills", label: "Навыки", icon: <Wrench className="h-4 w-4" /> },
    { id: "education", label: "Образование", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "general", label: "Общая информация", icon: <Info className="h-4 w-4" /> },
    { id: "personal", label: "Личная информация", icon: <User className="h-4 w-4" /> },
    { id: "contact", label: "Контакты", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-900/20">
      <Navigation sections={sections} />

      <div className="container mx-auto px-4 py-8 pt-20">
        <section id="profile" className="py-10 md:py-16">
          <ProfileSection />
        </section>

        <section id="experience" className="py-10 md:py-16">
          <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Опыт работы
          </h2>
          <WorkExperienceSection />
        </section>

        <section id="skills" className="py-10 md:py-16">
          <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Навыки
          </h2>
          <SkillsSection />
        </section>

        <section id="education" className="py-10 md:py-16">
          <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Образование
          </h2>
          <EducationSection />
        </section>

        <section id="general" className="py-10 md:py-16">
          <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Общая информация
          </h2>
          <GeneralInfoSection />
        </section>

        <section id="personal" className="py-10 md:py-16">
          <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Личная информация
          </h2>
          <PersonalInfoSection />
        </section>

        <section id="contact" className="py-10 md:py-16">
          <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Контактная информация
          </h2>
          <ContactSection />
        </section>
      </div>
    </main>
  )
}
