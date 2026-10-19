import { ImGithub } from "react-icons/im";
import { VscLiveShare } from "react-icons/vsc";

export const Hero2 = () => {
  const projects = [
    {
      title: "TaskFlow Pro",
      github: "https://github.com/09ahmad/kanban-board-DAG",
      href: "https://fe.opendraw.live/",
      decs:
        "A Kanban project management web app for engineering teams with DAG-based dependency management, real-time WebSocket updates, AI-powered dependency suggestions, and critical path analysis. Built with Next.js, Express, PostgreSQL, Redis, and Prisma.",
    },
    {
      title: "same.dev",
      github: "https://github.com/09ahmad/same.dev",
      href: "https://sm.samedev.space/",
      decs:
        "An AI-powered website builder that allows users to instantly generate, customize, and deploy fully functional frontend layouts and web apps directly from natural language prompts.",
    },
    {
      title: "Code Review Agent",
      github: "https://github.com/09ahmad/code-review-agent",
      decs:
        "An autonomous code review agent using a QLoRA fine-tuned LLM (Qwen2.5-Coder) orchestrated via LangGraph. Combines static analysis (ruff), sandboxed test execution, RAG over past bug patterns, and confidence-based self-scoring with human escalation. Demonstrates model fine-tuning and agentic system design.",
    },
    {
      title: "opendraw",
      github: "https://github.com/09ahmad/opendraw",
      href: "https://opendraw.live/",
      decs:
        "A real-time collaborative drawing canvas built for high performance, allowing multiple users to brainstorm, sketch, and edit drawings simultaneously with smooth synchronization.",
    },
    {
      title: "Analytics Dashboard",
      github: "https://github.com/09ahmad/analytics-",
      href: "https://analytics-beryl-mu.vercel.app/",
      decs:
        "A lightweight and real-time web analytics tracking library and dashboard designed to capture, process, and visualize visitor metrics and session events.",
    },
    {
      title: "Drop File Share",
      github: "https://github.com/09ahmad/drop-FE",
      href: "https://drop-fe-lovat.vercel.app/",
      decs:
        "A modern, user-friendly file-sharing web application enabling drag-and-drop uploads, temporary storage, and fast, secure, shareable download links.",
    },
    {
      title: "Order Book Exchange",
      github: "https://github.com/09ahmad/exchange",
      decs:
        "A high-throughput financial exchange engine and order-matching platform designed for fast execution, real-time bid/ask updates, and order book persistence.",
    },
    {
      title: "Chat History Service",
      github: "https://github.com/09ahmad/chat-history",
      decs:
        "A robust backend service and API endpoint system designed to handle high-concurrency real-time message storage, indexing, and fast, paginated chat history retrieval.",
    },
  ];

  return (
    <div className="text-white mt-5 px-4 sm:px-0">
      <h1 className="text-3xl font-semibold font-serif leading-tight text-center sm:text-left">
        Proof Of Work
      </h1>
      <p className="text-sm mt-2 text-gray-300 tracking-[0.7px] text-center sm:text-left">
        My work is available at{" "}
        <span className="text-white font-medium">X & LinkedIn</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 sm:gap-4 py-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-6 bg-transparent border border-gray-600 px-4 py-6 shadow-lg shadow-white/15 rounded-lg space-y-3"
          >
            <h2 className="text-2xl font-semibold text-gray-300">
              {project.title}
            </h2>

            <p className="text-sm text-gray-500 font-medium leading-tight line-clamp-4">
              {project.decs}
            </p>
            <div className="flex items-center gap-6 mt-4">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-100"
                >
                  <VscLiveShare size={20} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-100"
              >
                <ImGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-xl font-medium mt-8 text-gray-500 text-center sm:text-left">
          Github contributions
        </h1>
        <div className="w-full p-4 overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/09ahmad"
            alt="Ahmad Github chart"
            className="min-w-[600px] max-w-none h-full"
          />
        </div>
      </div>
    </div>
  );
};
