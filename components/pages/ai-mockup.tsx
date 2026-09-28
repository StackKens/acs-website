import { Sparkles, FileText, HelpCircle, BookOpen, GraduationCap } from 'lucide-react'

const taskTypes = [
  { icon: FileText, label: 'Exercises' },
  { icon: HelpCircle, label: 'Quiz' },
  { icon: BookOpen, label: 'Revision' },
  { icon: GraduationCap, label: 'Lesson Support' },
]

export function AIMockup() {
  return (
    <div className="product-frame">
      <div className="ui-snippet">
        {/* Header */}
        <div className="flex items-center gap-2.5 border-b border-[#e6ecef] pb-4">
          <span className="grid size-8 place-items-center rounded-lg bg-[#152b3c]">
            <Sparkles className="size-4 text-white" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#152b3c]">ACS AI Assistant</p>
            <p className="text-[11px] text-[#7891a1]">Academic support</p>
          </div>
        </div>

        {/* Context */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#cad7df] bg-white px-3 py-1 text-[11px] font-medium text-[#263d4f]">Primary 5</span>
          <span className="rounded-full border border-[#cad7df] bg-white px-3 py-1 text-[11px] font-medium text-[#263d4f]">Mathematics</span>
          <span className="rounded-full border border-[#cad7df] bg-white px-3 py-1 text-[11px] font-medium text-[#263d4f]">Fractions</span>
        </div>

        {/* Prompt */}
        <p className="mt-4 text-sm font-medium text-[#263d4f]">What would you like to create?</p>

        {/* Task type grid */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          {taskTypes.map((task) => (
            <button
              key={task.label}
              type="button"
              className="flex items-center gap-2 rounded-md border border-[#dfe6ea] bg-white px-3 py-2.5 text-left text-xs font-medium text-[#526676] transition-colors hover:border-[#a8bdcb] hover:bg-[#f8fafb]"
            >
              <task.icon className="size-3.5 shrink-0 text-[#7891a1]" />
              {task.label}
            </button>
          ))}
        </div>

        {/* Options */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-medium text-[#71808d]">Questions</label>
            <div className="mt-1 rounded-md border border-[#dfe6ea] bg-white px-3 py-2 text-xs text-[#263d4f]">10</div>
          </div>
          <div>
            <label className="text-[11px] font-medium text-[#71808d]">Difficulty</label>
            <div className="mt-1 rounded-md border border-[#dfe6ea] bg-white px-3 py-2 text-xs text-[#263d4f]">Mixed</div>
          </div>
        </div>

        {/* Generate button */}
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#152b3c] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#274157]"
        >
          <Sparkles className="size-4" />
          Generate Material
        </button>

        {/* Teacher note */}
        <p className="mt-3 text-center text-[10px] text-[#8b98a3]">
          Review and edit before using in class
        </p>
      </div>
    </div>
  )
}
