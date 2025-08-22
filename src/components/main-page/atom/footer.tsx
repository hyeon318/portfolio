export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-8 mt-16">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-sm text-muted font-kr">
          Designed & built by <strong className="highlight">안현지</strong>
        </p>
        <div className="flex justify-center items-center gap-3 text-xs text-muted">
          <span className="font-kr">Built with</span>
          <code className="font-mono text-accent font-medium font-en">
            Next.js
          </code>
          <span className="font-en">&</span>
          <code className="font-mono text-accent font-medium font-en">
            Tailwind CSS
          </code>
        </div>
        <p className="text-xs text-muted font-en">
          &copy; 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
