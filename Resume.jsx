const Resume = () => (
  <section className="container">
    <h2>Resume</h2>
    <iframe
      src="/resume/Doudou_Gueye_Resume.pdf"
      width="100%"
      height="600px"
      title="Doudou Gueye Resume"
    ></iframe>
    <a
      href="/resume/Doudou_Gueye_Resume.pdf"
      download
      className="download-btn"
    >
      Download PDF
    </a>
  </section>
);

export default Resume;