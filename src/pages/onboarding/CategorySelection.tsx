import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const categories = [
  { id: "barber", name: "Barbeiros", image: "user-uploads://image-4.png" },
  { id: "manicure", name: "Manicure", image: "user-uploads://image-4.png" },
  { id: "hair", name: "Cabeleireiro", image: "user-uploads://image-4.png" },
  { id: "brows", name: "Sobrancelhas e cílios", image: "user-uploads://image-4.png" },
  { id: "skincare", name: "Cuidados com a pele", image: "user-uploads://image-4.png" },
  { id: "wellness", name: "Saúde e bem-estar", image: "user-uploads://image-4.png" },
];

const CategorySelection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedCategory) {
      navigate("/onboarding/business-info");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Progress value={28} className="h-1 rounded-none" />
      
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 px-6 pb-6 flex flex-col">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold">
            Qual é o ramo de atividade da sua empresa?
          </h1>
          <p className="text-muted-foreground">
            Selecione a categoria que você acha que melhor representa a atividade da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                selectedCategory === category.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💇</span>
              </div>
              <span className="text-sm font-medium text-center">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        <button className="text-sm text-muted-foreground underline mb-4">
          Outras categorias
        </button>

        <Button
          onClick={handleContinue}
          disabled={!selectedCategory}
          className="w-full h-14 rounded-2xl bg-foreground hover:bg-foreground/90 text-background font-semibold disabled:opacity-50"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default CategorySelection;
