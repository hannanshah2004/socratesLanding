import Image from "next/image";

const features = [
  {
    title: "Personalized learning",
    desc: "Socrates adapts to every student’s pace, helping them find strengths, address gaps, and truly understand their learning.",
  },
  {
    title: "Trustworthy knowledge base",
    desc: "Expert-curated explanations ensure accuracy. Socrates makes tough topics simple, with visual aids and step-by-step support.",
  },
  {
    title: "Empowers teachers & parents",
    desc: "Educators get concise summaries, assignment help, and deeper insights for every student—while parents can join in the learning journey.",
  },
];


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full bg-socrates-light-blue/80 border-b">
        <div className="container section-padding flex flex-col md:flex-row md:items-center md:gap-9">
          <div className="flex-1 flex flex-col gap-6 py-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
              For every student, every classroom.<br />
              <span className="text-gradient">Real understanding.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Socrates is your AI-powered educational assistant—providing clear explanations, interactive feedback, and world-class learning support for students and classrooms anywhere.
            </p>
            {/* CTA BUTTONS REMOVED */}
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <Image
              src="/socrates.jpg"
              alt="Socrates AI assistant illustration"
              width={400}
              height={320}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
      {/* Start Organizing Section */}
      <section className="w-full bg-white border-b section-padding">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold text-center mb-2">Master any subject with Socrates</h2>
          <p className="text-muted-foreground text-center mb-6 max-w-lg">Get instant answers, clear explanations, and real-time feedback—no matter what you’re trying to learn or create.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <button className="feature-card p-4 rounded-xl bg-white flex flex-col gap-2 items-start border border-slate-200">
              <span className="font-medium text-lg">Math Help for All Ages</span>
              <span className="text-xs text-muted-foreground">Step-by-step reasoning, from the basics to advanced problems.</span>
            </button>
            <button className="feature-card p-4 rounded-xl bg-white flex flex-col gap-2 items-start border border-slate-200">
              <span className="font-medium text-lg">High School & College Math</span>
              <span className="text-xs text-muted-foreground">Assistance with algebra, calculus, statistics, and beyond.</span>
            </button>
            <button className="feature-card p-4 rounded-xl bg-white flex flex-col gap-2 items-start border border-slate-200">
              <span className="font-medium text-lg">Science & Engineering</span>
              <span className="text-xs text-muted-foreground">Understand concepts, solve problems, and explain experiments in plain language.</span>
            </button>
            <button className="feature-card p-4 rounded-xl bg-white flex flex-col gap-2 items-start border border-slate-200">
              <span className="font-medium text-lg">Reading & Writing</span>
              <span className="text-xs text-muted-foreground">Essay reviews, grammar guidance, and reading comprehension breakdowns.</span>
            </button>
            <button className="feature-card p-4 rounded-xl bg-white flex flex-col gap-2 items-start border border-slate-200">
              <span className="font-medium text-lg">Study & Life Skills</span>
              <span className="text-xs text-muted-foreground">Tips on organization, test strategies, critical thinking, and productivity—for every assignment.</span>
            </button>
            <button className="feature-card p-4 rounded-xl bg-white flex flex-col gap-2 items-start border border-slate-200">
              <span className="font-medium text-lg">Computer Science & Coding</span>
              <span className="text-xs text-muted-foreground">Debug code, learn new languages, and break down technical topics interactively.</span>
            </button>
          </div>
        </div>
      </section>

      {/* Teacher/Classroom Section */}
      <section className="w-full section-padding border-b bg-white flex items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-xs font-medium uppercase">Teachers</div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Differentiate your classroom and engage every student.</h3>
            <p className="mb-4 text-muted-foreground">Socrates gives every educator a real-time learning partner—personalized guidance, instant explanations, and debate prompts built in!</p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/teachers.jpg"
              alt="Socrates class for teachers"
              width={330}
              height={260}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary text-primary-foreground py-8 px-4">
        <div className="text-sm text-primary-foreground/70 text-center">Copyright © {new Date().getFullYear()} Socrates | All Rights Reserved</div>
      </footer>
    </main>
  );
}
