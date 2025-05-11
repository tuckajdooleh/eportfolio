import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "../../types";

function Certifications({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <>
      <section id="certifications" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <Award size={28} className="text-primary" />
            Certifications & Awards
          </h2>
          <p className="text-base-content/70 mt-4 max-w-3xl mx-auto">
            Professional certifications and recognitions that demonstrate my
            expertise and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              {cert.image && (
                <figure className="px-6 pt-6">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="rounded-xl max-h-52 object-contain"
                  />
                </figure>
              )}
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold text-primary">
                  {cert.title}
                </h3>
                <h4 className="text-base">{cert.issuer}</h4>
                <div className="flex items-center justify-between my-2">
                  <span className="badge badge-secondary">{cert.date}</span>
                  {cert.expiryDate && (
                    <span className="text-sm text-base-content/70">
                      Expires: {cert.expiryDate}
                    </span>
                  )}
                </div>
                {cert.description && (
                  <p className="text-base-content/80 mt-2">
                    {cert.description}
                  </p>
                )}
                {cert.credentialUrl && (
                  <div className="card-actions justify-end mt-4">
                    <a
                      href={cert.credentialUrl}
                      className="btn btn-outline btn-primary btn-sm gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      View Credential
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Certifications;
