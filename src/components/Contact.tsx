import { Mail } from "lucide-react";

function Contact() {
  return (
    <>
      <section id="contact" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <Mail size={28} className="text-primary" />
            Get In Touch
          </h2>
          <p className="text-base-content/70 mt-4 max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="card bg-base-200 shadow-lg flex-1">
            <div className="card-body">
              <h3 className="card-title">Send Me a Message</h3>
              <form className="mt-4 space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content flex-1">
            <div className="card-body items-center text-center flex flex-col justify-center">
              <h3 className="card-title text-2xl mb-6">Let's Connect</h3>
              <p className="mb-6">
                Whether you have a project in mind, job opportunity, or just
                want to say hello, I'm always open to discussing new ideas and
                opportunities.
              </p>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <a
                  href="mailto:tuckerdooleyengineer@gmail.com"
                  className="btn bg-primary-content/20 hover:bg-primary-content/30 border-none text-primary-content"
                >
                  tuckerdooleyengineer@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/tucker-dooley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-primary-content/20 hover:bg-primary-content/30 border-none text-primary-content"
                >
                  LinkedIn Profile
                </a>
                <p className="mt-4 text-primary-content/80">
                  Indianapolis, IN
                  <br />
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
