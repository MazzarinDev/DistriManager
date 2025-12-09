import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export function LoginDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha simples para demonstração
    if (password === "admin123") {
      setIsOpen(false);
      setLocation("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-mono text-xs">
          <Lock className="w-4 h-4 mr-2" />
          ÁREA RESTRITA
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background border-primary/20 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary font-mono">AUTENTICAÇÃO DE SISTEMA</DialogTitle>
          <DialogDescription>
            Insira suas credenciais de administrador para acessar o painel de controle.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="password">Senha de Acesso</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="bg-background/50 border-primary/20 focus:border-primary"
              placeholder="••••••••"
            />
            {error && <span className="text-destructive text-xs">Acesso negado: Credenciais inválidas.</span>}
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            CONFIRMAR IDENTIDADE
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
