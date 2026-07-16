export interface Tool {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export const tools: Tool[] = [
  {
    title: "PDF to Word",
    description: "Convert PDF files into editable Word documents.",
    icon: "📄",
    href: "/pdf-to-word",
  },
  {
    title: "Merge PDF",
    description: "Combine multiple PDFs into one document.",
    icon: "📄",
    href: "/merge-pdf",
  },
  {
    title: "Remove Background",
    description: "Remove image backgrounds instantly using AI.",
    icon: "🖼",
  },
  {
    title: "JPG to PNG",
    description: "Convert images between popular formats.",
    icon: "🖼",
  },
  {
    title: "AI Summarizer",
    description: "Summarize long PDFs and documents in seconds.",
    icon: "🤖",
  },
  {
    title: "AI Resume Builder",
    description: "Create professional resumes with AI assistance.",
    icon: "🤖",
  },
];