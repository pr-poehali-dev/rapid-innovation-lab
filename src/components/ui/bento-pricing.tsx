import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type PricingCardProps = {
  titleBadge: string
  priceLabel: string
  priceSuffix?: string
  features: string[]
  cta?: string
  className?: string
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = "/мес",
  features,
  cta = "Подписаться",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3 p-3">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
          {titleBadge}
        </Badge>
        <div className="ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-open-sans-custom text-xs"
          >
            {cta}
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-3 py-1">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
          {priceLabel}
        </span>
        {priceLabel.toLowerCase() !== "бесплатно" && priceLabel !== "0 ₽" && (
          <span className="text-gray-300 text-xs font-open-sans-custom">{priceSuffix}</span>
        )}
      </div>

      <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div
        className={cn(
          "bg-white/5 border-white/10 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            СЕЗОН 1–2 (2006–2007)
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-white/5 text-white border-white/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Легендарный старт
          </Badge>
          <div className="ml-auto">
            <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-open-sans-custom text-xs">
              Смотреть
            </Button>
          </div>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              24
            </span>
            <span className="text-gray-300 text-xs font-open-sans-custom"> эпизода</span>
          </div>
          <ul className="text-gray-300 grid gap-2 text-xs lg:w-[70%] font-open-sans-custom">
            {[
              "Сезон 1: Брайан Мозер — «Убийца с ледяным грузовиком», главный антагонист и брат Декстера",
              "Декстер впервые узнаёт правду о своём прошлом и семье",
              "Сезон 2: тайное место захоронений Декстера обнаружено — охота на «Тёмного защитника»",
              "Появление Лайлы — загадочной женщины, познающей тёмную сторону Декстера",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PricingCard
        titleBadge="СЕЗОН 3–4 (2008–2009)"
        priceLabel="24"
        priceSuffix=" эп."
        features={[
          "Сезон 3: союз с помощником окружного прокурора Мигелем Пуэнте",
          "Сезон 4: Тринити-киллер — самый страшный антагонист сериала",
          "Роль Джона Литгоу в образе Артура Митчелла — Emmy Award",
          "Финал 4 сезона — один из самых шокирующих в истории ТВ",
        ]}
        className="lg:col-span-3"
        cta="Смотреть"
      />

      <PricingCard
        titleBadge="СЕЗОН 5–6 (2010–2011)"
        priceLabel="24"
        priceSuffix=" эп."
        features={[
          "Сезон 5: Декстер мстит за гибель Риты, знакомится с Лумой",
          "Сезон 6: религиозная тематика, апокалиптические убийства",
          "Дебра Морган начинает подозревать брата в двойной жизни",
        ]}
        className="lg:col-span-4"
      />

      <PricingCard
        titleBadge="СЕЗОН 7–8 (2012–2013)"
        priceLabel="24"
        priceSuffix=" эп."
        features={[
          "Сезон 7: Дебра узнаёт правду о Декстере и его кодексе",
          "Сезон 8: финальный — доктор Эвелин Фогель и «Мозговой хирург»",
          "Трагический финал оригинального сериала (2013)",
        ]}
        className="lg:col-span-4"
      />

      <PricingCard
        titleBadge="ДЕКСТЕР: НОВАЯ КРОВЬ (2021)"
        priceLabel="10"
        priceSuffix=" эп."
        features={[
          "Продолжение спустя 10 лет — Декстер живёт под именем Джим Линдси в Айрон-Лейк",
          "Появление сына Декстера — Харрисона, ищущего отца",
          "Финал, поставивший точку в истории Декстера Моргана",
          "Стриминг: Paramount+",
        ]}
        className="lg:col-span-8"
        cta="Смотреть"
      />
    </div>
  )
}