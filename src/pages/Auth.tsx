import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "provider";
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/password");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start px-6 pb-12">
        <div className="w-full max-w-md space-y-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="rounded-full">
                Fazer login
              </TabsTrigger>
              <TabsTrigger value="signup" className="rounded-full">
                Inscrever-se
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-6">
              <h2 className="text-2xl font-bold text-center">
                Bem-vindo novamente
              </h2>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Endereço de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-2xl"
                    required
                  />
                </div>

                <div className="space-y-2 relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 rounded-2xl pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-foreground hover:bg-foreground/90 text-background font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar com e-mail
                </Button>

                <button
                  type="button"
                  className="w-full text-center text-sm font-medium underline"
                >
                  Esqueceu a senha
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-background px-4 text-muted-foreground">
                    OU FAÇA LOGIN COM
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-14 rounded-2xl"
                  type="button"
                >
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-2xl"
                  type="button"
                >
                  <svg
                    className="w-5 h-5 text-[#1877F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm">
                <button className="flex items-center gap-2 text-muted-foreground">
                  <img
                    src="https://flagcdn.com/w20/br.png"
                    alt="Brasil"
                    className="w-5 h-5"
                  />
                  Idioma
                </button>
                <button className="flex items-center gap-2 text-muted-foreground">
                  <img
                    src="https://flagcdn.com/w20/br.png"
                    alt="Brasil"
                    className="w-5 h-5"
                  />
                  País
                </button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Ao me inscrever, concordo com os{" "}
                <a href="#" className="underline">
                  Termos e Condições
                </a>{" "}
                e com a{" "}
                <a href="#" className="underline">
                  Política de Privacidade
                </a>
              </p>
            </TabsContent>

            <TabsContent value="signup" className="space-y-6">
              <h2 className="text-2xl font-bold text-center">
                Criar conta
              </h2>

              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Endereço de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-2xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-foreground hover:bg-foreground/90 text-background font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Continuar com e-mail
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-background px-4 text-muted-foreground">
                    OU FAÇA LOGIN COM
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-14 rounded-2xl"
                  type="button"
                >
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-2xl"
                  type="button"
                >
                  <svg
                    className="w-5 h-5 text-[#1877F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm">
                <button className="flex items-center gap-2 text-muted-foreground">
                  <img
                    src="https://flagcdn.com/w20/br.png"
                    alt="Brasil"
                    className="w-5 h-5"
                  />
                  Idioma
                </button>
                <button className="flex items-center gap-2 text-muted-foreground">
                  <img
                    src="https://flagcdn.com/w20/br.png"
                    alt="Brasil"
                    className="w-5 h-5"
                  />
                  País
                </button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Ao me inscrever, concordo com os{" "}
                <a href="#" className="underline">
                  Termos e Condições
                </a>{" "}
                e com a{" "}
                <a href="#" className="underline">
                  Política de Privacidade
                </a>
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
