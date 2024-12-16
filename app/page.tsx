import { Bot, Terminal, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Terminal className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">DevAI Assistant</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Your intelligent companion for backend development. Get help with architecture,
            debugging, and best practices.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          <Card className="border-2">
            <div className="p-4 border-b bg-muted/50 flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Chat Interface</h2>
            </div>
            <ChatInterface />
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Terminal className="h-5 w-5" />}
              title="Code Analysis"
              description="Get instant feedback on your code structure and potential improvements"
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="Smart Suggestions"
              description="Receive intelligent recommendations for your backend architecture"
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Best Practices"
              description="Learn industry-standard practices for robust backend development"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-primary">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}