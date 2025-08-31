/*
'use client';
import { InteractiveResponse } from '@/ai/tools'


type InteractiveQuestionProps = {
  question: string;
  options: string[];
  responseId: string;
  onSelect: (response: InteractiveResponse) => void;
};

export const InteractiveQuestion = ({
  question,
  options,
  responseId,
  onSelect,
}: InteractiveQuestionProps) => {
  return (
    <div className="space-y-3 p-4 border rounded-lg bg-white shadow-sm">
      <p className="font-medium">{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full text-left p-2 border rounded hover:bg-gray-50 transition-colors"
            onClick={() => onSelect({ responseId, selectedOption: option })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
*/
import { InteractiveQuestionOutput } from '@/ai/tools'
// components/interactive-question.tsx
'use client';

import { useState } from 'react';

type InteractiveQuestionProps = InteractiveQuestionOutput & {
  onSelect: (response: { selectedOption: string; responseId: string }) => void;
};

export const InteractiveQuestion = ({ question, options, responseId, onSelect }: InteractiveQuestionProps) => {
  const [answered, setAnswered] = useState(false);

  if (answered) {
    return null;
  }

  return (
    <div className="space-y-3">
      <p className="font-semibold">{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors text-left"
            onClick={() => {
              setAnswered(true);
              onSelect({ selectedOption: option, responseId });
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};