import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Корейская косметика",
    description: "Уходовая и декоративная косметика на основе натуральных корейских ингредиентов. Передовые формулы для сияющей кожи.",
    icon: "sparkles",
    badge: "Бестселлер",
  },
  {
    title: "БАДы и витамины",
    description: "Сбалансированные биодобавки для поддержки иммунитета, энергии и здоровья всей семьи. Научные формулы из Кореи.",
    icon: "leaf",
    badge: "Здоровье",
  },
  {
    title: "Уход за волосами",
    description: "Профессиональные шампуни, маски и сыворотки для восстановления и питания волос. Корейские инновации для красоты.",
    icon: "wind",
    badge: "Уход",
  },
  {
    title: "Уход за телом",
    description: "Лосьоны, скрабы и кремы для нежной и бархатистой кожи. Натуральные компоненты с доказанным эффектом.",
    icon: "heart",
    badge: "Премиум",
  },
  {
    title: "Товары для дома",
    description: "Безопасные и эффективные средства для уборки дома. Бережные к природе и вашей семье формулы.",
    icon: "home",
    badge: "Эко",
  },
  {
    title: "Гарантия качества",
    description: "Все продукты Atomy проходят строгий контроль качества. Более 20 лет на рынке — бренд, которому доверяют миллионы.",
    icon: "shield",
    badge: "Сертификат",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Линейка продуктов Atomy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Премиум качество из Кореи — косметика, здоровье и уход для всей семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "sparkles" && "✨"}
                    {feature.icon === "leaf" && "🌿"}
                    {feature.icon === "wind" && "💨"}
                    {feature.icon === "heart" && "💗"}
                    {feature.icon === "home" && "🏠"}
                    {feature.icon === "shield" && "🛡️"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
