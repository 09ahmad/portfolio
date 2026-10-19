export const Hero3 = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "React.js",
    "Next.js",
    "Zustand",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "WebSocket",
    "Redis",
    "PubSubs",
    "Event-driven Architecture",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Docker",
    "Kubernetes (B)",
    "AWS",
    "Nginx",
    "CI/CD",
    "Git",
    "GitHub",
    "RAG",
    "LLM",
    "Context Engineering",
    "MCP",
    "Vector Database",
    "NLP",
    "Fine-tuning (QLoRA/PEFT)",
    "LangGraph",
    "LangChain",
    "AI Agents",
    "Prompt Engineering",
    "Embeddings",
    "FAISS",
    "Pinecone",
    "Weaviate",
    "Model Evaluation",
    "Observability",
    "Transformers",
    "Hugging Face",
  ];

  return (
    <div className="text-white mt-5 px-4 sm:px-0 text-center sm:text-left">
      <h1 className="text-3xl font-semibold font-serif leading-tight">
        Tech Stack
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-3 mt-2 py-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm text-gray-400 font-medium leading-tight border border-gray-500 p-2 rounded-md max-w-full break-words whitespace-normal"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
