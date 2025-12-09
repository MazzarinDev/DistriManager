import { BlueprintLayout, TechnicalCard } from "@/components/BlueprintLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BarChart3, CheckCircle2, Clock, FileJson, Upload } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "wouter";

interface Task {
  title: string;
  status: string;
  priority: string;
  due_date: string;
  assignee: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          setTasks(json);
        }
      } catch (error) {
        console.error("Erro ao ler arquivo JSON", error);
      } finally {
        setLoading(false);
      }
    };
    reader.readAsText(file);
  };

  // Processar dados para gráficos
  const statusData = [
    { name: 'Backlog', value: tasks.filter(t => t.status === 'Backlog').length, color: '#64748b' },
    { name: 'Em Progresso', value: tasks.filter(t => t.status === 'Em Progresso').length, color: '#3b82f6' },
    { name: 'Em Revisão', value: tasks.filter(t => t.status === 'Em Revisão').length, color: '#eab308' },
    { name: 'Concluído', value: tasks.filter(t => t.status === 'Concluído').length, color: '#22c55e' },
  ].filter(d => d.value > 0);

  const priorityData = [
    { name: 'Alta', value: tasks.filter(t => t.priority === 'Alta').length, color: '#ef4444' },
    { name: 'Média', value: tasks.filter(t => t.priority === 'Média').length, color: '#eab308' },
    { name: 'Baixa', value: tasks.filter(t => t.priority === 'Baixa').length, color: '#22c55e' },
  ].filter(d => d.value > 0);

  return (
    <BlueprintLayout>
      <header className="container mx-auto py-6 flex justify-between items-center border-b border-primary/10">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <span className="font-bold text-xl tracking-tight">PAINEL DE CONTROLE<span className="text-primary">.ADMIN</span></span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          CONEXÃO SEGURA
        </div>
      </header>

      <div className="container mx-auto py-12">
        {tasks.length === 0 ? (
          <div className="max-w-md mx-auto text-center space-y-6 py-20">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
              <Upload className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Carregar Dados do Projeto</h2>
              <p className="text-muted-foreground">
                Faça upload do arquivo <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">data.json</code> gerado pelo software desktop para visualizar as métricas.
              </p>
            </div>
            <div className="flex justify-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded flex items-center gap-2 font-bold transition-colors">
                  <FileJson className="w-4 h-4" />
                  SELECIONAR ARQUIVO JSON
                </div>
                <Input 
                  id="file-upload" 
                  type="file" 
                  accept=".json" 
                  className="hidden" 
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TechnicalCard className="p-4">
                <div className="text-xs text-muted-foreground uppercase mb-1">Total de Tarefas</div>
                <div className="text-3xl font-bold font-mono text-primary">{tasks.length}</div>
              </TechnicalCard>
              <TechnicalCard className="p-4">
                <div className="text-xs text-muted-foreground uppercase mb-1">Concluídas</div>
                <div className="text-3xl font-bold font-mono text-green-500">
                  {tasks.filter(t => t.status === 'Concluído').length}
                </div>
              </TechnicalCard>
              <TechnicalCard className="p-4">
                <div className="text-xs text-muted-foreground uppercase mb-1">Em Progresso</div>
                <div className="text-3xl font-bold font-mono text-blue-500">
                  {tasks.filter(t => t.status === 'Em Progresso').length}
                </div>
              </TechnicalCard>
              <TechnicalCard className="p-4">
                <div className="text-xs text-muted-foreground uppercase mb-1">Alta Prioridade</div>
                <div className="text-3xl font-bold font-mono text-red-500">
                  {tasks.filter(t => t.priority === 'Alta').length}
                </div>
              </TechnicalCard>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-8">
              <TechnicalCard title="DISTRIBUIÇÃO POR STATUS">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0.1)" />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e1e1e', borderColor: '#333', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </TechnicalCard>

              <TechnicalCard title="TAREFAS POR PRIORIDADE">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={priorityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#1e1e1e', borderColor: '#333', color: '#fff' }}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {priorityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TechnicalCard>
            </div>

            {/* Task List */}
            <TechnicalCard title="REGISTRO DE ATIVIDADES">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-primary/5 border-b border-primary/10">
                    <tr>
                      <th className="px-4 py-3">Tarefa</th>
                      <th className="px-4 py-3">Responsável</th>
                      <th className="px-4 py-3">Entrega</th>
                      <th className="px-4 py-3">Prioridade</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/10">
                    {tasks.map((task, i) => (
                      <tr key={i} className="hover:bg-primary/5 transition-colors">
                        <td className="px-4 py-3 font-medium">{task.title}</td>
                        <td className="px-4 py-3 text-muted-foreground">{task.assignee}</td>
                        <td className="px-4 py-3 font-mono text-xs">{task.due_date}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase
                            ${task.priority === 'Alta' ? 'bg-red-500/20 text-red-500' : 
                              task.priority === 'Média' ? 'bg-yellow-500/20 text-yellow-500' : 
                              'bg-green-500/20 text-green-500'}`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full 
                              ${task.status === 'Concluído' ? 'bg-green-500' : 
                                task.status === 'Em Progresso' ? 'bg-blue-500' : 
                                task.status === 'Em Revisão' ? 'bg-yellow-500' : 'bg-slate-500'}`}>
                            </div>
                            {task.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TechnicalCard>
            
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                onClick={() => setTasks([])}
                className="border-destructive/50 text-destructive hover:bg-destructive/10"
              >
                LIMPAR DADOS
              </Button>
            </div>
          </div>
        )}
      </div>
    </BlueprintLayout>
  );
}
