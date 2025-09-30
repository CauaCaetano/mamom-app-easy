import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Calendar } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Mamom</h1>
            <p className="text-lg text-muted-foreground">
              para empresas
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <button
              onClick={() => navigate("/auth?mode=provider")}
              className="w-full bg-card hover:bg-card/90 border-2 border-border rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-lg group"
            >
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg mb-1">
                  Sou um prestador de serviços
                </h3>
                <p className="text-sm text-muted-foreground">
                  Acesse o Mamom Biz
                </p>
              </div>
            </button>

            <button
              onClick={() => navigate("/auth?mode=client")}
              className="w-full bg-card hover:bg-card/90 border-2 border-border rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-lg group"
            >
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg mb-1">
                  Quero fazer um agendamento
                </h3>
                <p className="text-sm text-muted-foreground">
                  Leve-me para o Mamom para Clientes
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
