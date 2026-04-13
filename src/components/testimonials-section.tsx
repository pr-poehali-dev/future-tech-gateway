import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Постоянный клиент, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Пользуюсь косметикой Atomy уже 2 года. Кожа преобразилась — увлажнение, сияние, ровный тон. Никакой другой уход мне больше не нужен!",
  },
  {
    name: "Марина Иванова",
    role: "Постоянный клиент, Санкт-Петербург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Начала принимать БАДы Atomy — энергия, иммунитет, самочувствие заметно улучшились. Качество на уровне аптечных брендов, а цена приятно удивляет.",
  },
  {
    name: "Елена Смирнова",
    role: "Постоянный клиент, Екатеринбург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Вся семья перешла на товары для дома от Atomy. Средства безопасные, эффективные и приятно пахнут. Дети и аллергики — всё отлично переносят.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории людей, которые уже оценили качество продуктов Atomy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
