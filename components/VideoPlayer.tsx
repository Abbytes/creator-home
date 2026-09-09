"use client";

type VideoPlayerProps = {
  src: string;
  title: string;
};

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-studio-border bg-black shadow-2xl shadow-black/40">
      <div className="relative aspect-video w-full bg-black">
        <video
          className="h-full w-full"
          controls
          playsInline
          preload="metadata"
          // Mute + autoplay OFF by default — user starts playback intentionally
          muted={false}
          autoPlay={false}
          title={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
