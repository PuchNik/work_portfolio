import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:justify-between gap-8">
      <div className="flex flex-col items-center md:items-start md:flex-1 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Пучков Никита Валерьевич
        </h1>
        <p className="text-xl text-muted-foreground mb-6">Frontend-developer</p>
        <p className="max-w-md text-muted-foreground mb-8">
          Стремлюсь к профессиональному развитию и изучению новых знаний. Открыт для обсуждения интересных идей и готов
          работать в динамичной команде, чтобы совместно достигать высоких результатов и продвигаться по карьерной
          лестнице.
        </p>
      </div>

      <div className="md:flex-shrink-0 order-1 md:order-2 mb-6 md:mb-0">
        <div className="relative h-50 w-60 sm:h-50 sm:w-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
          <Image
            src="/profile.jpg?height=256&width=256"
            alt="Иванов Иван Иванович"
            width={350}
            height={350}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
