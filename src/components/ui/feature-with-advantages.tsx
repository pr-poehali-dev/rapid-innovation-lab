import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Персонажи</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Декстер Морган и Брайан Мозер
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Два брата, разлучённых в детстве и воссоединившихся в тёмном мире Майами. Каждый выбрал свой путь — но оба стали убийцами.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Декстер Морган</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Судебно-медицинский эксперт полиции Майами. Специалист по анализу крови. Ведёт двойную жизнь серийного убийцы, устраняющего преступников.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Брайан Мозер</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Старший брат Декстера. Известен как «Убийца с ледяным грузовиком». В отличие от брата, не имеет никакого морального кодекса.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Сериал «Декстер»</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Американский криминальный триллер Showtime (2006–2013). 8 сезонов, 96 эпизодов. Основан на романах Джеффа Линдси о Тёмном Защитнике.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Кодекс Гарри</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">Свод правил, которому следует Декстер: убивать только доказанных убийц, не попадаться, защищать невиновных.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Трагедия детства</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Оба брата пережили гибель матери — Лауры Мозер — в возрасте трёх лет. Это событие навсегда определило их психику и судьбы.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Роль в сюжете</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Брайан появляется в 1-м сезоне как главный антагонист, пытаясь воссоединить Декстера с его «истинной» природой, лишённой каких-либо ограничений.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }