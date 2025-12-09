import { BlueprintLayout, TechnicalCard } from "@/components/BlueprintLayout";
import { LoginDialog } from "@/components/LoginDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Calendar, CheckCircle2, Code2, Github, Layers, Terminal } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <BlueprintLayout>
      {/* Header / Nav */}
      <header className="container mx-auto py-6 flex justify-between items-center border-b border-primary/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 border border-primary flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">DISTRIMANAGER<span className="text-primary">.SYS</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-mono text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">01. FUNCIONALIDADES</a>
          <a href="#tech" className="hover:text-primary transition-colors">02. TECNOLOGIA</a>
          <a href="#report" className="hover:text-primary transition-colors">03. RELATÓRIO</a>
        </nav>
        <div className="flex gap-4">
          <LoginDialog />
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-mono text-xs hidden sm:flex">
            <Github className="w-4 h-4 mr-2" />
            V1.0.0 STABLE
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            SISTEMA OPERACIONAL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            PLANEJAMENTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">INDUSTRIAL</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Gerenciamento de construção de software com precisão de engenharia. 
            Interface Kanban com datas fixas para distribuidoras que não podem atrasar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none border-l-4 border-white/20">
              INICIAR SISTEMA <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-none">
              DOCUMENTAÇÃO TÉCNICA
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/10">
            <div>
              <div className="text-3xl font-bold font-mono">70h</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Tempo de Construção</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono">100%</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Python Nativo</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono">V1.0</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Versão Atual</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
          <div className="relative border border-primary/30 bg-background/50 backdrop-blur-sm p-2">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
            <img 
              src="/images/hero-blueprint.png" 
              alt="Interface Blueprint" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-primary/10"
            />
            
            {/* Floating UI Elements */}
            <div className="absolute -right-6 top-10 bg-background border border-primary/50 p-4 shadow-xl max-w-[200px] hidden md:block">
              <div className="flex items-center gap-2 mb-2 border-b border-primary/20 pb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold">STATUS: ONLINE</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-primary/20"><div className="h-1 w-[70%] bg-primary"></div></div>
                <div className="text-[10px] font-mono text-muted-foreground">COMPILAÇÃO: OUTUBRO 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto py-20 border-t border-primary/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-primary font-mono text-xl">01.</span>
              MÓDULOS DO SISTEMA
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Arquitetura projetada para controle total do fluxo de desenvolvimento.
              Cada componente serve a um propósito específico na linha de produção.
            </p>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto font-mono text-xs">
            EXPLORAR TODOS OS MÓDULOS &rarr;
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TechnicalCard title="KANBAN RÍGIDO" number="MOD-A">
            <div className="mb-4 h-32 overflow-hidden border border-primary/10 relative group-hover:border-primary/30 transition-colors">
              <img src="/images/feature-kanban.png" alt="Kanban" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Visualização de fluxo com colunas estritas. Diferente do Trello comum,
              aqui as datas são imutáveis sem autorização de nível superior.
            </p>
            <ul className="space-y-2 text-xs font-mono text-primary/80">
              <li className="flex items-center gap-2">[_] DRAG & DROP PRECISO</li>
              <li className="flex items-center gap-2">[_] DATAS TRAVADAS</li>
            </ul>
          </TechnicalCard>

          <TechnicalCard title="ANÁLISE DE DADOS" number="MOD-B">
            <div className="mb-4 h-32 overflow-hidden border border-primary/10 relative group-hover:border-primary/30 transition-colors">
              <img src="/images/analytics-tech.png" alt="Analytics" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Relatórios gerados em tempo real. Visualize o progresso de 70 horas
              de desenvolvimento com gráficos vetoriais de alta precisão.
            </p>
            <ul className="space-y-2 text-xs font-mono text-primary/80">
              <li className="flex items-center gap-2">[_] MÉTRICAS DE VELOCIDADE</li>
              <li className="flex items-center gap-2">[_] EXPORTAÇÃO JSON</li>
            </ul>
          </TechnicalCard>

          <TechnicalCard title="PERSISTÊNCIA LOCAL" number="MOD-C">
            <div className="mb-4 h-32 bg-primary/5 border border-primary/10 flex items-center justify-center relative group-hover:border-primary/30 transition-colors">
              <Terminal className="w-12 h-12 text-primary/50" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Banco de dados JSON leve e portável. Seus dados residem na sua máquina,
              garantindo velocidade máxima e zero latência de rede.
            </p>
            <ul className="space-y-2 text-xs font-mono text-primary/80">
              <li className="flex items-center gap-2">[_] ARQUIVO ÚNICO</li>
              <li className="flex items-center gap-2">[_] BACKUP AUTOMÁTICO</li>
            </ul>
          </TechnicalCard>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="bg-primary/5 py-20 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-primary font-mono text-xl">02.</span>
                ESPECIFICAÇÕES TÉCNICAS
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-background border border-primary/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Core: Python 3.11</h3>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvido na versão mais estável e performática. 
                      Utilização de Type Hints para segurança de código.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-background border border-primary/20 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">GUI: PyQt5 Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      Interface nativa renderizada com aceleração de hardware.
                      Estilo 'Fusion' para consistência cross-platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-background border border-primary/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Cronograma: Outubro 2025</h3>
                    <p className="text-sm text-muted-foreground">
                      Ciclo de desenvolvimento de 4 semanas.
                      Entregas pontuais e documentadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 transform rotate-3"></div>
              <div className="bg-background border border-primary/20 p-8 relative">
                <h3 className="font-mono text-sm text-primary mb-4 border-b border-primary/10 pb-2">
                  // SYSTEM_LOG.TXT
                </h3>
                <pre className="font-mono text-xs text-muted-foreground leading-relaxed">
                  <span className="text-green-500">SUCCESS:</span> Initializing DistriManager Core...<br/>
                  <span className="text-blue-500">INFO:</span> Loading modules [Kanban, Reports, Auth]<br/>
                  <span className="text-blue-500">INFO:</span> Database connection established (JSON)<br/>
                  <span className="text-blue-500">INFO:</span> GUI Rendering Engine: PyQt5<br/>
                  <span className="text-yellow-500">WARN:</span> Developer Mode Active (MazzarinDev)<br/>
                  <span className="text-blue-500">INFO:</span> Total Build Time: 70h 00m 00s<br/>
                  <span className="text-green-500">READY:</span> System awaiting user input_<br/>
                  <span className="animate-pulse">|</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report / Benefits Section */}
      <section id="report" className="container mx-auto py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary font-mono text-xl mr-3">03.</span>
            RELATÓRIO INTERATIVO
          </h2>
          <p className="text-muted-foreground">
            Acesse os dados do projeto de forma transparente. Nossa plataforma web oferece
            três benefícios fundamentais para a gestão da distribuidora.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-primary/10 p-8 hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Exploração Intuitiva</h3>
            <p className="text-sm text-muted-foreground">
              Navegue pelos dados do projeto através de uma interface visual que transforma
              números brutos em insights acionáveis instantaneamente.
            </p>
          </div>

          <div className="bg-card border border-primary/10 p-8 hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Análise de Tendências</h3>
            <p className="text-sm text-muted-foreground">
              Compreenda melhor as tendências de produtividade e gargalos do desenvolvimento
              com gráficos históricos e projeções futuras.
            </p>
          </div>

          <div className="bg-card border border-primary/10 p-8 hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compartilhamento Fácil</h3>
            <p className="text-sm text-muted-foreground">
              Salve relatórios ou compartilhe o status do projeto com stakeholders
              através de links diretos ou exportações formatadas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-primary/5 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/20 border border-primary flex items-center justify-center">
              <Layers className="w-3 h-3 text-primary" />
            </div>
            <span className="font-bold tracking-tight">DISTRIMANAGER<span className="text-primary">.SYS</span></span>
          </div>
          
          <div className="text-xs font-mono text-muted-foreground">
            DESENVOLVIDO POR MAZZARINDEV // OUTUBRO 2025
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Terminal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </BlueprintLayout>
  );
}
