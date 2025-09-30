import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeOff, Check, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PasswordSetup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasMinLength = password.length >= 8;

  const isValid = hasLetter && hasNumber && hasMinLength;

  const handleContinue = () => {
    if (isValid) {
      navigate("/onboarding/category");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Progress value={14} className="h-1 rounded-none" />
      
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
          <h1 className="text-3xl font-bold">Configuração de senha</h1>
          <p className="text-muted-foreground">
            Insira senha do seu perfil
          </p>
        </div>

        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <label className="text-sm font-medium">Senha</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 rounded-2xl pr-24"
                placeholder="••••••••••"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {password && (
                  <button
                    type="button"
                    onClick={() => setPassword("")}
                    className="p-1"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Eye className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">A senha deve conter:</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    hasLetter
                      ? "bg-success text-success-foreground"
                      : "bg-muted"
                  }`}
                >
                  {hasLetter && <Check className="w-3 h-3" />}
                </div>
                <span
                  className={`text-sm ${
                    hasLetter ? "text-success font-medium" : "text-foreground"
                  }`}
                >
                  ao menos uma letra
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    hasNumber
                      ? "bg-success text-success-foreground"
                      : "bg-muted"
                  }`}
                >
                  {hasNumber && <Check className="w-3 h-3" />}
                </div>
                <span
                  className={`text-sm ${
                    hasNumber ? "text-success font-medium" : "text-foreground"
                  }`}
                >
                  ao menos um dígito
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    hasMinLength
                      ? "bg-success text-success-foreground"
                      : "bg-muted"
                  }`}
                >
                  {hasMinLength && <Check className="w-3 h-3" />}
                </div>
                <span
                  className={`text-sm ${
                    hasMinLength ? "text-success font-medium" : "text-foreground"
                  }`}
                >
                  8 caracteres ou mais
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          disabled={!isValid}
          className="w-full h-14 rounded-2xl bg-foreground hover:bg-foreground/90 text-background font-semibold"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default PasswordSetup;
