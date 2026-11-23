const videos = [
  {
    src: "/videos/testimonials/client-video-1.mp4",
    poster: "/videos/testimonials/client-video-1.jpg",
    name: "Dr. Dames",
  },
  {
    src: "/videos/testimonials/client-video-2.mp4",
    poster: "/videos/testimonials/client-video-2.jpg",
    name: "Client Testimonial",
  },
  {
    src: "/videos/testimonials/client-video-3.mp4",
    poster: "/videos/testimonials/client-video-3.jpg",
    name: "Client Testimonial",
  },
];

export default function VideoTestimonials({
  className = "py-24 bg-surface",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            In Their Own Words
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-muted text-lg">
            Real entrepreneurs sharing their experience working with Maurice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <figure
              key={video.src}
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              <video
                className="w-full aspect-[9/16] object-cover bg-black"
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                preload="none"
              />
              <figcaption className="px-5 py-4 text-dark font-semibold text-center">
                {video.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
