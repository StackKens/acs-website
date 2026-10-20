import { BookOpen, FileText, GraduationCap, HelpCircle, Sparkles } from 'lucide-react'
import { ACSMark } from '@/components/acs-mark'

const taskTypes = [
  { icon: FileText, label: 'Exercises' },
  { icon: HelpCircle, label: 'Quiz' },
  { icon: BookOpen, label: 'Revision' },
  { icon: GraduationCap, label: 'Lesson support' },
]

/**
 * ACS AI assistant.
 *
 * The assistant is scoped to creating classroom material for primary
 * education (Primary 1–7): exercises, quizzes, revision questions,
 * lesson-support materials, explanations and marking guides. It drafts
 * material for a teacher to review and edit — it does not teach, mark or
 * decide. The interface shown here is the real ACS assistant surface.
 */
export function AIPreview() {
  return (
    <figure className="preview-frame">
      <div className="preview-panel">
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <ACSMark size={22} className="shrink-0" title={null} />
          <div className="min-w-0">
            <p className="text-[13px] font-semibold leading-tight text-ink">ACS AI Assistant</p>
            <p className="text-[11px] leading-tight text-copy">Academic support for teachers</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {['Primary 5', 'Mathematics', 'Fractions'].map((chip) => (
              <span
                key={chip}
                className="rounded-[5px] border border-line bg-white px-2 py-0.5 text-[11px] font-medium text-ink"
              >
                {chip}
              </span>
            ))}
          </div>

          <p className="mt-3.5 text-[12px] font-semibold text-ink">What would you like to create?</p>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {taskTypes.map((task) => (
              <div
                key={task.label}
                className="flex items-center gap-2 rounded-[7px] border border-line bg-white px-2.5 py-2 text-[11px] font-medium text-ink"
              >
                <task.icon className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
                {task.label}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] font-medium text-copy">Questions</p>
              <div className="mt-1 rounded-[7px] border border-line bg-white px-2.5 py-1.5 text-[12px] text-ink">
                10
              </div>
            </div>
            <div>
              <p className="text-[10px] font-medium text-copy">Difficulty</p>
              <div className="mt-1 rounded-[7px] border border-line bg-white px-2.5 py-1.5 text-[12px] text-ink">
                Mixed
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-center gap-2 rounded-[7px] bg-brand px-4 py-2.5 text-[13px] font-semibold text-white">
            <Sparkles className="size-4" aria-hidden="true" />
            Generate material
          </div>

          <p className="mt-2.5 text-center text-[11px] leading-4 text-copy">
            Generated material is reviewed and edited by the teacher before classroom use.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 px-1 text-[12px] leading-5 text-copy">
        AI assistant — designed for Primary 1 to Primary 7
      </figcaption>
    </figure>
  )
}
