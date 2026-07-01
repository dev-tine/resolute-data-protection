import { useEffect, useMemo, useRef, useState } from "react";
import { MessageSquareText, X } from "lucide-react";
import Button from "./Button.jsx";

const questions = [
  {
    id: "need",
    prompt: "What best describes your need?",
    options: [
      "Research or policy analysis",
      "Expert support for a dispute or matter",
      "Security/privacy advisory support",
      "Training for a team or organization",
      "Not sure yet",
    ],
  },
  {
    id: "topic",
    prompt: "What is the main topic?",
    options: [
      "Cybersecurity",
      "Privacy / data protection",
      "Technology policy",
      "Reasonable security",
      "Governance / compliance",
      "Other",
    ],
  },
  {
    id: "urgency",
    prompt: "How urgent is the need?",
    options: ["Exploratory", "Soon", "Time-sensitive"],
  },
];

const recommendations = {
  research: {
    service: "Cutting Edge Research",
    explanation:
      "This path fits research, policy analysis, and practical synthesis of cybersecurity, privacy, or technology policy issues.",
  },
  expert: {
    service: "Expert Witness Services",
    explanation:
      "This path fits matters involving disputes, expert analysis, reasonable security, privacy, or technology-related issues.",
  },
  advisory: {
    service: "Advisory Services",
    explanation:
      "This path fits organizations evaluating risk, governance, privacy, cybersecurity, or practical security program questions.",
  },
  training: {
    service: "Training Services",
    explanation:
      "This path fits teams or organizations that need practical education on privacy, cybersecurity, incident response, or reasonable security.",
  },
  unsure: {
    service: "Advisory Services",
    explanation:
      "When the best fit is not yet clear, advisory support or an initial contact inquiry can help frame the issue and identify the right next step.",
  },
};

function getRecommendation(answers) {
  const need = answers.need;

  if (need === "Research or policy analysis") return recommendations.research;
  if (need === "Expert support for a dispute or matter") return recommendations.expert;
  if (need === "Training for a team or organization") return recommendations.training;
  if (need === "Not sure yet") return recommendations.unsure;

  return recommendations.advisory;
}

export default function ServiceAssistant({ open, onClose, onNavigate }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);

  const complete = step >= questions.length;
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setAnswers({});
    }
  }, [open]);

  if (!open) return null;

  const currentQuestion = questions[step];

  const selectOption = (value) => {
    setAnswers((current) => ({ ...current, [currentQuestion.id]: value }));
    setStep((current) => current + 1);
  };

  const contactHref = `/contact?service=${encodeURIComponent(recommendation.service)}`;

  return (
    <div
      className="fixed inset-0 z-[80] bg-navy-950/55 px-4 py-6 backdrop-blur-sm sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-assistant-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="ml-auto flex h-full w-full max-w-2xl animate-[assistantIn_220ms_ease-out] flex-col overflow-hidden rounded-md border border-white/10 bg-white shadow-subtle"
      >
        <div className="border-b border-navy-900/10 bg-navy-950 p-5 text-white sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/10 text-accent">
                <MessageSquareText aria-hidden="true" size={21} strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Service Guidance Assistant
                </p>
                <h2 id="service-assistant-title" className="mt-2 text-2xl font-semibold">
                  Find the most relevant service path
                </h2>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close service guidance assistant"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={onClose}
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-steel-50 p-5 sm:p-6">
          <div className="space-y-5">
            <ChatMessage>
              Welcome. I can help point you toward the most relevant Resolute Data Protection service. This is only a prototype and does not provide legal advice.
            </ChatMessage>

            <p className="rounded-md border border-navy-900/10 bg-white px-4 py-3 text-xs leading-6 text-steel-700">
              This assistant is for general service guidance only and does not provide legal advice or create a client relationship.
            </p>

            {questions.slice(0, step).map((question) => (
              <div key={question.id} className="space-y-2">
                <ChatMessage>{question.prompt}</ChatMessage>
                <div className="ml-auto max-w-lg rounded-md bg-navy-900 px-4 py-3 text-sm font-semibold text-white">
                  {answers[question.id]}
                </div>
              </div>
            ))}

            {!complete && (
              <div className="rounded-md border border-navy-900/10 bg-white p-4 sm:p-5">
                <ChatMessage>{currentQuestion.prompt}</ChatMessage>
                <div className="mt-4 grid gap-2">
                  {currentQuestion.options.map((option) => (
                    <ChatOptionButton key={option} onClick={() => selectOption(option)}>
                      {option}
                    </ChatOptionButton>
                  ))}
                </div>
              </div>
            )}

            {complete && (
              <ServiceRecommendation
                recommendation={recommendation}
                contactHref={contactHref}
                onNavigate={onNavigate}
                onClose={onClose}
                onRestart={() => {
                  setStep(0);
                  setAnswers({});
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ children }) {
  return (
    <div className="max-w-xl rounded-md border border-navy-900/10 bg-white px-4 py-3 text-sm leading-6 text-steel-700">
      {children}
    </div>
  );
}

function ChatOptionButton({ children, onClick }) {
  return (
    <button
      type="button"
      className="rounded-md border border-navy-900/10 bg-steel-50 px-4 py-3 text-left text-sm font-semibold text-navy-950 transition hover:border-navy-700/35 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ServiceRecommendation({ recommendation, contactHref, onNavigate, onClose, onRestart }) {
  const navigate = (href) => {
    onClose();
    onNavigate(href);
  };

  return (
    <div className="rounded-md border border-navy-900/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">
        Suggested service
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-navy-950">{recommendation.service}</h3>
      <p className="mt-4 leading-7 text-steel-700">{recommendation.explanation}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href={contactHref} onNavigate={navigate}>
          Continue to Contact
        </Button>
        <Button href="/services" onNavigate={navigate} variant="outline">
          View Services
        </Button>
        <button
          type="button"
          className="text-sm font-semibold text-navy-800 transition hover:text-navy-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-900 sm:px-3"
          onClick={onRestart}
        >
          Start over
        </button>
      </div>
    </div>
  );
}
