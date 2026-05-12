export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-body">
          © {year} Isaac Duwe Rodrigues
        </p>
        <p className="text-text-muted text-sm font-body italic">
          Construído linha a linha. Sem template.
        </p>
        <a
          href="mailto:zakduwe@gmail.com"
          className="text-text-secondary hover:text-violet-glow text-sm font-body transition-colors"
        >
          zakduwe@gmail.com
        </a>
      </div>
    </footer>
  )
}
