function ProgressDemo() {
  return (
    <div className="px-5 py-10 max-w-3xl mx-auto space-y-5">
      <h2 className="text-4xl font-bold text-center mb-8">
        Progress
      </h2>

      <progress className="progress progress-primary w-full" value="30" max="100"></progress>
      <progress className="progress progress-secondary w-full" value="60" max="100"></progress>
      <progress className="progress progress-accent w-full" value="90" max="100"></progress>
    </div>
  )
}

export default ProgressDemo
