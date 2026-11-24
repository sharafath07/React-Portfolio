import portrait from '../assets/myPhoto.jpeg'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-home-line bg-home-surface">
      <div className="section-wrap grid items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-20">
        <div>
          <h2 id="about-title" className="section-title">About Me</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-home-muted md:text-xl">
            <p>I am <strong className="font-medium text-home-ink">Sharafath Ahammed V</strong>, a passionate and dedicated student pursuing Software Development. I enjoy building modern, responsive, and user-friendly web applications.</p>
            <p>With a strong foundation in HTML, CSS, JavaScript, and React, I focus on creating clean UI and smooth user experiences. I am constantly learning new technologies and improving my skills to become a professional developer.</p>
          </div>
        </div>
        <div className="relative isolate aspect-[5/4] overflow-hidden rounded-3xl border border-home-line bg-home sm:aspect-[4/3]">
          <img src={portrait} alt="Sharafath Ahammed V" loading="lazy" width="1203" height="1203"
            className="image-fade-under absolute inset-0 size-full object-cover object-center" />
        </div>
      </div>
    </section>
  )
}
