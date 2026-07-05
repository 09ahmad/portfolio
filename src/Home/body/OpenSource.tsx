import { ImGithub } from "react-icons/im";
import { GoGitPullRequest } from "react-icons/go";

export const OpenSource = () => {
  return (
    <div className="text-white mt-8 px-4 sm:px-0">
      <h1 className="text-3xl font-semibold font-serif leading-tight text-center sm:text-left">
        Open Source Contribution
      </h1>
      
      <div className="mt-6 bg-transparent border border-gray-600 px-4 py-6 shadow-lg shadow-white/15 rounded-lg space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GoGitPullRequest size={24} className="text-pink-600" />
            <h2 className="text-xl font-semibold text-gray-200">
              Activepieces
            </h2>
          </div>
          <a
            href="https://github.com/activepieces/activepieces/pull/13948"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="View Pull Request on GitHub"
          >
            <ImGithub size={22} />
          </a>
        </div>
        
        <p className="text-sm text-gray-400 font-medium leading-relaxed">
          Contributed an open-source Pull Request in Activepieces, resolving a backend issue related to trigger health statistics persistence using TypeScript.
        </p>
        
        <div className="pt-2">
          <a
            href="https://github.com/activepieces/activepieces/pull/13948"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs inline-flex items-center gap-1.5 text-pink-500 hover:text-pink-400 hover:underline font-medium"
          >
            <span>View PR #13948</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
